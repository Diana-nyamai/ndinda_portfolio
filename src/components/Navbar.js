import React from 'react';
import '../css/Navbar.css';

function Navbar() {
  return (
    <div className='header'>
    <input type="checkbox" id="check"/>
    <label for="check" className='checkbtn'><i className="fa fa-bars"></i></label>

     <ul>
        <li><link to='#'>ABOUT</link></li>
        <li><link to='#'>PROJECT</link></li>
        <li><link to='#'>CERTIFICATES</link></li>
        <li><link to='#'>CONTACT</link></li>
     </ul>
    </div>
  )
}

export default Navbar