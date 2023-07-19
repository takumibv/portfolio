import React, { useState, useEffect, useRef, useCallback } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  let scene: THREE.Scene;
  let camera: THREE.PerspectiveCamera;
  let renderer: THREE.WebGLRenderer;
  let bvGeometry: THREE.BufferGeometry<THREE.NormalBufferAttributes>;
  let bvMesh: THREE.Mesh;

  let clipMaterial: THREE.MeshPhongMaterial;
  let object: THREE.Group;

  let boxBrush: THREE.Mesh;

  useEffect(() => {
    initAnimation();
    animate();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);

      scene.remove(bvMesh);
      scene.remove(object);
      renderer.dispose();
    };
  }, []);

  let isInited = false;
  const initAnimation = () => {
    renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current as HTMLCanvasElement,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 1, 50000);
    camera.position.set(0, 50, 500);

    scene = new THREE.Scene();

    camera.lookAt(scene.position);

    // 「bv」の読み込み
    const loader = new OBJLoader();
    bvGeometry = new THREE.BufferGeometry();

    const bvMaterial = new THREE.MeshPhongMaterial({
      color: 0x72ad8c,
      shininess: 0,
      side: THREE.DoubleSide,
    });

    loader.load("../model/bv.obj", function (obj) {
      if (isInited) return;
      isInited = true;
      const positions = combineBuffer(obj, "position");

      bvGeometry.setAttribute("position", positions.clone());
      bvGeometry.setAttribute("initialPosition", positions.clone());
      bvGeometry.computeVertexNormals();

      bvMesh = new THREE.Mesh(bvGeometry, bvMaterial);
      bvMesh.position.set(0, -30, -5);
      scene.add(bvMesh);

      render();
    });

    object = new THREE.Group();

    clipMaterial = new THREE.MeshPhongMaterial({
      color: 0x72ad8c,
      shininess: 0,
      side: THREE.DoubleSide,
    });

    let firstMesh: THREE.Mesh;
    for (let z = -2; z <= 2; ++z)
      for (let y = -2; y <= 2; ++y)
        for (let x = -2; x <= 2; ++x) {
          const size = Math.random() * 12 + 5;

          const mesh = new THREE.Mesh(new THREE.BoxGeometry(size, size, size), clipMaterial);
          mesh.position.set(0, 0, 0);
          mesh.updateMatrixWorld();
          object.add(mesh);
          if (x === -2 && y === -2 && z === -2) {
            firstMesh = mesh;
          } else {
            const a = x === -1 && y === -2 && z === -2 ? firstMesh! : boxBrush!;
          }
        }

    scene.add(object);

    // 光源
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(0, 60, 60);
    scene.add(pointLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.addEventListener("change", render);
  };

  const clock = new THREE.Clock();

  function animate() {
    if (window.scrollY <= window.innerHeight) {
      const elapsedTime = clock.getElapsedTime();
      // シーンを回転
      scene.rotation.y = elapsedTime;

      if (bvMesh) {
        const scrollY = window.scrollY;

        const scale = 1 - scrollY * 1 < 0 ? 0 : 1 - scrollY * 1;

        bvMesh.scale.set(scale, scale, scale);
      }

      render();
    }
    requestAnimationFrame(animate);
  }

  const render = () => {
    renderer.render(scene, camera);
  };

  // リサイズイベント
  const handleResize = () => {
    // カメラのアスペクト比を正す
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    // レンダラーのサイズを正す
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();
  };

  // スクロールイベント
  const handleScroll = () => {
    requestAnimationFrame(animateByScroll);
  };

  // ジオメトリの「bufferName」属性を取得する
  function combineBuffer(model: THREE.Group, bufferName: string) {
    let count = 0;

    model.traverse(function (child: any) {
      if (child.isMesh) {
        const buffer = child.geometry.attributes[bufferName];

        count += buffer.array.length;
      }
    });

    const combined = new Float32Array(count);

    let offset = 0;

    model.traverse(function (child: any) {
      if (child.isMesh) {
        const buffer = child.geometry.attributes[bufferName];

        combined.set(buffer.array, offset);
        offset += buffer.array.length;
      }
    });

    return new THREE.BufferAttribute(combined, 3);
  }

  const cubeCount = 5 * 5 * 5;
  let randomArray = new Float32Array(cubeCount * 3);
  let randomSignArray = new Float32Array(cubeCount * 3);

  randomArray.forEach((_, i) => {
    randomArray[3 * i] = Math.random();
    randomArray[3 * i + 1] = Math.random();
    randomArray[3 * i + 2] = Math.random();
    randomSignArray[3 * i] = Math.random() > 0.5 ? 1 : -1;
    randomSignArray[3 * i + 1] = Math.random() > 0.5 ? 1 : -1;
    randomSignArray[3 * i + 2] = Math.random() > 0.5 ? 1 : -1;
  });

  function animateByScroll() {
    const scrollY = window.scrollY;

    if (scrollY > window.innerHeight) return;
    if (!bvMesh || !object) return;

    if (scrollY === 0) {
      object.scale.set(0, 0, 0);
    } else {
      object.scale.set(1, 1, 1);
    }

    object.children.forEach((mesh, i) => {
      mesh.rotateX(0.05 * (randomSignArray.at(3 * i) ?? 0));
      mesh.rotateY(0.05 * (randomSignArray.at(3 * i + 1) ?? 0));
      mesh.rotateZ(0.05 * (randomSignArray.at(3 * i + 2) ?? 0));
      mesh.position.set(
        15 * (randomArray.at(3 * i) ?? 0) * Math.sqrt(scrollY) * (randomSignArray.at(3 * i) ?? 1),
        10 *
          (randomArray.at(3 * i + 1) ?? 0) *
          Math.sqrt(scrollY) *
          (randomSignArray.at(3 * i + 1) ?? 1),
        15 *
          (randomArray.at(3 * i + 2) ?? 0) *
          Math.sqrt(scrollY) *
          (randomSignArray.at(3 * i + 2) ?? 1)
      );
    });

    render();
  }

  return (
    <>
      <div className="hero">
        <canvas className="" ref={canvasRef}></canvas>
      </div>
      <div style={{ height: "100vh", zIndex: -1 }}></div>
    </>
  );
};

export default Hero;
