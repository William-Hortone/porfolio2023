import React from "react";
import { Header, HeadText, SlidingText, Navbar } from "../../components";
import "./homeSection.css";

const HomeSection = () => {
  return (
    <div className="app__homeSection">
      <Header />
      <div className="app__homeSection-container">
        <HeadText textContent="William" />
        <SlidingText />
        <HeadText textContent="Hortone" />
        {/* <Navbar /> */}
      </div>
    </div>
  );
};

export default HomeSection;
