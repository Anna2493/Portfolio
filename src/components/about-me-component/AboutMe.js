import React from 'react'
import './aboutMe.css'

function AboutMe() {
    return (
        <div className='about-me-container'>
            <div className='heading-container'>
                <h1>About Me</h1>
            </div>

            <div className="paragraph-wrapper">
                <div>
                    <p>
                        My passion for software development sparked when I
                        first encountered it, back in 2017. To me writing
                        code is a creative process. It is taking a concept
                        of an idea and turning it into a product. That is what appealed to me the most -
                        how I can use my creative side to write code.
                    </p>
                </div>
                        
                <div>
                    <p>    
                        I went to Edinburgh Napier University to pursue
                        Software Development career. Most of what you see
                        here on this website is a result of self-taught skills.
                        I continue to learn and grow as a developer by seeking new
                        challenges, solving coding problems and adding projects into
                        my portfolio.
                    </p>
                </div>
                    
                <div>
                    <p>
                        When I am not coding, I like to keep busy with my arts and
                        crafts hobby. My favourite at the moment is scrapbooking.
                        I love to design new layouts, mix and match colour schemes, 
                        and plan my next scrapbook project. When I am not doing any 
                        of that I spend time with my family. 
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default AboutMe