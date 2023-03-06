import React from "react";
import { Navbar } from "../../components";
import { HomeSection, Introduction, WebInt } from "../../containers";

const Home = () => {
  return (
    <div
      className="app__home"
      style={{ backgroundColor: "#0c0c0c", overflowX: "hidden" }}
    >
      <Navbar />
      <HomeSection />
      {/* <Introduction /> */}
      <WebInt />
    </div>
  );
};

export default Home;
