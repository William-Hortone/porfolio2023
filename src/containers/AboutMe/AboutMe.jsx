import React from "react";
import { CardImageOne } from "../../components";
import "./aboutMe.css";

const AboutMe = () => {
  return (
    <div className="app__aboutMe section__padding">
      <div className="app__aboutMe-left">
        <div className="app__aboutMe-left-img">
          <CardImageOne />
        </div>
      </div>
      <div className="app__aboutMe-right">
        <p>
          I am a front-end developer and a student in Software Engineering in
          China. I have a passion for work, learning, and pushing my limits. I
          approach each project with the same enthusiasm. <br /> <br /> I have a
          linguistic background, as I speak not only French but also English and
          Chinese
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
