import React from 'react'
import '../styles/nav.css'

export default function nav() {

    return (
        <div>
            <nav>
            <div className="nav-logo">
                <h4>Sebastian Blomkvist</h4>
            </div>
            <ul className="nav-links">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Projects</a>
                </li>
                <li>
                    <a href="#">About Me</a>
                </li>
            </ul>
            <div className="burger-menu">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
        </div>
    )
}
