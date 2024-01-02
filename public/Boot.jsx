/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 boot.glb 
Author: inciprocal (https://sketchfab.com/inciprocal.com)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/fairbanks-snow-boot-b39f6aaeb97549afb76a44375e93245b
Title: Fairbanks Snow Boot
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/bearpaw.glb");
  console.log(materials);
  return (
    <group {...props} dispose={null}>
      <mesh
        scale={20}
        geometry={nodes.Object_2.geometry}
        material={materials.sh_fairbanksSnowBoot}
        position={[0, 0, 0.0]}
        rotation={[-Math.PI / 2, 0, -0.506]}
      />
    </group>
  );
}

useGLTF.preload("/boot.glb");
