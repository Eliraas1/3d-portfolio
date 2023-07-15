import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { textVariant } from "../utils/motion";

interface ExperinceCardProps {
  title: string;
  company_name: string;
  icon: any;
  iconBg: string;
  date: string;
  points: string[];
}
const ExperienceCard: React.FC<ExperinceCardProps> = ({
  title,
  company_name,
  date,
  icon,
  iconBg,
  points,
}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#ffff" }}
      contentArrowStyle={{ borderRight: "#232631" }}
      date={date}
      iconStyle={{ background: iconBg }}
      icon={
        <div className="flex h-full w-full justify-center items-center">
          <img
            src={icon}
            alt={company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {company_name}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {points.map((point, index) => (
          <li className="text-white-100 text-[14px] pl-1 tracking-wider">
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
