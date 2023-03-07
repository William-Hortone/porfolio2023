import React from "react";
import { Navbar, Header, Title, SlidingText } from "../../components";
import { AboutMe, Skills, Certificate } from "../../containers";

import "./about.css";

const About = () => {
  return (
    <div className="app__about ">
      <h2>about</h2>
      <Header />
      <div className="app__about-title section__padding">
        <Title title="A propos" />
      </div>
      <AboutMe />
      <SlidingText />
      <Skills />
      <span className="line" />
      <div className="app__about-languages section__padding">
        <Title title="langues" />
        <div className="languages-container">
          <h3>Francais</h3>
          <h3>Anglais</h3>
          <h3>Mandarin</h3>
        </div>
      </div>
      <Certificate />
      <Navbar />
    </div>
  );
};

export default About;
