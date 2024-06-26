import React, { useState } from 'react'
import '../../assets/css/Home.css'
import MainParticles from './../particles/MainParticles'
import Menu from '../menu/Menu';
import { TypewriterEffect } from '../ui/typewriter-effect';


function Hero() {
    const [moveHero, setmoveHero] = useState(false);
    const words = [
        {
            text: "to"
        },
        {
            text: "your"
        },
        {
            text: "business,"
        },
        {
            text: "your"
        },
        {
            text: "growth"
        },
        {
            text: "&"
        },
        {
            text: "the"
        },
        {
            text: "future"
        }
    ]
    return (
        <div className='layout absolute z-20 transition-all duration-500' style={moveHero ? { transform: 'translateY(-100%)' } : { transform: 'translateY(0%)' }}>
            <MainParticles />
            <Menu heroBanner={true} />
            <div className='justify-center h-screen flex flex-col px-4'>
                <h2 className='text-lg sm:text-2xl md:text-4xl lg:text-6xl text-[#1c72b8] font-TisaOT font-black mb-2'>adaptive</h2>
                <TypewriterEffect words={words} className={'font-TisaOT font-black text-white text-left mb-3'} />
                <p className='text-[23px] font-light text-white' style={{ width: "min(90%, 900px)" }}>Compete Pro is a place where you can implement your ideas. We deal with complete ecommerces stores and advance customs websites.</p>
                <div className='mt-5 flex mb-0'>
                    <span className=' text-white border rounded-full flex py-3 px-5 font-Euro text-sm transition-all duration-500 hover:bg-white hover:text-[#1c72b8]' onClick={() => setmoveHero(prev => !prev)}>
                        Explore
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Hero