import React from "react";
import { CircleText, Title } from "../../components";

import "./introduction.css";

const Introduction = () => {
  return (
    <div className="app__introduction section__padding">
      <Title title="Me Concernant" />
      <div className="app__introduction-box">
        <div className="space" />
        <p>
          JE SUIS ÉPRIS DES OUTILS INFORMATIQUES ET LES NOUVELLES TECHNOLOGIES,
          JE SUIS ATTIRÉ PAR LE DÉVELOPPEMENT WEB, MAIS ENCORE PLUS PAR LE
          DÉVELOPPEMENT FRONT-END. QUAND JE NE TRAVAILLE PAS SUR UN PROJET OU
          QUAND JE N’ÉTUDIE PAS, JE FAIS PROBABLEMENT DU SPORT OU JE JOUE AUX
          JEUX VIDÉOS.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
