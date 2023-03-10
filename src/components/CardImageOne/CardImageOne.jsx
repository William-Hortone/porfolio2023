import React, { useEffect, useRef } from "react";
import images from "../../constants/images";
import "./cardImageOne.css";

const CardImage = () => {
  return (
    <div className="app__cardImageOne">
      <div className="app__cardImageOne-container">
        <span />
        <img src={images.williamTwo} alt="" className="img-anim" />
      </div>
    </div>
  );
};

export default CardImage;
