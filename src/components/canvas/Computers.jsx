import React, { Suspense, useEffect, useState } from "react";

import { Canvas } from "@react-three/fiber";

import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import canvasLoader from "../canvas";
import Ball from "./Ball";

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor={Black} />
      <pointLight intensity={1} />
      <primitive object={computer.scene} />
    </mesh>
  );
};

export default Computers;
