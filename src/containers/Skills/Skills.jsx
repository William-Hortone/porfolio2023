import React from "react";
import { Title, CardImage, Skill } from "../../components";
import "./skills.css";

const Skills = () => {
  return (
    <div className="app__skills section__padding">
      <Title title="Hard Skills" />
      <div className="app__skills-container">
        <div className="app__skill-container-left">
          <div className="app__skill-container-left_img">
            <CardImage />
          </div>
        </div>
        <div className="app__skill-container-right">
          {/* <div className="app__skill-right_box-one"> */}
          <Skill skillTitle="html" />
          <Skill skillTitle="css" />
          <Skill skillTitle="javascript" />
          <Skill skillTitle="react js" />
          <Skill skillTitle="tailwind css" />
          <Skill skillTitle="C++" />
          <Skill skillTitle="Netlify" />
          {/* </div>
          <div className="app__skill-right_box-two"> */}
          <Skill skillTitle="wordpress" />
          <Skill skillTitle="bootstrap" />
          <Skill skillTitle="git & Github" />
          <Skill skillTitle="Material Ui" />
          <Skill skillTitle="framer-motion" />
          <Skill skillTitle="figma" />
          <Skill skillTitle="vs code" />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
