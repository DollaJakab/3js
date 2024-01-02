import { useFrame, useLoader } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { RepeatWrapping, TextureLoader, Vector2 } from "three";

const Mesh = ({ ready, setReady }: any) => {
  const meshRef = useRef(null);

  const [rougness, normal, diff, disp, ao] = useLoader(TextureLoader, [
    "/textures-2/rough.jpg",
    "/textures-2/nor.jpg",
    "/textures-2/diff.jpg",
    "/textures-2/disp.jpg",
    "/textures-2/arm.jpg",
  ]);

  useEffect(() => {
    [normal, rougness, diff, disp, ao].forEach((texture) => {
      texture.wrapS = RepeatWrapping;
      texture.wrapT = RepeatWrapping;
      texture.repeat.set(2, 2);
    });
    setReady(true);
  }, [normal, rougness, diff, disp, ao]);

  useEffect(() => {
    console.log("Loading");
  }, []);
  useFrame((state, delta) => {
    let t = -state.clock.getElapsedTime() * 0.228;
    const vect = new Vector2(0, t);
    rougness.offset = vect;
    normal.offset = vect;
    diff.offset = vect;
    ao.offset = vect;
  });
  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2.2, 0, 0]} receiveShadow>
      <planeGeometry args={[90, 90, 50, 50]} />
      <meshStandardMaterial
        aoMap={ao}
        map={diff}
        displacementMap={disp}
        normalMap={normal}
        roughnessMap={rougness}
        displacementScale={0.3}
        aoMapIntensity={0.5}
        roughness={0.7}
      />
    </mesh>
  );
};

export default Mesh;
