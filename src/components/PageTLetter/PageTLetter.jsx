import React from "react";
import { motion } from "framer-motion";
import "./pageTLetter.css";

const PageTLetter = ({ letter, delay }) => {
  return (
    <div className="p-box">
      <motion.span
        className="p-letter"
        initial={{ opacity: 1, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay,
          duration: 1,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
      >
        {letter}
      </motion.span>
    </div>
  );
};

export default PageTLetter;
