import React from "react";
import { Header, HeadText, SlidingText } from "../../components";
import "./homeSection.css";

const HomeSection = () => {
  return (
    // <div className="app__homeSection ">
    <div className="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden rounded-lg bg-slate-950">
      <div className="absolute inset-0 w-full h-full  z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Header />
      {/* <div className="flex">
        <Boxes />
      </div> */}
      <div className="app__homeSection-container section__padding">
        <HeadText textContent="William" />
        <SlidingText />
        <HeadText textContent="Hortone" />
      </div>
    </div>
    // </div>
  );
};

export default HomeSection;
