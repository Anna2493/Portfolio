import React from 'react'
import './autoQsurvey_project.css'
import ImageSlider from '../../../image_slider/ImageSlider'
import { AutoQImages } from './AutoQImages'


function AutoQsurvey_project() {
    return (
        <div className='q-method-grid'>

            <div className='q-method-col1'>
                <div className='q-method-col1-row-1'>
                    <div className='q-method-title'>
                        <h1>autoQsurvey</h1>
                        <h1>Prototype</h1>
                        <h2>Honours Project</h2>
                    </div>
                </div>

                <div className='q-method-col1-row-2'>
                    <div className='q-method-description-container'>
                        <p>
                            This is a web application that I developed as part of
                            my honours project. The focus here was to improve upon
                            already existing piece of software, Q methodology digital
                            prototype application. I was dissatisfied with the resulting
                            prototype from the group project. Seeing the potential that
                            the Q-methodology had, I decided to take the challenge and
                            make the application better.
                        </p>
                    </div>
                </div>

                <div className='q-method-col1-row-3'>
                    <div className='q-method-what-ive-done-container'  style={{ background:`#6FC7B0`}}>
                        <h3>What I've done</h3>
                        <p>
                            I have built the application from scratch instead of
                            building on top of the existing prototype. This decision was
                            made based on how the back end was developed in the group
                            project prototype, and since I wanted to develop a full stack
                            application, I decided to go with Node JS for the back end,
                            something I was familiar with. I found my self a client and
                            along with them I constructed a list of requirements.
                            Each requirement was prioritised using a MoSCoW method.
                            The prototype was closely developed with the client to ensure
                            it meets their needs. The application prototype source code is
                            here https://github.com/Anna2493/auto-q-survey and is
                            deployed on Heroku servers and can be found here
                            https://auto-q-survey-web.herokuapp.com/
                        </p>
                    </div>
                </div>
            </div>

            <div className='q-method-col2'>
                <div className='q-method-col2-row-1'></div>
                
                <div className='q-method-col2-row-2'>
                    <div className='list-container'  style={{ background:`#6FC7B0`}}>
                     <h3>What I've Learned</h3>
                        <ul>
                            <li>mySQL</li>
                            <li>Node JS</li>
                            <li>Working with a client</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='q-method-col3'>
                <div className='images-container'>
                    <ImageSlider image={AutoQImages}/>  
                </div>
            </div>
            
        </div>
        
    )
}

export default AutoQsurvey_project