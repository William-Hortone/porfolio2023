import React from "react";
import images from "../../constants/images";
import { CardImage, Title } from "../../components";

import "./certificate.css";

const Certificate = () => {
  return (
    <div className="app__certificate section__padding">
      <Title title="Certificat" />
      <div className="app__certificate-container">
        <div className="app__certificate-left">
          <p>
            En janvier 2023, j'ai été sélectionné pour participer, un hackathon
            organisé par Neza Tech ( une compagnie basée en Chine ) et dont le
            défi était de réaliser une application mobile ou web qui apprendre à
            jouer d'un instrument. Mon groupe a obtenu la deuxième place.
          </p>
        </div>
        <div className="app__certificate-right">
          <div className="app__certificate-right-img">
            <CardImage img={images.certificate} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
