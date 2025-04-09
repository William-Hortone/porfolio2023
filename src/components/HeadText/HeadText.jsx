import React from "react";
import { Letter } from "../../components";
import "./headText.css";

const HeadText = ({ textContent }) => {
  const letters = textContent.split("");

  return (
    <div className="app__headText z-30">
      <div className="app__headText-container">
        {letters.map((letter, index) => (
          <Letter key={index} letter={letter} delay={index * 0.1} />
        ))}
      </div>
    </div>
  );
};

export default HeadText;
