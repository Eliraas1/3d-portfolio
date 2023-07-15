import { motion } from "framer-motion";
import React, { ReactElement } from "react";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (
  Component: React.ComponentType<any>,
  idName: string
) => {
  return () => (
    <motion.section
      variants={staggerContainer() as any}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <span className="hash-span" id={idName}>
        &nbsp;
      </span>

      <Component />
    </motion.section>
  );
};

export default SectionWrapper;