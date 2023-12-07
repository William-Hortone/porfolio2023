import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./footer.css";

const Footer = ({ color }) => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className={`app__footer section__padding ${color}`} id="contact">
      <div className="app__footer-box_titles">
        <h3>ARE YOU HIRING?</h3>
        <h3>WANT A COLLABORATION ?</h3>
        <h3>DO YOU HAVE A PROJECT?</h3>
      </div>
      <div className="app__footer-box-email">
        <span className="footer-arrow">
          <FaArrowRight />
        </span>
        <a href="mailto:willhortone@gmail.com" className="footer-email">
          WILLHORTONE@ <br /> GMAIL.COM
        </a>
      </div>
      <div className="app__footer-box-copyright">
        <p>William Hortone @{year}</p>
        <p>Designed & Developed By William Hortone</p>
      </div>
    </div>
  );
};

export default Footer;
