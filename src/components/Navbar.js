import React from 'react';
import '../css/Navbar.css';

function Navbar() {
  return (
    <div className='header'>
    <input type="checkbox" id="check"/>
    <label for="check" className='checkbtn'><i className="fa fa-bars"></i></label>

     <ul>
        <li><a href='./about.js'>PROJECTS</a></li>
        <li><a href='./about.js'>CERTIFICATES</a></li>
        <li><a href='./about.js'>PROJECTS</a></li>
        <li><a href='./about.js'>CONTACT</a></li>
     </ul>
    </div>
  )
}

export default Navbar