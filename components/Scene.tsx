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

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the threshold as needed
    };

    // Initial check on mount
    handleResize();

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div
      className="absolute top-0 w-screen  h-screen bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 3.5 }}
      color="#000"
    >
      <Suspense fallback={null}>
        <Canvas shadows>
          <PerspectiveCamera
            makeDefault
            position={!isMobile ? [0, 10, 25] : [0, 10, 35]}
            far={100}
          />
          <Lights />
          <Bearpaw />
          <Mesh ready={ready} setReady={setReady} />
          <Controls />
          {/* <Effects /> */}
        </Canvas>
      </Suspense>
    </motion.div>
  );
};

export default Scene;
