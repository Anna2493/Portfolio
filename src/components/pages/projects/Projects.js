import React from 'react'
import './projects.css'
import Card from '../../card_component/Card.js'

import Modal from 'react-modal';
import { useState } from 'react'
import '../../project_modal/projectModal.css'

import homePageAutoQsurvey from '../../images/autoQsurvey/home page.PNG'
import qMethodology from '../../images/qMethodology/home page.PNG'
import { Link, Route, Router } from 'react-router-dom';

function Projects() {
    const [modalIsOpen, setIsOpen] = useState(false)

    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)

    return (
            <div className='projects-page-container'>
                <h2>Projects</h2>
                <div className='cards-container'>
                    <Card/>
            </div>
            
            {/* <button onClick={openModal}>
                View Project
            </button>
                <Modal className='modal' isOpen={modalIsOpen} onRequestClose={closeModal}>
                    <h4>Modal</h4>
                </Modal>              */}
            </div>
    )
}

export default Projects;