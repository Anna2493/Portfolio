import React from 'react';
import './home.css'
import background from '../../images/homePage/background2.jpg'
import profilePic from '../../images/profilePic/squareProfilePic.jpg'

function Home() {
    return (
        <div className='landing-page-container'>
            
            <div className='introduction-container'>
                
                <div className='profile-picture-container'>
                    <img className='profile-picture' src={ profilePic }/>
                </div>

                <div className='hi-container'>
                    <h1 className='hi'>Hi..</h1>
                </div>
                
                <div className='introduction'>
                    <p>My name is
                        <span className='large-text'> Anna</span>
                       , I am a graduate
                        <span className='medium-text'> Software Engineer </span>
                        with a passion for
                        <span className='small-text'> front end </span>
                        design and implementation.
                        Take a look at some of my
                        <span className='small-text'> projects </span>
                        that I worked on.
                        If you like what you see and wish to
                        <span className='medium-text'> contact me </span>
                        please do not hesitate, I will be
                        <span className='large-text'> excited </span>
                        to hear from you!
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