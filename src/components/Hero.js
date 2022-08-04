import React from 'react'
import '../css/Hero.css';
import Navbar from './Navbar';

function Hero() {
  return (
    <div className="container">
    <Navbar/>
        <div className='center-container'>
            <h1>Hi there, I'm <span>Diana</span></h1>
            <h3>I am a <span>front-end</span> developer.</h3>
            <p>Would you like to see my work?</p>
            <button><a href='./hhh.js'>see my work</a></button>
        </div>
        <div className='right-container'>
          <img src='./Saly.png' alt='rightsaly' width={600} />
        </div>
        <div className='circle1'></div>
        <div className='circle2'></div>
    </div>
  )
}

export default Hero