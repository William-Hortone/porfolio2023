import React, { useRef, useState, useEffect } from "react";

import images from "../../constants/images";

import "./singleProject.css";

const SingleProject = ({ title, text }) => {
  const elementRef = useRef(null);

  // useEffect(() => {
  //   const project = projectRef.current;

  //   const handleScroll = () => {
  //     const scrollTop =
  //       window.pageYOffset || document.documentElement.ScrollTop;
  //     const projectOffsetTop = project.offsetTop;
  //     const projectHeight = project.offsetHeight;

  //     if (
  //       scrollTop >
  //       projectOffsetTop - window.innerHeight + projectHeight / 2
  //     ) {
  //       project.classList.add("animated");
  //     } else {
  //       project.classList.remove("animated");
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  useEffect(() => {
    const element = elementRef.current;
    // const rightElement = rightElementRef.current;

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const elementOffsetTop = element.offsetTop;
      const elementHeight = element.offsetHeight;

      // const rightElementOffsetTop = rightElement.offsetTop;
      // const rightElementHeight = rightElement.offsetHeight;

      if (
        scrollTop >
        elementOffsetTop - window.innerHeight + elementHeight / 2
      ) {
        element.classList.add("animated");
      } else {
        element.classList.remove("animated");
      }
      // if (
      //   scrollTop >
      //   rightElementOffsetTop - window.innerHeight + rightElementHeight / 2
      // ) {
      //   rightElement.classList.add("animated");
      // } else {
      //   rightElement.classList.remove("animated");
      // }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="app__singleProject scroll-animation-right-project"
      ref={elementRef}
    >
      <div className="app__singleProject-left">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="app__singleProject-right">
        {/* <video
          ref={vidRef}
          type="video/pm4"
          loop
          controls={false}
          muted
          src={images.video}
        /> */}
        {/* <div className="video-container-btn">
          <div className="video-btn" onClick={handleVideo}>
            {playVideo ? (
              <BsPauseFill color="#fff" fontSize={30} />
            ) : (
              <BsFillPlayFill color="#fff" fontSize={30} />
            )}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SingleProject;
