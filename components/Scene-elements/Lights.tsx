import React, { useRef } from "react";
import { PointLight } from "three";

const Lights = () => {
  const lightRef = useRef<PointLight>(null!);
  const lightRef2 = useRef<PointLight>(null!);
  // useHelper(lightRef, PointLightHelper, 1);
  // useHelper(lightRef2, PointLightHelper, 1);
  return (
    <>
      {/* <ambientLight intensity={1}/> */}
      <pointLight
        ref={lightRef}
        position={[5, 10, 2]}
        intensity={120}
        color={[1, 0.25, 0.7]}
        distance={50}
        castShadow
      />
      <pointLight
        ref={lightRef2}
        position={[-5, 10, -3]}
        intensity={120}
        color={[0.14, 0.5, 1]}
        castShadow
        distance={50}
      />
      <rectAreaLight
        position={[0, 20, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        width={10}
        height={10}
        intensity={2}
        color={[0.14, 0.5, 1]}
      />
    </>
  );
};

export default Lights;
