import React from "react";
import "./homeSection.css";
import { Header, HeadText } from "../../components";

const HomeSection = () => {
  return (
    <div className="app__homeSection">
      <Header />
      <div className="app__homeSection-container">
        <HeadText textContent="William" />

        <HeadText textContent="Hortone" />
      </div>
    </div>
  );
};

export default HomeSection;
