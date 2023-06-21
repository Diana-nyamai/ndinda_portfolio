import React from 'react'
import { Link } from 'react-router-dom'

function Blogs() {
  return (
    <div className='blogContainer'>
      <div className="blogCard">
        <div className="blogBox">
          <div className="blogContent">
            <span className='cardHeading'>01</span>
              <span className='blogContent'>Recursion</span>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt eligendi eius voluptas architecto repudiandae. Maiores accusantium soluta suscipit modi, id tempora culpa? Voluptatum iure ullam aliquid nulla a et molestias.</p>
              <Link to="#">Read More</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs
