import React from 'react';
import '../css/Navbar.css';

function Navbar() {
  return (
    <div className='header'>
    <input type="checkbox" id="check"/>
    <label for="check" className='checkbtn'><i className="fa fa-bars"></i></label>

     <ul>
        <li><a href='#'>ABOUT</a></li>
        <li><a href='#'>PROJECT</a></li>
        <li><a href='#'>CERTIFICATES</a></li>
        <li><a href='#'>CONTACT</a></li>
     </ul>
    </div>
  )
}

export default Navbar