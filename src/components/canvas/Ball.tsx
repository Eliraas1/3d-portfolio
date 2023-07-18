import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  MeshDistortMaterial,
  OrbitControls,
  Preload,
  useTexture,
  Sphere,
} from "@react-three/drei";
import CanvasLoader from "../Loader";
interface BallProps {
  icon: any;
  name: string;
}

const Ball: React.FC<BallProps> = ({ icon, name }) => {
  const [decal] = useTexture([icon]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
          color="#efc1f0"
          attach="material"
          distort={0.3}
        />
        <Decal
          position={[0, 0, 1]}
          map={decal}
          rotation={[2 * Math.PI, 0, 6.25]}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas: React.FC<BallProps> = (props) => {
  return (
    <Canvas dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      {/* <Suspense fallback={<CanvasLoader />}> */}
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Ball {...props} />
      {/* </Suspense> */}

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
