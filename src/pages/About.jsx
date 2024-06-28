import React from 'react'
import '../assets/css/aboutus.css'
import BestCompony from '../components/BestCompony'
import { Director } from '../components/Director'
import { OURTEAM } from '../components/OurTeam'

function About() {
  return (
    <div className='container'>
      <h3 className='stylishfont'>About Us</h3>
      <p className=' wordspacing'>It is very important to think every day.</p>
      <BestCompony />
      <Director />
      <OURTEAM />
    </div>
  )
}

export default About
