import React from "react";
import "./preloader.css";

const Preloader = () => {
  return (
    <div className="app__preloader stroke-text">
      <svg viewBox="0 0 1350 600">
        <text x="50%" y="50%" fill="transparent" textAnchor="middle">
          William Hortone
        </text>
      </svg>
    </div>
  );
};

export default Preloader;
