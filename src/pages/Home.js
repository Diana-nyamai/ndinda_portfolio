import React from 'react'
import illustration from '../assets/illustration.png'

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
        <button>Get in touch</button>
        <button>Download cv</button>
      </div>
     </div>

     <div className="techImg">
        <img src={illustration} alt="illustration" />
     </div>
    </div>
  )
}

export default Home
