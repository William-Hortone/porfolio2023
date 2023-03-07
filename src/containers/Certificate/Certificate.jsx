import React from "react";
import images from "../../constants/images";
import { CardImage, Title } from "../../components";

import "./certificate.css";

const Certificate = () => {
  return (
    <div className="app__certificate section__padding">
      <Title title="Certificat" />
      <div className="app__certificate-container">
        <div className="app__certificate-left"></div>
        <div className="app__certificate-right">
          <div className="app__certificate-right-img">
            {/* <CardImage /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
