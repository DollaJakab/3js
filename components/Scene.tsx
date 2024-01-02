import { PerspectiveCamera } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion, useAnimation } from "framer-motion";
import React, { Suspense, useEffect, useRef, useState } from "react";
import Mesh from "./Scene-elements/Mesh";
import Lights from "./Scene-elements/Lights";
import Controls from "./Scene-elements/Controls";
import Ski from "@/public/ski/Ski";
import { useInView } from "react-intersection-observer";

const DisableRender = () => useFrame(() => null, 1000);

const Scene = ({ ready, setReady }: any) => {
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();
  const { ref, inView } = useInView();

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

  useEffect(() => {
    console.log(inView);
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      className="absolute top-0 w-screen h-screen bg-black"
      initial={{ opacity: 0 }}
      animate={controls}
    >
      <Canvas shadows>
        {!inView && <DisableRender />}
        <Suspense fallback={null}>
          <PerspectiveCamera
            makeDefault
            position={!isMobile ? [0, 3, 15] : [0, 0, 35]}
            far={100}
          />
          <Lights />
          <Ski />
          <Mesh ready={ready} setReady={setReady} />
          <Controls />
          {/* <Effects /> */}
        </Suspense>
      </Canvas>
    </motion.div>
  );
};

export default Scene;
