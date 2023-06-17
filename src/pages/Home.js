import React from 'react'
import illustration from '../assets/illustration.png'
import Button1 from '../components/Button1'

function Home() {
  return (
    <div className='homeContainer'>
     <div className="greetings">

      <div className="homeText">
        <p>Hello there,</p>
        <h1>My name is Diana Nyamai</h1>
        <p>I am a Front-End Engineer</p>
      </div>
      <div className="homeBtn">
        <Button1 name="Get in Touch"/>
        <Button1 name="Download CV"/>
      </div>
     </div>

     <div className="techImg">
        <img src={illustration} alt="illustration" />
     </div>
    </div>
  )
}

export default Home
