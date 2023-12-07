import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [pageName, setPageName] = useState("");
  const location = useLocation();

  useEffect(() => {
    const FindPathName = () => {
      if (location.pathname === "/") {
        setPageName("Home");
      } else if (location.pathname === "/about") {
        setPageName("About");
      } else if (location.pathname === "/projects") {
        setPageName("Projects");
      }
    };
    FindPathName();
  }, [location.pathname]);

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
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="link"
              onClick={() => setShowMenu(false)}
            >
              About
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
            <a
              href="#contact"
              className="link"
              onClick={() => setShowMenu(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
