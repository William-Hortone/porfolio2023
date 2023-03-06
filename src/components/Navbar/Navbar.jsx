import React, { useState } from "react";
import { HeadText } from "../../components";
import { FaTimes, FaSign } from "react-icons/fa";
import { Link } from "react-router-dom";
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
            <Link to="/" className="link" onClick={() => setShowMenu(false)}>
              Accueils
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="link"
              onClick={() => setShowMenu(false)}
            >
              Apropos
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="link"
              onClick={() => setShowMenu(false)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="link"
              onClick={() => setShowMenu(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
