import { OrbitControls } from "@react-three/drei";
import React, { useRef } from "react";

export const Controls = () => {
  const orbit = useRef();

  const handleChange = () => {
    console.log(orbit.current);
  };

  return (
    <OrbitControls
      object-position={[3.42, 0.96, -0.91]}
      object-rotation={[-1.53, 1.48, 1.53]}
      target={[-0.43, 0.6, -0.93]}
      ref={orbit}
      onChange={handleChange}
    />
  );
};
