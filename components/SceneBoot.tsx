import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import React, { Suspense, useEffect, useState } from "react";
import Mesh from "./Scene-elements/Mesh";
import Effects from "./Scene-elements/Effects";
import Lights from "./Scene-elements/Lights";
import Controls from "./Scene-elements/Controls";

import Bearpaw from "@/public/bearpaw/Bearpaw";

const Scene = () => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    console.log(ready);
  }, [ready]);
  return (
    <motion.div
      className=" w-screen absolute top-0  h-screen bg-transparent"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 3 }}
      color="#000"
    >
      <Suspense fallback={null}>
        <Canvas shadows>
          <Lights />
          <PerspectiveCamera makeDefault position={[0, 10, 20]} far={100} />
          <Bearpaw />
          <Controls />
          {/* <Effects /> */}
        </Canvas>
      </Suspense>
    </motion.div>
  );
};

export default Scene;
