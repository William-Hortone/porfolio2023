import { motion, useTransform, useScroll, useMotionValue } from "framer-motion";
import { useRef } from "react";
import images from "../constants/images";

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
      className="group relative block will-change-transform"
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
          className="
            absolute inset-0
            transition-all duration-300
            will-change-transform
            group-hover:scale-105
            group-hover:blur-sm
          "
          style={{
            backgroundImage: `url(${card.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Soft dark gradient to help text pop */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Frosted GLASS caption panel */}
        <div className="absolute inset-x-4 bottom-4">
          <div
            className="
              rounded-xl px-5 py-4
              bg-white/10
              backdrop-blur-xl
              border border-white/20
              ring-1 ring-white/10
              shadow-lg shadow-black/20
              transition-all duration-300
              group-hover:bg-white/15 group-hover:border-white/30
            "
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0" />
              <h3 className="text-white text-2xl font-semibold tracking-tight">
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
          className="pointer-events-none absolute inset-0"
          style={{
            "--x": shineX,
            "--y": shineY,
            background:
              "radial-gradient(600px circle at var(--x) var(--y), rgba(255,255,255,0.22), transparent 40%)",
          }}
        />

        {/* Border glow on hover */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-emerald-400/40 transition duration-300" />

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
      className="pointer-events-none absolute h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/8 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    />
  );
};

export default Portfolio;

/* ---------- SAMPLE DATA ---------- */
// Add your real links in `href`. `images.*` come from your constants file.
const cards = [
  {
    image: images.project2,
    title: "Fournisseur de Proximité",
    // subtitle: "Next.js + Tailwind",
    href: "https://fdp-app-client.vercel.app/",
    id: 1,
  },
  {
    image: images.project3,
    title: "Giritch Resto",
    // subtitle: "3D Canvas Experiment",
    href: "https://gericht-a.netlify.app",
    id: 2,
  },
  {
    image: images.project4,
    title: "GTT Kouta",
    // subtitle: "UI Component Library",
    href: "https://curious-melba-81e493.netlify.app",
    id: 3,
  },
  {
    image: images.project1,
    title: "RapidPay",
    // subtitle: "Data Viz Dashboard",
    href: "",
    id: 4,
  },
  {
    image: images.project13,
    title: "WanTech",
    // subtitle: "E-commerce Concept",
    href: "https://wantechpro.com",
    id: 5,
  },
  {
    image: images.project12,
    title: "Youtube Clone",
    subtitle: "Animations Lab",
    href: "https://willtube.netlify.app/",
    id: 6,
  },
  {
    image: images.project16,
    title: "Ona Batiment",
    subtitle: "Mobile App",
    href: "https://onabatiment.com/",
    id: 7,
  },
];
