import React from "react";
import images from "../../constants/images";
import "./cardImage.css";

const CardImage = () => {
  return (
    <div className="app__cardImage">
      <div className="app__cardImage-container">
        <img src={images.photo} alt="" />
      </div>
    </div>
  );
};

export default CardImage;
