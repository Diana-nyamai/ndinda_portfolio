import React from "react";
import illustration from "../assets/illustration.png";
import Button1 from "../components/Button1";

function Home() {
  return (
    <div className="homeContainer">
      <div className="greetings">
        <div className="homeText">
          <p className="animate__animated animate__backInDown">Hello there,</p>
          <h1 className=" animate__animated animate__backInLeft">
            My name is Diana Nyamai
          </h1>
          <p className="animate__animated animate__backInRight">
            I am a Software Engineer
          </p>
        </div>
        <div className="homeBtn">
          <Button1 name="Get in Touch" link="/Contact" />
          <Button1 name="Download CV" link="https://drive.google.com/file/d/1DphcVzEcUb3jTAbWLks4h9lVGkLD-Ker/view?usp=sharing" />
        </div>
      </div>

      <div className="techImg">
        <img
          className="animate__animated animate__zoomIn"
          src={illustration}
          alt="illustration"
        />
      </div>
    </div>
  );
}

export default Home;
