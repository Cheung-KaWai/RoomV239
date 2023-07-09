import { OrbitControls } from "@react-three/drei";
import React, { useRef } from "react";

export const Controls = () => {
  const orbit = useRef();

  const handleChange = () => {
    console.log(orbit.current);
  };

  return (
    <OrbitControls
      object-position={[0.9004284395634272, 1.3276469492180414, 3.4069225399045275]}
      object-rotation={[-0.2613102587476412, -0.05836188780036197, -0.015597305137338485]}
      target={[1.1265142886534325, 0.3279848170202216, -0.3311800282828249]}
      ref={orbit}
      onChange={handleChange}
    />
  );
};
