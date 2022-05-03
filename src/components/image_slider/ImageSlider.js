import React, { useState } from 'react'
import './imageSlider.css'
import {FaArrowCircleRight, FaArrowCircleLeft} from 'react-icons/fa'

const ImageSlider = (props) => {

    const [current, setCurrent] = useState(0) //sets current as 0
    const length = props.image.length //the length is 4 = [0, 1, 2, 3]

    const nextSlide = () => {
        //function to change to next image
        //setCurrent(current === length - 1 ? 0 : current + 1)
        
        //current starts at 0
        //IF    (current = 3) 
        //THEN  set current to 0
        //ELSE  add 1 to current 
        if (current === length - 1) {
            setCurrent(0)
        }
        else {
            setCurrent(current + 1)
        }
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)

        // if (current === 0) {
        //     length = length - 1
        // }
        // else {
        //     setCurrent(current - 1)
        // }
    }
    
    return (
        <div className='slider'>
            <div>
                <FaArrowCircleLeft className='left-arrow' onClick={prevSlide}/>
            </div>

            <div>
                {props.image.map((item, index) => {
                    return (
                        <div className='image-container' key={index}>
                            {index === current && (
                                <img src={item.img} alt="image" className='image' />
                            )}
                            
                        </div>
                    
                    )
                })}
            </div>

            <div>
               <FaArrowCircleRight className='right-arrow' onClick={nextSlide} /> 
            </div>
        </div>
    )
}

export default ImageSlider