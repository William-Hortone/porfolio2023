import React from "react";
import { Navbar, Header, Title } from "../../components";

import "./about.css";

const About = () => {
  return (
    <div className="app_-about">
      <h2>about</h2>
      <Header />
      <div className="app__about-title">
        <Title />
      </div>
      <Navbar />
    </div>
  );
};

export default About;
