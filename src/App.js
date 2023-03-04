import React, { useState, useEffect } from "react";
import Effect from "./Letter";
import "./App.css";
import Letter from "./Letter";
import Image from "./Image";

const App = () => {
  const text = "William Hortone";
  const letters = text.split("");
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + 1);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    // <div className="container">
    //   {letters.map((letter, index) => (
    //     <Letter key={index} letter={letter} />
    //   ))}
    // </div>

    <div className="container">
      <Image />
      {letters.map((letter, index) => (
        <Letter key={index} letter={letter} delay={index * 0.1} />
      ))}
    </div>
  );
};

export default App;
