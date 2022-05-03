import React from 'react'
import './card.css'
import '../project_modal/projectModal.css'
import { cardItems } from './cardItems.js'
import Modal from 'react-modal';
import { useState } from 'react'
import QMethodology from '../pages/projects/QMethodology_project/QMethodology'
import autoQsurvey from '../pages/projects/autoQsurvey_project/AutoQsurvey_project'

export default function Card (){
    
    const [modalIsOpen, setIsOpen] = useState(false)
    const [id, setId] = useState()
    const [project, setProject] = useState()

    const [projectName, setProjectName] = useState()
    const [subHeading, setSubHeading] = useState()
    const [introText, setIntroText] = useState()
    const [whatIDid, setWhatIDid] = useState()
    // const [image1, setImageOne] = useState()

    const openModal = (
        id,
        title,
        subHeading,
        intro,
        whatIDid,
        // image1
    ) => {
        setIsOpen(true)
        setId(id)
        setProjectName(title)
        setSubHeading(subHeading)
        setIntroText(intro)
        setWhatIDid(whatIDid)
        // setImageOne(image1)
        
        console.log(id)
        if (id === 1) {
            setProject(QMethodology)
        }
        if (id === 2) {
            setProject(autoQsurvey)
        }
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
                                item.id,
                                item.title,
                                item.subHeading,
                                item.intro,
                                item.whatIDid,
                                // item.image1
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
                    {project}
                    {/* <div className='project-grid-container'>
                        
                        <div className='col-one-container'>
                            <h2>{projectName}</h2>
                            <h3>{subHeading}</h3>
                            <p className='intro'>{introText}</p>
                            <p className='what-i-learned'>
                                <h4>What I've done</h4>
                                {whatIDid}
                            </p>
                        </div>

                        <div className='col-two-container'>
                            <img src={image1}/>
                        </div>

                        <div className='col-three-container'>
                            
                        </div>
                        
                    </div> */}
                    
                </Modal>
            </div>
            
        </div>
    )
    
}