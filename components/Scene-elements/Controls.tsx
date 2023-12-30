import { OrbitControls } from "@react-three/drei";
import React, { useRef } from "react";

const Controls = () => {
  const orbitsControlsRef = useRef<any>(null);
  // useFrame(() => {
  //   if (orbitsControlsRef.current != null){
  //     console.log(orbitsControlsRef.current)
  //     orbitsControlsRef.current.setAzimuthalAngle();
  //     orbitsControlsRef.current.update()
  //   }

  // })
  return (
    <OrbitControls
      ref={orbitsControlsRef}
      autoRotate
      autoRotateSpeed={0.5}
      enablePan={false}
      enableZoom={false}
      enableRotate={false}
    />
  );
};

export default Controls;
