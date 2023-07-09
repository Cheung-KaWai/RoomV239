import { OrbitControls } from "@react-three/drei";
import React, { useRef } from "react";

export const Controls = () => {
  const orbit = useRef();

  const handleChange = () => {
    console.log(orbit.current);
  };

  return (
    <OrbitControls
      object-position={[3.32, 1.51, -1]}
      object-rotation={[-1.54, 1.2, 1.54]}
      target={[-0.3, 0.125, -1.035]}
      ref={orbit}
      onChange={handleChange}
    />
  );
};
