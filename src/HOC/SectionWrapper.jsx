import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { styles } from "../style";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC(props) {
    const [ref, inView] = useInView(); // Track if the component is in view

    return (
      <motion.section
        initial="hidden"
        animate={inView ? "show" : "hidden"} // Animate based on inView status
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        ref={ref} // Attach the ref to the section element
      >
        <span className="hast-span" id={idName}>
          &nbsp;
        </span>
        <Component {...props} />
      </motion.section>
    );
  };

export default SectionWrapper;
