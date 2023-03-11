import React from "react";
import { Link } from "react-router-dom";
import { Title, SingleProject } from "../../components";
import "./recentProjects.css";

const RecentProjects = () => {
  return (
    <div className="app__recentProjects section__padding">
      <Title title="Projets Recent" />
      <div className="app__recentProjects-container">
        <SingleProject
          title="Clone Youtube"
          text=" Il s’agit d’un challenge personnel que je me suis lancé. 
          À savoir, réaliser l'application YouTube en me servant de Rapid API ce qui 
          donne la possibilité d'accéder a toutes les chaînes YouTube et a leurs 
          contenusCe project est également responsive"
          sProjectNInitialBg={"sp-new-bg"}
          sProjectNewBg={"sp-initial-bg"}
          initialColor={"text-initial-color"}
          newColor={"text-initial-color"}
        />
        <SingleProject
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
          title="Giricht Resto"
          text="il s'agit du site web d'un restaurant. Ce projet fait partir de mes nombreux projets 
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
