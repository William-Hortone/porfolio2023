import { FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";
import images from "../../constants/images";
import "./header.css";

const Header = () => {
  return (
    <div className="app__header" id="home z-50">
      <div className="app__header-logo  flex justify-start w-auto max-w-[20vw] sm:max-w-[12vw] md:max-w-[100px]">
        <img
          src={images.logo}
          alt="logo img"
          className="object-contain w-full h-auto"
        />
      </div>

      <div className="app__header-social_media">

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
