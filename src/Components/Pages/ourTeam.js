import React, { useState } from 'react'
import '../Assets/ourteam.css'
import '../Assets/popup.css'
import { GrLinkedinOption } from 'react-icons/gr'
import { GiCrossMark } from 'react-icons/gi'
import teamData from './teamData'
import '../Assets/Menu.css'


export const OURTEAM = () => {
    const [openModal, setOpenModal] = useState([])
    const [popuptoggle, setpopuptoggle] = useState(false)
    const changeContent = (phone) => {
        setOpenModal([phone])
        setpopuptoggle(!popuptoggle)
    }
    return (
        <>
            <div className='backfont'>
                <h3 className='stylishfont'>Our Team</h3>
            </div>
            <div className='ourteam-container'>
                {teamData.map((phone, index) => {
                    return (
                        <div className='member' >
                            <img src={phone.img} alt="team member" key={index} />
                            <p className='spcial'>{phone.special}</p>
                            <h4>{phone.name}</h4>
                            <p>{phone.title}</p>
                            <div>
                                <span></span>
                                <button className='btnarray' onClick={() => {
                                    changeContent(phone)
                                }}>Profile</button>
                                <a href={phone.linkedin}><GrLinkedinOption /></a>
                            </div>
                        </div>
                    )
                })}
            </div>
            {popuptoggle && (
                <div id='fadeoutanimi' className={setpopuptoggle ? 'modelpopup fadeinanimation' : 'modelpopup fadeoutanimation'} onClick={() => {
                    changeContent()
                }}>
                    <div className='porprgatrion' onClick={(e) => e.stopPropagation()}>
                        <p className='cross-close' onClick={() => changeContent()}><GiCrossMark /></p>
                        {
                            openModal.map((pop) => {
                                return (
                                    <div className='modelpp'>
                                        <h3>{pop.name}</h3>
                                        <h4>{pop.title}</h4>
                                        <p>{pop.skills}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            )}
        </>
    )
}
