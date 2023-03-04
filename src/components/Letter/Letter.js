import React from "react";
import { motion } from "framer-motion";

import "./letter.css";

const Letter = ({ letter, delay }) => {
  return (
    <div className="box">
      <motion.span
        className="letter"
        initial={{ opacity: 1, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay,
          duration: 1,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
        // initial={{ y: 100 }}
        // animate={{ y: 0 }}
        // transition={{
        //   duration: 1,
        //   type: "spring",
        //   stiffness: 50,
        //   damping: 20,
        // }}
      >
        {letter}
      </motion.span>
    </div>
  );
};

export default Letter;
