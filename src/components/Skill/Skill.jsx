import React from "react";
import images from "../../constants/images";

import "./skill.css";

const Skill = ({ skillTitle }) => {
  return (
    <div className="app__skill">
      {skillTitle}
      <div className="app__skill-box-img">
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Skill;
