import React from 'react'
import '../css/contact.css'
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm("xjvzbnpq");
  if (state.succeeded) {
    return <p>message sent successfully!</p>;
}
  return (
    <div id='contact'>
       <div className="contact-container">
        <div className="sub-container1">
          <h4>contact me:</h4>
          <ul>
            <li>Phone: +2547 98 777 814</li>
            <li>Email: dnyamai.dn@gmail.com</li>
            <li>Location: Nairobi, Kenya</li>
          </ul>

          <ul className='socials'>
            <li><a href="https://twitter.com/nyamai_diana"><i className='fa fa-twitter'></i></a> </li>
            <li><a href="https://www.linkedin.com/in/diana-nyamai-41694815a/"><i className='fa fa-linkedin'></i></a></li>
            <li><a href="https://github.com/Diana-nyamai"><i className='fa fa-github'></i></a></li>
          </ul>
        </div>
        <div className="sub-container2">
        <form onSubmit={handleSubmit}>
        <input
          id="email"
          type="email" 
          name="email"
          placeholder='Email address...'
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <textarea
          id="message"
          name="message"
          placeholder='Enter your message...'
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <input className='submit' type="submit" value="Send" />
        {/*<button type="submit">
          Submit
  </button> */}
      </form>
        </div>
       </div>

       <h5> &copy; Diana Ndinda Nyamai</h5>
    </div>
  )
}

export default Contact