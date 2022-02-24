import React from 'react'
import './autoQsurvey_project.css'
import IMAGES from '../../../images/autoQsurvey/index.js'

function AutoQsurvey_project() {
    return (
        <div>

        <div className='project-title-wrapper'>
            <div className='child'>
                <a className='project-page-title'>autoQsurvey</a>
                <a className='project-page-sub-title'>Honours Project Prototype</a>
            </div>
            {/* <div className='project-description-wrapper'>
                <a className='project-description'> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.</a>  
            </div>  */}
        </div>       
        
        <div className='body-wrapper-grid'>
            
            <div className='column-one'>
                <img src={IMAGES[20]} alt='home page' className='large-image'/>
            </div>
            <div className='text-one column-two'>
                Home page
                </div>
                
                <div className='column-one'>
                <img src={IMAGES[1]} alt='home page' className='large-image'/>
            </div>
            <div className='text-one column-two'>
                Image 1
                </div>
                
                {/* <div className='column-one'>
                <img src={IMAGES[2]} alt='home page' className='medium-image'/>
            </div>
            <div className='text-one column-two'>
                Image 1
                </div> */}
                
                {/* <div className='column-one'>
                <img src={IMAGES[3]} alt='home page' className='medium-image'/>
            </div>
            <div className='text-one column-two'>
                Image 1
                </div> */}
                
                <div className='column-one'>
                <img src={IMAGES[4]} alt='home page' className='medium-image'/>
            </div>
            <div className='text-one column-two'>
                Image 2
                </div>
                <div className='column-one'>
                <img src={IMAGES[5]} alt='home page' className='xl-image'/>
            </div>
            
            
            {/* <div className='text-one column-two'>
                Image 1
                </div>
                <div className='column-one'>
                <img src={IMAGES[6]} alt='home page' className='medium-image'/>
            </div> */}
            {/* <div className='text-one column-two'>
                Image 3
                </div>
                <div className='column-one'>
                <img src={IMAGES[7]} alt='home page' className='medium-image'/>
            </div> */}
            
            
            <div className='text-one column-two'>
                Image 3
                </div>
                <div className='column-one'>
                    <div className='three-images'>
                        <img src={IMAGES[7]} alt='home page' className='medium-image' />
                        <img src={IMAGES[9]} alt='home page' className='medium-image'/>    
                        <img src={IMAGES[8]} alt='home page' className='medium-image to-the-top' />
                    
                    </div>
                </div>
                 <div className='text-one column-two'>
                Image 4, 5, and 6
                </div>
            {/* <div className='text-one column-two'>
                Image 9
                </div>
                <div className='column-one'>
                <img src={IMAGES[9]} alt='home page' className='medium-image'/>
            </div> */}
            
                
                
                
               
                <div className='column-one'>
                <img src={IMAGES[10]} alt='home page' className='medium-image'/>
            </div>
            <div className='text-one column-two'>
                Image 7
                </div>
                <div className='column-one'>
                <img src={IMAGES[11]} alt='home page' className='medium-image'/>
            </div>
            <div className='text-one column-two'>
                Image 1
                </div>
                <div className='column-one'>
                <img src={IMAGES[12]} alt='home page' className='medium-image'/>
            </div>
            <div className='text-one column-two'>
                Image 1
                </div>
                <div className='column-one'>
                <img src={IMAGES[13]} alt='home page' className='medium-image'/>
            </div>
            <div className='text-one column-two'>
                Image 1
                </div>
                <div className='column-one'>
                <img src={IMAGES[14]} alt='home page' className='medium-image'/>
            </div>
            <div className='text-one column-two'>
                Image 1
                </div>
                <div className='column-one'>
                <img src={IMAGES[15]} alt='home page' className='medium-image'/>
            </div>
            <div className='text-one column-two'>
                Image 1
                </div>
                <div className='column-one'>
                <img src={IMAGES[16]} alt='home page' className='medium-image'/>
            </div>
            <div className='text-one column-two'>
                Image 1
                </div>
                <div className='column-one'>
                <img src={IMAGES[17]} alt='home page' className='medium-image'/>
            </div>
            <div className='text-one column-two'>
                Image 1
                </div>
                <div className='column-one'>
                <img src={IMAGES[18]} alt='home page' className='medium-image'/>
            </div>
            <div className='text-one column-two'>
                Image 1
                </div>
                <div className='column-one'>
                <img src={IMAGES[19]} alt='home page' className='medium-image'/>
            </div>
            <div className='text-one column-two'>
                Image 1
            </div>

           
        </div>
        </div>
    )
}

export default AutoQsurvey_project