import React from 'react'
import './projects.css'
import Card from '../../card_component/Card.js'

import homePageAutoQsurvey from '../../images/autoQsurvey/home page.PNG'
import qMethodology from '../../images/qMethodology/home page.PNG'
import { Link, Route, Router } from 'react-router-dom';

function Projects() {
    return ( 
        <div className='projects-page-container'>
            <h2>Projects</h2>
            <div className='cards-container'>
                <Card/>
            </div>
            
        </div>
    )
}

export default Projects;