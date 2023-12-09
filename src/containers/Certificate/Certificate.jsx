import React, { useState } from "react";
import { CardImage, Title } from "../../components";
import images from "../../constants/images";
import "./certificate.css";

const Certificate = () => {
  // const [cursorX, setCursorX] = useState();
  // const [cursorY, setCursorY] = useState();

  // window.addEventListener("mousemove", (e) => {
  //   setCursorX(e.pageX);
  //   setCursorY(e.pageY);
  // });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCursorPosition({ x, y });
  };

  return (
    <>
      <div className="app__certificate section__padding">
        <Title title="Certificates" />

        <div className="app__certificate-container">
          <div className="app__certificate-left">
            <p>
              In January 2023, I was selected to participate in a hackathon
              organized by Neza Tech, a company based in China. The challenge
              was to develop a mobile or web application that teaches how to
              play a musical instrument. My team achieved the second position.
            </p>
          </div>
          <div className="app__certificate-right">
            <div className="app__certificate-right-img">
              <CardImage img={images.certificate} />
            </div>
          </div>
          <div className="app__certificate-images">
            <div className="wrapper_certificate-image">
              <div className="wrapper_certificate-image-right">
                <div className="certificate-image image1 "></div>
                <div className="certificate-image image2"></div>
                <div className="certificate-image image3"></div>
                <div className="certificate-image image4"></div>
              </div>

              <div
                className="wrapper_certificate-image-left"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {isHovered && (
                  <div
                    className="circle"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",

                      left: cursorPosition.x,
                      top: cursorPosition.y,
                    }}
                  >
                    <p>Maintient</p>
                    <p>moi</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="app__certificate-container">
          <div className="app__certificate-left">
            <p>
              In September 2023, I was selected to participate in another
              hackathon organized by JUNCTION, that is global community behind
              the world's best hackathons.
            </p>
          </div>
          <div className="app__certificate-right">
            <div className="app__certificate-right-img">
              <CardImage img={images.junctionCertificate} />
            </div>
          </div>
          <div className="app__certificate-images junction">
            <div className="wrapper_certificate-image">
              <div className="wrapper_certificate-image-right">
                <div className="certificate-image image5"></div>
                <div className="certificate-image image6"></div>
                <div className="certificate-image image7"></div>
                <div className="certificate-image image8"></div>
              </div>

              <div
                className="wrapper_certificate-image-left"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {isHovered && (
                  <div
                    className="circle"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",

                      left: cursorPosition.x,
                      top: cursorPosition.y,
                    }}
                  >
                    <p>Maintient</p>
                    <p>moi</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* <div className="app__certificate-container">
          <div className="app__certificate-left">
            <p>
              In January 2023, I was selected to participate in a hackathon
              organized by Neza Tech, a company based in China. The challenge
              was to develop a mobile or web application that teaches how to
              play a musical instrument. My team achieved the second position.
            </p>
          </div>
          <div className="app__certificate-right">
            <div className="app__certificate-right-img">
              <CardImage img={images.junctionCertificate} /> 
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Certificate;
