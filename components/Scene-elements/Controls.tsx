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
      autoRotateSpeed={0.3}
      enablePan={false}
      enableZoom={false}
      enableRotate={false}
      target={[0, 3, 0]}
    />
  );
};

export default Controls;
