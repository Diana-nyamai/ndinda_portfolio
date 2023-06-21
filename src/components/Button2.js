import React from 'react'
import { Link } from 'react-router-dom'

function Button2({name, link}) {
  return (
    <div className='button2'>
      <button><Link to={link}><span>{name}</span></Link></button>
    </div>
  )
}

export default Button2
