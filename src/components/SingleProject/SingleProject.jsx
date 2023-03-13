import React, { useState } from "react";

import "./singleProject.css";

const SingleProject = ({
  img,
  img2,
  img3,
  img4,
  img5,
  title,
  text,
  link,
  initialColor,
  newColor,
  sProjectNewBg,
  sProjectNInitialBg,
}) => {
  const [scroll, setScroll] = useState(false);

  const handleChangeBg = () => {
    if (window.scrollY >= 900) {
      setScroll(true);
    } else setScroll(false);
  };
  window.addEventListener("scroll", handleChangeBg);

  return (
    <div
      className={
        scroll
          ? `${sProjectNewBg}` +
            " app__singleProject scroll-animation-right-project"
          : `${sProjectNInitialBg}` +
            " app__singleProject scroll-animation-right-project"
      }
    >
      <div className="app__singleProject-left">
        <h2 className={scroll ? `${newColor}` : `${initialColor}`}>{title}</h2>
        <p className={scroll ? `${newColor}` : `${initialColor}`}>{text}</p>
      </div>
      <a href={link} className="app__singleProject-right">
        <div className="app__singleProject-right_container">
          <div className="app__singleProject-right-box">
            <img src={img} alt="photo of project" />
          </div>
          <div className="app__singleProject-right-box">
            <img src={img2} alt="photo of project" />
          </div>
          <div className="app__singleProject-right-box">
            <img src={img3} alt="photo of project" />
          </div>
          <div className="app__singleProject-right-box">
            <img src={img4} alt="photo of project" />
          </div>
          <div className="app__singleProject-right-box">
            <img src={img5} alt="photo of project" />
          </div>
        </div>
      </a>
    </div>
  );
};

export default SingleProject;
