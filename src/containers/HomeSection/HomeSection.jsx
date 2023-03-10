import React from "react";
import { Header, HeadText, SlidingText } from "../../components";
import "./homeSection.css";

const HomeSection = () => {
  return (
    <div className="app__homeSection ">
      <Header />
      <div className="app__homeSection-container section__padding">
        <HeadText textContent="William" />
        <SlidingText />
        <HeadText textContent="Hortone" />
      </div>
    </div>
  );
};

export default HomeSection;
