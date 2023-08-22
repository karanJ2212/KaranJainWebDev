import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";

import { downloadResume, github, linkedin, resume } from "../assets";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* // insert-0 is for inserting a text */}
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px]  max-w-7xl mx-auto flex flex-row item-start gap-5`}
      >
        {/* for circle and line */}

        <div className="flex flex-col justify-start items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* text hi i am karan */}
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className="text-[#915eff]">Karan</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a full-stack developer,
            <br className="sm:block hidden" /> I develop user interfaces and web
            applications
          </p>
          <div className="mt-[50px] flex justify-start gap-20 flex-wrap ">
            <img
              src={github}
              alt="github"
              className="cursor-pointer w-[90px]"
              onClick={() =>
                window.open("https://github.com/karanJ2212", "_blank")
              }
            />
            <img
              src={linkedin}
              alt="LinkedIn"
              className="cursor-pointer w-[210px]"
              onClick={() =>
                window.open("https://www.linkedin.com/in/karanj2212", "_blank")
              }
            />
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              download="KaranJain_WebDev.pdf"
            >
              <img
                src={downloadResume}
                alt="Download Resume"
                className="cursor-pointer w-[80px]"
              />
            </a>
          </div>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
