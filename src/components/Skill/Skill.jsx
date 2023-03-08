import React from "react";
import images from "../../constants/images";

import "./skill.css";

const Skill = ({ skillTitle }) => {
  return (
    <div className="app__skill glitch-container">
      <h4>{skillTitle}</h4>
      <div className="app__skill-box-img glitch-image">
        <img src={images.logo} alt="kitten" />
      </div>
    </div>
  );
};

export default Skill;
