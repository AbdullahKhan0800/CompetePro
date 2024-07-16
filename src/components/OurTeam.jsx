import React, { useState } from 'react'
import '../assets/css/ourteam.css'
import '../assets/css/popup.css'
import { GrLinkedinOption } from 'react-icons/gr'
import { GiCrossMark } from 'react-icons/gi'
import teamData from '../data/TeamData'

export const OURTEAM = () => {
    const [openModal, setOpenModal] = useState([])
    const [popuptoggle, setpopuptoggle] = useState(false)
    const changeContent = (phone) => {
        setOpenModal([phone])
        setpopuptoggle(!popuptoggle)
    }
    return (
        <div className='bg-gradiant container pb-14'>
            <h3 className='text-center pt-14 pb-7 text-white'>Our Team</h3>
            <div className='ourteam-container'>
                {teamData.map((phone, index) => {
                    return (
                        <div className='member' >
                            <img src={phone.img} alt="team member" key={index} />
                            <p className='spcial'>{phone.special}</p>
                            <h4 className='font-Euro'>{phone.name}</h4>
                            <p>{phone.title}</p>
                            <div>
                                <span></span>
                                <button className=' secondary-btn cursor-none' onClick={() => {
                                    changeContent(phone)
                                }}>Profile</button>
                                <a href={phone.linkedin} target="_blank" rel="noreferrer"><GrLinkedinOption /></a>
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
        </div>
    )
};