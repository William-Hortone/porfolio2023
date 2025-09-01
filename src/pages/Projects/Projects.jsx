import { motion } from 'framer-motion';
import {
  Footer,
  HeaderNav,
  PageTitle
} from "../../components";
import images from "../../constants/images";
import "./projects.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SideStaggerNav from "../../components/Navbar/SideStaggerNav";
import Portfolio from "../../containers/Portfolio";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  // const [scroll, setScroll] = useState(false);

  // const handleChangeBg = () => {
  //   if (window.scrollY >= 900) {
  //     setScroll(true);
  //   } else setScroll(false);
  // };
  // window.addEventListener("scroll", handleChangeBg);

  return (
    <div
      className="relative w-[100vw] ovesrflow-x-hidden bsg-slate-950 "
    >
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-violet-700 via-purple-700 to-fuchsia-700" />

      {/* --- Mobile nav--*/}
      <HeaderNav />

      {/* Side nav */}
      <SideStaggerNav />
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(60% 120% at 20% 20%, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 60%)",
        }}
      />

      <div className='bsg-[#14032F] relative w-full'>

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

        <div className="app__about-title ">
          <PageTitle textContent="Projects" />
          <span className="line" />
        </div>
      </div>

      <Portfolio />
      <Footer />
    </div>
  );
};

export default Projects;


