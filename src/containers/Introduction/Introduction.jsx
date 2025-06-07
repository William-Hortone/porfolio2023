import React from "react";
import { Title } from "../../components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

import "./introduction.css";
gsap.registerPlugin(ScrollTrigger);

const Introduction = () => {
  useEffect(() => {
    const textSpans = document.querySelectorAll(".content-text span");

    gsap.fromTo(
      textSpans,
      { y: "100%" },
      {
        y: "0%",
        duration: 2,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".app__desc-content",
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
  return (
    <div className="mt-[10rem] app__introduction section__padding">
      <Title title="About Me" />

      <section className="w-full h-screen flex  text-white flex-col justify-center items-center gap-32 md:px-[20%] bg-primary">
        <div className="app__desc-content">
          <h3 className="leading-10 text-center uppercase content-text font-fontAlt 2xl:text-3xl md:text-xl bg-primary">
            <span>Captivated by computer tools and emerging technologies,</span>
          </h3>
          <h3 className="leading-10 text-center uppercase content-text font-fontAlt 2xl:text-3xl md:text-xl bg-primary">
            <span> my focus lies in web & App development</span>
          </h3>
          <h3 className="leading-10 text-center uppercase content-text font-fontAlt 2xl:text-3xl md:text-xl bg-primary">
            <span>with a particular emphasis on front-end development. </span>
          </h3>
          <h3 className="leading-10 text-center uppercase content-text font-fontAlt 2xl:text-3xl md:text-xl bg-primary">
            <span>During my leisure time, when not engrossed in a project</span>
          </h3>
          <h3 className="leading-10 text-center uppercase content-text font-fontAlt 2xl:text-3xl md:text-xl bg-primary">
            <span>or studying, you'll likely find me participating in sports</span>
          </h3>
          <h3 className="leading-10 text-center uppercase content-text font-fontAlt 2xl:text-3xl md:text-xl bg-primary">
            <span>or engaging in video games</span>
          </h3>
        </div>


      </section>
    </div>
  );
};

export default Introduction;




