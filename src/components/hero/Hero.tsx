import React from "react";
import { motion } from "framer-motion";
import { StarsCanvas } from "..";
import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <div className="h-screen w-full overflow-hidden relative grid place-items-center">
      <motion.div className="flex flex-1 relative z-[11]">
        <HeroContent />
      </motion.div>

      <div className="absolute inset-0 z-10">
        <StarsCanvas numOfStars={1000} size={0.0125} color="#915eff" />
      </div>
    </div>
  );
};

export default Hero;
