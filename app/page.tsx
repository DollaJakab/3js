"use client";

import Hero from "@/components/Hero";
import { NavigationMenuDemo } from "@/components/Nav";
import Scene from "@/components/Scene";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SceneBoot from "@/components/SceneBoot";
import { useState } from "react";

export default function Home() {
  const [ready, setReady] = useState(false);
  return (
    <main>
      <NavigationMenuDemo ready={ready} />
      <div className=" h-screen w-screen flex justify-center items-center">
        <Hero ready={ready} />
      </div>
      <Scene ready={ready} setReady={setReady} />
      {/* <SceneBoot /> */}
      <div className="h-screen  flex justify-center relative">
        <Button>HEHEHEHE</Button>
      </div>
    </main>
  );
}
