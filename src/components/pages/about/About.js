import React from "react";
import './about.css'
import orangeWave from '../../images/background/aboutMe/orangeWave.png'
import greenWave from '../../images/background/aboutMe/greenWave.png'
import blueWave from '../../images/background/aboutMe/blueWave.png'

function About() {
    return (
        <div className="about-page-container">
    
            <div className="background-image-container">
                <img className="orange-image" src={orangeWave} />
                <img className="green-image" src={greenWave} />
                <img className="blue-image" src={blueWave}/>
            </div>
            
            <div className="body-container">
                <h1>About Me</h1>
                <p>My name is Anna, I am a graduate Software Engineer
                    with a passion for front end design and implementation.
                    Take a look at some of my projects that I worked on.
                    If you like what you see and wish to contact me for more details
                    please do not hesitate, I will be excited to hear from you!
                </p>
            </div>
            
        </div>
    )
}

export default About