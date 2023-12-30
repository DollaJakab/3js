import { DepthOfField, EffectComposer } from "@react-three/postprocessing";
import React from "react";

const Effects = () => {
  return (
    <EffectComposer>
      <DepthOfField focusDistance={0.22} focalLength={0.21} bokehScale={10} />
    </EffectComposer>
  );
};

export default Effects;
