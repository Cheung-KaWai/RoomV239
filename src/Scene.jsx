import { Box, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { styled } from "styled-components";
import { RoomV239 } from "./RoomV239";

export const Scene = () => {
  return (
    <CanvasContainer>
      <Canvas flat>
        <OrbitControls />
        <Environment preset="apartment" />
        <RoomV239 />
      </Canvas>
    </CanvasContainer>
  );
};

const CanvasContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;
