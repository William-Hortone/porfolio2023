import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cards } from "../constants/data";

const Portfolio = () => {
  return (
    <div className="bg-slate-950">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex items-center h-screen overflow-hidden">
        <motion.div style={{ x }} className="flex gap-6 px-6">
          {cards.map((card) => (
            <ProjectCard key={card.id} card={card} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ card }) => {
  const cardRef = useRef(null);

  // Track mouse for tilt + shine
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const bounds = cardRef.current?.getBoundingClientRect();
    if (!bounds) return;
    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;
    mouseX.set(x);
    mouseY.set(y);
  };

  const rotateX = useTransform(mouseY, (v) => {
    const h = cardRef.current?.offsetHeight || 1;
    return ((v - h / 2) / h) * -8; // tilt up/down
  });
  const rotateY = useTransform(mouseX, (v) => {
    const w = cardRef.current?.offsetWidth || 1;
    return ((v - w / 2) / w) * 8; // tilt left/right
  });

  // CSS vars for the shine gradient (MotionValues are supported on custom props)
  const shineX = useTransform(mouseX, () => {
    const w = cardRef.current?.offsetWidth || 1;
    const v = mouseX.get();
    return `${Math.min(100, Math.max(0, (v / w) * 100))}%`;
  });
  const shineY = useTransform(mouseY, () => {
    const h = cardRef.current?.offsetHeight || 1;
    const v = mouseY.get();
    return `${Math.min(100, Math.max(0, (v / h) * 100))}%`;
  });

  return (
    <motion.a
      href={card.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${card.title}`}
      className="relative block group will-change-transform"
      onMouseMove={handleMouseMove}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") e.currentTarget.click();
      }}
    >
      <motion.div
        ref={cardRef}
        style={{ rotateX, rotateY }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.99 }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
        className="relative h-[450px] w-[450px] rounded-2xl overflow-hidden bg-neutral-900 ring-1 ring-white/10 shadow-2xl shadow-black/30"
      >
        {/* Image layer */}
        <motion.div
          className="absolute inset-0 transition-all duration-300 will-change-transform group-hover:scale-105 group-hover:blur-sm"
          style={{
            backgroundImage: `url(${card.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Soft dark gradient to help text pop */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Frosted GLASS caption panel */}
        <div className="absolute inset-x-4 bottom-4">
          <div
            className="px-5 py-4 transition-all duration-300 border shadow-lg rounded-xl bg-white/10 backdrop-blur-xl border-white/20 ring-1 ring-white/10 shadow-black/20 group-hover:bg-white/15 group-hover:border-white/30"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex w-2 h-2 transition-all duration-300 translate-y-1 rounded-full opacity-0 bg-emerald-400 group-hover:opacity-100 group-hover:translate-y-0" />
              <h3 className="text-2xl font-semibold tracking-tight text-white">
                {card.title}
              </h3>
            </div>
            {/* <p className="mt-1 text-sm text-white/80">
              {card.subtitle ?? "View live project"}
            </p> */}
          </div>
        </div>

        {/* Shine sweep following cursor */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            "--x": shineX,
            "--y": shineY,
            background:
              "radial-gradient(600px circle at var(--x) var(--y), rgba(255,255,255,0.22), transparent 40%)",
          }}
        />

        {/* Border glow on hover */}
        <div className="absolute inset-0 transition duration-300 pointer-events-none rounded-2xl ring-1 ring-white/10 group-hover:ring-emerald-400/40" />

        {/* Subtle inner highlight following cursor */}
        <CursorLight mouseX={mouseX} mouseY={mouseY} />
      </motion.div>

      {/* Focus outline for a11y */}
      <span className="absolute inset-0 rounded-2xl ring-2 ring-transparent group-focus-visible:ring-emerald-400" />
    </motion.a>
  );
};

// Small helper that renders a moving light based on mouse position
const CursorLight = ({ mouseX, mouseY }) => {
  const x = useTransform(mouseX, (v) => `${v}px`);
  const y = useTransform(mouseY, (v) => `${v}px`);
  return (
    <motion.div
      aria-hidden
      style={{ left: x, top: y }}
      className="absolute w-40 h-40 transition-opacity duration-300 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 pointer-events-none bg-white/8 blur-2xl group-hover:opacity-100"
    />
  );
};

export default Portfolio;
