import React from "react";
import { PageTLetter } from "../../components";

import "./pageTLetter.css";

const PageTitle = ({ textContent }) => {
  const letters = textContent.split("");

  return (
    <div className="app__pageTLetter">
      <div className="app__headText-container">
        {letters.map((letter, index) => (
          <PageTLetter key={index} letter={letter} delay={index * 0.1} />
        ))}
      </div>
    </div>
  );
};

export default PageTitle;
