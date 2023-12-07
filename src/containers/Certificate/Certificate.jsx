import React from "react";
import images from "../../constants/images";
import { CardImage, Title } from "../../components";
import "./certificate.css";

const Certificate = () => {
  return (
    <div className="app__certificate section__padding">
      <Title title="Certificates" />
      <div className="app__certificate-container">
        <div className="app__certificate-left">
          <p>
            In January 2023, I was selected to participate in a hackathon
            organized by Neza Tech, a company based in China. The challenge was
            to develop a mobile or web application that teaches how to play a
            musical instrument. My team achieved the second position.
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
