import React from 'react'
import './autoQsurvey_project.css'
import one from '../../../images/autoQsurvey/1.PNG'
import ten from '../../../images/autoQsurvey/10.gif'
import eleven from '../../../images/autoQsurvey/11.gif'
import thirteen from '../../../images/autoQsurvey/13.gif'
import seventeen from '../../../images/autoQsurvey/17.gif'
import eighteen from '../../../images/autoQsurvey/18.PNG'
import nineteen from '../../../images/autoQsurvey/19.PNG'

import onePart from '../../../images/autoQsurvey/participant/1.PNG'
import twoPart from '../../../images/autoQsurvey/participant/2.gif'
import sevenPart from '../../../images/autoQsurvey/participant/7.gif'
import eightPart from '../../../images/autoQsurvey/participant/8.gif'
import ninePart from '../../../images/autoQsurvey/participant/9.PNG'

function AutoQsurvey_project() {
    return (
        <div className='auto-q-grid'>

            <div className='auto-q-row-1'>
                <div className='auto-q-column-1'>
                
                    <div className='auto-q-title'>
                        <h1>autoQsurvey</h1>
                        <h1>Prototype</h1>
                        <h2>Honours Project</h2>
                    </div>
                    
                    <div className='auto-q-description-container'>
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
                    

                    <div className='auto-q-what-ive-done-container'>
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

                <div className='auto-q-column-2'>
                    <div className='auto-q-c2-r1'>
                        <img className='auto-q-img-1' src={one} />
                    </div>

                    <div className='auto-q-c2-r2'>
                        <img className='auto-q-img-10' src={ten} />
                        <img className='auto-q-img-11' src={eleven} /> 
                    </div>
                </div>
            </div>

            <div className='auto-q-row-2'>
                <div>
                    <img className='auto-q-img-13' src={thirteen} /> 
                </div>

                <div>
                    <img className='auto-q-img-13' src={seventeen} /> 
                </div>

                <div>
                    <img className='auto-q-img-13' src={eighteen} /> 
                </div>

                <div>
                    <img className='auto-q-img-13' src={nineteen} /> 
                </div>
                
            </div>
            
        </div>
    )
}

export default AutoQsurvey_project