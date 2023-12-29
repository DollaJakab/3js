"use client"

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { LinearEncoding, Mesh, PointLight, PointLightHelper, TextureLoader } from "three";
import { OrbitControls, PerspectiveCamera, useHelper, useTexture } from '@react-three/drei'

function Cube(): JSX.Element {

  const meshRef = useRef<Mesh>(null);
  
  const terrainTextures = useTexture({
    map: '/textures/diff.jpg',
    displacementMap: '/textures/disp.jpg',
    aoMap: '/textures/arm.jpg',
    rougnessMap: '/textures/arm.jpg',
    metalnessMap: '/textures/arm.jpg',
    normalMap: '/textures/nor.jpg',
  })

  // useFrame(() => {
  //   if(!meshRef.current){
  //     return;
  //   }
  //   meshRef.current.rotation.y += 0.01;
  // })

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[10, 10, 128, 128]} />
      <meshStandardMaterial  {...terrainTextures} normalMap-encoding={LinearEncoding} displacementScale={0.3} aoMapIntensity={10} />
    </mesh>
  );
}

function Lights() : JSX.Element {
  const lightRef = useRef<PointLight>(null!);
  const lightRef2 = useRef<PointLight>(null!);
  // useHelper(lightRef, PointLightHelper, 1, 'red');
  // useHelper(lightRef2, PointLightHelper, 1, 'red');
  return (
    <>
    {/* <ambientLight intensity={4}/> */}
    <pointLight ref={lightRef} position={[8, 2, 0]} intensity={30} />
    <pointLight ref={lightRef2} position={[-5, 5, 0]} intensity={30} />
    </>
  )
}

export default function Home() {
  

  return (
    <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#282828' }}>
      <Canvas >
        <PerspectiveCamera makeDefault position={[0, 10, 5]} />
        <Lights />
        <Cube />
        <OrbitControls />
      </Canvas>
    </main>
  )
}
