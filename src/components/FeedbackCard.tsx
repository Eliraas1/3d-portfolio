import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

interface FeedbackCardProps {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
  index: number;
}
const FeedbackCard: React.FC<FeedbackCardProps> = ({
  testimonial,
  name,
  designation,
  company,
  image,
  index,
}) => {
  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
    >
      <p className="text-white font-bold text-[48px]">"</p>
      <div className="mt-1">
        <p className="text-white tracking-wider text-[18px] ">{testimonial}</p>
        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex flex-1 flex-col ">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@ &nbsp;</span>
              {name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {designation}, {company}
            </p>
          </div>
          <img
            src={image}
            alt={`feedback by ${name}`}
            className="object-contain w-11 h-11 rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default FeedbackCard;
