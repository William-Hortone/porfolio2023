// import React from "react";
// import React, { useEffect, useState } from "react";
import React, { useEffect, useRef } from "react";
import images from "../../constants/images";
import "./webInt.css";

const WebInt = () => {
  const elementRef = useRef(null);
  const rightElementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    const rightElement = rightElementRef.current;

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const elementOffsetTop = element.offsetTop;
      const elementHeight = element.offsetHeight;

      const rightElementOffsetTop = rightElement.offsetTop;
      const rightElementHeight = rightElement.offsetHeight;

      if (
        scrollTop >
        elementOffsetTop - window.innerHeight + elementHeight / 2
      ) {
        element.classList.add("animated");
      } else {
        element.classList.remove("animated");
      }
      if (
        scrollTop >
        rightElementOffsetTop - window.innerHeight + rightElementHeight / 2
      ) {
        rightElement.classList.add("animated");
      } else {
        rightElement.classList.remove("animated");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="app__webInt section__paddingd">
      <div className="app__webInt-container">
        <div
          className="webInt-container-left scroll-animation"
          ref={elementRef}
        >
          <h2>Intégrateur web</h2>
          <div className="webInt-container-left-img">
            <img src={images.wh2} alt="" />
          </div>
        </div>
        <div
          className="webInt-container-right scroll-animation-right"
          ref={rightElementRef}
        >
          <p>
            Avec un sens d’observation assez développé, je réalise des sites et
            applications web identiques aux maquettes en travaillant en étroite
            collaboration avec un designer ou en m’inspirant d'autres sites.
          </p>
          <div className="webInt-container-right-img">
            <img src={images.wh2} alt="" />
          </div>
          {/* <img src={images.wh_right} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default WebInt;
