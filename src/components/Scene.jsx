import { Box, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { styled } from "styled-components";
import { RoomV239 } from "./RoomV239";
import { Desk } from "./Desk";
import { Controls } from "./Controls";
import { Chair } from "./Chair";

export const Scene = () => {
  return (
    <CanvasContainer>
      <Canvas>
        <Controls />
        <Environment preset="apartment" />
        <RoomV239 />
        <Desk />
        <Chair />
      </Canvas>
    </CanvasContainer>
  );
};

const CanvasContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;
