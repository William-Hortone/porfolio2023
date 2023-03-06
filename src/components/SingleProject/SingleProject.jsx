import React, { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import images from "../../constants/images";

import "./singleProject.css";

const SingleProject = ({ title, text }) => {
  // const vidRef = useRef();
  // const [playVideo, setPlayVideo] = useState(false);

  // const handleVideo = () => {
  //   if (!playVideo) {
  //     vidRef.current.play();
  //     setPlayVideo(true);
  //   } else {
  //     vidRef.current.pause();
  //     setPlayVideo(false);
  //   }
  // };

  return (
    <div className="app__singleProject">
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
