import React, { useState } from "react";
import {
  Navbar,
  SingleProject,
  Title,
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
      <div className="app__about-title section__spadding">
        {/* <Title title="Projets" /> */}
        <PageTitle textContent="Projets" />
        <span className="line" />
      </div>
      <div className="app__projects-container section__padding">
        <SingleProject
          // color={scroll ? "#0000" : "#ffff"}
          initialColor={"text-initial-color"}
          newColor={"text-new-color"}
          title="Clone Youtube"
          text=" Il s’agit d’un challenge personnel que je me suis lancé. 
          À savoir, réaliser l'application YouTube en me servant de Rapid API ce qui 
          donne la possibilité d'accéder a toutes les chaînes YouTube et a leurs 
          contenus. Ce project est également responsive."
          sProjectNInitialBg={"sp-initial-bg"}
          sProjectNewBg={"sp-new-bg"}
        />
        <SingleProject
          title="Ona Batiment"
          text="  ONA Bâtiment est une entreprise générale de bâtiment répartie en trois pôles :
           Conception architecturale, bureau d’études et travaux. J'ai essentiellement été au cœur 
           du projet, du choix de la maquette à la mis en ligne du site."
          initialColor={"text-initial-color"}
          newColor={"text-new-color"}
          sProjectNInitialBg={"sp-initial-bg"}
          sProjectNewBg={"sp-new-bg"}
        />
        <SingleProject
          title="Giricht Resto"
          text=" Il s'agit du site web d'un restaurant. Ce projet fait partir de mes nombreux projets 
          realises pour le 'fun'. it était question d'intégrer une maquette figma."
          initialColor={"text-initial-color"}
          newColor={"text-new-color"}
          sProjectNInitialBg={"sp-initial-bg"}
          sProjectNewBg={"sp-new-bg"}
        />
        <SingleProject
          title="Ancien Portfolio"
          text=" After receiving some great feedback and because we are in love with
          typography animations, we decided to create a second set. In this
          volume, we explore some more ideas, usingperspective and sequential
          animations."
          initialColor={"text-initial-color"}
          newColor={"text-new-color"}
          sProjectNInitialBg={"sp-initial-bg"}
          sProjectNewBg={"sp-new-bg"}
        />
        <SingleProject
          title="Yanga Cargo"
          text=" After receiving some great feedback and because we are in love with
          typography animations, we decided to create a second set. In this
          volume, we explore some more ideas, usingperspective and sequential
          animations."
          initialColor={"text-initial-color"}
          newColor={"text-new-color"}
          sProjectNInitialBg={"sp-initial-bg"}
          sProjectNewBg={"sp-new-bg"}
        />
        <SingleProject
          title="Clone Linkedin"
          text=" After receiving some great feedback and because we are in love with
          typography animations, we decided to create a second set. In this
          volume, we explore some more ideas, usingperspective and sequential
          animations."
          initialColor={"text-initial-color"}
          newColor={"text-new-color"}
          sProjectNInitialBg={"sp-initial-bg"}
          sProjectNewBg={"sp-new-bg"}
        />
      </div>
      <Footer color={"color-black"} />
    </div>
  );
};

export default Projects;
