import React from 'react';
import '../css/Navbar.css';

function Navbar() {
  return (
    <div className='header'>
     <img src="./dnt.png" alt='logo'/>
     <ul>
        <li>ABOUT</li>
        <li>PROJECT</li>
        <li>CERTIFICATES</li>
        <li>CONTACT</li>
     </ul>
    </div>
  )
}

export default Navbar