import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import { Link } from 'react-router-dom';
const MotionLink = motion(Link);

const Nav = ({ isOpen, setIsOpen }) => {
  return (
    <motion.nav
      className="fixed top-0 bottom-0 z-50 w-screen bg-white"
      animate={isOpen ? "open" : "closed"}
      variants={navVariants}
      initial="closed"
    >
      <motion.button
        className="text-3xl bg-white text-black hover:text-indigo-500 border-[1px] border-transparent hover:border-indigo-500 transition-colors p-4 rounded-full absolute top-8 right-8"
        whileHover={{ rotate: "180deg" }}
        onClick={() => setIsOpen(false)}
        whileTap={{ scale: 0.9 }}
      >
        <FiX />
      </motion.button>
      <motion.div
        variants={linkWrapperVariants}
        className="absolute flex flex-col gap-4 bottom-8 left-8"
      >
        <NavLink text="Home" link="/" />
        <NavLink text="About" link="/about" />
        <NavLink text="Projects" link="/projects" />
        <NavLink text="Contact" link="#contact" />
      </motion.div>
    </motion.nav>
  );
};

export default Nav;

const NavLink = ({ text, link }) => {
  return (
    <MotionLink
      className="z-10 inline-block font-black transition-colors text-slate-800 w-fit text-7xl hover:text-indigo-500"
      variants={navLinkVariants}
      transition={{
        type: "spring",
        damping: 3,
      }}
      whileHover={{
        y: -15,
        rotate: "-7.5deg",
      }}
      rel="nofollow"
      to={link}
    >
      {text}
    </MotionLink>
  );
};

// export default LiquidSideNav;

const navVariants = {
  open: {
    x: "0%",
    borderTopLeftRadius: "0vw",
    borderBottomLeftRadius: "0vw",
    opacity: 1,
  },
  closed: {
    x: "100%",
    borderTopLeftRadius: "50vw",
    borderBottomLeftRadius: "50vw",
    opacity: 0,
  },
};

const linkWrapperVariants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const navLinkVariants = {
  open: { x: 0 },
  closed: { x: 25 },
};