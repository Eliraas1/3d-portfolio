import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.cjs";
import { CanvasLoader } from "..";

type StarsProps = {
  numOfStars?: number;
  size?: number;
  color?: string;
};
const Stars: React.FC<StarsProps> = (
  { numOfStars = 7000, size = 0.002, color = "#f272c8" },
  props
) => {
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(numOfStars), {
    radius: 2,
  });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 25;
    ref.current.rotation.y -= delta / 42;
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color={color}
          size={size}
          sizeAttenuation={true}
          depthWrite
        />
      </Points>
    </group>
  );
};

const StarsCanvas: React.FC<StarsProps> = (props) => {
  return (
    <div className=" w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={<CanvasLoader />}>
          <Stars {...props} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
