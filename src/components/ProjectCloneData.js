// images
import whatsapp from "../assets/projects/whatsapp.png";
import finetek from "../assets/projects/finetek.png";
import zalisha from "../assets/projects/zalisha.png";

// Icons
import js from "../assets/icons/js.png";
import css from "../assets/icons/css-3.png";
import html from "../assets/icons/html.png"; 
import react from "../assets/icons/react.png"


const clone = {
    clones:[
        {
          mainImg: whatsapp,
          name: "WhatsApp Clone", 
          description: "The WhatsApp Clone is a web-based application that emulates the core features and functionality of the popular messaging app, WhatsApp.",
          technologies: [
            {
              name: "REACTJS",
              icon: react,
            },
            {
              name: "CSS",
              icon: css,
            },
            {
              name: "JavaScript",
              icon: js,
            },
          ],
          liveLink: "https://diana-nyamai.github.io/Whatsapp-Clone/",
          codeLink: "https://github.com/Diana-nyamai/Whatsapp-Clone",
        },
        {
            mainImg: finetek,
            name: "Finetek Clone", 
            description: "This project is a frontend clone of the Finetek website, developed using HTML, CSS, and JavaScript. It aims to replicate the visual and functional aspects of the original website.",
            technologies: [
              {
                name: "HTML",
                icon: html,
              },
              {
                name: "CSS",
                icon: css,
              },
              {
                name: "JavaScript",
                icon: js,
              },
            ],
            liveLink: "https://fineteklabs-clone.netlify.app/",
            codeLink: "https://github.com/Diana-nyamai/finetek-clone",
          },
          {
            mainImg: zalisha,
            name: "Zalisha Clone", 
            description: "This project is a frontend clone of the zalisha website, developed using HTML, CSS, and JavaScript. It aims to replicate the visual and functional aspects of the original website.",
            technologies: [
              {
                name: "HTML",
                icon: react,
              },
              {
                name: "CSS",
                icon: css,
              },
              {
                name: "JavaScript",
                icon: js,
              },
            ],
            liveLink: "https://zalisha-clone.netlify.app/",
            codeLink: "https://github.com/Diana-nyamai/zalisha-clone",
          }
    ]
}

export default clone;