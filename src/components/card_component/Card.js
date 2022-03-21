import React from 'react'
import './card.css'
import '../project_modal/projectModal.css'
import { cardItems } from './cardItems.js'
import Modal from 'react-modal';
import { useState } from 'react'

export default function Card (){
    
    const [modalIsOpen, setIsOpen] = useState(false)
    const [projectName, setProjectName] = useState()
    const [subHeading, setSubHeading] = useState()
    const [introText, setIntroText] = useState()
    const [whatIDid, setWhatIDid] = useState()

    const openModal = (
        title,
        subHeading,
        intro,
        whatIDid,
    ) => {
        setIsOpen(true)
        setProjectName(title)
        setSubHeading(subHeading)
        setIntroText(intro)
        setWhatIDid(whatIDid)
    }
    const closeModal = () => setIsOpen(false)
   
    return (
        <div className='card-container'>
            <ul className='card-items'>
                {cardItems.map((item, index) => {    
                    return (
                        <li
                            className='card-item'
                            key={index}
                            onClick={() => openModal(
                                item.title,
                                item.subHeading,
                                item.intro,
                                item.whatIDid
                            )}
                        >
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <button>
                                View Project
                            </button>
                        </li>
                    )
                })}
            </ul>
           
            <div>
                <Modal
                    className='modal'
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    ariaHideApp={false}>
                    
                    <div className='project-grid-container'>
                        
                        <div className='col-one-container'>
                            <h2>{projectName}</h2>
                            <h3>{subHeading}</h3>
                            <p className='intro'>{introText}</p>
                            <p className='what-i-learned'>{whatIDid}</p>
                        </div>

                        <div className='col-two-container'>
                            
                        </div>

                        <div className='col-three-container'>
                            
                        </div>
                        
                    </div>
                    
                </Modal>
            </div>
            
        </div>
    )
    
}