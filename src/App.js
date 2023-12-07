import React, { useState, useEffect } from "react";
import { Preloader } from "./components";
import { Home, About, Projects } from "./pages";
import { Routes, Route } from "react-router-dom";
import Lenis from "@studio-freight/lenis";

import "./App.css";

const App = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowPreloader(false);
    }, 3000);
  }, []);

  return (
    <>
      {showPreloader && <Preloader />}
      {!showPreloader && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      )}
    </>
  );
};

export default App;
