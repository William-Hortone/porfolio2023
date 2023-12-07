import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import images from "../../constants/images";
import {
  Navbar,
  SingleProject,
  Header,
  Footer,
  PageTitle,
} from "../../components";
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
      className={scroll ? "app__projects new-bg" : " app__projects initial-bg"}
    >
      <Navbar />
      <Header />
      <div className="app__about-title ">
        <PageTitle textContent="Projects" />
        <span className="line" />
      </div>
      <div className="app__projects-container section__padding">
        <SingleProject
          img={images.youtube}
          img2={images.youtube2}
          img3={images.youtube3}
          img4={images.youtube2}
          img5={images.youtube4}
          initialColor={"text-initial-color"}
          newColor={"text-new-color"}
          link="https://willtube.netlify.app/"
          title="YouTube Clone"
          text=" It's a personal challenge. I challenged myself  to create the YouTube application using Rapid API. This enables access to all YouTube channels and their content. Additionally, this project is responsive"
          sProjectNInitialBg={"sp-initial-bg"}
          sProjectNewBg={"sp-new-bg"}
        />

        <SingleProject
          img={images.photo}
          img2={images.ona1}
          img3={images.ona2}
          img4={images.ona3}
          img5={images.ona4}
          title="Ona Batiment"
          text=" ONA BATIMENT is a general building company divided into three divisions: Architectural design, engineering office, and construction. I was primarily at the heart of the project, from selecting the model to launching the website."
          initialColor={"text-initial-color"}
          link="https://onabatiment.com/"
          newColor={"text-new-color"}
          sProjectNInitialBg={"sp-initial-bg"}
          sProjectNewBg={"sp-new-bg"}
        />

        <SingleProject
          img={images.giricht}
          img2={images.giricht2}
          img3={images.giricht3}
          img4={images.giricht4}
          img5={images.giricht5}
          title="Gericht Resto"
          text=" This is the website of a restaurant. This project is part of my numerous projects undertaken for fun. The goal was to integrate a Figma mockup."
          initialColor={"text-initial-color"}
          link="https://gericht-a.netlify.app/"
          newColor={"text-new-color"}
          sProjectNInitialBg={"sp-initial-bg"}
          sProjectNewBg={"sp-new-bg"}
        />
        <SingleProject
          img={images.fd6}
          img2={images.fd}
          img3={images.fd3}
          img4={images.fd5}
          img5={images.fd4}
          title="Fournisseur De proximié"
          text="This is a website that highlights the various products and accessories of a supplier.This is a project where I collaborated with a designer to implement the design."
          initialColor={"text-initial-color"}
          link="https://fournisseurdp.com/"
          newColor={"text-new-color"}
          sProjectNInitialBg={"sp-initial-bg"}
          sProjectNewBg={"sp-new-bg"}
        />
        <SingleProject
          img={images.aesgc5}
          img2={images.aesgc3}
          img3={images.aesgc}
          img4={images.aesgc6}
          img5={images.aesgc4}
          title="AESGC"
          text="The Association of Gabonese Students and Interns in China (AESGC) is a non-governmental, apolitical, secular, and non-profit organization open to any peaceful and tolerant Gabonese student or intern."
          initialColor={"text-initial-color"}
          link="https://gabonaisdechine.com/"
          newColor={"text-new-color"}
          sProjectNInitialBg={"sp-initial-bg"}
          sProjectNewBg={"sp-new-bg"}
        />
        <SingleProject
          img={images.portfolio1}
          img2={images.portfolio2}
          img3={images.portfolio5}
          img4={images.portfolio4}
          img5={images.portfolio3}
          title="Preview Portfolio"
          text="In 2022, with the goal of showcasing my projects and enhancing my knowledge in front-end development, I created my first portfolio"
          link="https://wh-first-portfolio.netlify.app/"
          initialColor={"text-initial-color"}
          newColor={"text-new-color"}
          sProjectNInitialBg={"sp-initial-bg"}
          sProjectNewBg={"sp-new-bg"}
        />
        <SingleProject
          img={images.yanga1}
          img2={images.yanga2}
          img3={images.yanga3}
          img4={images.yanga4}
          img5={images.yanga5}
          title="Yanga Cargo"
          text="YANGA CARGO is a Gabonese SME based in Guangzhou, China, specializing in the fields of air freight (import-export) and port services (import operations in Libreville)"
          initialColor={"text-initial-color"}
          newColor={"text-new-color"}
          sProjectNInitialBg={"sp-initial-bg"}
          sProjectNewBg={"sp-new-bg"}
          link="https://dev-gabfashion.pantheonsite.io/"
        />
        <SingleProject
          img={images.linkedin}
          img2={images.linkedin2}
          img3={images.linkedin3}
          img4={images.linkedin4}
          img5={images.linkedin5}
          title="Linkedin Clone"
          text="This project represents a personal challenge. Spending considerable time on Linkedin, I aimed to replicate it by creating multiple pages, including the homepage, messaging, notifications, profile, jobs, and network pages, while also incorporating dynamic search functionality and infinite scrolling. The entire project is fully responsive."
          initialColor={"text-initial-color"}
          newColor={"text-new-color"}
          sProjectNInitialBg={"sp-initial-bg"}
          sProjectNewBg={"sp-new-bg"}
          link="https://linkedin-clone3.netlify.app/"
        />
        <SingleProject
          img={images.lbvh5}
          img2={images.lbvh4}
          img3={images.lbvh3}
          img4={images.lbvh2}
          img5={images.lbvh}
          title="Hospital management system"
          text="This is one of my final year projects, the main idea is to create a hospital management system. It's a full-stack project currently in development and only available on my GitHub for now (github.com/William-Hortone/school-projects)."
          initialColor={"text-initial-color"}
          newColor={"text-new-color"}
          sProjectNInitialBg={"sp-initial-bg"}
          sProjectNewBg={"sp-new-bg"}
          link="https://github.com/William-Hortone/school-projects"
        />
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
