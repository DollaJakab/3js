import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Hero = ({ ready }: any) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {!ready && (
          <motion.div
            className="z-10 bg-transparent  flex justify-center absolute top-[50%] items-center text-center flex-col  w-screen m-auto"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold text-foreground ">
              Hello Next.js
            </h1>
            <p className="text-backgorund text-2xl">
              Your new project is ready!
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {ready && (
          <motion.div
            className="z-10  flex justify-center absolute top-[70%] items-center text-center flex-col  w-screen m-auto"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h1 className="text-4xl  md:text-7xl text-white font-bold ">
              Explore Our Collection
            </h1>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;
