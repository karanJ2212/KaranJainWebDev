import React, { useRef } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../HOC";
import { technologies, skills } from "../constants";
import { styles } from "../style";

import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

const Tech = () => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const [width] = windowSize.current;
  return (
    <div className="flex flex-col gap-y-10">
      {width < 768 ? (
        <>
          <div>
            <p className={`${styles.sectionSubText} `}>My Skills</p>
            <h2 className={`${styles.sectionHeadText}`}>Technologies</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {skills.map((skillGroup) => (
              <Tilt className="xs:w-[250px] w-full" key={skillGroup.id}>
                <motion.div
                  className="w-full rounded-[20px] green-pink-gradient p-[2px] shadow-card hover:shadow-xl transform transition-transform duration-300 ease-in-out"
                  options={{ max: 45, scale: 1, speed: 450 }}
                >
                  <div className="flex flex-col bg-tertiary rounded-[50px] p-4 h-full cursor-default">
                    <h3 className="text-white text-[20px] font-bold text-center">
                      {skillGroup.title}
                    </h3>
                    <div className="flex flex-wrap justify-center gap-2 mt-2 text-center">
                      {skillGroup.skills.map((category) =>
                        category.skills.map((skill) => (
                          <p
                            key={skill}
                            className={`text-white ${category.color} `}
                          >
                            {skill}
                          </p>
                        ))
                      )}
                    </div>
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </>
      ) : (
        <>
          <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText} `}>My skills</p>
            <h2 className={`${styles.sectionHeadText}`}>Technologies.</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {skills.map((skillGroup) => (
              <Tilt className="xs:w-[250px] w-full" key={skillGroup.id}>
                <motion.div
                  className="w-full rounded-[20px] green-pink-gradient p-[2px] shadow-card hover:shadow-xl transform transition-transform duration-300 ease-in-out"
                  options={{ max: 45, scale: 1, speed: 450 }}
                >
                  <div className="flex flex-col bg-tertiary rounded-[50px] p-4 h-full cursor-default">
                    <h3 className="text-white text-[20px] font-bold text-center">
                      {skillGroup.title}
                    </h3>
                    <div className="flex flex-wrap justify-center gap-2 mt-2 text-center">
                      {skillGroup.skills.map((category) =>
                        category.skills.map((skill) => (
                          <p
                            key={skill}
                            className={`text-white ${category.color} `}
                          >
                            {skill}
                          </p>
                        ))
                      )}
                    </div>
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </div>

          <div className="flex flex-row flex-wrap justify-center gap-10 text-center">
            {technologies.map((tech) => (
              <div className="w-28 h-28" key={tech.name}>
                <BallCanvas icon={tech.icon} />
                <p className={styles.sectionSubText}>{tech.name}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SectionWrapper(Tech, "technoloies");
