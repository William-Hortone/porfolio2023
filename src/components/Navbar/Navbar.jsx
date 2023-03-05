import React, { useState } from "react";
import { HeadText } from "../../components";
import "./navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="app__navbar">
      <div className="app__navbar-container">
        <div>
          <h4>WH</h4>
        </div>
        <div onClick={() => setShowMenu(true)}>
          <h4>Accueil</h4>
        </div>
      </div>

      <div
        className={showMenu ? "app__navbar-toggle-menu" : "hide"}
        // className="app__navbar-toggle-menu"

        // style={{ position: "absolute", bottom: "65px", display: "flex" }}
      >
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
        <span className="close" onClick={() => setShowMenu(false)} />
      </div>
    </div>
  );
};

export default Navbar;
