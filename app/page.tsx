"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import {
  LinearEncoding,
  Mesh,
  PointLight,
  PointLightHelper,
  RepeatWrapping,
  Texture,
  TextureLoader,
} from "three";
import {
  OrbitControls,
  PerspectiveCamera,
  useHelper,
  useTexture,
} from "@react-three/drei";
import { delay, motion } from "framer-motion";

function Cube({ ready, setReady }: any) {
  const meshRef = useRef(null);

  const [rougness, normal, diff, disp, ao] = useLoader(TextureLoader, [
    "/textures/arm.jpg",
    "/textures/nor.jpg",
    "/textures/diff.jpg",
    "/textures/disp.jpg",
    "/textures/arm.jpg",
  ]);

  useEffect(() => {
    [normal, rougness, diff, disp, ao].forEach((texture) => {
      texture.wrapS = RepeatWrapping;
      texture.wrapT = RepeatWrapping;
      texture.repeat.set(2, 2);
    });
    setReady(true);
  }, [normal, rougness, diff, disp, ao]);

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[60, 60, 128, 128]} />
      <meshStandardMaterial
        aoMap={ao}
        map={diff}
        displacementMap={disp}
        normalMap={normal}
        roughnessMap={rougness}
        displacementScale={0.5}
        aoMapIntensity={0.5}
        roughness={10}
      />
    </mesh>
  );
}

function Lights() {
  const lightRef = useRef<PointLight>(null!);
  const lightRef2 = useRef<PointLight>(null!);
  // useHelper(lightRef, PointLightHelper, 1, 'red');
  // useHelper(lightRef2, PointLightHelper, 1, 'red');
  return (
    <>
      {/* <ambientLight intensity={1}/> */}
      <pointLight
        ref={lightRef}
        position={[8, 7, 2]}
        intensity={40}
        color={[1, 0.25, 0.7]}
        castShadow
      />
      <pointLight
        ref={lightRef2}
        position={[-5, 7, -3]}
        intensity={40}
        color={[0.14, 0.5, 1]}
        castShadow
      />
    </>
  );
}

function Controls() {
  const orbitsControlsRef = useRef<any>(null);
  // useFrame(() => {
  //   if (orbitsControlsRef.current != null){
  //     console.log(orbitsControlsRef.current)
  //     orbitsControlsRef.current.setAzimuthalAngle();
  //     orbitsControlsRef.current.update()
  //   }

  // })
  return <OrbitControls ref={orbitsControlsRef} autoRotate autoRotateSpeed={1} enablePan={false} enableZoom={false} enableRotate={false} />;;
}

export default function Home() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    console.log(ready);
  }, [ready]);
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        // alignItems: "center",
        height: "200vh",
        width: "100vw",
        background: "#000",
      }}
    >
      <motion.div
        className="z-10 h-screen flex justify-center items-center text-center flex-col"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-white text-5xl font-bold ">Hello Next.js</h1>
        <p className="text-white text-2xl">Your new project is ready!</p>
      </motion.div>
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
      >
        <Suspense fallback={null}>
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 20, 20]} />
            <Lights />

            <Cube ready={ready} setReady={setReady} />
            <Controls />
          </Canvas>
        </Suspense>
      </motion.div>
    </main>
  );
}
