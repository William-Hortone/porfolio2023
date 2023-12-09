import React from "react";
import { FaArrowUp } from "react-icons/fa";
import {
  Navbar,
  Header,
  SlidingText,
  Footer,
  PageTitle,
  Title,
} from "../../components";
import { AboutMe, Skills, Certificate } from "../../containers";
import "./about.css";

const About = () => {
  return (
    <div className="app__about ">
      <Navbar />
      <Header />
      <div className="app__about-title">
        <PageTitle textContent="About-Me" />
        <span className="line" />
      </div>
      <AboutMe />
      <SlidingText />
      <Skills />

      <span className="line" />
      <div className="app__about-experience section__padding">
        <div className="experience-title">
          <Title title="Experience" />
        </div>
        <div className="experience-description">
          <h2>Internship at Datategy: Frontend Developer</h2>
          <p>
            During my six-month remote internship at Datategy, I served as a
            Frontend Developer, collaborating with advanced professionals. This
            experience was a dynamic learning journey, exposing me to advanced
            coding, teamwork, and code best practices. <br />
            <br />
            The remote setting added an extra layer of complexity, requiring
            adaptability and mastery of virtual collaboration tools. This
            experience not only marked a professional milestone but also
            significantly shaped my approach to frontend development.
          </p>
        </div>
      </div>
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
