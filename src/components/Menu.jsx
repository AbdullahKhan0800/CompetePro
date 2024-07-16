import React, { useRef, useState } from 'react'
import LogoBlue from '../assets/Images/CPBlue.png'
import LogoWhite from '../assets/Images/CPWhite.png'
import { NavLink } from 'react-router-dom';
import '../assets/css/Menu.css'

function Menu({ heroBanner }) {
    const [togle, settoggle] = useState(false);
    const [hoverText, sethoverText] = useState('Compete Pro');

    const hoverElement = useRef(null)
    function setHoverState(e) {
        let dValue = e.target.getAttribute('data-value')
        if (hoverElement.current && dValue !== hoverText) {
            hoverElement.current.style.opacity = 0
            setTimeout(() => {
                sethoverText(dValue);
                hoverElement.current.style.opacity = 1
            }, 500);
        }
    }

    return (
        <menu className='h-screen fixed top-0 left-0 z-50'>
            <nav className='grid grid-rows-3 h-full px-3 relative z-40'>
                <div className=' relative w-[80px] h-auto mt-6'>
                    {
                        heroBanner === true ? <>
                            <h1 onClick={() => { settoggle(prev => !prev) }} className={`m-0 absolute cursor-pointer block`}><img className='Logo' src={LogoWhite} alt="Compete Programing" /></h1>
                        </> :
                            <>
                                <h1 onClick={() => { settoggle(prev => !prev) }} className={`m-0 absolute cursor-pointer ${togle ? 'ani-block' : 'ani-none'}`}><img className='Logo' src={LogoWhite} alt="Compete Programing" /></h1>
                                <h1 onClick={() => { settoggle(prev => !prev) }} className={`m-0 absolute cursor-pointer ${togle ? 'ani-none' : 'ani-block'}`} ><img className='Logo' src={LogoBlue} alt="Compete Programing" /></h1>
                            </>
                    }
                </div>
                <div className='flex items-center justify-center' >
                    <div onClick={() => { settoggle(prev => !prev) }} className='flex flex-col items-center justify-center gap-2 cursor-pointer'>
                        {
                            heroBanner === true ? <>
                                <span className={`m-0 hamburger-menu-text font-Euro text-white`}>MENU</span>
                                <div className={`m-0 relative transition-all duration-500 ${togle ? 'open -left-1' : ''}`} id='nav-icon4'>
                                    <span className={'bg-white'}></span>
                                    <span className={'bg-white'}></span>
                                    <span className={'bg-white'}></span>
                                </div>
                            </> : <>
                                <span className={`m-0 hamburger-menu-text font-Euro transition-all duration-500 ${togle ? 'text-white' : 'text-[#1c72b8]'}`}>MENU</span>
                                <div className={`m-0 relative transition-all duration-500  ${togle ? 'open -left-1' : ''}`} id='nav-icon4'>
                                    <span className={togle ? 'bg-white' : 'bg-[#1c72b8]'}></span>
                                    <span className={togle ? 'bg-white' : 'bg-[#1c72b8]'}></span>
                                    <span className={togle ? 'bg-white' : 'bg-[#1c72b8]'}></span>
                                </div>
                            </>
                        }
                    </div>
                </div>
                <div></div>
            </nav>
            <aside className={`fixed top-0 w-full h-screen text-center flex justify-center items-center bg-[linear-gradient(to_bottom_right,_#101118_0%,_#171a8b_100%)] -translate-x-full transition-all duration-500 z-30 ${togle ? 'open' : ''}`}>
                <ul>
                    <li data-value="Compete Pro" onMouseEnter={(e) => { setHoverState(e) }}>
                        <NavLink onClick={() => { settoggle(prev => !prev) }} to="/" className={({ isActive }) => isActive ? "active-link" : ''}>
                            Home
                        </NavLink>
                    </li>
                    <li data-value="About Us" onMouseEnter={(e) => { setHoverState(e) }}>
                        <NavLink onClick={() => { settoggle(prev => !prev) }} to="/about-us" className={({ isActive }) => isActive ? "active-link" : ''}>
                            About Us
                        </NavLink>
                    </li>
                    <li data-value="Our Services" onMouseEnter={(e) => { setHoverState(e) }}>
                        <NavLink onClick={() => { settoggle(prev => !prev) }} to="/services" className={({ isActive }) => isActive ? "active-link" : ''}>
                            Services
                        </NavLink>
                    </li>
                    <li data-value="Contact Us" onMouseEnter={(e) => { setHoverState(e) }}>
                        <NavLink onClick={() => { settoggle(prev => !prev) }} to="/contact" className={({ isActive }) => isActive ? "active-link" : ''}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <h2 className='thisisbackofthepoly' ref={hoverElement}>{hoverText}</h2>
            </aside>
        </menu>
    )
}

export default Menu