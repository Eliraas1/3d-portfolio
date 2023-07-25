import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import Ball from "./Ball";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((tech, index) => (
        <div key={tech.name} className="w-28 h-28">
          <Ball {...tech} index={index} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
