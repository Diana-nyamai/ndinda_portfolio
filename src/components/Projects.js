import React from 'react'
import '../css/Projects.css'
import Tilt from 'react-vanilla-tilt'

function Projects() {
  return (
    <div className='project' id="projects">
    <h2>Projects</h2>
    <div className="pcontainer">
    <Tilt options={{glare:false, scale: 1,speed: 1000}}>
      <div className="card">
        <div className="contents">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit sapiente blanditiis, ex esse itaque delectus nemo aut, tenetur expedita voluptatem alias reiciendis non assumenda necessitatibus illum veritatis? Magni, facilis itaque.</p>
         {/*<a href="#">view website</a> */} 
        </div>
      </div></Tilt>

      <div className="card">
        <div className="contents">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit sapiente blanditiis, ex esse itaque delectus nemo aut, tenetur expedita voluptatem alias reiciendis non assumenda necessitatibus illum veritatis? Magni, facilis itaque.</p>
          {/**<a href="#">view website</a> */}
        </div>
      </div>

      <div className="card">
        <div className="contents">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit sapiente blanditiis, ex esse itaque delectus nemo aut, tenetur expedita voluptatem alias reiciendis non assumenda necessitatibus illum veritatis? Magni, facilis itaque.</p>
          {/** <a href="#">view website</a>*/}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Projects