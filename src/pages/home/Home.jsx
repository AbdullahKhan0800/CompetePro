import React from 'react'
import { NavLink } from 'react-router-dom'

function Home() {
    return (
        <div className='px-4 flex h-screen'>
            <div className='flex flex-col'>
                <h2 className='font-black text-left mb-3 text-6xl mt-20'>Welcome to <span className='font-black text-[#1c72b8]'>Compete Programming</span> Solutions</h2>
                <h3 className=" text-2xl" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Lets quickly get to the information you require.</h3>
                <div className='flex w-full justify-start items-end h-full border-b-2 py-4'>
                    <span className='message bg-[#1c72b8] text-white font-thin font-AkkuratLight'>What would you like to see?</span>
                </div>
                <div className='mt-6 mb-10 w-full flex justify-between items-center'>
                    <div className='flex g-1'>
                        <NavLink to="/about" className='secondary-btn'>About Compete Pro</NavLink>
                        <NavLink to="/" className='secondary-btn'>Services</NavLink>
                        <NavLink to="/" className='secondary-btn'>E Commerce</NavLink>
                        <NavLink to="/" className='secondary-btn'>Full Stack</NavLink>
                    </div>
                    <div className='flex g-1'>
                        <NavLink to="/" className='primary-btn'>Menu</NavLink>
                        <NavLink to="/" className='primary-btn'>Contact Us</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
