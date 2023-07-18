import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { resume, linkedin } from "../assets";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex flex-col">
      <div
        className={`${styles.padding} w-full h-1/2 max-w-7xl mx-auto  flex flex-row items-start gap-5`}
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
          <div className="flex mt-4 ">
            <a
              href="https://www.linkedin.com/in/eliran-ashtamker/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 cursor-pointer"
            >
              <img
                src={linkedin}
                alt="LinkedIn"
                className="w-8 h-8 object-contain"
              />
            </a>
            <a href={resume} download>
              <button className="bg-[#915eff] hover:bg-[#915effb1] text-white font-bold py-1 px-4 rounded">
                Download Resume
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className=" h-full w-full ">
        <ComputersCanvas />
      </div>

      <div className="absolute xs:-bottom-10 -bottom-0 w-full flex justify-center items-center ">
        <a href="#about">
          <div className="w-[30px] h-[55px] rounded-3xl border-4 border-secondary flex justify-center items-start p-1">
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
