import React from "react";
import "../css/About.css";

function About() {
  return (
    <div className="about" id="about">
      <h2>About</h2>
      <div className="main-contain">
        <div className="childcontainer1">
          <img src="../fav.svg" alt="fav" />
        </div>
        <div className="childcontainer2">
          <p>My name is Diana Ndinda Nyamai.</p>
          <p>I am a passionate Front-end engineer. </p>
          <p>
            I am proficient in the technologies: Javascript,reactjs, html5,css,
            php,vuejs and python
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
