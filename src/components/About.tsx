import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import ServiceCard from "./ServiceCard";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] "
      >
        I’m a software engineering student who is passionate about creating web
        and mobile applications. I have more than 1.5 years of experience as a
        full stack developer, working with various technologies and frameworks
        like React, React-Native, Next.js, Node.js and Nest.js. I enjoy learning
        new skills and exploring new challenges.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 md:justify-start justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

// export default About;
export default SectionWrapper(About, "about");
