import React from 'react'
import { NavLink } from 'react-router-dom';
import './Assets/hero.css'


function Hero() {
  return (
    <div className='container'>
      <div className='main-hero-btn'>
        <NavLink to="/contact">
          <button className='btn-btn'>Contact Us</button>
        </NavLink>
      </div>
      <div className='hero-hero'>
        <h2>Welcome to <span>compete Programing</span> Tech</h2>
        <p className='font-hero'>Compete Pro is a place where you can implement your ideas. We deal with complete ecommerces stores and advance customs websites.</p>
        <p className='font-zero'>Lets quickly get to the information you require.</p>
        <ul className='ul-btntbn'>
          <NavLink to="/about" className=''>
            <li><button className='btn-btn'>About Us</button></li>
          </NavLink>
          <NavLink to="/services" className=''>
            <li><button className='btn-btn'>Services</button></li>
          </NavLink>
        </ul>
      </div>
    </div>
  )
}

export default Hero