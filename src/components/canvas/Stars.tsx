import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.cjs";

interface StarsProps {}
const Stars: React.FC<StarsProps> = (props) => {
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(7000), { radius: 2 });
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 40;
    ref.current.rotation.y -= delta / 30;
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className=" w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
