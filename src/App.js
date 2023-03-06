import React, { useState, useEffect } from "react";
import { Preloader, Navbar } from "./components";
import { Home, About, Projects } from "./pages";
import { Routes, Route } from "react-router-dom";

import "./App.css";

const App = () => {
  // const text = "William Hortone";
  // const letters = text.split("");
  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCount((count) => count + 1);
  //   }, 100);
  //   return () => clearInterval(interval);
  // }, []);

  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowPreloader(false);
    }, 3000);
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      {showPreloader && <Preloader />}
      {!showPreloader && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      )}

      {/* <Preloader /> */}
      {/* {showPreloader && <Preloader />}
      {!showPreloader && <Home />} */}
    </>
    // <div className="container">
    //   {letters.map((letter, index) => (
    //     <Letter key={index} letter={letter} />
    //   ))}
    // </div>

    // <div className="container">
    //   <Image />
    //   {letters.map((letter, index) => (
    //     <Letter key={index} letter={letter} delay={index * 0.1} />
    //   ))}
    // </div>
  );
};

export default App;
