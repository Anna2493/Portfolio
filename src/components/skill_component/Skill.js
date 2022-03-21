import React from 'react'
import './skill.css'
import {skillItems} from './skillItems.js'

export default function Skill() {
    return (
        <div className='skill-container'>
            <div className='heading-wrapper'>
                <h1>What I can do</h1>
                {/* <p>Level of expirience</p> */}
            </div>
            <ul className='skill-items'>
                {skillItems.map((item,index) => {
                    return (
                        <li className='skill-item' key={index}>
                            <img src={item.icon} />
                            <p className='skill-name'>{item.skill}</p>
                            <p className='expirience-text' style={{ color:`${item.color}`}}>{item.expirience}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}