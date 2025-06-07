import { FaArrowUp } from "react-icons/fa";
import { Footer, PersonnelIntro, ProjectOverview, SlidingText } from "../../components";
import {
  HomeSection,
  Introduction
} from "../../containers";

const Home = () => {
  return (
    <div
      className="app__home bg-slate-950"
      style={{ backgrodundColor: "#0c0c0c", overflowX: "hidden" }}
    >

      <HomeSection />
      <Introduction />
      <PersonnelIntro />
      <ProjectOverview />
      <SlidingText />
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
