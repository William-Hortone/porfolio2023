import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TextPressure = ({
    children,
    scrollContainerRef,
    containerClassName = "",
    textClassName = "",
    animationDuration = 1,
    ease = "back.inOut(2)",
    scrollStart = "center bottom+=10%",
    scrollEnd = "bottom bottom-=10%",
    stagger = 0.03,
    size
}) => {
    const containerRef = useRef(null);

    const splitText = useMemo(() => {
        const text = typeof children === "string" ? children : "";
        return text.split("").map((char, index) => (
            <span className="inline-block word" key={index}>
                {char === " " ? "\u00A0" : char}
            </span>
        ));
    }, [children]);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const scroller =
            scrollContainerRef && scrollContainerRef.current
                ? scrollContainerRef.current
                : window;

        const charElements = el.querySelectorAll(".inline-block");

        gsap.fromTo(
            charElements,
            {
                willChange: "opacity, transform",
                opacity: 0,
                yPercent: 120,
                scaleY: 2.3,
                scaleX: 0.7,
                transformOrigin: "50% 0%"
            },
            {
                duration: animationDuration,
                ease: ease,
                opacity: 1,
                yPercent: 0,
                scaleY: 1,
                scaleX: 1,
                stagger: stagger,
                scrollTrigger: {
                    trigger: el,
                    scroller,
                    start: scrollStart,
                    end: scrollEnd,
                    scrub: true
                },
            }
        );
    }, [
        scrollContainerRef,
        animationDuration,
        ease,
        scrollStart,
        scrollEnd,
        stagger
    ]);

    return (
        <h2
            ref={containerRef}
            className={` overflow-hidden ${containerClassName}`}
        >
            <span
                className={`inline-block font-base leadijng-[1.5] ${textClassName}`}
                style={{ fontSize: size }}
            >
                {splitText}
            </span>
        </h2>
    );
};

export default TextPressure;
