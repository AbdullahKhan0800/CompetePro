import React, { useRef } from 'react'
import { AiFillSkype } from 'react-icons/ai'
import myLogo from './../Images/mylogo.jpg'
import emailjs from '@emailjs/browser';
import './../Assets/contactus.css'
import { NavLink } from 'react-router-dom';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qkaei0a', 'template_jfe6b7j', form.current, 'A6No88yl0W4JcpHzy')
      .then((result) => {
        console.log(result.text);
        alert("Thanks For Submiting the Form, We Will Contact You Soon.")
        let emptytheinput = document.querySelectorAll('input')
        let emptytwo = document.querySelectorAll('textarea')
        emptytheinput.forEach((e) => e.value = "")
        emptytwo.forEach((c) => c.value = "")
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <div className='contactusall container'>
      <p className='mainnavparagrah'>You are viewing <span className='currenturl'><NavLink to="/">Home</NavLink></span>/<span className='currenturl'><NavLink to="/contact">Contact Us</NavLink></span></p>
      <div className='backfont'>
        <h3 className='stylishfont'>Contact Us</h3>
      </div>
      <p className=' wordspacing'>Its love to see you here.</p>
      <div className='contactusformhere'>
        <div className='oneofgridcontact'>
          <h2>Let’s Talk</h2>
          <h3>Exalted about a new business idea and want a website development company to shape it?</h3>
          <p>
            let us be your technology partner to bring your idea to life.
          </p>
          <div className='aboutcontact'>
            <div className='secondrycontaftt'>
              <div className='logoborderblue'>
                <img src={myLogo} alt="Abdullah khan" />
              </div>
              <div>
                <ul>
                  <li>Abdullah Khan</li>
                  <li>Business Head</li>
                </ul>
              </div>
            </div>
            <ul className='ullifirsonene'>
              <li><a href='https://join.skype.com/invite/xNnQu6dRJTex'  ><span className='iconsype'><AiFillSkype /></span></a> <a href='https://join.skype.com/invite/xNnQu6dRJTex' target="_blank">Abdullah Khan</a></li>
              <li><i className="fa-solid fa-greater-than fagreaterthen"></i><a href='mailto:biatemper0800@gmail.com'  > biatemper0800@gmail.com</a></li>
              <li><i className="fa-solid fa-greater-than fagreaterthen"></i><a href='tel:+923200516496'  > +92 3200516496</a></li>
            </ul>
          </div>
        </div>
        <form ref={form} className='formconstactus' onSubmit={sendEmail}>
          <div className='innerdivfromcontactus'>
            <h3>Request a Free Quote</h3>
            <input name='name' placeholder="Your name" type="text" tabIndex="1" required autoFocus />
            <input name='phonenumber' placeholder="Your Phone Number" type="tel" tabIndex="3" required />
            <input name='email' placeholder="Your Email Address" type="email" tabIndex="2" required />
            <textarea name='message' placeholder="Type your message here...." tabIndex="5" rows="5" required></textarea>
            <button type="submit" id="contact-submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact