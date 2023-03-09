import React from "react";
import { Navbar, SlidingText, Footer } from "../../components";
import {
  HomeSection,
  Introduction,
  WebInt,
  RecentProjects,
} from "../../containers";

const Home = () => {
  return (
    <div
      className="app__home"
      style={{ backgroundColor: "#0c0c0c", overflowX: "hidden" }}
    >
      <Navbar />
      <HomeSection />
      <Introduction />
      <WebInt />
      <SlidingText />
      <RecentProjects />
      <Footer color={"color-white"} />
    </div>
  );
};

export default Home;
