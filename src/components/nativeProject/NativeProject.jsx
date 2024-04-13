import React, { useState } from "react";
import "./nativeProject.css";

const NativeProject = ({
  img1,
  img2,
  img3,
  img4,
  img5,
  title,
  text,
  link,
  initialColor,
  newColor,
  newBg,
  initialBg,
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
          ? `${newBg}  app__nativeProject scroll-animation-right-project`
          : `${initialBg} app__nativeProject scroll-animation-right-project`
      }
    >
      <div className="app__nativeProject-left">
        <h2 className={scroll ? `${newColor}` : `${initialColor}`}>{title}</h2>
        <p className={scroll ? `${newColor}` : `${initialColor}`}>{text}</p>
      </div>
      <a href={link} target="blank" className="app__nativeProject-right">
        <div className="app__nativeProject-right_container">
          <div className="wrapper-content">
            <div className="nativeProject-img native-image1">
              <img src={img1} alt="project" className="nativeP-img" />
            </div>
            <div className="nativeProject-img native-image2">
              <img src={img2} alt="project" className="nativeP-img" />
            </div>
          </div>
          <div className="wrapper-content">
            <div className="nativeProject-img native-image1">
              <img src={img3} alt="project" className="nativeP-img" />
            </div>
            <div className="nativeProject-img native-image2">
              <img src={img4} alt="project" className="nativeP-img" />
            </div>
          </div>

          {/* <div className="nativeProject-img native-image1">
            <img src={img3} alt="project" className="nativeP-img" />
          </div>
          <div className="nativeProject-img native-image2">
            <img src={img4} alt="project" className="nativeP-img" />
          </div> */}
        </div>
      </a>
    </div>
  );
};

export default NativeProject;
