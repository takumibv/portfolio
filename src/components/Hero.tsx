import React, { useState, useEffect, useRef, useCallback } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import {
  SUBTRACTION,
  INTERSECTION,
  ADDITION,
  Brush,
  Evaluator,
  OperationGroup,
} from "three-bvh-csg";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  let scene: THREE.Scene;
  let camera: THREE.PerspectiveCamera;
  let renderer: THREE.WebGLRenderer;
  let bvGeometry: THREE.BufferGeometry<THREE.NormalBufferAttributes>;

  let mixer: THREE.AnimationMixer;

  let clipMaterial: THREE.MeshPhongMaterial;
  let object: THREE.Group;

  let result;
  let evaluator: Evaluator;
  let wireframe;
  let boxBrush: Brush;

  let brashResult1: Brush, brashResult2: Brush, brashResult3: Brush;

  let bvMesh1: Brush;
  let bvMesh2:Brush;
  let bvMesh3:Brush;

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
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 1, 50000);
    camera.position.set(0, 50, 500);

    scene = new THREE.Scene();
    // scene.background = new THREE.Color(0x333333);

    camera.lookAt(scene.position);

    // 「bv」の読み込み
    const loader = new OBJLoader();
    bvGeometry = new THREE.BufferGeometry();

    const bvGeometry1 = new THREE.CylinderGeometry( 17, 17, 50, 4 );
    bvGeometry1.rotateY(Math.PI / 4); 
    bvGeometry1.translate(-14, 14, 0);
    const bvGeometry2 = new THREE.CylinderGeometry( 24, 24, 24, 20 );
    bvGeometry2.rotateX(Math.PI / 2); 
    bvGeometry2.translate(0, -10, 0);
    const bvGeometry3 = new THREE.CylinderGeometry( 22.5, 22.5, 24, 3 ); 
    bvGeometry3.scale(1.7, 1, 1);
    bvGeometry3.rotateY(Math.PI / 4 ); 
    bvGeometry3.rotateX(-Math.PI / 2);
    bvGeometry3.translate(32, 0, 0);

    const bvMaterial = new THREE.MeshPhongMaterial({
      color: 0x72ad8c,
      shininess: 0,
      side: THREE.DoubleSide,
    });

    bvMesh1 = new Brush(bvGeometry1, bvMaterial);
    bvMesh2 = new Brush(bvGeometry2, bvMaterial);
    bvMesh3 = new Brush(bvGeometry3, bvMaterial);

    // scene.add(bvMesh1);
    // scene.add(bvMesh2);
    // scene.add(bvMesh3);

    // let bufferMesh = new Brush(bvGeometry, bvMaterial);
    // let bufferMesh = new Brush(ballGeometry, bvMaterial);
    // bufferMesh.position.set(0, -30, -5);

    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("../model/");

    // const loader2 = new GLTFLoader();
    // loader2.setDRACOLoader(dracoLoader);
    // loader2.load(
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
    //     bvGeometry.setAttribute("position", positions);
    //     bvGeometry.setAttribute("uv", positions);
    //     bvGeometry.setAttribute("initialPosition", positions.clone());
    //     bvGeometry.computeVertexNormals();
    //     // scene.add(bufferMesh);

    //     let bufferMesh = new Brush(bvGeometry, bvMaterial);
    //     bufferMesh.position.set(0, -30, -5);
    //     bufferMesh.updateMatrixWorld();

    //     result = evaluator?.evaluate(result, bufferMesh, INTERSECTION);

    //   },
    //   undefined,
    //   function (e) {
    //     console.error(e);
    //   }
    // );

    evaluator = new Evaluator();

    // loader.load("../model/bv.obj", function (obj) {
    //   const positions = combineBuffer(obj, "position");

    //   bvGeometry.setAttribute("position", positions.clone());
    //   bvGeometry.setAttribute("initialPosition", positions.clone());
    //   bvGeometry.computeVertexNormals();

    //   let bufferMesh = new Brush(bvGeometry, bvMaterial);
    //   bufferMesh.position.set(0, -30, -5);
    //   bufferMesh.updateMatrixWorld();

    //   result = evaluator?.evaluate(result, bufferMesh, INTERSECTION);

    //   scene.add(result);

    //   render();
    // });

    
    // evaluator.useGroups = true;
    object = new THREE.Group();

    clipMaterial = new THREE.MeshPhongMaterial({
      color: 0x72ad8c,
      shininess: 0,
      side: THREE.DoubleSide,
    });

    const geometry = new THREE.BoxGeometry(20, 20, 20);
    let firstMesh: Brush;
    for (let z = -2; z <= 2; ++z)
      for (let y = -2; y <= 2; ++y)
        for (let x = -2; x <= 2; ++x) {
          const mesh = new Brush(geometry, clipMaterial);
          mesh.position.set(x * 23, y * 23, z * 23);
          // mesh.scale.set(500, 500, 500);
          // mesh.castShadow = true;
          mesh.updateMatrixWorld();
          object.add( mesh );
          if (x === -2 && y === -2 && z === -2) {
            firstMesh = mesh;
          } else {
            const a = x === -1 && y === -2 && z === -2 ? firstMesh! : boxBrush!;
            boxBrush = evaluator?.evaluate(a, mesh, ADDITION);
            boxBrush.updateMatrixWorld();
          }
        }

    boxBrush.rotateX(Math.PI / 4);
    boxBrush.rotateY(Math.PI / 4);
    boxBrush.rotateZ(Math.PI / 4);
    boxBrush.updateMatrixWorld();

    // scene.add(boxBrush);

    brashResult1 = evaluator?.evaluate(boxBrush!, bvMesh1, INTERSECTION, brashResult1);
    brashResult2 = evaluator?.evaluate(boxBrush!, bvMesh2, INTERSECTION, brashResult2);
    brashResult3 = evaluator?.evaluate(boxBrush!, bvMesh3, INTERSECTION, brashResult3);

    // scene.add(object);
    scene.add(brashResult1);
    scene.add(brashResult2);
    scene.add(brashResult3);

    // 光源
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(0, 60, 60);
    scene.add(pointLight);

    // scene.add(result);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.addEventListener("change", render);
  };

  const clock = new THREE.Clock();

  function animate() {
    const elapsedTime = clock.getElapsedTime();

    // シーンを回転
    scene.rotation.y = elapsedTime;
    // console.log(particleGeometry.attributes.position.array);

    const delta = clock.getDelta();
    mixer?.update(delta);

    // object.children.forEach((child) => {
    //   child.rotation.y = elapsedTime;
    // });

    boxBrush!.rotateX(0.01);
    boxBrush!.rotateY(0.01);
    boxBrush!.rotateZ(0.01);
    boxBrush!.updateMatrixWorld();

    brashResult1 = evaluator?.evaluate(boxBrush!, bvMesh1, INTERSECTION, brashResult1);
    brashResult2 = evaluator?.evaluate(boxBrush!, bvMesh2, INTERSECTION, brashResult2);
    brashResult3 = evaluator?.evaluate(boxBrush!, bvMesh3, INTERSECTION, brashResult3);

    // scene.add(boxBrush);
    scene.add(brashResult1);
    scene.add(brashResult2);
    scene.add(brashResult3);


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

    // requestAnimationFrame(animateByScroll);
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
    const scrollY = window.scrollY;

    if (scrollY > window.innerHeight) return;

    const positions = bvGeometry.attributes.position;
    const initialPositions = bvGeometry.attributes.initialPosition;

    if (randomArray.length !== positions?.count) {
      randomArray = new Float32Array(positions?.count ?? 0);
      randomArray.forEach((_, i) => {
        randomArray[i] = Math.random();
      });
    }

    for (let i = 0; i < positions?.count ?? 0 / 3; i++) {
      const px = positions.getX(i);
      const py = positions.getY(i);
      const pz = positions.getZ(i);

      const ix = initialPositions.getX(i);
      const iy = initialPositions.getY(i);
      const iz = initialPositions.getZ(i);

      const ix2 = initialPositions.getX(i);
      const iy2 = initialPositions.getY(i);
      const iz2 = initialPositions.getZ(i);

      const ix3 = initialPositions.getX(i);
      const iy3 = initialPositions.getY(i);
      const iz3 = initialPositions.getZ(i);

      const delta = (scrollY / window.innerHeight) * 10;
      let nextY = iy - iy * delta * delta * 0.07;
      if (nextY < 0) nextY = 0;

      if (py > 0 || (prevScrollY > scrollY && nextY > 0)) {
        positions.setXYZ(
          i,
          ix + delta * 10 * (randomArray.at(i) ?? 0) * Math.sign(ix),
          nextY,
          iz + delta * 10 * (randomArray.at(i) ?? 0) * Math.sign(iz)
        );
        positions.setXYZ(
          i + 1,
          ix2 + delta * 10 * (randomArray.at(i) ?? 0) * Math.sign(ix),
          nextY,
          iz2 + delta * 10 * (randomArray.at(i) ?? 0) * Math.sign(iz)
        );
        positions.setXYZ(
          i + 2,
          ix3 + delta * 10 * (randomArray.at(i) ?? 0) * Math.sign(ix),
          nextY,
          iz3 + delta * 10 * (randomArray.at(i) ?? 0) * Math.sign(iz)
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
