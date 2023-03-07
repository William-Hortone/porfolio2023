import React from "react";
import images from "../../constants/images";
import "./cardImage.css";

const CardImage = () => {
  return (
    <div className="app__cardImage">
      <img src={images.photo} alt="" />
    </div>
  );
};

export default CardImage;
