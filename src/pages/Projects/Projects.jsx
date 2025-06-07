import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import {
  Footer,
  HeaderNav,
  PageTitle
} from "../../components";
import { AllProjects } from "../../containers";
import "./projects.css";

const Projects = () => {
  const [scroll, setScroll] = useState(false);

  const handleChangeBg = () => {
    if (window.scrollY >= 900) {
      setScroll(true);
    } else setScroll(false);
  };
  window.addEventListener("scroll", handleChangeBg);

  return (
    <div
      className={scroll ? "app__projects new-bg overflow-x-hidden" : " app__projects overflow-x-hidden initial-bg"}
    >
      <HeaderNav />
      <div className="app__about-title ">
        <PageTitle textContent="Projects" />
        <span className="line" />
      </div>
      <div className="app__projects-container section__padding">
        <AllProjects />

      </div>
      <Footer color={"color-black"} />
      <a href="#home" className="app__goToTop">
        <div className="app__goToHome">
          <FaArrowUp />
        </div>
      </a>
    </div>
  );
};

export default Projects;
