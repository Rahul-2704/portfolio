"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { color, motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import StarWrapper from "../hoc/SectionWrapper";
import { textVariant } from "../utils/motion";
import { experiences } from "../constants";
import Image from 'next/image'

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <Image
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-[#aaa6c3] text-[16px] font-semibold" style={{margin:0}}>{experience.company_name}</p>
    </div>
    <ul className="mt-5 list-disc ml=5 space-y-2 pl-2">
        {
            experience.points.map((point,index)=>(
                <li 
                key={`experience-point-${index}`}
                className="text-white-100 text-[14px] pl-1 tracking-wider"
                >
                    {point}
                </li>
            ))
        }
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-[#aaa6c3] uppercase tracking-wider">
          What I have done so far
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Work Experience
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default StarWrapper(Experience, "work");
