import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn } from "../../utils/motion";
import { github, googlePlay, youtube } from "../../assets";

interface ProjectCardProps {
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
    icon?: any;
  }[];
  image: string;
  source_code_link: string;
  demo?: string;
  store?: string;
  index: number;
}
const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  store,
  demo,
  index,
}) => {
  const handlePress = (url?: string) => () => {
    if (!url) return;
    window.open(url, "black");
  };
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl  sm:w-[360px] w-full "
      >
        <div className="relative w-full h-[230px] ">
          <img src={image} className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 flex justify-start items-end flex-col m-3 card-image_hover gap-2">
          <div
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            onClick={handlePress(source_code_link)}
          >
            <img
              src={github}
              alt="github"
              className="object-contain w-1/2 h-1/2"
            />
          </div>
          {store && (
            <div
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              onClick={handlePress(store)}
            >
              <img
                src={googlePlay}
                alt="github"
                className="object-contain w-1/2 h-1/2"
              />
            </div>
          )}
          {demo && (
            <div
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              onClick={handlePress(demo)}
            >
              <img
                src={youtube}
                alt="github"
                className="object-contain w-1/2 h-1/2"
              />
            </div>
          )}
        </div>
        <div className="mt-5">
          <h3 className="font-bold text-[23px] font-white">{name}</h3>
          <p className="mt-2 text-[14px] text-secondary">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2 justify-center">
          {tags?.map(
            (tag) =>
              tag.icon && (
                <img
                  src={tag.icon}
                  key={tag.name}
                  className="object-contain h-1/12 w-1/12"
                />
              )
          )}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
