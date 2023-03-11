import React from "react";
import { Link } from "react-router-dom";
import { Title, SingleProject } from "../../components";
import images from "../../constants/images";
import "./recentProjects.css";

const RecentProjects = () => {
  return (
    <div className="app__recentProjects section__padding">
      <Title title="Projets Recent" />
      <div className="app__recentProjects-container">
        <SingleProject
          img={images.youtube}
          img2={images.youtube2}
          img3={images.youtube3}
          img4={images.youtube4}
          img5={images.youtube2}
          title="Clone Youtube"
          text=" Il s’agit d’un challenge personnel que je me suis lancé. 
          À savoir, réaliser l'application YouTube en me servant de Rapid API. Ce qui 
          donne la possibilité d'accéder a toutes les chaînes YouTube et a leurs 
          contenus. Ce project est également responsive"
          sProjectNInitialBg={"sp-new-bg"}
          sProjectNewBg={"sp-initial-bg"}
          initialColor={"text-initial-color"}
          newColor={"text-initial-color"}
        />
        <SingleProject
          img={images.photo}
          img2={images.ona1}
          img3={images.ona2}
          img4={images.ona3}
          img5={images.ona4}
          title="Ona Batiment"
          text=" ONA Bâtiment est une entreprise générale de bâtiment répartie en trois pôles :
           Conception architecturale, bureau d’études et travaux.J'ai essentiellement été au cœur 
           du projet. Du choix de la maquette à la mis en ligne du site."
          sProjectNInitialBg={"sp-new-bg"}
          sProjectNewBg={"sp-initial-bg"}
          initialColor={"text-initial-color"}
          newColor={"text-initial-color"}
        />
        <SingleProject
          img={images.giricht}
          img2={images.giricht2}
          img3={images.giricht3}
          img4={images.giricht4}
          img5={images.giricht5}
          title="Giricht Resto"
          text="Il s'agit du site web d'un restaurant. Ce projet fait partir de mes nombreux projets 
          realises pour le 'fun'. it était question d'intégrer une maquette figma."
          sProjectNInitialBg={"sp-new-bg"}
          sProjectNewBg={"sp-initial-bg"}
          initialColor={"text-initial-color"}
          newColor={"text-initial-color"}
        />
        <Link to="/projects" className="link_see-more">
          Voir plus
        </Link>
      </div>
    </div>
  );
};

export default RecentProjects;
