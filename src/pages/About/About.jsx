import { motion } from 'framer-motion';
import {
  Footer,
  HeaderNav,
  PageTitle,
  Title
} from "../../components";
import SideStaggerNav from "../../components/Navbar/SideStaggerNav";
import TextPressure from "../../components/animations/TextPressure";
import images from "../../constants/images";
import { Skills } from "../../containers";
import "./about.css";

const About = () => {
  return (
    <div className="overflow-x-hidden app__about bdg-slate-950 ">
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
          <PageTitle textContent="About-Me" />
          <span className="line" />
        </div>
      </div>
      {/* <AboutMe /> */}
      <Skills />

      <span className="line" />
      <div className="app__about-experience section__padding bg-slate-950">
        <div className="experience-title">
          <Title title="Experience" />
        </div>
        <div className="experience-description">
          <div className="flex flex-col items-center justify-center h-auto py-16 text-white bg-slate-950">
            <TextPressure
              animationDuration={1}
              ease="back.inOut(2)"
              // scrollStart="center bottom+=50%"
              // scrollEnd="bottom bottom-=40%"
              stagger={0.03}
              size="2rem"
            >
              Internship at Datategy: Frontend Developer
            </TextPressure>
          </div>
          {/* <h2>Internship at Datategy: Frontend Developer</h2> */}
          <p>
            During my six-month remote internship at Datategy, I served as a
            Frontend Developer, collaborating with advanced professionals. This
            experience was a dynamic learning journey, exposing me to advanced
            coding, teamwork, and code best practices. <br />
            <br />
            The remote setting added an extra layer of complexity, requiring
            adaptability and mastery of virtual collaboration tools. This
            experience not only marked a professional milestone but also
            significantly shaped my approach to frontend development.
          </p>

          <div className="flex flex-col items-center justify-center h-auto pt-16 text-white bg-slate-950">
            <TextPressure
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
              size="2rem"
            >
              Freelance Software Engineer
            </TextPressure>
          </div>

          <div className="flex flex-col items-center justify-center h-auto gap-24 py-8 text-white bg-slate-950">
            <TextPressure
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
              size='1.3rem'
            >
              Since 2023, I have been working as a freelance software engineer, successfully delivering 50+ real-world projects across web development, mobile applications, and creative digital solutions.
              Currently, I am working as a freelancer at WanTech, where I focus on designing, developing, and deploying high-quality products tailored to clients’ needs.
            </TextPressure>
          </div>
        </div>
      </div>

      {/* <Certificate /> */}
      <Footer color={"color-white"} />
      {/* <a href="#home" className="app__goToTop">
        <div className="app__goToHome">
          <FaArrowUp />
        </div>
      </a> */}
    </div>
  );
};

export default About;
