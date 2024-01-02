"use client";

import Hero from "@/components/Hero";
import { NavigationMenuDemo } from "@/components/Nav";
import Scene from "@/components/Scene";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SceneBoot from "@/components/SceneBoot";

export default function Home() {
  return (
    <main>
      <NavigationMenuDemo />
      <div className=" h-screen w-screen flex justify-center items-center">
        <Hero />
      </div>
      <Scene />
      {/* <SceneBoot /> */}
      <div className="h-screen  flex justify-center relative">
        <Button>HEHEHEHE</Button>
      </div>
    </main>
  );
}
