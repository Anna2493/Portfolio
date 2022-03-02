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

    const openModal = (dupa, subHeading) => {
        setIsOpen(true)
        setProjectName(dupa)
        setSubHeading(subHeading)
    }
    const closeModal = () => setIsOpen(false)

    

    //const projectName = ""
   
    return (
        <div className='card-container'>
            <ul className='card-items'>
                {cardItems.map((item, index) => {    
                    return (
                        <li className='card-item' key={index}>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <button onClick={() => openModal(item.title, item.subHeading)}>
                                View Project
                            </button>
                        </li>
                    )
                })}
            </ul>
           
            <div>
                <Modal className='modal' isOpen={modalIsOpen} onRequestClose={closeModal} ariaHideApp={false}>
                    <div>
                        <h4>{projectName}</h4>
                        <h4>{subHeading}</h4>
                    </div>
                    
                </Modal>
            </div>
            
        </div>
    )
    
}