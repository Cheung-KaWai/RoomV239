/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 roomV239.glb -T -p 6
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { MeshStandardMaterial } from "three";

export function Model(props) {
  const { nodes, materials } = useGLTF("/roomV239-transformed.glb");
  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.Room.geometry}
        material={materials.Baseboard_material}
      >
        <mesh
          geometry={nodes.Baseboard.geometry}
          material={materials.Baseboard_material}
        />
        <mesh
          geometry={nodes.Ceiling.geometry}
          material={materials.Baseboard_material}
        />
        <mesh
          geometry={nodes.Floor.geometry}
          material={materials.Baseboard_material}
        />
        <mesh
          geometry={nodes.WindowFrame.geometry}
          material={materials.Baseboard_material}
          position={[-0.082461, 0.464845, -1.002121]}
          rotation={[0, 1.570535, 0]}
        >
          <mesh
            geometry={nodes.WindowR001.geometry}
            material={new MeshStandardMaterial()}
            position={[0.74, 0.025, 0.0625]}
          />
        </mesh>
      </mesh>
    </group>
  );
}

useGLTF.preload("/roomV239-transformed.glb");