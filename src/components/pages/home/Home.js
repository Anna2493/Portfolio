import React from 'react';
import './home.css'
import background from '../../images/homePage/background2.jpg'
import profilePic from '../../images/profilePic/squareProfilePic.jpg'

function Home() {
    return (
        <div className='landing-page-container'>
            
            <div className='hi-container'>
                <h1 className='hi'>Hi..</h1>
            </div>
            
            <div className='introduction-container'>
                
                <div className='profile-picture-container'>
                    <img className='profile-picture' src={ profilePic }/>
                </div>
                
                <div className='introduction'>
                    <p>My name is Anna, I am a graduate Software Engineer
                    with a passion for front end design and implementation.
                    Take a look at some of my projects that I worked on.
                        If you like what you see and wish to contact me
                        please do not hesitate, I will be excited to hear from you!
                    </p>
                </div>
            
            </div>

            {/* <div className='navigation-container'>
                <ul className='nav-links'>
                    <li><a className='nav-link'>About Me</a></li>
                    <li><a className='nav-link'>Projects</a></li>
                    <li><a className='nav-link'>Contact Me</a></li>
                </ul>
            </div> */}
            
        </div>
    );
}

export default Home;