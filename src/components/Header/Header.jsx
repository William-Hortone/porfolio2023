import React from "react";
import images from "../../constants/images";
import { FaInstagram, FaLinkedinIn, FaYoutube, FaGithub } from "react-icons/fa";

import "./header.css";

const Header = () => {
  return (
    <div className="app__header" id="home">
      <div className="app__header-logo">
        <img src={images.logo} alt="logo img" />
      </div>
      <div className="app__header-social_media">
        <a href="https://www.linkedin.com/in/william-hortone/" targe="blank">
          <FaLinkedinIn style={{ color: "white", fontSize: "20px " }} />
        </a>
        <a href="https://github.com/William-Hortone" targe="blank">
          <FaGithub style={{ color: "white", fontSize: "20px " }} />
        </a>
        <a href="https://www.instagram.com/will_hortone/" targe="blank">
          <FaInstagram style={{ color: "white", fontSize: "20px " }} />
        </a>
      </div>
    </div>
  );
};

export default Header;
