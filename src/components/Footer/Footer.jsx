import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./footer.css";
import { motion } from "motion/react";
import { LampContainer } from "../../components/ui/lamp";

const Footer = ({ colorr }) => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer
      className={`app__footer  section__padding text-white bg-slate-950 ${colorr}`}
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

      <section className="flex flex-col justify-between min-h-[70vh] w-full">
        <div className="pb-16 app__footer-box_titles">
          <h3>ARE YOU HIRING?</h3>
          <h3>WANT A COLLABORATION ?</h3>
          <h3>DO YOU HAVE A PROJECT?</h3>
        </div>
        <div className="app__footer-box-email">
          <span className="footer-arrow">
            <FaArrowRight />
          </span>
          <a href="mailto:willhortone@gmail.com" className="footer-email">
            WILLHORTONE@ <br /> GMAIL.COM
          </a>
        </div>
        <div className="app__footer-box-copyright">
          <p>William Hortone @{year}</p>
          <p>Designed & Developed By William Hortone</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

