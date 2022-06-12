
import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FaFacebookMessenger} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wfblftc', 'template_vvrjtqp', form.current, 'Zqp8qJ3Ur-RhAUJuR')
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>jwilson1431@gmail.com</h5>
            <a href="mailto:jwilson1431@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className='contact__option'>
            <FaFacebookMessenger className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Janet Wilson</h5>
            <a href="https://m.me/janet.wilson.526875" target="_blank">Send a message</a>
          </article>

          
        </div>

      
      {/*End of contact options */}
      < form ref={form} onSubmit={sendEmail}>
        <input type="text" name= 'name' placeholder='Your Full Name' required />
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name="message" rows="7" placeholder='Your Message' required />
        <button type='submit' className='btn btn-primary'>Send Message</button>

      </form>
      </div>
    </section>
  )
}

export default Contact