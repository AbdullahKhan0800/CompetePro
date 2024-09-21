import '../assets/css/Home.css';
import MainParticles from './particles/MainParticles';
import { TypewriterEffect } from './ui/typewriter-effect';

function Hero({ explore, setexplore }) {
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
        <div className='w-full absolute z-40 transition-all duration-500' style={explore === false ? { transform: 'translateY(-100%)' } : { transform: 'translateY(0%)' }}>
            <MainParticles />
            <div className='w-full justify-center h-screen flex flex-col container'>
                <h2 className='primary_heading text-[#1c72b8] mb-2'>adaptive</h2>
                <TypewriterEffect words={words} className={'font-TisaOT lg:text-4xl font-black text-white text-left mb-3'} />
                <p className='text-white' style={{ width: "min(90%, 900px)" }}>Compete Pro is a place where you can implement your ideas. We deal with complete ecommerces stores and advance customs websites.</p>
                <div className='mt-5 flex mb-0'>
                    <span className='text-white border rounded-full flex py-3 px-5 font-Euro text-sm transition-all duration-500 hover:bg-white hover:text-[#1c72b8]' onClick={() => setexplore(prev => !prev)}>
                        Explore
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Hero