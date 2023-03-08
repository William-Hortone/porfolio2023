import React, { useState, useEffect } from "react";
import { HeadText } from "../../components";
import { FaTimes, FaSign } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [pageName, setPageName] = useState("");
  const location = useLocation();

  const FindPathName = () => {
    if (location.pathname === "/") {
      setPageName("Accueil");
    } else if (location.pathname === "/about") {
      setPageName("A Propos");
    } else if (location.pathname === "/projects") {
      setPageName("Projets");
    }
  };

  useEffect(() => {
    FindPathName();
  }, []);

  console.log(location);
  return (
    <div className={showMenu ? "app__navbar-opened" : "app__navbar"}>
      <div className="app__navbar-container">
        <div onClick={() => setShowMenu(true)} style={{ cursor: "pointer" }}>
          <h4>Menu</h4>
        </div>
        <div>
          <h4>{pageName}</h4>
        </div>
      </div>

      <div className={showMenu ? " app__navbar-toggle-menu " : "hide"}>
        <span className="close" onClick={() => setShowMenu(false)}>
          <FaTimes />
        </span>
        <ul className="navbar-links">
          <li>
            <Link to="/" className="link" onClick={() => setShowMenu(false)}>
              Accueil
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
              to="contact"
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
