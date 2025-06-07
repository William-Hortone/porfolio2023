import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { Navbar, SlidingText, Footer, PersonnelIntro, ProjectOverview } from "../../components";
import {
  HomeSection,
  Introduction,
  WebInt,
  RecentProjects,
} from "../../containers";

const Home = () => {
  return (
    <div
      className="app__home bg-slate-950"
      style={{ backgrodundColor: "#0c0c0c", overflowX: "hidden" }}
    >
      {/* <Navbar /> */}
      <HomeSection />
      <Introduction />
      <PersonnelIntro />
      <ProjectOverview />
      {/* <WebInt /> */}
      <SlidingText />
      {/* <RecentProjects /> */}
      <Footer color={"color-white"} />
      <a href="#home" className="app__goToTop">
        <div className="app__goToHome">
          <FaArrowUp />
        </div>
      </a>
    </div>
  );
};

export default Home;
