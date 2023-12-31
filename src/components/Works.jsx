import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion, useInView } from "framer-motion";
import { styles } from "../style";
import { github } from "../assets";
// import { SectionWrapper } from "../HOC";
import { projects, jsProjects, reactProject } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { AiFillGithub, AiOutlineArrowRight } from "react-icons/ai";

import Slider from "react-slick";
import { settings, Rubysettings } from "../constants/settings";

import "./workStyle.css";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  return (
    <motion.div>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[200px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] ">{description}</p>
        </div>
        <div className="flex gap-4 items-center justify-center mt-5">
          <button
            className="flex gap-2 p-2 rounded-md bg-inherit border-[1.5px] hover:bg-white hover:text-black text-sm"
            onClick={() => window.open(source_code_link, "_blank")}
          >
            See Source <AiFillGithub size={20} />
          </button>
          <button
            className="flex gap-2 p-2 rounded-md bg-inherit border-[1.5px] hover:bg-white hover:text-black text-sm"
            onClick={() => window.open(live_link, "_blank")}
          >
            See Live <BsArrowUpRightCircle size={20} />
          </button>
        </div>
        <div className="flex flex-wrap mt-4 gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const ProjectCardRoR = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  return (
    <div>
      <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full cursor-pointer">
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="flex gap-4 items-center justify-center mt-5">
          <button
            className="flex gap-2 p-2 rounded-md bg-inherit border-[1.5px] hover:bg-white hover:text-black text-sm"
            onClick={() => window.open(source_code_link, "_blank")}
          >
            See Source <AiFillGithub size={20} />
          </button>
          <div className="tooltip-container">
            <button
              className="flex gap-2 p-2 rounded-md bg-inherit border-[1.5px] hover:bg-white hover:text-black text-sm"
              onClick={() => window.open(live_link, "_blank")}
            >
              See Live <BsArrowUpRightCircle size={20} />
            </button>
            <div className="tooltip">This project is yet to be deployed</div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className="sm:px-16 px-6 sm:py-10 py-6 max-w-7xl relative z-0"
        id="work"
      >
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex flex-col">
        <motion.p
          varients={fadeIn("", "", 0.1, 1)}
          className=" text-secondary text-[17px] max-w-3xl leading-[30p] sm:px-16 px-6"
        >
          I have worked on a variety of personal and professional Following
          projects showcases my skills and experience through real-world
          examples of my work. Each project is briefly described with links to
          code repositories and live demos in it. It reflects my ability to
          solve complex problems, work with different technologies, and manage
          projects effectively.
        </motion.p>
        <div className="mt-20 px-6 ">
          <p className={`${styles.sectionSubText} text-center mt-5`}>
            React Projects
          </p>

          <div className="flex items-center animate-slideContinuous">
            <AiOutlineArrowRight
              className="text-gray-100 opacity-40"
              size={24}
            />
            <span className="text-gray-100 opacity-40 ml-2">slide</span>
          </div>

          <Slider {...settings} className="cursor-grab active:cursor-grabbing">
            {reactProject.map((project, index) => (
              <ProjectCard
                key={`project-${index}`}
                index={index}
                {...project}
              />
            ))}
          </Slider>

          <p className={`${styles.sectionSubText} text-center mt-[100px]`}>
            Javascript Projects
          </p>
          <Slider {...settings} className="cursor-grab active:cursor-grabbing">
            {jsProjects.map((project, index) => (
              <ProjectCard
                key={`project-${index}`}
                index={index}
                {...project}
              />
            ))}
          </Slider>

          <p className={`${styles.sectionSubText} text-center mt-[100px]`}>
            React-Ruby on Rails Projects
          </p>
          {/* <div className="flex flex-row justify-center gap-5">
            <Slider {...Rubysettings}>
              {projects.map((project, index) => (
                <div key={index} className="mx-5">
                  <ProjectCardRoR
                    key={`project-${index}`}
                    index={index}
                    {...project}
                  />
                </div>
              ))}
            </Slider>
          </div> */}
          <div className="mt-20 flex flex-wrap gap-7 justify-center">
            {projects.map((project, index) => (
              <ProjectCardRoR
                key={`project-${index}`}
                index={index}
                {...project}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

// export default SectionWrapper(Works, "works");
export default Works;
