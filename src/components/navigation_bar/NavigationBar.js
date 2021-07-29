import React, { Component } from 'react'
import { NavigationItems } from './NavigationItems'
import './NavigationBar.css'

class NavigationBar extends Component {
    render() {
        return (
            <nav className='nav-items'>
                
                <ul className='nav-menu'>
                    {NavigationItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.className} href={item.url}>
                                    {item.label}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default NavigationBar