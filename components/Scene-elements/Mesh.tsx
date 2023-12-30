import { useLoader } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { RepeatWrapping, TextureLoader } from "three";

const Mesh = ({ ready, setReady }: any) => {
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
      <planeGeometry args={[90, 90, 128, 128]} />
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
};

export default Mesh;
