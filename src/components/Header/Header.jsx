import React from "react";
import images from "../../constants/images";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

import "./header.css";

const Header = () => {
  return (
    <div className="app__header">
      <div className="app__header-logo">
        <img src={images.logo} alt="logo img" />
      </div>
      <div className="app__header-social_media">
        <FaLinkedinIn style={{ color: "white", fontSize: "25px " }} />
        <FaYoutube style={{ color: "white", fontSize: "25px " }} />
        <FaInstagram style={{ color: "white", fontSize: "25px " }} />
      </div>
    </div>
  );
};

export default Header;
