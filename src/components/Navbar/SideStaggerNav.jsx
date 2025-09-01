import {
    AnimatePresence,
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";


let NavLink;
try {
 
    NavLink = require("react-router-dom").NavLink;
} catch 


// Total number of lines on the side of the page
const NUM_LINES = 30;

// Position key will place the title on the Nth line of the sidebar
const navItems = [
    { position: 1, title: "Home", link: "/" },
    { position: 8, title: "About", link: "/about" },
    { position: 15, title: "Projects", link: "/projects" },
    { position: 25, title: "Contact", link: "#contact" },
];

const SPRING_OPTIONS = { mass: 1, stiffness: 200, damping: 15 };

const SideStaggerNav = () => {
    const [isHovered, setIsHovered] = useState(false);
    const mouseY = useMotionValue(Infinity);

    // map line index -> item (if any)
    const byPosition = useMemo(() => {
        const map = new Map();
        navItems.forEach((it) => map.set(it.position, it));
        return map;
    }, []);

    // optional: smooth scroll for hash links on same page
    const onHashNavigate = useCallback((e, hash) => {
        if (!hash?.startsWith("#")) return;
        const el = document.querySelector(hash);
        if (el) {
            e.preventDefault();
            el.scrollIntoView({ behavior: "smooth", block: "start" });
            // Optionally update location hash:
            // history.replaceState(null, "", hash);
            window.history.replaceState(null, "", hash);

        }
    }, []);

    return (
        <motion.nav
            onMouseMove={(e) => {
                mouseY.set(e.clientY);
                setIsHovered(true);
            }}
            onMouseLeave={() => {
                mouseY.set(Infinity);
                setIsHovered(false);
            }}
            className="fixed top-0 right-0 z-40 flex-col items-end justify-between hidden h-screen py-4 pl-8 pr-2 lg:flex"
            aria-label="Side navigation"
        >
            {Array.from({ length: NUM_LINES }, (_, i) => {
                const lineIndex = i + 1;
                const linkContent = byPosition.get(lineIndex); 
                return (
                    <LinkLine
                        key={lineIndex}
                        title={linkContent?.title}
                        href={linkContent?.link}
                        isHovered={isHovered}
                        mouseY={mouseY}
                        onHashNavigate={onHashNavigate}
                    />
                );
            })}
        </motion.nav>
    );
};

function LinkLine({ mouseY, isHovered, title, href, onHashNavigate }) {
    const ref = useRef(null);

    // Distance from pointer to the center of this line
    const distance = useTransform(mouseY, (val) => {
        const bounds = ref.current?.getBoundingClientRect();
        return val - (bounds?.y || 0) - (bounds?.height || 0) / 2;
    });

    // Non-link lines animate width based on proximity to cursor
    const lineWidthRaw = useTransform(distance, [-80, 0, 80], [15, 100, 15]);
    const lineWidth = useSpring(lineWidthRaw, SPRING_OPTIONS);

    // Link lines expand on hover of the whole rail
    const linkWidth = useSpring(25, SPRING_OPTIONS);
    useEffect(() => {
        linkWidth.set(isHovered ? 150 : 25);
    }, [isHovered, linkWidth]);

    // Shared classes
    const baseLineCls = "relative h-[2px] bg-neutral-500";
    const linkLineCls =
        "relative h-[2px] transition-colors group bg-neutral-500 hover:bg-indigo-300 focus-visible:bg-indigo-300 outline-none";

    if (title && href) {
        const isHash = href.startsWith("#");
        const label = `${title} link`;

        // If React Router is present and this is NOT a hash link, use NavLink
        if (NavLink && !isHash) {
            return (
                <NavLink
                    to={href}
                    className="rounded-sm focus-visible:ring-2 focus-visible:ring-indigo-300"
                    aria-label={label}
                >
                    {({ isActive }) => (
                        <motion.div
                            ref={ref}
                            className={`${linkLineCls} ${isActive ? "bg-indigo-300" : ""}`}
                            style={{ width: linkWidth }}
                            role="presentation"
                        >
                            <AnimatePresence>
                                {isHovered && (
                                    <motion.span
                                        initial={{ opacity: 0, y: -6 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -6 }}
                                        className="absolute top-0 left-0 z-10 w-full pt-2 font-bold tracking-widest uppercase text-neutral-500 group-hover:text-indigo-300"
                                    >
                                        {title}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    )}
                </NavLink>
            );
        }

        // Else: standard <a> (supports #contact smooth scroll)
        return (
            <a
                href={href}
                onClick={(e) => onHashNavigate?.(e, href)}
                className="rounded-sm focus-visible:ring-2 focus-visible:ring-indigo-300"
                aria-label={label}
            >
                <motion.div
                    ref={ref}
                    className={linkLineCls}
                    style={{ width: linkWidth }}
                    role="presentation"
                >
                    <AnimatePresence>
                        {isHovered && (
                            <motion.span
                                initial={{ opacity: 0, y: -6 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -6 }}
                                className="absolute top-0 left-0 z-10 w-full pt-2 font-bold tracking-widest uppercase text-neutral-500 group-hover:text-indigo-300"
                            >
                                {title}
                            </motion.span>
                        )}
                    </AnimatePresence>
                </motion.div>
            </a>
        );
    }

    // Non-link “filler” line
    return (
        <motion.div
            ref={ref}
            className={baseLineCls}
            style={{ width: lineWidth }}
            aria-hidden="true"
        />
    );
}

export default SideStaggerNav;
