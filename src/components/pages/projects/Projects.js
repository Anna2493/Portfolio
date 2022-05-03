import React from 'react'
import './projects.css'
import Card from '../../card_component/Card.js'

import Modal from 'react-modal';
import { useState } from 'react'
import '../../project_modal/projectModal.css'


function Projects() {
    const [modalIsOpen, setIsOpen] = useState(false)

    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)

    return (
        <div className='projects-page-container'>
            <div className='projects-heading-container'>
                <h1>Projects</h1>
            </div>
            <div className='cards-container'>
                <Card/>
            </div>
        </div>
    )
}

export default Projects;