import React from "react";
import {
  OrbitControls,
  Sphere,
  MeshDistortMaterial,
  useTexture,
  Decal,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { profileImgRounded } from "../../assets";
const ProfileSphere = () => {
  const [decal] = useTexture([profileImgRounded]);
  return (
    <Sphere args={[1, 400, 200]} scale={2.5}>
      <MeshDistortMaterial color="#360e54" attach="material" distort={0.5} />
      <Decal
        position={[0, 0, 1]}
        map={decal}
        rotation={[2 * Math.PI, 0, 6.25]}
      />
    </Sphere>
  );
};

const ProfileCanvas = () => {
  return (
    <Canvas shadows gl={{ preserveDrawingBuffer: true }}>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.7} />
      <directionalLight position={[1, 2, 3]} />
      <ProfileSphere />
    </Canvas>
  );
};
export default ProfileCanvas;
