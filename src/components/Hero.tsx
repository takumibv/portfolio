import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { url } from "../utils/config";
import { generateLeaves, Leaf } from "../utils/leafLayout";

const ICONS = [
  "/images/skill-react.png",
  "/images/skill-vue.png",
  "/images/skill-js.png",
  "/images/skill-html.png",
  "/images/skill-css.png",
  "/images/skill-java.png",
  "/images/skill-php.png",
  "/images/skill-figma.svg",
  "/images/skill-ai.png",
  "/images/skill-ps.png",
  "/images/icon.png",
];

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;
  varying vec2 vUv;

  uniform sampler2D uBg;
  uniform vec2 uResolution;
  uniform vec2 uLight;     // 0..1 光の位置
  uniform float uTime;
  uniform float uClarity;  // 0: すりガラス, 1: 透明

  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  // 型板ガラスの凹凸（セル状のでこぼこ）
  float bumps(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    float d = 1.0;
    for (int y = -1; y <= 1; y++) {
      for (int x = -1; x <= 1; x++) {
        vec2 g = vec2(float(x), float(y));
        vec2 o = vec2(hash(i + g), hash(i + g + 17.0));
        vec2 r = g + o - f;
        d = min(d, dot(r, r));
      }
    }
    return 1.0 - sqrt(d);
  }

  float height(vec2 px) {
    return bumps(px / 16.0) * 0.7 + bumps(px / 7.0) * 0.3;
  }

  vec3 glassNormal(vec2 px) {
    float e = 1.0;
    float h = height(px);
    float hx = height(px + vec2(e, 0.0));
    float hy = height(px + vec2(0.0, e));
    return normalize(vec3((h - hx) * 2.0, (h - hy) * 2.0, 1.0));
  }

  // 葉が風で揺れるような uv の揺らぎ
  vec2 sway(vec2 uv) {
    float t = uTime * 0.6;
    return uv + vec2(
      sin(uv.y * 9.0 + t) * 0.004 + sin(uv.y * 23.0 + t * 1.7) * 0.002,
      cos(uv.x * 7.0 + t * 0.8) * 0.004
    );
  }

  void main() {
    vec2 px = vUv * uResolution;
    vec3 n = glassNormal(px);
    float frost = 1.0 - uClarity;

    // 屈折
    vec2 refr = n.xy * 0.035 * (0.3 + frost * 0.7);
    vec2 uv = sway(vUv) + refr;

    // すりガラスのぼかし（ゴールデンアングルで散らしたサンプル）
    vec3 col = vec3(0.0);
    float radius = (1.5 + 7.0 * frost) / uResolution.y;
    const int TAPS = 16;
    for (int i = 0; i < TAPS; i++) {
      float fi = float(i);
      float r = sqrt((fi + 0.5) / float(TAPS)) * radius;
      float a = fi * 2.39996;
      col += texture2D(uBg, uv + vec2(cos(a), sin(a)) * r * vec2(uResolution.y / uResolution.x, 1.0)).rgb;
    }
    col /= float(TAPS);

    // すりガラスの白いかすみ（左上ほど強い）
    float haze = (0.12 + 0.18 * smoothstep(0.9, 0.0, length(vUv - vec2(0.1, 0.9)))) * frost;
    col = mix(col, vec3(0.78, 0.85, 0.8), haze);

    // 網入りガラスのワイヤー（凹凸で少し歪む）
    vec2 gp = (px + n.xy * 6.0) / 22.0;
    vec2 gf = abs(fract(gp) - 0.5);
    float wire = smoothstep(0.47, 0.5, max(gf.x, gf.y));
    col = mix(col, col * 0.55, wire * 0.6);

    // 光：広がった散乱光 + 凹凸の鏡面反射
    vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
    vec2 toLight = (uLight - vUv) * aspect;
    float dist = length(toLight);
    vec3 L = normalize(vec3(toLight, 0.35));
    vec3 V = vec3(0.0, 0.0, 1.0);
    float spec = pow(max(dot(reflect(-L, n), V), 0.0), 32.0);
    float glow = smoothstep(0.75, 0.0, dist);

    col += vec3(0.9, 0.95, 0.9) * glow * glow * 0.22 * (0.4 + frost * 0.6);
    col += vec3(1.0) * spec * glow * 0.35;

    // 周辺減光
    float vig = smoothstep(1.3, 0.3, length((vUv - 0.5) * aspect));
    col *= mix(0.55, 1.0, vig);

    gl_FragColor = vec4(col, 1.0);
  }
