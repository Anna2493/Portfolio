import React from 'react'
import './qMethodology.css'
import ImageSlider from '../../../image_slider/ImageSlider'
import { QMethodologyImages } from './QMethodologyImages'


function QMethodology() {
    return (
        <div className='q-method-grid'>

            <div className='q-method-col1'>
                <div className='q-method-col1-row-1'>
                    <div className='q-method-title'>
                        <h1>Q methodology</h1>
                        <h1>Digital Prototype</h1>
                        <h1>Application</h1>
                        <h2>Group Project</h2>
                    </div>
                </div>

                <div className='q-method-col1-row-2'>
                    <div className='q-method-description-container'>
                        <p>
                            One of the more exciting and hands on modules at university 
                            that I completed was a Group Project module. I had the opportunity 
                            to experience working within a team, starting project from scratch, 
                            cover all SDLC steps, and of course learn ReactJS, JavaScript, HTML and CSS.
                        </p>
                    </div>
                </div>

                <div className='q-method-col1-row-3'>
                    <div className='q-method-what-ive-done-container' style={{ background:`#C31934`}}>
                        <h3>What I've done</h3>
                        <p>
                            I developed a front end for this application. 
                            The UI might not be the most exciting but 
                            I am proud of what I achived given the large scope of this project, 
                            no previous expirience in the technology used, 
                            time scale and two addiotnal modules at university.
                        </p>
                    </div>
                </div>
            </div>

            <div className='q-method-col2'>
                <div className='q-method-col2-row-1'></div>
                
                <div className='q-method-col2-row-2'>
                    <div className='list-container' style={{ background:`#C31934`}}>
                     <h3>What I've Learned</h3>
                        <ul>
                            <li>Team working</li>
                            <li>Agile</li>
                            <li>Sprint planning</li>
                            <li>React JS</li>
                            <li>JavaScript</li>
                            <li>HTML + CSS</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='q-method-col3'>
                <div className='images-container'>
                    <ImageSlider image={QMethodologyImages}/>  
                </div>
            </div>
            
            {/* <div className='q-method-column-1'>
                
                <div className='q-method-title'>
                    <h1>Q methodology</h1>
                    <h1>Digital Prototype</h1>
                    <h1>Application</h1>
                    <h2>Group Project</h2>
                </div>
                
                <div className='q-method-description-container'>
                    <p>
                        One of the more exciting and hands on modules at university 
                        that I completed was a Group Project module. I had the opportunity 
                        to experience working within a team, starting project from scratch, 
                        cover all SDLC steps, and of course learn ReactJS, JavaScript, HTML and CSS.
                    </p>
                </div>
                

                <div className='q-method-what-ive-done-container'>
                    <h3>What I've done</h3>
                    <p>
                        I developed a front end for this application. 
                        The UI might not be the most exciting but 
                        I am proud of what I achived given the large scope of this project, 
                        no previous expirience in the technology used, 
                        time scale and two addiotnal modules at university.
                    </p>
                </div>
                
            </div>
            
            <div className='q-method-column-2'>
                <div className='list-container'>
                     <h3>What I've Learned</h3>
                        <ul>
                            <li>Team working</li>
                            <li>Agile</li>
                            <li>Sprint planning</li>
                            <li>React JS</li>
                            <li>JavaScript</li>
                            <li>HTML + CSS</li>
                        </ul>
                </div>
               
            </div>

            <div className='q-method-column-3'>

            </div> */}

        </div>
    )
}

export default QMethodology