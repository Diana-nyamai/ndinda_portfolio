// images 
import pinkpalace from "../assets/projects/pinkpalace.png";
import executive from "../assets/projects/executive.png";
import chatapp from "../assets/projects/chatapp.png";
import todo from "../assets/projects/todo.png";

// icons 
import js from "../assets/icons/js.png";
import css from "../assets/icons/css-3.png";
import html from "../assets/icons/html.png"; 
import react from "../assets/icons/react.png"

const data = {
    lists:[
        {
          mainImg: pinkpalace,
          name: "PinkPalace",
          description: "Pink Palace is a frontend project aimed at creating a website that provides information about a beautiful location where users can book photography grounds, host wedding parties, and celebrate birthdays.",
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
          liveLink: "https://pinkpalace.co.ke/",
          codeLink: "https://github.com/Diana-nyamai/PINK-PALACE",
        },
        {
            mainImg: executive,
            name: "Executive Matchmaking",
            description: "This is a web application developed utilizing Reactjs, and CSS to cater to individuals searching for romantic relationships, with a focus on those seeking a more targeted approach to finding compatible partners",
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
                name: "HTML",
                icon: html,
              },
            ],
            liveLink: "https://executivematchmaking.netlify.app/",
            codeLink: "https://github.com/Diana-nyamai/Executive-matchmaking",
          },
          {
            mainImg: chatapp,
            name: "Chat Application",
            description: "The Chat application is a web-based application that emulates the core features and functionality of the popular Social media application, Facebook.",
            technologies: [
              {
                name: "REACTJS",
                icon: react,
              },
              {
                name: "HTML",
                icon: html,
              },
              {
                name: "CSS",
                icon: css,
              },
            ],
            liveLink: "https://diana-nyamai.github.io/Chat-application/",
            codeLink: "https://github.com/Diana-nyamai/Chat-application",
          },
          {
            mainImg: todo,
            name: "TO-DO list app",
            description: "The Chat application is a web-based application that emulates the core features and functionality of the popular Social media application, Facebook.",
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
                name: "JAVASCRIPT",
                icon: js
              }
            ],
            liveLink: "https://adoring-wescoff-9acc02.netlify.app/",
            codeLink: "https://github.com/Diana-nyamai/TO-DO-LIST",
          }
      ]
}

export default data;