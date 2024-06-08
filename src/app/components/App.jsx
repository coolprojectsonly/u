// https://twitter.com/lusionltd/status/1701534187545636964
// https://lusion.co

import React, { useEffect, useState } from "react";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tilt from "react-parallax-tilt";

function App() {
  const navItems = ["Home", "About", "Skills", "Project", "Contact"];

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(width);

  return (
    <div className="container">
      <div className="nav">
        <div className="logo">
          <h5>Logo</h5>
        </div>

        <div className="navItem">
          {navItems.map((item) => (
            // <a href="#">{item}</a>

            <button class="custom-btn btn-9">{item}</button>
          ))}
        </div>

        <div className="btn">
          <button class="custom-btn btn-7">
            <span>Contact Me</span>
          </button>
        </div>
      </div>

      <div className="hero">
        <div className="info">
          <div className="infoContent">
            <Tilt
              tiltEnable={true}
              tiltReverse={false}
              tiltAngleXInitial={0}
              tiltAngleYInitial={0}
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              tiltAxis={undefined}
              tiltAngleXManual={null}
              tiltAngleYManual={null}
              glareEnable={false}
              glareMaxOpacity={0.7}
              glareColor="#ffffff"
              glareBorderRadius="0"
              glarePosition="bottom"
              glareReverse={false}
              scale={1}
              perspective={1000}
              flipVertically={false}
              flipHorizontally={false}
              reset={true}
              transitionEasing="cubic-bezier(.03,.98,.52,.99)"
              transitionSpeed={400}
              trackOnWindow={false}
              gyroscope={false}
            >
              <div className="tx">
                <motion.h1
                  className="set"
                  initial={{ x: -100, y: 0, rotate: 0 }}
                  whileInView={{ x: 20, rotate: -10 }}
                >
                  Check My
                </motion.h1>
                <motion.h1
                  initial={{ x: 100, y: 0, rotate: 0 }}
                  whileInView={{ x: 0, rotate: -15 }}
                  className="achieve"
                  style={{ color: "yellow" }}
                >
                  PORTFOLIO
                </motion.h1>
                <motion.h1
                  initial={{ x: 200, y: 0, rotate: 0 }}
                  whileInView={{ x: 0, rotate: -10 }}
                  className="your"
                >
                  website in NextJS
                </motion.h1>
              </div>
            </Tilt>

            <div className="animes">
              <div className="anime">
                <img autoPlay loop muted src="/bot.gif"></img>
              </div>
            </div>
          </div>

          <div className="display">
            <h1 style={{ fontFamily: "rastaglion", color: "AppWorkspace" }}>
              My Projects
            </h1>
          </div>

          <div className="content">
            <div
              className="infomation"
              style={{
                display: "grid",
                gridTemplateColumns:
                  width > 700
                    ? "1fr 1fr 1fr"
                    : window > 400 && window < 700
                    ? "1fr 1fr"
                    : "1fr",
              }}
            >
              <Tilt
                tiltEnable={true}
                tiltReverse={false}
                tiltAngleXInitial={0}
                tiltAngleYInitial={0}
                tiltMaxAngleX={20}
                tiltMaxAngleY={20}
                tiltAxis={undefined}
                tiltAngleXManual={null}
                tiltAngleYManual={null}
                glareEnable={false}
                glareMaxOpacity={0.7}
                glareColor="#03182a"
                glareBorderRadius="0"
                glarePosition="bottom"
                glareReverse={false}
                scale={1}
                perspective={1000}
                flipVertically={false}
                flipHorizontally={false}
                reset={true}
                transitionEasing="cubic-bezier(.03,.98,.52,.99)"
                transitionSpeed={400}
                trackOnWindow={false}
                gyroscope={false}
              >
                <motion.div
                  className="one"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ scale: 1.05, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  style={{ marginBottom: "20px" }}
                >
                  <div className="cover">
                    <img src="/three.jpg" alt="" />
                    <div
                      style={{
                        width: "400px",
                        height: "300px",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        zIndex: 2,
                      }}
                    >
                      <h1
                        style={{
                          textAlign: "center",
                          fontFamily: "kolak",
                          marginTop: 0,
                          color: "white",
                        }}
                      >
                        React
                      </h1>

                      <div
                        style={{
                          margin: "0 20px",
                          marginTop: "-20px",
                          marginBottom: "-20px",
                        }}
                      >
                        <p
                          style={{
                            fontFamily: "sans-serif",
                            // border: "1px solid blue",
                            boxShadow: "0 5px 10px 10px",
                            color: "wheat",
                            background: "#333",
                            padding: "10px",
                            borderRadius: "5px",
                          }}
                        >
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </div>
                      <div style={{ display: "flex" }}>
                        <button
                          style={{
                            margin: "0 auto",
                            padding: "7px 30px",
                            cursor: "pointer",
                            background: "pink",
                            border: "none",
                            marginTop: "7px",
                          }}
                        >
                          Learn More
                          <a
                            href="https://example.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="external-link"
                            style={{ marginLeft: "10px" }}
                          >
                            <FontAwesomeIcon
                              icon={faExternalLinkAlt}
                              className="external-link-icon"
                            />
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Tilt>
              <Tilt
                tiltEnable={true}
                tiltReverse={false}
                tiltAngleXInitial={0}
                tiltAngleYInitial={0}
                tiltMaxAngleX={20}
                tiltMaxAngleY={20}
                tiltAxis={undefined}
                tiltAngleXManual={null}
                tiltAngleYManual={null}
                glareEnable={false}
                glareMaxOpacity={0.7}
                glareColor="#03182a"
                glareBorderRadius="0"
                glarePosition="bottom"
                glareReverse={false}
                scale={1}
                perspective={1000}
                flipVertically={false}
                flipHorizontally={false}
                reset={true}
                transitionEasing="cubic-bezier(.03,.98,.52,.99)"
                transitionSpeed={400}
                trackOnWindow={false}
                gyroscope={false}
              >
                <motion.div
                  className="two"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ scale: 1.05, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  style={{ marginBottom: "20px" }}
                >
                  {" "}
                  <div className="cover">
                    <img src="/four.jpg" alt="" />
                    <div
                      style={{
                        width: "400px",
                        height: "300px",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        zIndex: 2,
                      }}
                    >
                      <h1
                        style={{
                          textAlign: "center",
                          fontFamily: "kolak",
                          marginTop: 0,
                        }}
                      >
                        NextJS
                      </h1>

                      <div
                        style={{
                          margin: "0 20px",
                          marginTop: "-20px",
                          marginBottom: "-20px",
                        }}
                      >
                        <p
                          style={{
                            fontFamily: "sans-serif",
                            boxShadow: "0 5px 10px 10px",
                            color: "Highlight",
                            background: "lightblue",
                            padding: "10px",
                            borderRadius: "5px",
                          }}
                        >
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </div>
                      <div style={{ display: "flex" }}>
                        {/* <button
                        style={{
                          margin: "0 auto",
                          padding: "7px 30px",
                          cursor: "pointer",
                        }}
                      >
                        Details
                      </button> */}

                        <button
                          style={{
                            margin: "0 auto",
                            padding: "7px 30px",
                            cursor: "pointer",
                            background: "pink",
                            border: "none",
                            marginTop: "7px",
                          }}
                        >
                          Learn More
                          <a
                            href="https://example.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="external-link"
                            style={{ marginLeft: "10px" }}
                          >
                            <FontAwesomeIcon
                              icon={faExternalLinkAlt}
                              className="external-link-icon"
                            />
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Tilt>

              <Tilt
                tiltEnable={true}
                tiltReverse={false}
                tiltAngleXInitial={0}
                tiltAngleYInitial={0}
                tiltMaxAngleX={20}
                tiltMaxAngleY={20}
                tiltAxis={undefined}
                tiltAngleXManual={null}
                tiltAngleYManual={null}
                glareEnable={false}
                glareMaxOpacity={0.7}
                glareColor="#03182a"
                glareBorderRadius="0"
                glarePosition="bottom"
                glareReverse={false}
                scale={1}
                perspective={1000}
                flipVertically={false}
                flipHorizontally={false}
                reset={true}
                transitionEasing="cubic-bezier(.03,.98,.52,.99)"
                transitionSpeed={400}
                trackOnWindow={false}
                gyroscope={false}
              >
                <motion.div
                  className="three"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ scale: 1.05, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="cover">
                    <img src="/five.jpg" alt="" />
                    <div
                      style={{
                        width: "400px",
                        height: "300px",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        zIndex: 2,
                      }}
                    >
                      <h1
                        style={{
                          textAlign: "center",
                          fontFamily: "kolak",
                          marginTop: 0,
                          color: "gold",
                        }}
                      >
                        AngularJS
                      </h1>

                      <div
                        style={{
                          margin: "0 20px",
                          marginTop: "-20px",
                          marginBottom: "-20px",
                        }}
                      >
                        <p
                          style={{
                            fontFamily: "sans-serif",
                            // border: "1px solid blue",
                            boxShadow: "0 5px 10px 10px",
                            color: "Highlight",
                            background: "black",
                            padding: "10px",
                            borderRadius: "5px",
                          }}
                        >
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </div>
                      <div style={{ display: "flex" }}>
                        {/* <button
                        style={{
                          margin: "0 auto",
                          padding: "7px 30px",
                          cursor: "pointer",
                        }}
                      >
                        Details
                      </button> */}
                        <button
                          style={{
                            margin: "0 auto",
                            padding: "7px 30px",
                            cursor: "pointer",
                            background: "pink",
                            border: "none",
                            marginTop: "7px",
                          }}
                        >
                          Learn More
                          <a
                            href="https://example.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="external-link"
                            style={{ marginLeft: "10px" }}
                          >
                            <FontAwesomeIcon
                              icon={faExternalLinkAlt}
                              className="external-link-icon"
                            />
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Tilt>
            </div>

            <div className="submit">
              <button class="custom-btn btn-6">
                <span>Get In Touch</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
