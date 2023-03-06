import React from "react";
import { Title, SingleProject } from "../../components";
import "./recentProjects.css";

const RecentProjects = () => {
  return (
    <div className="app__recentProjects section__padding">
      <Title title="Projets Recent" />
      <div className="app__recentProjects-container">
        <SingleProject
          title="Clone Youtube"
          text=" After receiving some great feedback and because we are in love with
          typography animations, we decided to create a second set. In this
          volume, we explore some more ideas, usingperspective and sequential
          animations."
        />
        <SingleProject
          title="Ona Batiment"
          text=" After receiving some great feedback and because we are in love with
          typography animations, we decided to create a second set. In this
          volume, we explore some more ideas, usingperspective and sequential
          animations."
        />
        <SingleProject
          title="Giricht Resto"
          text=" After receiving some great feedback and because we are in love with
          typography animations, we decided to create a second set. In this
          volume, we explore some more ideas, usingperspective and sequential
          animations."
        />
        <span className="link_see-more">Voir plus</span>
      </div>
    </div>
  );
};

export default RecentProjects;
