import React from "react";
import { Header, HeadText, SlidingText, Navbar } from "../../components";
import "./homeSection.css";

const HomeSection = () => {
  return (
    <div className="app__homeSection section__paddingd">
      <Header />
      <div className="app__homeSection-container section__padding">
        <HeadText textContent="William" />
        <SlidingText />
        <HeadText textContent="Hortone" />
        {/* <Navbar /> */}
      </div>
    </div>
  );
};

export default HomeSection;
