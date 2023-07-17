import React, { useState, useEffect, useRef, useCallback } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  let scene: THREE.Scene;
  let camera: THREE.PerspectiveCamera;
  let renderer: THREE.WebGLRenderer;
  let bufferGeometry: THREE.BufferGeometry<THREE.NormalBufferAttributes>;

  let mixer: THREE.AnimationMixer;

  useEffect(() => {
    initAnimation();
    animate();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isVisible]);

  const initAnimation = () => {
    renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current as HTMLCanvasElement,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 1, 50000);
    camera.position.set(0, 50, 500);

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x333333);

    camera.lookAt(scene.position);

    const loader = new OBJLoader();
    bufferGeometry = new THREE.BufferGeometry();
    const bufferMaterial = new THREE.MeshPhongMaterial({
      color: 0x72ad8c,
      shininess: 0,
      side: THREE.DoubleSide,
    });

    const bufferMesh = new THREE.Mesh(bufferGeometry, bufferMaterial);
    bufferMesh.position.set(0, -30, -5);

    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("../model/");

    // const loader = new GLTFLoader();
    // loader.setDRACOLoader(dracoLoader);
    // loader.load(
    //   "../model/bv_explore.glb",
    //   function (gltf) {
    //     // const model = gltf.scene;
    //     // model.position.set(0, 0, 0);
    //     // // model.scale.set(1, 1, 1);
    //     // scene.add(model);

    //     // mixer = new THREE.AnimationMixer(model);
    //     // console.log("mixer", mixer, gltf);
    //     // gltf.animations.length > 0 && mixer.clipAction(gltf.animations[0]).play();

    //     // render();

    //     const positions = combineBuffer(gltf.scene, "position");
    //     bufferGeometry.setAttribute("position", positions.clone());
    //     bufferGeometry.setAttribute("initialPosition", positions.clone());
    //     bufferGeometry.computeVertexNormals();
    //     scene.add(bufferMesh);
    //   },
    //   undefined,
    //   function (e) {
    //     console.error(e);
    //   }
    // );

    loader.load("../model/bv.obj", function (obj) {
      const positions = combineBuffer(obj, "position");

      bufferGeometry.setAttribute("position", positions.clone());
      bufferGeometry.setAttribute("initialPosition", positions.clone());
      bufferGeometry.computeVertexNormals();
      scene.add(bufferMesh);

      render();
    });

    // 光源
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(0, 60, 60);
    scene.add(pointLight);

    // const controls = new OrbitControls(camera, renderer.domElement);
    // controls.addEventListener( 'change', render );
  };

  const clock = new THREE.Clock();

  function animate() {
    const elapsedTime = clock.getElapsedTime();

    // シーンを回転
    scene.rotation.y = elapsedTime;
    // console.log(particleGeometry.attributes.position.array);

    const delta = clock.getDelta();
    mixer?.update(delta);

    render();
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
  const handleScroll = useCallback(() => {
    if (window.scrollY > window.innerHeight) {
      isVisible && setIsVisible(false);
    } else {
      !isVisible && setIsVisible(true);
    }

    requestAnimationFrame(animateByScroll);
  }, [isVisible]);

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

  let randomArray = new Float32Array(0);
  let prevScrollY = 0;

  function animateByScroll() {
    const scrollY = window.scrollY > 200 ? 200 : window.scrollY;
    const positions = bufferGeometry.attributes.position;
    const initialPositions = bufferGeometry.attributes.initialPosition;

    if (randomArray.length !== positions.count) {
      randomArray = new Float32Array(positions.count);
      randomArray.forEach((_, i) => {
        randomArray[i] = Math.random();
      });
    }

    for (let i = 0; i < positions.count; i++) {
      const px = positions.getX(i);
      const py = positions.getY(i);
      const pz = positions.getZ(i);

      const ix = initialPositions.getX(i);
      const iy = initialPositions.getY(i);
      const iz = initialPositions.getZ(i);

      let nextY = iy - scrollY * scrollY * 0.0022;
      if (nextY < 0) nextY = 0;

      if (py > 0 || (prevScrollY > scrollY && nextY > 0)) {
        const delta = scrollY;
        positions.setXYZ(
          i,
          ix + ix * ix * delta * 0.0003 * (randomArray.at(i) ?? 0) * Math.sin(iz) * Math.sign(ix),
          nextY,
          iz + iz * iz * delta * 0.0008 * (randomArray.at(i) ?? 0) * Math.sin(ix) * Math.sign(iz)
        );
      }

      positions.needsUpdate = true;
    }

    prevScrollY = scrollY;

    render();
  }

  return (
    <>
      <div className="hero" style={{ visibility: isVisible ? "visible" : "hidden" }}>
        <canvas className="" ref={canvasRef}></canvas>
      </div>
      <div style={{ height: "100vh", zIndex: -1 }}></div>
    </>
  );
};

export default Hero;
