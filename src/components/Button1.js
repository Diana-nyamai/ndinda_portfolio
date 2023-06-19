import React from 'react'
import {Link} from 'react-router-dom'

function Button1({name, link}) {
  return (
    <div className='btn1container'>
        <div className="btn1Center">
            <button className="btn1 animate__animated animate__backInUp">
            <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
        </svg>
        <span><Link to={link}>{name}</Link></span>
            </button>
        </div>
    </div>
  )
}

export default Button1