`;

const loadImage = (src: string) =>
  new Promise<HTMLImageElement | null>((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });

// 葉の形のパス（先端がとがった楕円）
const leafPath = (ctx: CanvasRenderingContext2D, size: number) => {
  const w = size * 0.5;
  const h = size * 0.5;
  ctx.beginPath();
  ctx.moveTo(0, -h);
  ctx.bezierCurveTo(w, -h * 0.5, w, h * 0.5, 0, h);
  ctx.bezierCurveTo(-w, h * 0.5, -w, -h * 0.5, 0, -h);
  ctx.closePath();
};

const drawFoliage = (
  canvas: HTMLCanvasElement,
  icons: (HTMLImageElement | null)[],
  leaves: Leaf[]
) => {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const { width, height } = canvas;

  // ベース：暗い緑のグラデーション（左上を明るく）
  const bg = ctx.createRadialGradient(width * 0.2, height * 0.2, 0, width * 0.4, height * 0.5, width);
  bg.addColorStop(0, "#5f8f62");
  bg.addColorStop(0.5, "#24432a");
  bg.addColorStop(1, "#0b170e");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, width, height);

  leaves.forEach((leaf) => {
    const icon = icons[leaf.iconIndex];
    ctx.save();
    ctx.translate(leaf.x * width, leaf.y * height);
    ctx.rotate(leaf.rotation);

    // 葉の地色（奥は暗く、手前は明るい黄緑）
    const light = 18 + leaf.depth * 30 + leaf.shade * 12;
    ctx.fillStyle = `hsl(${85 + leaf.shade * 35}, ${28 + leaf.shade * 18}%, ${light}%)`;
    leafPath(ctx, leaf.size);
    ctx.fill();

    // 葉の中にアイコンを敷く
    if (icon) {
      ctx.save();
      ctx.clip();
      ctx.globalAlpha = 0.55 + leaf.depth * 0.35;
      ctx.globalCompositeOperation = "overlay";
      const s = leaf.size * 0.8;
      ctx.drawImage(icon, -s / 2, -s / 2, s, s);
      ctx.restore();
    }

    // 葉脈
    ctx.strokeStyle = `rgba(220, 255, 200, ${0.08 + leaf.depth * 0.12})`;
    ctx.lineWidth = Math.max(1, leaf.size * 0.02);
    ctx.beginPath();
    ctx.moveTo(0, -leaf.size * 0.45);
    ctx.lineTo(0, leaf.size * 0.45);
    ctx.stroke();

    ctx.restore();
  });
};

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: false });
    const dpr = Math.min(window.devicePixelRatio, 2);
    renderer.setPixelRatio(dpr);
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    // 背景（葉 + アイコン）を描く 2D キャンバス
    const bgCanvas = document.createElement("canvas");
    const bgTexture = new THREE.CanvasTexture(bgCanvas);
    bgTexture.minFilter = THREE.LinearFilter;

    const uniforms = {
      uBg: { value: bgTexture },
      uResolution: { value: new THREE.Vector2() },
      uLight: { value: new THREE.Vector2(0.25, 0.7) },
      uTime: { value: 0 },
      uClarity: { value: 0 },
    };

    const material = new THREE.ShaderMaterial({ vertexShader, fragmentShader, uniforms });
    const geometry = new THREE.PlaneGeometry(2, 2);
    scene.add(new THREE.Mesh(geometry, material));

    let icons: (HTMLImageElement | null)[] = [];
    let disposed = false;

    const paintBackground = () => {
      const w = Math.round(window.innerWidth * dpr * 0.5);
      const h = Math.round(window.innerHeight * dpr * 0.5);
      bgCanvas.width = w;
      bgCanvas.height = h;
      const area = (w * h) / 1e5;
      const leaves = generateLeaves(Math.round(120 + area * 30), icons.length, Math.min(w, h) * 0.085, 7);
      drawFoliage(bgCanvas, icons, leaves);
      bgTexture.needsUpdate = true;
    };

    const resize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      uniforms.uResolution.value.set(window.innerWidth * dpr, window.innerHeight * dpr);
      paintBackground();
    };

    Promise.all(ICONS.map((src) => loadImage(url(src)))).then((loaded) => {
      if (disposed) return;
      icons = loaded;
      paintBackground();
    });
    resize();

    // 光の位置
    // - PC: マウスに遅れて追従、マウスが動くまではゆっくり漂う
    // - SP（ホバー不可の端末）: スクロール量に応じて左上から右へ移動する
    const isTouchDevice = window.matchMedia("(hover: none)").matches;
    const target = new THREE.Vector2(0.25, 0.7);
    let hasPointer = false;
    const handlePointer = (e: PointerEvent) => {
      // タッチでのスクロール操作は光の位置に使わない
      if (e.pointerType !== "mouse") return;
      hasPointer = true;
      target.set(e.clientX / window.innerWidth, 1 - e.clientY / window.innerHeight);
    };

    // SP の傾き：最初に取れた姿勢を基準に、そこからの傾きで光をずらす
    const tilt = new THREE.Vector2(0, 0);
    let tiltBase: { beta: number; gamma: number } | null = null;
    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (e.beta === null || e.gamma === null) return;
      if (!tiltBase) tiltBase = { beta: e.beta, gamma: e.gamma };
      const clamp = (v: number) => Math.max(-1, Math.min(1, v));
      // ±30° でずれ量が最大になる
      tilt.set(clamp((e.gamma - tiltBase.gamma) / 30), clamp(-(e.beta - tiltBase.beta) / 30));
    };
    // iOS はユーザー操作の中で許可を求める必要があるため、最初のタップで要求する
    const requestOrientation = () => {
      const DOE = window.DeviceOrientationEvent as unknown as {
        requestPermission?: () => Promise<"granted" | "denied">;
      };
      if (typeof DOE?.requestPermission === "function") {
        DOE.requestPermission()
          .then((state) => {
            if (state === "granted") window.addEventListener("deviceorientation", handleOrientation);
          })
          .catch(() => undefined);
      }
    };
    if (isTouchDevice && "DeviceOrientationEvent" in window) {
      const DOE = window.DeviceOrientationEvent as unknown as { requestPermission?: unknown };
      if (typeof DOE.requestPermission === "function") {
        window.addEventListener("touchend", requestOrientation, { once: true });
      } else {
        window.addEventListener("deviceorientation", handleOrientation);
      }
    }

    // Hero を透かして見せる領域（[data-hero-window]）が画面内にある間も描画を続ける
    let windowVisible = false;
    const observer = new IntersectionObserver((entries) => {
      windowVisible = entries.some((entry) => entry.isIntersecting);
    });
    document.querySelectorAll("[data-hero-window]").forEach((el) => observer.observe(el));

    const clock = new THREE.Clock();
    let rafId = 0;
    const animate = () => {
      rafId = requestAnimationFrame(animate);
      if (window.scrollY > window.innerHeight && !windowVisible) return;

      const t = clock.getElapsedTime();
      uniforms.uTime.value = t;
      if (isTouchDevice) {
        // 1 画面分のスクロールで左から右へ移動する。
        // y は本文に隠されずに見えている上側の帯（uv.y: p..1）の中に収める。
        // 名言の帯から透けて見える間も動き続けるよう、x は周期関数にしている
        const p = window.scrollY / window.innerHeight;
        const y = p <= 1 ? 0.65 + p * 0.25 : 0.5 + Math.sin(p * 1.5) * 0.2;
        target.set(
          0.5 + Math.sin(p * 2.4 - 1.0) * 0.32 + Math.sin(t * 0.5) * 0.015 + tilt.x * 0.25,
          y + Math.cos(t * 0.4) * 0.015 + tilt.y * 0.15
        );
      } else if (!hasPointer) {
        target.set(0.5 + Math.sin(t * 0.35) * 0.35, 0.6 + Math.cos(t * 0.27) * 0.2);
      }
      uniforms.uLight.value.lerp(target, isTouchDevice ? 0.1 : 0.06);
      // スクロールするほどガラスが晴れる
      const progress = Math.min(window.scrollY / window.innerHeight, 1);
      uniforms.uClarity.value = progress;
      // タイトルはスクロールで少し浮き上がりながら消える
      if (titleRef.current) {
        titleRef.current.style.opacity = String(1 - progress * 1.6);
        titleRef.current.style.transform = `translateY(${-progress * 60}px)`;
      }

      renderer.render(scene, camera);
    };
    animate();

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointer);

    return () => {
      disposed = true;
      cancelAnimationFrame(rafId);
      observer.disconnect();
      window.removeEventListener("deviceorientation", handleOrientation);
      window.removeEventListener("touchend", requestOrientation);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointer);
      geometry.dispose();
      material.dispose();
      bgTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <>
      <div className="hero">
        <canvas ref={canvasRef}></canvas>
        <div className="hero__title" ref={titleRef}>
          <p className="hero__eyebrow">Portfolio</p>
          <h1 className="hero__name">takumibv</h1>
          <p className="hero__role">Software Engineer &amp; UI Designer</p>
        </div>
      </div>
      <div style={{ height: "100vh", zIndex: -1 }}></div>
    </>
  );
};

export default Hero;
