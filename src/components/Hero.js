import React from "react";
import "../css/Hero.css";
import About from "./About";
import Navbar from "./Navbar";
import Projects from "./Projects";
import { Link } from "react-scroll";
import Certificates from "./Certificates";
import Contact from "./Contact";

function Hero() {
  return (
    <div className="main-container">
      <div className="container">
        <Navbar />
        <div className="center-container">
          <h1>
            Hi there, I'm <em>Diana</em>
          </h1>
          <h3>
            I am a <em>front-end</em> developer.
          </h3>
          <p>Would you like to see my work?</p>
          <button>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <i className="span">see my work</i>
              <i className="i"></i>{" "}
            </Link>
          </button>
        </div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <About />
      <Projects />
      <Certificates />
      <Contact />
    </div>
  );
}

export default Hero;
