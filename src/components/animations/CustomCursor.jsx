import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function CustomCursor({ isActive, hovered }) {
  const cursorRef = useRef(null);

  useEffect(() => {
    if (!cursorRef.current) return;
    gsap.to(cursorRef.current, {
      scale: hovered ? 3 : 1,
      backgroundColor: hovered ? "#ff4d4d" : "#ffffff",
      duration: 0.3,
      ease: "power2.out",
    });
  }, [hovered]);
  
  useEffect(() => {
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });
    };

    if (isActive) {
      window.addEventListener("mousemove", moveCursor);
    } else {
      gsap.set(cursorRef.current, { x: -100, y: -100 }); // Hide offscreen
      window.removeEventListener("mousemove", moveCursor);
    }

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [isActive]);

  return (
    <div
      ref={cursorRef}
      className={`
        pointer-events-none 
        fixed 
        top-0 
        left-0 
        z-[9999] 
        rounded-full 
        mix-blend-difference 
        transition-all 
        duration-300 
        ease-out
        ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"}
      `}
      style={{
        width: "40px",
        height: "40px",
        backgroundColor: hovered ? "#ff4d4d" : "#ffffff",
      }}
    ></div>
  );
}
