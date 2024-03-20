import React from 'react'
import '../Assets/services.css'
import { FaLaptopCode } from 'react-icons/fa'
import { SiAltiumdesigner } from 'react-icons/si'
import { GiDigitalTrace } from 'react-icons/gi'
import { NavLink } from 'react-router-dom';
import websites from './servicesdata'


const Services = () => {
  return (
    <div className='contactusall container'>
      <p className='mainnavparagrah'>You are viewing <span className='currenturl'><NavLink to="/">Home</NavLink></span>/<span className='currenturl'><NavLink to="/services">Services</NavLink></span></p>
      <div className='backfont'>
        <h3 className='stylishfont'>Services</h3>
      </div>
      <p className=' wordspacing'>A Web Development Company.</p>
      <p className='simple-paragraph'>Web Development is one of the most needed technologies of the era. With everything, getting online web development helps to bring our businesses online. <br />
        The main thing is not just to bring the business online. It is not only about getting online. It is about making sure the online presence is a worthy one. Right from the inception of your idea, we plan on taking things on the right note. We work on details and strategies that might be small to think about. Yet surely necessary for good results!</p>
      <h2 className='headingforservices'>What We Serve</h2>
      <div className='servicese'>
        <div className='innerservise'>
          <p className='iconimage'><SiAltiumdesigner /></p>
          <h3>GRAPHIC DESIGN</h3>
          <p>Logo design & corporate identity</p>
          <p>Flyers and brochures</p>
          <p>Packaging and labeling</p>
        </div>
        <div className='innerservise'>
          <p className='iconimage'><FaLaptopCode /></p>
          <h3>WEB DEVELOPMENT</h3>
          <p>Content Management Systems</p>
          <p>Online shops</p>
          <p>Custom system integrations</p>
        </div>
        <div className='innerservise'>
          <p className='iconimage'><GiDigitalTrace /></p>
          <h3>DIGITAL MARKETING</h3>
          <p>SEO – organic website optimisaion</p>
          <p>SEM – contextual advertising</p>
          <p>SMM – social media marketing</p>
        </div>
      </div>
      <div className='backfont'>
        <h3 className='stylishfont'>our work</h3>
      </div>
      <p className='wordspacing'>Top Websites we made.</p>
      <ul class='ulimageslinks'>
        {
          websites.map((web, index) => {
            return (
              <li className='insiemaplink' key={index}>
                <a href={web.link} target="_blank">
                  <img src={web.img} alt="worked website" />
                </a>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Services