import React from 'react'
import '../Assets/aboutus.css'
import BestCompony from './BestCompony'
import { Director } from './Director'
import { OURTEAM } from './ourTeam'
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div className='contactusall container'>
      <p className='mainnavparagrah'>You are viewing <span className='currenturl'><NavLink to="/">Home</NavLink></span>/<span className='currenturl'><NavLink to="/about">About Us</NavLink></span></p>
      <div className='backfont'>
        <h3 className='stylishfont'>About Us</h3>
      </div>
      <p className=' wordspacing'>It is very important to think every day.</p>
      <BestCompony/>
      <Director/>
      <OURTEAM />
    </div>
  )
}

export default About