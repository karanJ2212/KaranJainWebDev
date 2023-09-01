import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../HOC";
import { technologies } from "../constants";
import { styles } from "../style";

import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";

const Tech = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className="sm:px-16 px-6 sm:py-10 py-6 max-w-7xl relative z-0"
        id="work"
      >
        <p className={styles.sectionSubText}>Tech Stack</p>
        <h2 className={styles.sectionHeadText}>My Skills.</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10 text-center">
        {technologies.map((tech) => (
          <div className="w-28 h-28" key={tech.name}>
            <BallCanvas icon={tech.icon} />
            <p className={styles.sectionSubText}>{tech.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
