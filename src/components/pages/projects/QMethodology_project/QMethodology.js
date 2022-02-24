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


function Project() {
    return (
        <div>

        {/* <div className='wrapper'> */}
        <div className='project-title-wrapper'>
            <div className='child'>
                <a className='project-page-title'>Q Methodology</a>
                <a className='project-page-sub-title'>Digital Prototype</a>
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
                <img src={one} alt='home page' className='medium-image'/>
            </div>
            <div className='text-one column-two'>
                Image 1
            </div>

            <div className='text-two column-one'>
                Image 2
            </div>
            <div className='column-two'>
                <img src={two} alt='home page' className='big-image'/>
            </div>
            
            <div className='column-one'>
                <img src={three} alt='home page' className='large-image'/>
            </div>    
            <div className='text-one column-two'>
                Image 3
            </div>
            
            <div className='text-two column-one'>
                Image 4
            </div>
            <div className='column-two'>
                <img src={four} alt='home page' className='medium-image'/>
            </div>

            <div className='column-one nested-grid'>
                <img src={five} alt='home page' className='medium-image'/>
                <img src={six} alt='home page' className='big-image'/>
            </div>
            <div className='text-one column-two'>
                Image 5 and 6
            </div>

            <div className='text-two column-one'>
                Image 7
            </div>
            <div className='column-two'>
                <img src={seven} alt='home page' className='small-image'/>
            </div>

            <div className='column-one nested-grid'>
                <img src={eight} alt='home page' className='medium-image' />
                <img src={nine} alt='home page' className='big-image'/>
            </div>
            <div className='text-one column-two'>
                Image 8 and 9
            </div>
            
            <div className='text-two column-one'>
                Image 10
            </div>
            <div className='column-two'>
                <img src={ten} alt='home page' className='large-image'/>
            </div>
            
            
            {/* <div className='text-two column-one'>
                column 1
            </div> */}
            {/* <div>
                <img src={ten} alt='home page'/>
            </div> */}
            </div>
           {/* </div>  */}
            {/* <div className='centered-grid'>
                <div className='box'>Box 1</div>
                <div className='box'>Box 2</div>
                <div className='box'>Box 3</div>
                <div className='box'>Box 4</div>
            </div> */}
    </div>
    )
}

export default Project