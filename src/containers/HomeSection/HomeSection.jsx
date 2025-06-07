import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import "../../App.css";
import {
  HeaderNav
} from "../../components";
import images from "../../constants/images";
import "./homeSection.css";

const HomeSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const imageRef = useRef(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //
  const textRef = useRef(null);

  useEffect(() => {
    const chars = textRef.current.querySelectorAll(".char");
    const weightTarget = 400;
    const stretchTarget = 80;

    gsap.set(chars, {
      transformOrigin: "center bottom",
    });

    // Animate in
    gsap.fromTo(
      chars,
      {
        y: -500,
        fontWeight: 800,
        fontStretch: "150%",
        scaleY: 2,
      },
      {
        y: 0,
        fontWeight: weightTarget,
        fontStretch: `${stretchTarget}%`,
        scaleY: 1,
        ease: "elastic.out(0.2, 0.1)",
        duration: 1.5,
        stagger: {
          each: 0.05,
          from: "random",
        },
      }
    );
  }, []);

  const splitText = (text) =>
    text.split("").map((char, i) => (
      <span key={i} className="char inline-block pt-[1.08vw] select-none">
        {char}
      </span>
    ));


  useEffect(() => {
    // TEXT animation
    const chars = textRef.current.querySelectorAll(".char");
    const weightTarget = 400;
    const stretchTarget = 80;

    gsap.set(chars, { transformOrigin: "center bottom" });

    gsap.fromTo(
      chars,
      {
        y: -500,
        fontWeight: 800,
        fontStretch: "150%",
        scaleY: 2,
      },
      {
        y: 0,
        fontWeight: weightTarget,
        fontStretch: `${stretchTarget}%`,
        scaleY: 1,
        ease: "elastic.out(0.2, 0.1)",
        duration: 1.5,
        stagger: {
          each: 0.05,
          from: "random",
        },
      }
    );

    // IMAGE animation
    gsap.fromTo(
      imageRef.current,
      {
        y: 100,
        scale: 1.2,
        rotation: 5,
        filter: "blur(10px)",
        opacity: 0,
      },
      {
        y: 0,
        scale: 1,
        rotation: 0,
        filter: "blur(0px)",
        opacity: 1,
        duration: 2,
        ease: "power4.out",
        delay: 0.5,
      }
    );
  }, []);


  return (
    <div className="app__homeSection ">
      <div className="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden rounded-lg bgfred-400 bsg-slate-950">


        {/* <HeaderOriginal /> */}
        <HeaderNav />

        <section className="flex flex-col items-center justify-center w-full h-full ">

          <h2
            ref={textRef}
            className="text-[25vw] leading-[0.6] tracking-[-1vw]  font-base relative content-title  bf-green-400 font-bold text-white uppercase"
          >
            {splitText("Hortone")}
          </h2>


          <div className="absolute  w-[80%] md:w-auto bsg-red-500  md:h-[90%]  -translate-x-1/2  md:bottom-0 left-1/2">
            <img
              ref={imageRef}
              src={images.wh2}
              className="object-cover w-full h-full"
              alt="face"
            />

          </div>
        </section>

        <div className="relative w-full h-16 mb-16 overflow-y-hidden">
          <div className="absolute top-[100%] left-0 flex justify-between w-full h-auto px-8 bkg-slate-500 content-desc">
            <div className="flex flex-col justify-center">
              <h4 className="text-2xl font-semibold text-white h-fit font-title">
                Software Engineer
              </h4>
              <h4 className="text-white text-md font-title">
                FullStack Developer
              </h4>
            </div>
            <div className="flex flex-col justify-center">
              <h4 className="text-2xl font-semibold text-white font-title">
                The Futur
              </h4>
              <h4 className="text-white text-md">is Unlimited</h4>
            </div>
          </div>
        </div>

        {/* <Header /> */}
        {/* <NavbarOriginal isOpen={menuOpen} onClose={() => setMenuOpen(false)} /> */}

        {/* <button
          onClick={() => setMenuOpen(true)}
          className="p-3 m-10 text-white bg-black rounded"
        >
          Open Menu
        </button> */}

        {/* <div className="app__homeSection-container section__padding">
          <HeadText textContent="William" />
          <SlidingText />
          <HeadText textContent="Hortone" />
        </div> */}

        {/* <NavbarOriginal /> */}
      </div>
    </div>
  );
};

export default HomeSection;
