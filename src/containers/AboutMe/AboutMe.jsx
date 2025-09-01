import React from "react";
import { CardImageOne } from "../../components";
import "./aboutMe.css";

const AboutMe = () => {
  return (
    <div className="app__aboutMe section__padding bg-slate-950">
      <div className="app__aboutMe-left">
        <div className="app__aboutMe-left-img">
          <CardImageOne />
        </div>
      </div>
      <div className="app__aboutMe-right">
        <p>
          I am a Software Engineer and currently studying Computer Science in China.
          I have a passion for work, learning, and pushing my limits. I approach
          each project with the same enthusiasm. <br /> Passionate about front-end
          development, I also possess back-end skills, which expand my
          expertise. My career goals are focused on pursuing challenging
          opportunities and making a meaningful contribution to innovative
          projects
          <br /> <br /> I have a linguistic background, as I speak not only
          French but also English and Chinese.abs<br /> <br />
          <em>2020 - 2024 :</em>  Software Engineering at <em> Jiangsu Normal University</em> <br />
          <em>2024 :</em> Computer Science at <em> Harbin Institute of Technology, Shenzhen</em>
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
