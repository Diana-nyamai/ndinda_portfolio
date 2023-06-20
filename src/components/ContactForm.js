import React from "react";
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [state, handleSubmit] = useForm("xjvzbnpq");

    if (state.succeeded) {
        return <p>Message sent successfully</p>
    }
  return (
    <div className="formContainer">
      <form className="form" onSubmit={handleSubmit}>
        <input name="Email" type="text" placeholder="Your email" className="input" />
        <ValidationError prefix="Email" field="email" errors={state.errors}/>
        <textarea
          className="textarea"
          placeholder="Enter your message"
          name="Textarea"
          cols="50"
          rows="10"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors}/>
        <button className="contactBtn">Send message</button>
      </form>
    </div>
  );
}

export default ContactForm;
