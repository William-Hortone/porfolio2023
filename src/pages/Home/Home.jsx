import { Footer, ProjectOverview } from "../../components";
import TextScroll from "../../components/TextScroll";
import {
  HomeSection
} from "../../containers";
import ImageGridScroll from "../../containers/ImageGridScroll";

const Home = () => {
  return (
    <div
      className="app__home bgs-[#070105] relative bg-slated-950"
    // style={{ overflowX: "hidden" }}
    >
     
      <HomeSection />
      <ImageGridScroll />
      <div className="flex justify-center w-full px-8 ">
      </div>

      <section className="w-full py-20 bg-slate-950">

        <div className="w-[90%] flex flex-col justify-center md:px-8 mx-auto">

          <TextScroll
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
          >
            Captivated by computer tools and emerging technologies, I’m passionate about web and mobile app development, with a particular focus on front-end development while also possessing strong back-end skills that broaden my expertise.
            I approach every project with enthusiasm, dedication, and a constant desire to learn. My career goal is to push my limits, take on challenging opportunities, and contribute meaningfully to innovative projects.
          </TextScroll>
        </div>
      </section>
      <ProjectOverview />

      <Footer color={"color-white"} />
      {/* <a href="#home" className="app__goToTop">
        <div className="app__goToHome">
          <FaArrowUp />
        </div>
      </a> */}
    </div>
  );
};

export default Home;
