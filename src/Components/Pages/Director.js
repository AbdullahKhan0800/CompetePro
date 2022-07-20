import React from 'react'
import '../Assets/aboutus.css'
import fullImages from '.././Images/fullimage.jpeg'


export const Director = () => {
    return (
        <>
            <div className='backfont'>
                <h3 className='stylishfont'>Director</h3>
            </div>
            <p className=' wordspacing'>Board Of Director</p>
            <div class="thisisimageaboutwhitesuide">
                <div>
                    <div><h3 className='directeor'>Director of <span>CompetePro</span><br /> <span className='Abdullaksdf'>Abdullah Khan</span></h3></div>
                    <p className='paragraph-text-aboutus'>CompetePro is a highly trusted web development company with a brilliant team of web developers and professionals. We have a strong footprint around the world and have expertise in specialized technologies like ReactJS, NodeJS, eCommerce, CMS, etc.</p>
                    <p className='paragraph-text-aboutus'> We are determined with the aim of serving our customers the tailor-made & the latest technology-enabled web development solutions within their reach.</p>
                    <p className='paragraph-text-aboutus'> We have reached numerous milestones through innovative solutions. Our accomplishments are a reflection of our excellence with 100+ happy and satisfied clients.</p>
                    <p className='paragraph-text-aboutus'> We can be your complete technology partner by creating high-yielding partnerships in the realm of web development. You can hire an offshore team from us to work on any challenging project.</p>
                </div>
                <img src={fullImages} alt="must be remove" />
            </div>
        </>
    )
}
