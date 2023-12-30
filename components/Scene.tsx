import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import React, { Suspense, useEffect, useState } from "react";
import Mesh from "./Scene-elements/Mesh";
import Effects from "./Scene-elements/Effects";
import Lights from "./Scene-elements/Lights";
import Controls from "./Scene-elements/Controls";

const Scene = () => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    console.log(ready);
  }, [ready]);
  return (
    <motion.div
      className="absolute top-0 w-screen  h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 2 }}
    >
      <Suspense fallback={null}>
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 10, 20]} far={100} />
          <Lights />

          <Mesh ready={ready} setReady={setReady} />
          <Controls />
          <Effects />
        </Canvas>
      </Suspense>
    </motion.div>
  );
};

export default Scene;
