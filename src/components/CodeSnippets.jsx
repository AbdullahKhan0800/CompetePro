import React, { useState } from 'react'

function CodeSnippets({ content, position }) {
    const [active, setActive] = useState(0)

    return (
        <div className={`flex justify-center gap-6 h-full ${position == 'right' ? " flex-row-reverse" : ""}`}>
            {
                position === 'right' ? <div className='hidden'></div> : <></>
            }
            <div className={position == 'right' ? "rightlanguagesTabs" : "leftlanguagesTabs"}>
                {
                    Object.keys(content.languages[0]).map((key, index) => {
                        const isSelected = active === index
                        return (
                            <div key={index} className={`tab ${isSelected ? "tabactive" : ''}`} onClick={() => setActive(index)}>{key}</div>
                        )
                    })
                }
            </div>
            <div className={position == 'right' ? "rightcodeContent" : "leftcodeContent"}>
                <h5>{content.heading}</h5>
                <div className='innerSnippetcontent'>
                    {
                        Object.values(content.languages[0]).map((value, index) => {
                            const isSelected = active === index
                            return (
                                <div key={index} className={`content ${isSelected ? "contentActive" : ''}`} onClick={() => setActive(index)}>
                                    {
                                        value.includes('\n') ? value.split(' \n ').map((line, innerIndex) => <p key={innerIndex} className='paragraph'>{line}</p>) : <p className='paragraph'>{value}</p>
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default CodeSnippets
