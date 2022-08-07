import React from "react";
import "../css/Projects.css";

function Projects() {
  const ProjectData = [
    {
      image: "../mywork1.jpeg",
      title: "Mochoice",
      link: "#",
    },
    {
      image: "../mywork2.jpeg",
      title: "Amie Foundation",
      link: "#",
    },
    {
      image: "../mywork3.jpeg",
      title: "Fundis",
      link: "#",
    },
    {
      image: "../mywork4.jpeg",
      title: "The pinkpalace",
      link: "https://pinkpalace.co.ke/",
    },
  ];
  return (
    <div className="project" id="projects">
      <h2>Projects</h2>
      <div className="pcontainer">
        {ProjectData.map((data) => (
          <div className="card">
            <div className="contents">
              <img src={data.image} alt="" />
              <p>{data.title}</p>
           <a href={data.link}>view website</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
