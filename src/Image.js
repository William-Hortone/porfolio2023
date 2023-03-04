import React from "react";
import { motion } from "framer-motion";
import "./App.css";

const Image = () => {
  return (
    <motion.div
      className="image-container"
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.img
        src="https://placekitten.com/400/400"
        alt="Kitten"
        className="image"
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.5 }}
      />
      <motion.div className="overlay" />
      <motion.div className="text-container">
        <motion.h2 className="text">Amazing Hover Effect</motion.h2>
      </motion.div>
    </motion.div>
  );
};

export default Image;
