import React from "react";
import { data } from "../data/textures";
import { useTexture } from "@react-three/drei";
import { LinearSRGBColorSpace, MeshStandardMaterial, SRGBColorSpace } from "three";

export const useBake = (bake, config) => {
  const maps = useTexture(data[bake]);

  for (const key in maps) {
    //flip
    maps[key].flipY = false;

    //colorspace
    if (key == "map") {
      maps[key].colorSpace = SRGBColorSpace;
    } else {
      maps[key].colorSpace = LinearSRGBColorSpace;
    }
  }

  const material = new MeshStandardMaterial({
    ...maps,
    ...config,
  });

  return material;
};
