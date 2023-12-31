/* eslint-disable react-refresh/only-export-components */
import React, { useRef } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../HOC";
import { useInView } from "react-intersection-observer";

const ServiceCard = ({ title, index, icon }) => {
  const [ref, inView] = useInView(); // Track if the component is in view

  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const [width, height] = windowSize.current;

  return (
    <>
      {width < 768 ? (
        <Tilt className="xs:w-[250px] w-full">
          <motion.div
            initial="hidden"
            animate={inView ? "show" : "hidden"} // Animate based on inView status
            ref={ref} // Attach the ref to the section element
            // variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
            className="w-full rounded-[20px] green-pink-gradient p-[1px] shadow-card"
          >
            <div
              // eslint-disable-next-line react/no-unknown-property
              options={{ max: 45, scale: 1, speed: 450 }}
              className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
            >
              <img
                src={icon}
                alt={title}
                className="w-16 h-16 object-contain "
              />
              <h3 className="text-white text-center text-bold text-[20px]">
                {title}
              </h3>
            </div>
          </motion.div>
        </Tilt>
      ) : (
        <Tilt className="xs:w-[250px] w-full">
          <motion.div
            initial="hidden"
            animate={inView ? "show" : "hidden"} // Animate based on inView status
            ref={ref} // Attach the ref to the section element
            variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
            className="w-full rounded-[20px] green-pink-gradient p-[1px] shadow-card"
          >
            <div
              // eslint-disable-next-line react/no-unknown-property
              options={{ max: 45, scale: 1, speed: 450 }}
              className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
            >
              <img
                src={icon}
                alt={title}
                className="w-16 h-16 object-contain "
              />
              <h3 className="text-white text-center text-bold text-[20px]">
                {title}
              </h3>
            </div>
          </motion.div>
        </Tilt>
      )}
    </>
  );
};

const About = () => {
  const [ref, inView] = useInView(); // Track if the component is in view
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const [width, height] = windowSize.current;
  return (
    <>
      {width < 768 ? (
        <div>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </div>
      ) : (
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>
      )}

      <motion.p
        initial="hidden"
        animate={inView ? "show" : "hidden"} // Animate based on inView status
        ref={ref} // Attach the ref to the section element
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[18px]
        leading-[30px] max-w-3xl"
      >
        I am a dedicated Full-Stack Web Developer with a proven journey from
        rigorous learning to impactful execution. I successfully graduated from
        Microverse, a prestigious remote software development school, where I
        mastered front-end development, responsive design, JavaScript, React
        with Redux, API integration, semantic HTML, and Git version control. My
        expertise extends to crafting seamless user experiences, web performance
        optimization, debugging, testing, and database management.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
