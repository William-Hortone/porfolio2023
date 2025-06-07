import React from "react";
import "./title.css";

const Title = ({ title }) => {
  return (
    <div className="app__title">
      <h2 className="text-white">{title}</h2>
    </div>
  );
};

export default Title;
