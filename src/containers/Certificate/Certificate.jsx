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
            After receiving some great feedback and because we are in love with
            typography animations, we decided to create a second set. In this
            volume, we explore some more ideas.
          </p>
        </div>
        <div className="app__certificate-right">
          <div className="app__certificate-right-img">
            <CardImage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
