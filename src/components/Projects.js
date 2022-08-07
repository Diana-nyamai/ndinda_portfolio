import React from "react";
import "../css/Projects.css";

function Projects() {
  const ProjectData = [
    {
      image: "../Saly.png",
      descr: "mochoice",
      link: "#",
    },
    {
      image: "../Saly.png",
      descr: "mochoice",
      link: "#",
    },
    {
      image: "../Saly.png",
      descr: "mochoice",
      link: "#",
    },
    {
      image: "../Saly.png",
      descr: "mochoice",
      link: "#",
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
              <p>{data.descr}</p>
              {/* */} <a href={data.link}>view website</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
