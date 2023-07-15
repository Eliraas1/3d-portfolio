import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { Canvas } from "@react-three/fiber";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.padding} absolute inset-0 top[120px] max-w-7xl mx-auto  flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Eliran</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A software engineer <br className="sm:block hidden" /> who developed
            web <br className="sm:block hidden" /> and mobile applications
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className="absolute xs:bottom-2 bottom-5 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[33px] h-[55px] rounded-3xl border-4 border-secondary flex justify-center items-start p-1">
            <motion.div
              animate={{
                y: [0, 27, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
