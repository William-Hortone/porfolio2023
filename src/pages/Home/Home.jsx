import React from "react";
import { Navbar } from "../../components";
import { HomeSection } from "../../containers";

const Home = () => {
  return (
    <div className="app__home" style={{ backgroundColor: "#0c0c0c" }}>
      <HomeSection />
      <Navbar />
    </div>
  );
};

export default Home;
