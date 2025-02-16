import React from 'react'
import '../assets/css/aboutus.css'
import { Director } from '../components/Director'
import { OURTEAM } from '../components/OurTeam'
import { NavLink } from 'react-router-dom'
import bgImage from '../assets/Images/aboutMainBoxBg.svg'

function About() {
  return (
    <>
      <div className='container'>
        <p className='mt-16 mb-5 font-Euro text-[14px]'>You are viewing <NavLink className={'currenturl font-Euro'} to="/">Home</NavLink>/<NavLink className={'currenturl font-Euro'} to="/about-us">About Us</NavLink></p>
        <div className=' relative'>
          <h3 className='stylishfont'>Compete Pro</h3>
          <div className='relative -top-16 grid gap-3'>
            <h1 className='secondary_heading'>About Us</h1>
            <h4 className='text-[#1c72b8]'>Leading and Trusted Website Development Company</h4>
            <p>CompetePro is acknowledged for providing award-winning website development services for which we have received accolades from the big players in varied industries. We build scalable, responsive, standards-compliant, and robust web solutions as per clients’ requirements. We cater to clients ranging from startups to large-scale enterprises.</p>
          </div>
        </div>
        <div className=' rounded-xl bg-gradiant relative text-center flex w-full py-40 px-5 justify-center items-center flex-col gap-10 z-[-1]'>
          <img src={bgImage} className='absolute object-cover w-full h-full z-[0]' />
          <h3 className='text-center text-[white]'>We are a <br /><span className='text-[#1c72b8]'>Full Stack</span><br />Agency</h3>
          <p className='text-center text-[white]' style={{ width: 'min(600px,100%)' }}>From when we started to where we are now, Compete Pro has been progressing as an enterprise that leads change.</p>
        </div>
        <h3 className='text-center mt-7 md:mt-14 mb-7'>Our Edge</h3>
        <div className='grid md:grid-cols-2 justify-between gap-5 md:gap-10 mb-14'>
          <div className='rounded-xl shadow-lg grid gap-5 p-3 md:p-5 bg-white'>
            <h4>Proven Track Record</h4>
            <p>Compete Pro Technologies taps into its strong business acumen to find solutions to the unique set of challenges and constraints imposed by each new project and delivers solutions that fill performance gaps. We have a proven track record of successfully meeting deadlines and executing the most complex projects within budget while consistently maintaining the highest quality.</p>
          </div>
          <div className='rounded-xl shadow-lg grid gap-5 p-3 md:p-5 bg-white'>
            <h4>Proven Track Record</h4>
            <p>Compete Pro Technologies taps into its strong business acumen to find solutions to the unique set of challenges and constraints imposed by each new project and delivers solutions that fill performance gaps. We have a proven track record of successfully meeting deadlines and executing the most complex projects within budget while consistently maintaining the highest quality.</p>
          </div>
          <div className='rounded-xl shadow-lg grid gap-5 p-3 md:p-5 bg-white'>
            <h4>Proven Track Record</h4>
            <p>Compete Pro Technologies taps into its strong business acumen to find solutions to the unique set of challenges and constraints imposed by each new project and delivers solutions that fill performance gaps. We have a proven track record of successfully meeting deadlines and executing the most complex projects within budget while consistently maintaining the highest quality.</p>
          </div>
          <div className='rounded-xl shadow-lg grid gap-5 p-3 md:p-5 bg-white'>
            <h4>Proven Track Record</h4>
            <p>Compete Pro Technologies taps into its strong business acumen to find solutions to the unique set of challenges and constraints imposed by each new project and delivers solutions that fill performance gaps. We have a proven track record of successfully meeting deadlines and executing the most complex projects within budget while consistently maintaining the highest quality.</p>
          </div>
        </div>
      </div>
      <OURTEAM />
      <Director />
    </>
  )
}

export default About
