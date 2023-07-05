import React from "react";
import js from "../assets/icons/js.png";
import react from "../assets/icons/react.png";
import mysql from "../assets/icons/mysql.png";
import html from "../assets/icons/html.png";
import css from "../assets/icons/css-3.png";
import sass from "../assets/icons/sass.png"
import git from "../assets/icons/Git.png"
import github from "../assets/icons/github.png"
import netlify from "../assets/icons/netlify.png"
import figma from "../assets/icons/figma.png"
import nodejs from "../assets/icons/nodejs.png"


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
    {
      class: "css",
      icon: css,
      title: "CSS",
      alt: "css",
    },
    {
      class: "sass",
      icon: sass,
      title: "SASS",
      alt: "sass",
    },
    {
      class: "git",
      icon: git,
      title: "GIT",
      alt: "git",
    },
    {
      class: "github",
      icon: github,
      title: "GITHUB",
      alt: "github",
    },
    {
      class: "netlify",
      icon: netlify,
      title: "NETLIFY",
      alt: "netlify",
    },
    {
      class: "figma",
      icon: figma,
      title: "FIGMA",
      alt: "figma",
    },
    {
      class: "nodejs",
      icon: nodejs,
      title: "NODEJS",
      alt: "nodejs",
    },
  ];
  return (
    <div>
      <div className="aboutInfo">
        <h1 className="animate__animated animate__backInDown">About</h1>
        <p className="aboutPar1 animate__animated animate__backInRight">
        My name is Diana Ndinda Nyamai. I am from Kenya, Nairobi.<br/><br/>

        I am a passionate Front-End Engineer. I have strong technical skills and extensive experience in crucial frontend technologies such as JavaScript, ReactJS, HTML, and CSS. With a creative flair and an eye for design, I can skilfully bring an application to life, refining every detail to achieve a polished end result. I am also committed to keeping pace with the ever-evolving technological landscape.
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
        <h3>Technologies & Tools</h3>
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
