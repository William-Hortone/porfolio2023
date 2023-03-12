import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import images from "../../constants/images";

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
      <div className="app__about-title ">
        <PageTitle textContent="Projets" />
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
          title="Clone YouTube"
          text=" Il s’agit d’un challenge personnel que je me suis lancé. 
          À savoir, réaliser l'application YouTube en me servant de Rapid API ce qui 
          donne la possibilité d'accéder a toutes les chaînes YouTube et a leurs 
          contenus. Ce project est également responsive."
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
          text="  ONA Bâtiment est une entreprise générale de bâtiment répartie en trois pôles :
           Conception architecturale, bureau d’études et travaux. J'ai essentiellement été au cœur 
           du projet, du choix de la maquette à la mis en ligne du site."
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
          text=" Il s'agit du site web d'un restaurant. Ce projet fait partir de mes nombreux projets 
          realises pour le 'fun'. it était question d'intégrer une maquette figma."
          initialColor={"text-initial-color"}
          link="https://gericht-a.netlify.app/"
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
          title="Ancien Portfolio"
          text="En 2022 afin de partager mes projets, mais aussi afin d'améliorer mes connaissances 
          en développement front-end, j'ai réalisé mon premier portfolio."
          link="https://williamhortone.com/"
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
          text="Yanga Cargo est une PME gabonaise basée en Chine à Guangzhou évoluant 
          dans le secteur du fret aérienne: import export et portuaire: import à Libreville."
          initialColor={"text-initial-color"}
          newColor={"text-new-color"}
          sProjectNInitialBg={"sp-initial-bg"}
          sProjectNewBg={"sp-new-bg"}
        />

        <SingleProject
          img={images.linkedin}
          img2={images.linkedin2}
          img3={images.linkedin3}
          img4={images.linkedin4}
          img5={images.linkedin5}
          title="Clone Linkedin"
          text=" Ce projet est un challenge personnel. Passant assez de temps sur Linkedin, 
          j'ai voulu le cloner en réalisant plusieurs pages, dont la page d'accueil, 
          messagerie, notifications, profil, emplois, réseau et en y ajoutant une recherche 
          dynamique et un scroll infini. Ce projet est totalement responsive."
          initialColor={"text-initial-color"}
          newColor={"text-new-color"}
          sProjectNInitialBg={"sp-initial-bg"}
          sProjectNewBg={"sp-new-bg"}
          link="https://linkedin-clone3.netlify.app/"
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
