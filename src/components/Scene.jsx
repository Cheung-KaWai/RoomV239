import { Box, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { styled } from "styled-components";
import { RoomV239 } from "./RoomV239";
import { Desk } from "./Desk";
import { Controls } from "./Controls";
import { Chair } from "./Chair";
import { Pc } from "./Pc";
import { Painting } from "./Painting";

export const Scene = () => {
  return (
    <CanvasContainer>
      <Canvas
        flat
        legacy
      >
        <Controls />
        <Environment preset="studio" />
        <RoomV239 />
        <Desk />
        <Pc />
        <Chair />
        <Painting />
      </Canvas>
    </CanvasContainer>
  );
};

const CanvasContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;
