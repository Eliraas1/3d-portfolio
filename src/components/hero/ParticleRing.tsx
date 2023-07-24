import React, { Suspense, useEffect, useRef } from "react";
import { Canvas, GroupProps, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "../../utils/threeD";
import { CanvasLoader } from "..";

const ParticleRing = () => {
  return (
    <div className="bg-slate-900 w-full h-auto absolute inset-0 z-[-1] ">
      <Canvas
        camera={{
          position: [10, -7, -20],
        }}
        style={{
          height: "100vh",
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false} />
          <directionalLight />
          <pointLight position={[-30, 0, -30]} power={5} />
          <PointCircle />
        </Suspense>
      </Canvas>
    </div>
  );
};

const PointCircle = () => {
  const ref = useRef<GroupProps>(null);

  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map((point, index) => (
        <Point
          key={`${point.idx}-${index}`}
          position={point.position}
          color={point.color}
        />
      ))}
    </group>
  );
};

interface PointProps {
  position?: number[];
  color?: string;
}
const Point = ({ position, color }: PointProps) => {
  return (
    // @ts-ignore
    <Sphere position={position} args={[0.1, 10, 10]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
        color={color}
      />
    </Sphere>
  );
};

export default ParticleRing;
