import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC(props) {
    return (
      <motion.section>
        <Component {...props} />
      </motion.section>
    );
  };

export default SectionWrapper;
