import React from "react";
import "./header.css";
import images from "../../constants/images";

const Header = () => {
  return (
    <div className="app__header">
      <div className="app__header-logo">
        <img src={images.logo} alt="logo img" />
      </div>
      <div className="app__header-social_media">
        <span style={{ color: "white" }}>hello</span>
      </div>
    </div>
  );
};

export default Header;
