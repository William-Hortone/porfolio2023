import React from "react";
import images from "../../constants/images";
import { FaTwitter, FaLinkedinIn, FaGithub, FaYoutube } from "react-icons/fa";
import "./header.css";

const Header = () => {
  return (
    <div className="app__header" id="home">
      <div className="app__header-logo">
        <img src={images.logo} alt="logo img" />
      </div>
      <div className="app__header-social_media">
        <a href="https://www.linkedin.com/in/william-hortone" targe="blank">
          <FaLinkedinIn style={{ color: "blue", fontSize: "20px " }} />
        </a>
        <a href="https://github.com/William-Hortone" targe="blank">
          <FaGithub style={{ color: "white", fontSize: "20px " }} />
        </a>
        <a href="https://twitter.com/williamhortone" targe="blank">
          <FaTwitter style={{ color: "blue", fontSize: "20px " }} />
        </a>
        <a href="https://www.youtube.com/watch?v=D1A3qUkPmGI" targe="blank">
          <FaYoutube style={{ color: "red", fontSize: "20px " }} />
        </a>
      </div>
    </div>
  );
};

export default Header;
