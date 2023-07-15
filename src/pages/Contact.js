import React from "react";
import { Link } from "react-router-dom";
import email from "../assets/icons/gmail.png";
import LinkedIn from "../assets/icons/linkedin.png";
import Twitter from "../assets/icons/twitter.png";
import github from "../assets/icons/github.png";
import IG from "../assets/icons/instagram.png"
import ContactForm from "../components/ContactForm";

function Contact() {
  const mySocials = [
    {
      image: email,
      title: "Gmail",
      link: "mailto:dnyamai.dn@gmail.com",
    },
    {
      image: LinkedIn,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/diana-nyamai-41694815a/",
    },
    {
      image: github,
      title: "Github",
      link: "https://github.com/Diana-nyamai",
    },
    {
      image: Twitter,
      title: "Twitter",
      link: "https://twitter.com/ndinda_diana_",
    },
    {
      image: IG,
      title: "Instagram",
      link: "https://www.instagram.com/ndinda_codes/",
    },
  ];
  return (
    <div>
      <div className="contactIntro">
        <h1 className="animate__animated animate__backInDown">
          Let's Get in Touch
        </h1>
        <p className="animate__animated animate__backInLeft">
          Thank you for visiting my portfolio website! I appreciate your
          interest and would love to hear from you. Whether you have a question,
          a project proposal, or simply want to connect, this is the perfect
          place to get in touch.
        </p>
        <p className="animate__animated animate__backInLeft">
          Remember, no matter how big or small your query is, it is important to
          me. Let's embark on a productive and creative journey together!
        </p>
        <p className="animate__animated animate__backInLeft">
          Thank you once again for visiting my portfolio website. I look forward
          to hearing from you soon.
        </p>

        <div className="mySocials animate__animated animate__backInRight">
          <h3>My socials</h3>
          <div className="socialsList">
            {mySocials.map((soc, index) => (
              <li key={index}>
                <span>
                  <img src={soc.image} alt="socials" />
                </span>
                <Link to={soc.link}>{soc.title}</Link>
              </li>
            ))}
          </div>
        </div>
      </div>
      <div className="contactForm animate__animated animate__backInRight">
        <h2>Send me a message</h2>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
