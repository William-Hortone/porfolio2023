import React from "react";
import { Navbar, Header, Title, SlidingText, Footer } from "../../components";
import { AboutMe, Skills, Certificate } from "../../containers";

import "./about.css";

const About = () => {
  return (
    <div className="app__about ">
      <Navbar />
      <Header />
      <div className="app__about-title section__spadding">
        <Title title="A propos" />
        <span className="line" />
      </div>
      <AboutMe />
      <SlidingText />
      <Skills />
      <span className="line" />
      <Certificate />
      <Footer />
    </div>
  );
};

export default About;
