import React from "react";
import { motion } from "framer-motion";
import { nextjs } from "../assets";

interface BallProps {
  icon: any;
  name: string;
  index: number;
}
const Ball: React.FC<BallProps> = ({ icon, name, index }) => {
  const rotationSpeed = 15 + (index + 1) * 5; // Adjust this value to control the speed
  const rotationDirection = index % 2 === 0 ? 1 : -1; // 1 for clockwise, -1 for counter-clockwise

  return (
    <div className="w-28 h-28 bg-gradient-to-br from-white-100 to-[#915eff] rounded-full shadow-lg flex items-center justify-center">
      <motion.img
        src={icon} // Replace with your image URL
        alt={name}
        className="w-16 h-16 self-center "
        style={{ rotate: "360deg" }}
        animate={{ rotate: `${360 * rotationDirection}deg` }}
        transition={{
          duration: rotationSpeed,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default Ball;
