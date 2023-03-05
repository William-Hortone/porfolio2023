import React, { useState } from "react";
import { HeadText } from "../../components";
import { FaTimes, FaSign } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={showMenu ? "app__navbar-opened" : "app__navbar"}>
      <div className="app__navbar-container">
        <div onClick={() => setShowMenu(true)} style={{ cursor: "pointer" }}>
          <h4>Menu</h4>
        </div>
        <div>
          <h4>Accueil</h4>
        </div>
      </div>

      <div className={showMenu ? " app__navbar-toggle-menu " : "hide"}>
        <span className="close" onClick={() => setShowMenu(false)}>
          <FaTimes />
        </span>
        <ul className="navbar-links">
          <li>
            <a href="#" className="link">
              Accueils
            </a>
          </li>
          <li>
            <a href="#" className="link">
              Apropos
            </a>
          </li>
          <li>
            <a href="#" className="link">
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="link">
              Contact
            </a>
          </li>
        </ul>

        {/* <span className="close" onClick={() => setShowMenu(false)} /> */}
      </div>
    </div>
  );
};

export default Navbar;
