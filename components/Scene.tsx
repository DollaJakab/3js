import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion, useAnimation } from "framer-motion";
import React, { Suspense, useEffect, useState } from "react";
import Mesh from "./Scene-elements/Mesh";
import Effects from "./Scene-elements/Effects";
import Lights from "./Scene-elements/Lights";
import Controls from "./Scene-elements/Controls";
import Bearpaw from "@/public/bearpaw/Bearpaw";
import Loading from "./Loading";

const Scene = ({ ready, setReady }: any) => {
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();

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

  useEffect(() => {
    // Animate when 'ready' becomes true
    if (ready) {
      controls.start({
        opacity: 1,
        transition: { duration: 1 },
      });
    }
  }, [ready, controls]);

  return (
    <motion.div
      className="absolute top-0 w-screen h-screen bg-black"
      initial={{ opacity: 0 }}
      animate={controls}
    >
      <Canvas shadows>
        <Suspense fallback={null}>
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
        </Suspense>
      </Canvas>
    </motion.div>
  );
};

export default Scene;
