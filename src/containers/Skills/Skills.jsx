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
            <CardImage img={images.junction5} />
          </div>
        </div>
        <div className="app__skill-container-right">
          <Skill skillTitle="html5" img={images.html} />
          <Skill skillTitle="css3" img={images.css} />
          <Skill skillTitle="javascript" img={images.js} />
          <Skill skillTitle="TypeScript" img={images.typeScript} />
          <Skill skillTitle="react js" img={images.react} />
          <Skill skillTitle="react Native" img={images.reactNative} />
          <Skill skillTitle="Angular JS" img={images.angular} />
          <Skill skillTitle="Node js" img={images.nodejs} />
          <Skill skillTitle="Express js" img={images.express} />
          <Skill skillTitle="MongoDB" img={images.mongoDB} />
          <Skill skillTitle="Firebase" img={images.firebase} />
          <Skill skillTitle="tailwind css" img={images.tailwind} />
          <Skill skillTitle="bootstrap" img={images.bootstrap} />
          <Skill skillTitle="wordpress" img={images.wordpress} />
          <Skill skillTitle="framer-motion" img={images.motion} />
          <Skill skillTitle="git & Github" img={images.git} />
          <Skill skillTitle="Jira Software" img={images.jira} />
          <Skill skillTitle="figma" img={images.figma} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
