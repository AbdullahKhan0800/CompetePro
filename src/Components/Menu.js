import React, { useState } from 'react'
import LogoBlue from './Images/CPBlue.png'
import LogoWhite from './Images/CPWhite.png'
import { NavLink } from 'react-router-dom';
import './Assets/Menu.css'

function Menu() {
    const [menu, menutoggle] = useState(false)
    const [togle, menuSt] = useState(false)
    let litext = document.querySelectorAll('.thisinnerhtml')
    let hovertext = document.getElementById('hoverElementchange')
    litext.forEach((element) => {
        element.addEventListener("mouseover", () => {
            hovertext.innerText = element.getAttribute("data-value")
            hovertext.classList.add("fadeinanimation")
        })
        element.addEventListener("mouseout", () => {
            hovertext.classList.remove("fadeinanimation")
        })
    });

    const toggle = () => {
        menuSt(!togle)
        menutoggle(!menu)
    }

    return (
        <>
            <nav className='sidebar'>
                <div>
                    <h1 onClick={toggle} className={togle ? 'd-none m-0' : 'm-0'} ><img className='Logo' src={LogoBlue} alt="Compete Programing" /></h1>
                    <h1 onClick={toggle} className={togle ? 'm-0' : 'd-none m-0'}><img className='Logo' src={LogoWhite} alt="Compete Programing" /></h1>
                </div>
                <div className='menu-class' onClick={toggle}>
                    <span className={togle ? 'hamburger-menu-text m-0 text-white' : 'hamburger-menu-text m-0'}>MENU</span>
                    <div className={togle ? 'open m-0' : 'm-0'} id='nav-icon4'>
                        <span className={togle ? 'bc-white' : ''}></span>
                        <span className={togle ? 'bc-white' : ''}></span>
                        <span className={togle ? 'bc-white' : ''}></span>
                    </div>
                </div>
                <div></div>
            </nav>
            <aside className={menu ? 'open' : ''}>
                <ul>
                    <NavLink onClick={toggle} to="/CompetePro" className={({ isActive }) => isActive ? "active-link" : ''}>
                        <li data-value="Compete Pro" className='thisinnerhtml'>Home</li>
                    </NavLink>
                    <NavLink onClick={toggle} to="/about" className={({ isActive }) => isActive ? "active-link" : ''}>
                        <li data-value="About Us" className='thisinnerhtml'>About Us</li>
                    </NavLink>
                    <NavLink onClick={toggle} to="/services" className={({ isActive }) => isActive ? "active-link" : ''}>
                        <li data-value="Our Services" className='thisinnerhtml'>Services</li>
                    </NavLink>
                    <NavLink onClick={toggle} to="/contact" className={({ isActive }) => isActive ? "active-link" : ''}>
                        <li data-value="Contact Us" className='thisinnerhtml'>Contact</li>
                    </NavLink>
                </ul>
                <h2 id='hoverElementchange' className='thisisbackofthepoly'>Compete Pro</h2>
            </aside>
        </>
    )
}

export default Menu