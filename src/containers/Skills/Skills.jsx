import React from "react";
import { Title, CardImage, Skill } from "../../components";
import images from "../../constants/images";

import "./skills.css";

const Skills = () => {
  return (
    <div className="app__skills section__padding">
      <Title title="Hard Skills" />
      <div className="app__skills-container">
        <div className="app__skill-container-left">
          <div className="app__skill-container-left_img">
            <CardImage img={images.williamThree} />
          </div>
        </div>
        <div className="app__skill-container-right">
          <Skill skillTitle="html" img={images.html} />
          <Skill skillTitle="css" img={images.css} />
          <Skill skillTitle="javascript" img={images.js} />
          <Skill skillTitle="react js" img={images.react} />
          <Skill skillTitle="tailwind css" img={images.tailwind} />
          <Skill skillTitle="bootstrap" img={images.bootstrap} />
          <Skill skillTitle="wordpress" img={images.wordpress} />
          <Skill skillTitle="C++" img={images.cpp} />
          <Skill skillTitle="Material Ui" img={images.material} />
          <Skill skillTitle="framer-motion" img={images.motion} />
          <Skill skillTitle="git & Github" img={images.git} />
          <Skill skillTitle="Netlify" img={images.netlify} />
          <Skill skillTitle="figma" img={images.figma} />
          <Skill skillTitle="vs code" img={images.vscode} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
