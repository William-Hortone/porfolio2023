import { motion } from "framer-motion";
import { HeaderNav } from "../../components";
import DarkBg from "../../components/DarkBg";
import SideStaggerNav from "../../components/Navbar/SideStaggerNav";
import images from "../../constants/images";

const sentence = "Software Engineer";

const HomeSection = () => {

  const letterVariants = {
    hidden: { y: "100%", opacity: 0, skewY: 8 },
    visible: {
      y: 0,
      opacity: 1,
      skewY: 0,
      transition: { type: "spring", stiffness: 120, damping: 18 },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.05, delayChildren: 0.2 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.2, rotate: -4 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    hover: {
      scale: 1.05,
      rotate: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative flex flex-col items-center justify-between w-full h-screen px-4 pb-4 overflow-hidden">
      {/* bg gradient + soft */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-violet-700 via-purple-700 to-fuchsia-700" />

      {/* --- Mobile nav--*/}
      <HeaderNav />
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(60% 120% at 20% 20%, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 60%)",
        }}
      />

      {/*  DarkBg  */}
      <div className="absolute bottom-0 left-0 -z-10 w-full h-[100vh]">
        <DarkBg />
      </div>

      <div className="items-center justify-between hidden w-full lg:flex md:px-4">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-start w-auto max-w-[12vw] md:max-w-[100px]"
        >
          <img
            src={images.logo}
            alt="logo img"
            className="object-contain w-full h-auto"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg uppercase text-white/90"
        >
          The Futur
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg uppercase text-white/90"
        >
          Is Unlimited
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg text-transparent uppercase"
        >
          Is Unlimited
        </motion.p>
      </div>

      {/* hero text */}
      <motion.h2
        className="font-bold font-base uppercase flex flex-col items-center 
         text-[clamp(2rem,14vw,9rem)] md:text-[clamp(2rem,10vw,9rem)] leading-[0.9] 
         md:flex-row md:whitespace-nowrap md:justify-center text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {sentence.split(" ").map((word, wi) => (
          <div key={wi} className="flex">
            {word.split("").map((char, i) => (
              <motion.span
                key={wi + "-" + i}
                variants={letterVariants}
                className="inline-block will-change-transform"
              >
                {char}
              </motion.span>
            ))}
            <span className="inline-block w-[0.4em]" />
          </div>
        ))}
      </motion.h2>

      {/* center image + labels */}
      <div className="relative flex flex-col items-center justify-center w-full gap-2 lg:gap-8 lg:flex-row">
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-sm max-w-[55%] md:max-w-[60%] uppercase text-white/80"
        >
          Software Engineer <br /> FullStack Developer <br /> Web & Mobile <br />
          Innovating Through Code
        </motion.p>

        <motion.div
          className="relative flex flex-col lg:flex-row gap-2 justify-center w-[45vw] md:w-[35%]"
          initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={imageVariants}
        >
          <div className="flex-col justify-end hidden lg:flex">
            <p className="text-transparent"> Web & Mobile </p>
            <h4 className="text-2xl font-semibold text-transparent h-fit font-base">
              William Hortone
            </h4>
          </div>

          {/* Glassy image card (already had frosted effect) */}
          <div
            className="
              w-[45vw] max-w-[45vw] md:max-w-[35vw] lg:w-[30vw]
              rounded-2xl overflow-hidden
              bg-white/5 backdrop-blur-xl
              border border-white/15
              shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_10px_30px_rgba(0,0,0,0.25)]
            "
          >
            <motion.img
              src={images.wh2}
              alt="hortone"
              className="object-cover w-full h-full"
              variants={imageVariants}
            />
          </div>

          <div className="flex flex-row-reverse justify-between lg:justify-end lg:flex-col">
            <p className="text-sm text-white/70"> Web & Mobile </p>
            <h4 className="text-sm font-semibold text-white lg:text-2xl h-fit font-base">
              William Hortone
            </h4>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-sm max-w-[15%] uppercase lg:flex hidden text-transparent"
        >
          Software Engineer <br /> FullStack Developer <br /> Web & Mobile <br />
          Innovating Through Code
        </motion.p>
      </div>

      {/* bottom row */}
      <div className="flex flex-row items-end justify-between w-full mt-10 overflow-hidden text-white">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-sm max-w-[25%] uppercase text-white/90"
        >
          English, French, Chinese
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-sm max-w-[25%] uppercase lg:flex hidden text-white/80"
        >
          Software engineer building engaging digital products. I focus on clean
          code, smooth interactions, and authentic storytelling to turn ideas
          into experiences people remember.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-sm max-w-[25%] uppercase text-white/90"
        >
          Based in China
        </motion.p>
      </div>

      <SideStaggerNav />
    </section>
  );
};

export default HomeSection;
