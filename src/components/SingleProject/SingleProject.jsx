import React from "react";
import "./singleProject.css";

const SingleProject = ({ title, text }) => {
  return (
    <div className="app__singleProject">
      <div className="app__singleProject-left">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="app__singleProject-right"></div>
    </div>
  );
};

export default SingleProject;
