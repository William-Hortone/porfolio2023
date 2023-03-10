import React, { useEffect, useRef } from "react";
import images from "../../constants/images";
import "./cardImage.css";

const CardImage = () => {
  const cardImageRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const cardImage = cardImageRef.current;
      const img = imageRef.current;
      const distanceFromTop = cardImage.getBoundingClientRect().top;
      const imDistanceFromTop = img.getBoundingClientRect().top;

      if (distanceFromTop <= window.innerHeight) {
        cardImage.classList.add("animate");
      }
      if (distanceFromTop <= window.innerHeight) {
        img.classList.add("animate");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="app__cardImage">
      <div className="app__cardImage-container">
        <span
          className="span-element span-element-anim"
          ref={cardImageRef}
        ></span>
        <img src={images.photo} alt="" ref={imageRef} className="img-anim" />
      </div>
    </div>
  );
};

export default CardImage;
