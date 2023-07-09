import { Box, Environment, Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { styled } from "styled-components";
import { RoomV239 } from "./RoomV239";
import { Desk } from "./Desk";
import { Controls } from "./Controls";
import { Chair } from "./Chair";
import { Pc } from "./Pc";
import { Painting } from "./Painting";
import { Curtain } from "./Curtain";

export const Scene = () => {
  return (
    <CanvasContainer>
      <Canvas
        flat
        legacy
      >
        <Suspense fallback={null}>
          <Controls />
          <Environment preset="studio" />
          <group rotation-y={-Math.PI / 2}>
            <RoomV239 />
            <Desk />
            <Pc />
            <Chair />
            <Painting />
          </group>
          <Curtain />
        </Suspense>
      </Canvas>
      <Loader />
    </CanvasContainer>
  );
};

const CanvasContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #161616;
`;
