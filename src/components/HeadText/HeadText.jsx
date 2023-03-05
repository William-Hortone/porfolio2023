import React, { useEffect, useState } from "react";
import "./headText.css";
import { Letter } from "../../components";

const HeadText = ({ textContent }) => {
  // const text = { textContent };
  const letters = textContent.split("");
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + 1);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app__headText">
      <div className="app__headText-container">
        {/* <Image /> */}
        {letters.map((letter, index) => (
          <Letter key={index} letter={letter} delay={index * 0.1} />
        ))}
      </div>
    </div>
  );
};

export default HeadText;
