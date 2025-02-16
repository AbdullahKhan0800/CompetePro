import React from 'react'
import { NavLink } from 'react-router-dom'
import AboutUsHomepage from '../components/AboutUsHomePage'
import { ParallaxScrollDemo } from '../components/parallaxGridScroll'
import '../assets/css/Home.css'

function Home() {
    return (
        <>
            <div className='container'>
                <div className='flex flex-col h-screen'>
                    <h2 className='text-left mb-3 mt-20 md:mt-28 secondary_heading'>Welcome to the <h1 className='text-[#1c72b8] uppercase secondary_heading'>Compete Programming</h1> Solutions</h2>
                    <h6>Lets quickly get to the information you require.</h6>
                    <div className='flex w-full justify-start items-end h-full border-b-2 py-4'>
                        <span className='message bg-[#1c72b8] text-white font-thin font-AkkuratLight'>What would you like to see?</span>
                    </div>
                    <div className='mt-6 mb-10 w-full flex justify-between items-center'>
                        <div className='flex g-1 flex-wrap'>
                            <NavLink to="/about-us" className='secondary-btn'>About Compete Pro</NavLink>
                            <NavLink to="/services" className='secondary-btn'>Services</NavLink>
                            <NavLink to="/services" className='secondary-btn'>E Commerce</NavLink>
                            <NavLink to="/services" className='secondary-btn'>Full Stack</NavLink>
                        </div>
                        <div className='flex g-1 flex-wrap justify-end'>
                            <NavLink to="/" className='primary-btn'>Menu</NavLink>
                            <NavLink to="/contact" className='primary-btn'>Contact Us</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <AboutUsHomepage />
            <ParallaxScrollDemo />
            {/* <CodeExample /> */}
        </>
    )
}

export default Home
