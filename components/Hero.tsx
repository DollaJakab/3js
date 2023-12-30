import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="z-10  flex justify-center absolute top-[50%]items-center text-center flex-col  w-max m-auto p-10 rounded-2xl"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold text-foreground ">Hello Next.js</h1>
          <p className="text-backgorund text-2xl">Your new project is ready!</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Hero;
