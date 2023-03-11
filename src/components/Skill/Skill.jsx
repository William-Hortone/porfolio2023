import React from "react";
import images from "../../constants/images";

import "./skill.css";

const Skill = ({ skillTitle, img }) => {
  return (
    <div className="app__skill glitch-container">
      <div className="app__skill-container_title">
        <h4>{skillTitle}</h4>
      </div>
      <div className="app__skill-box-img glitch-image">
        <img src={img} alt="kitten" />
      </div>
    </div>
  );
};

export default Skill;
