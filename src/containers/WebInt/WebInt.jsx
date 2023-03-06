import React from "react";
import images from "../../constants/images";
import "./webInt.css";

const WebInt = () => {
  return (
    <div className="app__webInt section__paddingd">
      <div className="app__webInt-container">
        <div className="webInt-container-left">
          <h2>Intégrateur web</h2>
          {/* <img src={images.wh_left} alt="" /> */}
        </div>
        <div className="webInt-container-right">
          <p>
            Avec un sens d’observation assez développé, je réalise des sites et
            applications web identiques aux maquettes en travaillant en étroite
            collaboration avec un designer ou en m’inspirant d'autres sites.
          </p>
          {/* <img src={images.wh_right} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default WebInt;
