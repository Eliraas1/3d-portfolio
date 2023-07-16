import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { BallCanvas } from "./canvas";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((tech) => (
        <div key={tech.name} className="2-28 h-28">
          <BallCanvas {...tech} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
