import React from 'react'
import '../Assets/aboutus.css'
import vision from '../Images/vision.jpg'
import mission from '../Images/mission.jpg'

const BestCompony = () => {
    return (
        <div className='main-bestcompany'>
            <h2 className='center-htwo-best'>A Leading and Trusted Website Development Company</h2>
            <p className='best-paragraph'>CompetePro is acknowledged for providing award-winning website development services for which we have received accolades from the big players in varied industries. We build scalable, responsive, standards-compliant, and robust web solutions as per clients’ requirements. We cater to clients ranging from startups to large-scale enterprises.</p>
            <div className='main-div-best'>
                <div className='singlediv-best'>
                    <span className='singlegrid-best'><img src={vision} alt='vision' /></span>
                    <h3>Our Mission</h3>
                    <p>We aim to become your complete web development solution partner, through the most eligible Developers, Graphic esigners, Content Writer, SEO and SEM.</p>
                </div>
                <div className='singlediv-best'>
                    <span className='singlegrid-best'><img src={mission} alt='mission' /></span>
                    <h3>Our Vision</h3>
                    <p>At CompetePro, we envision becoming an industry leader by delivering innovative and unmatched solutions to clients through our expertise and knowledgeable resources.</p>
                </div>
            </div>
        </div>
    )
}

export default BestCompony