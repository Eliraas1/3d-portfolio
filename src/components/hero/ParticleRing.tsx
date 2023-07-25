import React, { Suspense, useRef } from "react";
import { Canvas, GroupProps, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "../../utils/threeD";
import { CanvasLoader, Hero } from "..";

const ParticleRing = () => {
  return (
    <div className="w-full relative h-auto ">
      <div className="h-screen w-full">
        <div className="z-[0]">
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
      </div>

      <div className="absolute w-full h-full top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
        <Hero />
      </div>
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
