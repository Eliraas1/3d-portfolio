import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

interface BallProps {
  icon: any;
  name: string;
  index: number;
}
const Ball: React.FC<BallProps> = ({ icon, name, index }) => {
  const rotationSpeed = 15 + (index + 1) * 5;
  const rotationDirection = index % 2 ? 360 : -360;
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.08 * index, 0.75)}
      className="w-28 h-28 bg-gradient-to-br from-white-100 to-[#915eff] rounded-full shadow-lg flex items-center justify-center"
    >
      <motion.img
        src={icon} // Replace with your image URL
        alt={name}
        className="w-16 h-16 self-center "
        animate={{ rotate: `${rotationDirection}deg` }}
        transition={{
          duration: rotationSpeed,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.div>
  );
};

export default Ball;
