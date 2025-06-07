import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import CustomCursor from "../animations/CustomCursor";
import images from "../../constants/images";
// import CustomCursor from "./CustomCursor"; // 👈

export default function HeaderOriginal() {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const menuRef = useRef(null);
  const itemsRef = useRef([]);

  itemsRef.current = [];

  const addToRefs = (el) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  useEffect(() => {
    const openTl = gsap.timeline({ paused: true });
    const closeTl = gsap.timeline({ paused: true });

    openTl
      .set(menuRef.current, { display: "block" })
      .to(menuRef.current, {
        scaleY: 1,
        duration: 0.5,
        ease: "power2.out",
        transformOrigin: "top center",
      })
      .fromTo(
        itemsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.3"
      );

    closeTl
      .to(itemsRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.3,
        stagger: { each: 0.05, from: "end" },
        ease: "power2.in",
      })
      .to(
        menuRef.current,
        {
          scaleY: 0,
          duration: 0.4,
          ease: "power2.inOut",
          transformOrigin: "top center",
        },
        "-=0.1"
      )
      .set(menuRef.current, { display: "none" });

    if (isOpen) {
      openTl.play();
    } else {
      closeTl.play();
    }
  }, [isOpen]);

  return (
    <div className="relative z-50">
      {/* Custom Cursor */}
      <CustomCursor isActive={isOpen} hovered={hovered} />

      {/* Header */}
      <div className="fixed left-0 z-50 flex items-center justify-between w-full px-4 pl-2 top-6">
        <div className="     flex justify-start w-auto max-w-[20vw] sm:max-w-[12vw] md:max-w-[100px]">
          <img
            src={images.logo}
            alt="logo img"
            className="object-contain w-full h-auto"
          />
        </div>
        {/* Burger button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="z-50 flex flex-col gap-1 pr-4"
        >
          <span
            className={`w-6 h-0.5 bg-white transition-transform ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-opacity ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-transform ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </div>
      {/* Menu overlay */}
      <div
        ref={menuRef}
        className="fixed top-0 left-0 z-40 hidden w-full h-full origin-top scale-y-0 bg-black"
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6 text-4xl font-bold text-white">
          {["Home", "About", "Services", "Contact"].map((item, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="transition-transform opacity-0 "
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


