import React from "react";
import js from "../assets/icons/js.png";
import react from "../assets/icons/react.png";
import mysql from "../assets/icons/mysql.png";
import html from "../assets/icons/html.png";

function About() {
  const stackIcons = [
    {
      class: "js",
      icon: js,
      title: "JAVASCRIPT",
      alt: "js",
    },
    {
      class: "mysql",
      icon: mysql,
      title: "MYSQL",
      alt: "mysql",
    },
    {
      class: "react",
      icon: react,
      title: "REACT",
      alt: "react",
    },
    {
      class: "html",
      icon: html,
      title: "HTML",
      alt: "html",
    },
  ];
  return (
    <div>
      <div className="aboutInfo">
        <h1 className="animate__animated animate__backInDown">About</h1>
        <p className="aboutPar1 animate__animated animate__backInRight">
          Hello, my name is Diana Ndinda Nyamai. I am from Kenya, Nairobi and I
          am a passionate Front-End Engineer. My passion for programming runs
          deep, and as a Frontend engineer. I have a strong technical skill and
          extensive experience in crucial frontend technologies such as
          JavaScript, ReactJS, HTML, and CSS. With a creative flair and an eye
          for design, I can skillfully bring an application to life, refining
          every detail to achieve a polished end result.I am also committed to
          keeping pace with the ever-evolving technological landscape.
        </p>
        <h4 className="animate__animated animate__backInLeft animate__delay-1s">
          My hobbies include:{" "}
        </h4>
        <ul className="animate__animated animate__backInUp animate__delay-2s">
          <li>Playing games (currently enjoying Asphalt 9) cool game!</li>
          <li>
            Listening to music. I enjoy listening to house genre. I love house
            music because it helps me concentrate for long hours and I am drawn
            to beats as an individual
          </li>
          <li>Watching movies.</li>
          <li>
            Dancing, I love dancing because i get to relax, take a breather and
            exercise especially after staring at the computer for a long time.
            Taking breaks during my coding sessions is very important
          </li>
          <li>Traveling and experiencing new places</li>
        </ul>
      </div>

      <div className="myStack animate__animated animate__zoomIn animate__delay-3s">
        <h3>My Stack</h3>
        <div className="aboutIcons">
          {stackIcons.map((item, index) => (
            <li key={index} className={`listJs ${item.class}`}>
              <span>
                <img src={item.icon} alt={item.alt} />
              </span>{" "}
              {item.title}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
