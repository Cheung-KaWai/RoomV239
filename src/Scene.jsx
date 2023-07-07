import { Box, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { styled } from "styled-components";

export const Scene = () => {
  return (
    <CanvasContainer>
      <Canvas>
        <OrbitControls />
        <Environment preset="apartment" />
        <Box />
      </Canvas>
    </CanvasContainer>
  );
};

const CanvasContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;
