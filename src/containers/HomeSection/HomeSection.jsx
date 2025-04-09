import React from "react";
import { Header, HeadText, SlidingText } from "../../components";
import { Boxes } from "../../components/ui/background_boxes";
import "./homeSection.css";

const HomeSection = () => {
  return (
    // <div className="app__homeSection ">
    <div className="h-screen relative w-full overflow-hidden  flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full  z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Header />
      <Boxes />
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
