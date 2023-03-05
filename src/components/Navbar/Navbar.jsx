import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="app__navbar">
      <div className="app__navbar-container">
        <div>
          <h4>WH</h4>
        </div>
        <div>
          <h4>Accueil</h4>
        </div>
      </div>
      <div className="app__navbar-toggle-menu">
        <ul className="navbar-links">
          <li>
            <a href="#" className="link">
              Accueil
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
        <span className="close" />
      </div>
    </div>
  );
};

export default Navbar;
