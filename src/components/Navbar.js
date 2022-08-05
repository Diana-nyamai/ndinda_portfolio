import React from 'react';
import '../css/Navbar.css';
import {Link} from 'react-scroll'

function Navbar() {
  return (
    <div className='header'>
    <input type="checkbox" id="check"/>
    <label for="check" className='checkbtn'><i className="fa fa-bars"></i></label>

     <ul>
        <li><Link to='about'  spy={true} smooth={true} offset={50} duration={500}>ABOUT</Link></li>
        <li> <Link to='projects' spy={true} smooth={true} offset={50} duration={500}>PROJECTS </Link></li>
        <li> <Link to='certifictes'  spy={true} smooth={true} offset={50} duration={500}>CERTIFICATES </Link></li>
        <li> <Link to='contact'  spy={true} smooth={true} offset={50} duration={500}>CONTACT </Link></li>
     </ul>
    </div>
  )
}

export default Navbar