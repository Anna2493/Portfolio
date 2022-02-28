import React from 'react'
import './card.css'
import {cardItems} from './cardItems.js'

export default function Card() {
    return (
        <div className='card-container'>
            <ul className='card-items'>
                {cardItems.map((item, index) => {
                    return (
                        <li className='card-item' key={index}>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <button>View Project</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}