import React, { useState, useRef } from "react";
import './about.css'
import Skill from '../../skill_component/Skill.js'
import AboutMe from '../../about-me-component/AboutMe.js'

import background from '../../images/background/aboutMe/background.png'
import orangeWave from '../../images/background/aboutMe/orangeWave.png'
import greenWave from '../../images/background/aboutMe/greenWave.png'
import blueWave from '../../images/background/aboutMe/blueWave.png'

function About() {

    /*using the state hook to manipulate virtual DOM
    to change the state of the button by adding 
    the 'active' className if its true and 
    remove it if its false*/
    const [isViewSkills, setViewSkills] = useState(true);
    
    return (
        <div className="about-page-container">
            <div className="components-container">
                
                <div className="background-container">
                    
                    <div className="box about-me">
                        <button
                            className="btn-see-about-me"
                            onClick={() => setViewSkills(true)}>
                            See About Me
                        </button>
                    </div>

                    <div className="box skills">
                        <button
                            className="btn-see-skills"
                            onClick={() => setViewSkills(false)}>
                            See My Skills
                        </button>
                    </div>
                
                </div>

                <div className={isViewSkills ? "content-box" : "content-box active"}>
            
                    <div className="content about-me-content">
                        <AboutMe/>
                    </div>

                    <div className="content skills-content">
                        <Skill/>
                    </div>
            
                </div>

                
            </div>
    
        </div>
    )
}

export default About