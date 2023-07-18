import React from "react";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { github } from "../../assets";
import { projects } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import { SectionWrapper } from "../../hoc";
import ProjectCard from "./ProjectCard";
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My projects</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-3 text-[17px] max-w-3xl leading-[30px]"
        >
          Here are some of the cool things I have built or helped to build,
          showing off my skills and passion in different areas. You can learn
          more about each project by reading a quick overview, or by clicking on
          the links to the code, demos and live versions. Enjoy!
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} index={index} />
        ))}
      </div>
    </>
  );
};

// export default Works;
export default SectionWrapper(Works, "");
