import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Menu from './components/Menu'
import Hero from './components/Hero';
import Scroll from './components/ui/SmoothScroll';
import SubParticles from './components/particles/SubParticles';
import Footer from './components/Footer';
import AnimatedCursor from './components/animatedCursor';

function Layout() {
    const [explore, setexplore] = useState(true)
    return (
        <>
            <div className=' hidden md:block'>
                <AnimatedCursor color={explore ? '255, 255, 255' : '28, 114, 184'} />
            </div>
            <Menu heroBanner={explore} />
            <Hero setexplore={setexplore} explore={explore} />
            {explore === false &&
                <>
                    <SubParticles />
                    <main className='w-full h-screen'>
                        <Scroll />
                        <div>
                            <Outlet />
                            <Footer />
                        </div>
                    </main>
                </>
            }
        </>
    )
}

export default Layout
