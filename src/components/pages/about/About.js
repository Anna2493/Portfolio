import React from "react";
import './about.css'
import orangeWave from '../../images/background/aboutMe/orangeWave.png'
import greenWave from '../../images/background/aboutMe/greenWave.png'
import blueWave from '../../images/background/aboutMe/blueWave.png'

function About() {
    return (
        <div className="about-page-container">
            <h2>Abut me</h2>

            <div className="about-me-container">  
                <div>
                <p>
                    My passion for software development sparked when I first 
                    encountered it, back in 2017. To me writing code is a creative process. 
                    It is taking an idea and developing it. That is what appealed to 
                    me the most - how I can use my creative side to write code.
                </p>
                </div>
                    
                <div>
                <p>    
                    I went to Edinburgh Napier University to pursue Software Development career. 
                    Most of what you see here on this website is a result of self-taught skills. 
                    I continue to learn and grow as a developer by seeking new challenges, 
                    solving coding problems and adding projects to my portfolio.
                </p>
                </div>

                <div>
                <p>
                    When I am not coding, I like to keep busy with my 
                    arts and crafts hobby. My favourite at the moment is scrapbooking. 
                    I love to design new layouts, mix and match colour schemes, 
                    and plan my next scrapbook project. When I am not doing any of that 
                    I spend time with my family. 
                </p>
                </div>
            </div>

    
            {/* <div className="background-image-container">
                <img className="orange-image" src={orangeWave} />
                <img className="green-image" src={greenWave} />
                <img className="blue-image" src={blueWave}/>
            </div> */}
            
            {/* <div className="body-container"> */}
                
                
            {/* </div> */}
            
        </div>
    )
}

export default About