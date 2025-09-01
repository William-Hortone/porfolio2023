import { motion } from "motion/react";
import { FaArrowRight, FaGithub, FaTiktok, FaYoutube } from "react-icons/fa";
import { LampContainer } from "../../components/ui/lamp";
import SlidingText from "../SlidingText/SlidingText";
import "./footer.css";


const Footer = ({ colorr }) => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer
      className={`app__footer overflow-x-hidden  py-8  text-white bg-slate-950 ${colorr}`}
      id="contact"
    >
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="py-4 mt-8 text-lg font-medium tracking-tight text-center text-transparent bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text md:text-7xl"
        >
          LET'S BUILD SOMETHING
          <br /> GREAT TOGETHER
        </motion.h1>
      </LampContainer>

      <section className="flex flex-col justify-between min-h-[90vh] w-full">
        <div className="px-16 pb-16 app__footer-box_titles">
          <h3>ARE YOU HIRING?</h3>
          <h3>WANT A COLLABORATION ?</h3>
          <h3>DO YOU HAVE A PROJECT?</h3>
        </div>

        <div className="flex flex-col items-start justify-between w-full gap-4 lg:flex-row ">

          <div className="px-16 app__footer-box-email">
            <span className="footer-arrow">
              <FaArrowRight />
              {/* <MagnetButton /> */}
            </span>
            <a href="mailto:willhortone@gmail.com" className="footer-email">
              WILLHORTONE@ <br /> GMAIL.COM
            </a>
          </div>

          <div className=" min-w-[50%] flex pl-16 lg:pl-0 flex-col items-center">
            <p className="px-16 text-center font-fontAlt text-neutral-400">Connect with me</p>

            <div className="flex flex-row gap-4 px-16 py-4 text-center app__footer-box-social">
              <a href="https://www.tiktok.com/@williamhortone?_t=ZS-8wxKoI4Yleq&_r=1" target="blank">
                <FaTiktok style={{ color: "#ffffff", fontSize: "22px" }} />  {/* White for visibility */}
              </a>
              <a href="https://github.com/William-Hortone" target="blank">
                <FaGithub style={{ color: "#f5f5f5", fontSize: "22px" }} /> {/* Light gray (GitHub style) */}
              </a>
              <a href="https://www.youtube.com/watch?v=D1A3qUkPmGI" target="blank">
                <FaYoutube style={{ color: "#FF0000", fontSize: "22px" }} /> {/* YouTube red */}
              </a>
            </div>
          </div>

        </div>
        <SlidingText />
        <div className="px-16 pb-8 app__footer-box-copyright">
          <p>William Hortone @{year}</p>
          <p>Designed & Developed By William Hortone</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

