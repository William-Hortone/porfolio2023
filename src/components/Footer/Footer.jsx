import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./footer.css";

const Footer = ({ color }) => {
  return (
    <div className={`${color}` + " app__footer section__padding"} id="contact">
      <div className="app__footer-box_titles">
        <h3>TU EMBAUCHES ?</h3>
        <h3>UNE COLLABORATION ?</h3>
        <h3>TU AS UN PROJET ?</h3>
      </div>
      <div className="app__footer-box-email">
        <span className="footer-arrow">
          <FaArrowRight />
        </span>
        <a href="#" mailto="willhortone@gmail.com" className="footer-email">
          WILLHORTONE@ <br /> GMAIL.COM
        </a>
      </div>
      <div className="app__footer-box-copyright">
        <p>William Hortone @2023</p>
        <p>Designed & Developed By William Hortone</p>
      </div>
    </div>
  );
};

export default Footer;
