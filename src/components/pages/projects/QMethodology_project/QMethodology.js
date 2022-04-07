import React from 'react'
import './qMethodology.css'
import one from '../../../images/qMethodology/1.PNG'
import two from '../../../images/qMethodology/2.gif'
import three from '../../../images/qMethodology/3.gif'
import four from '../../../images/qMethodology/4.PNG'
import five from '../../../images/qMethodology/5.PNG'
import six from '../../../images/qMethodology/6.PNG'
import seven from '../../../images/qMethodology/7.PNG'
import eight from '../../../images/qMethodology/8.PNG'
import nine from '../../../images/qMethodology/9.gif'
import ten from '../../../images/qMethodology/10.gif'


function QMethodology() {
    return (
        <div className='q-method-grid'>
            
            <div className='q-method-column-1'>
                
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
                <img className='img-1' src={one} />
                <img className='img-9' src={nine} />
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
                <img className='img-3' src={three} />
                <img className='img-4' src={four} />
                <img className='img-6' src={six}/>
            </div>
            
            
        </div>
    )
}

export default QMethodology