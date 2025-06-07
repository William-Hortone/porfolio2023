import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
// import './styles.css';

// Register CustomEase if it's NOT already registered (checking the plugins array)
gsap.registerPlugin(CustomEase);

// Define the custom ease
CustomEase.create("main", "0.65, 0.01, 0.05, 0.99");

const NavbarOriginal = () => {
  const navRef = useRef(null);
  const overlayRef = useRef(null);
  const menuRef = useRef(null);
  const bgPanelRefs = useRef([]);
  const menuLinkRefs = useRef([]);
  const fadeTargetRefs = useRef([]);
  const menuButtonRef = useRef(null);
  const menuButtonTextRefs = useRef([]);
  const menuButtonIconRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const tl = useRef(
    gsap.timeline({ defaults: { ease: "main", duration: 0.7 } })
  );

  const openNav = () => {
    setIsOpen(true);
    const navWrap = navRef.current;
    const overlay = overlayRef.current;
    const menu = menuRef.current;
    const bgPanels = bgPanelRefs.current;
    const menuLinks = menuLinkRefs.current;
    const fadeTargets = fadeTargetRefs.current;
    const menuButtonTexts = menuButtonTextRefs.current;
    const menuButtonIcon = menuButtonIconRef.current;

    tl.current
      .clear()
      .set(navWrap, { display: "block" })
      .set(menu, { xPercent: 0 }, "<")
      .fromTo(
        menuButtonTexts,
        { yPercent: 0 },
        { yPercent: -100, stagger: 0.2 }
      )
      .fromTo(menuButtonIcon, { rotate: 0 }, { rotate: 315 }, "<")
      .fromTo(overlay, { autoAlpha: 0 }, { autoAlpha: 1 }, "<")
      .fromTo(
        bgPanels,
        { xPercent: 101 },
        { xPercent: 0, stagger: 0.12, duration: 0.575 },
        "<"
      )
      .fromTo(
        menuLinks,
        { yPercent: 140, rotate: 10 },
        { yPercent: 0, rotate: 0, stagger: 0.05 },
        "<+=0.35"
      )
      .fromTo(
        fadeTargets,
        { autoAlpha: 0, yPercent: 50 },
        { autoAlpha: 1, yPercent: 0, stagger: 0.04 },
        "<+=0.2"
      );
  };

  const closeNav = () => {
    setIsOpen(false);
    const navWrap = navRef.current;
    const overlay = overlayRef.current;
    const menu = menuRef.current;
    const menuButtonTexts = menuButtonTextRefs.current;
    const menuButtonIcon = menuButtonIconRef.current;

    tl.current
      .clear()
      .to(overlay, { autoAlpha: 0 })
      .to(menu, { xPercent: 120 }, "<")
      .to(menuButtonTexts, { yPercent: 0 }, "<")
      .to(menuButtonIcon, { rotate: 0 }, "<")
      .set(navWrap, { display: "none" });
  };

  const toggleNav = () => {
    if (isOpen) {
      closeNav();
    } else {
      openNav();
    }
  };

  useEffect(() => {
    gsap.set(navRef.current, { display: "none" });

    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        closeNav();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const menuItems = [
    {
      id: 1,
      eyebrow: "Studio",
      heading: "About",
      details: ["Our Story", "Our Team"],
    },
    {
      id: 2,
      eyebrow: "Work",
      heading: "Projects",
      details: ["Featured", "All Projects"],
    },
    {
      id: 3,
      eyebrow: "Info",
      heading: "Contact",
      details: ["Get in Touch", "Visit Us"],
    },
  ];

  const socials = [
    { id: "twitter", label: "Twitter", href: "#" },
    { id: "instagram", label: "Instagram", href: "#" },
    { id: "linkedin", label: "LinkedIn", href: "#" },
  ];

  return (
    <div
      className="bg-orange-500 nav osmo-ui"
      ref={navRef}
      data-nav={isOpen ? "open" : "closed"}
    >
      <div className="overlay" ref={overlayRef} onClick={closeNav} />
      <div className="menu" ref={menuRef}>
        <div className="menu-bg">
          <div
            className="bg-panel first"
            ref={(el) => (bgPanelRefs.current[0] = el)}
          />
          <div
            className="bg-panel second"
            ref={(el) => (bgPanelRefs.current[1] = el)}
          />
        </div>
        <div className="menu-inner">
          <ul className="menu-list">
            {menuItems.map((item, index) => (
              <li
                key={item.id}
                className="menu-list-item"
                ref={(el) => (menuLinkRefs.current[index] = el)}
              >
                <a href="#" className="menu-link">
                  <p
                    className="eyebrow"
                    data-menu-fade=""
                    ref={(el) => (fadeTargetRefs.current[index * 2] = el)}
                  >
                    {item.eyebrow}
                  </p>
                  <h2
                    className="menu-link-heading"
                    data-menu-fade=""
                    ref={(el) => (fadeTargetRefs.current[index * 2 + 1] = el)}
                  >
                    {item.heading}
                  </h2>
                  <div className="menu-link-bg" />
                </a>
                <div className="menu-details">
                  {item.details.map((detail, detailIndex) => (
                    <p
                      key={detailIndex}
                      className="p-small"
                      data-menu-fade=""
                      ref={(el) =>
                        (fadeTargetRefs.current[
                          menuItems.length * 2 +
                            index * item.details.length +
                            detailIndex
                        ] = el)
                      }
                    >
                      <a href="#" className="text-link">
                        {detail}
                      </a>
                    </p>
                  ))}
                </div>
              </li>
            ))}
          </ul>
          <div className="socials-row">
            {socials.map((social) => (
              <p
                key={social.id}
                className="p-large"
                data-menu-fade=""
                ref={(el) =>
                  (fadeTargetRefs.current[
                    menuItems.length * 2 +
                      menuItems.reduce(
                        (acc, item) => acc + item.details.length,
                        0
                      ) +
                      socials.indexOf(social)
                  ] = el)
                }
              >
                <a href={social.href} className="text-link">
                  {social.label}
                </a>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// const CloneableSection = () => (
//   <div className="cloneable">
//     <div className="container">
//       <h1>Your Content Here</h1>
//       <p>This is where your main website content will go.</p>
//     </div>
//   </div>
// );

// export default App;

export default NavbarOriginal;
