import React from "react";
import { Title } from "../../components";

import "./introduction.css";

const Introduction = () => {
  return (
    <div className="app__introduction section__padding">
      <Title title="About Me" />
      <div className="app__introduction-box">
        <div className="space" />
        <p>
          Captivated by computer tools and emerging technologies, my focus lies
          in web & App development, with a particular emphasis on front-end
          development. During my leisure time, when not engrossed in a project
          or studying, you'll likely find me participating in sports or engaging
          in video games
        </p>
      </div>
    </div>
  );
};

export default Introduction;
