import React from "react";
import { CardImageOne } from "../../components";

import "./aboutMe.css";

const AboutMe = () => {
  return (
    <div className="app__aboutMe section__padding">
      <div className="app__aboutMe-left">
        <div className="app__aboutMe-left-img">
          <CardImageOne />
        </div>
      </div>
      <div className="app__aboutMe-right">
        <p>
          Je suis un développeur front-end, étudiant en Software Engineering en
          chine, j’aime le travail, l’apprentissage et me surpasser. C'est avec
          le même enthousiasme que je réalise chaque projet. <br /> <br /> J'ai
          des antécédents linguistiques dans la mesure où, en plus du français,
          je parle aussi l'anglais et le mandarin.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
