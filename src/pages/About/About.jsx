import React from "react";

import { FaArrowUp } from "react-icons/fa";
import {
  Navbar,
  Header,
  Title,
  SlidingText,
  Footer,
  PageTitle,
} from "../../components";
import { AboutMe, Skills, Certificate } from "../../containers";

import "./about.css";

const About = () => {
  return (
    <div className="app__about ">
      <Navbar />
      <Header />
      <div className="app__about-title section__spadding">
        {/* <Title title="A propos" /> */}
        <PageTitle textContent="A-propos" />
        <span className="line" />
      </div>
      <AboutMe />
      <SlidingText />
      <Skills />
      <span className="line" />
      <Certificate />
      <Footer color={"color-white"} />
      <a href="#home" className="app__goToTop">
        <div className="app__goToHome">
          <FaArrowUp />
        </div>
      </a>
    </div>
  );
};

export default About;
