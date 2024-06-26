import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import Menu from './menu/Menu'
import Hero from './hero/Hero';
import Scroll from './ui/SmoothScroll';
import SubParticles from './particles/SubParticles';
import { useLocation } from 'react-router-dom';

function Layout() {
    const location = useLocation();

    useEffect(() => {
        console.log(location.pathname); // Logs the current path
    }, [location]);
    return (
        <>
            {
                location.pathname == '/' && <Hero />
            }
            <SubParticles />
            <div className='layout'>
                <Menu />
                <main>
                    <Scroll />
                    <div>
                        <Outlet />
                    </div>
                </main>
            </div>
        </>
    )
}

export default Layout
