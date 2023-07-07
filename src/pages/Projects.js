import React from "react";
import data from "../components/ProjectData";
import clone from "../components/ProjectCloneData";
import ux from "../components/ProjectUXData";
import Button3 from "../components/Button3";
import { FiExternalLink } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";

function Projects() {
  return (
    <div className="mainProjectContainer">
      <h1 className="animate__animated animate__backInDown">My Projects</h1>
      {data.lists.map((list, index) => (
        <div
          key={index}
          className="projectContainer animate__animated animate__zoomIn"
        >
          <div className="projectBox">
            <div className="projectPrototype">
              <img src={list.mainImg} alt="projects" />
            </div>
            <div className="projectInfo">
              <div className="projectContent">
                <h3>{list.name}</h3>
                <p>{list.description}</p>
              </div>
              <div className="projectIcons">
                <p>Technologies used:</p>
                <div className="languageList">
                  {" "}
                  {list.technologies.map((item, index) => (
                    <li key={index}>
                      <span>
                        <img src={item.icon} alt="icons" />
                      </span>
                      {item.name}
                    </li>
                  ))}
                </div>
              </div>
              <div className="projectButtons">
                <Button3
                  name="View Live"
                  icon=<FiExternalLink />
                  link={list.liveLink}
                />
                <Button3
                  name="View Code"
                  icon=<BsGithub />
                  link={list.codeLink}
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      <h1>Clone projects</h1>

      {clone.clones.map((list, index) => (
        <div
          key={index}
          className="projectContainer animate__animated animate__zoomIn"
        >
          <div className="projectBox">
            <div className="projectPrototype">
              <img src={list.mainImg} alt="projects" />
            </div>
            <div className="projectInfo">
              <div className="projectContent">
                <h3>{list.name}</h3>
                <p>{list.description}</p>
              </div>
              <div className="projectIcons">
                <p>Technologies used:</p>
                <div className="languageList">
                  {" "}
                  {list.technologies.map((item, index) => (
                    <li key={index}>
                      <span>
                        <img src={item.icon} alt="icons" />
                      </span>
                      {item.name}
                    </li>
                  ))}
                </div>
              </div>
              <div className="projectButtons">
                <Button3
                  name="View Live"
                  icon=<FiExternalLink />
                  link={list.liveLink}
                />
                <Button3
                  name="View Code"
                  icon=<BsGithub />
                  link={list.codeLink}
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      <h1>UX/UI DESIGNS</h1>

      {ux.uxs.map((list, index) => (
        <div
          key={index}
          className="projectContainer animate__animated animate__zoomIn"
        >
          <div className="projectBox">
            <div className="projectPrototype">
              <img src={list.mainImg} alt="projects" />
            </div>
            <div className="projectInfo">
              <div className="projectContent">
                <h3>{list.name}</h3>
                <p>{list.description}</p>
              </div>
              <div className="projectIcons">
                <p>Tool used:</p>
                <div className="languageList">
                  {" "}
                  {list.technologies.map((item, index) => (
                    <li key={index}>
                      <span>
                        <img src={item.icon} alt="icons" />
                      </span>
                      {item.name}
                    </li>
                  ))}
                </div>
              </div>
              <div className="projectButtons">
                <Button3
                  name="View Prototype"
                  icon=<FiExternalLink />
                  link={list.liveLink}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
