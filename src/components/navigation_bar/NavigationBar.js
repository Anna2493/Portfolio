import React, { Component } from 'react'
import { NavigationItems } from './NavigationItems'
import './NavigationBar.css'
import { Link } from 'react-router-dom';

class NavigationBar extends Component {
    render() {
        return (
            <nav className='nav-items'>
                
                <ul className='nav-menu'>
                    {NavigationItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.className} to={item.url}>
                                    
                                    {item.label}
                                    
                                </Link>
                                
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default NavigationBar