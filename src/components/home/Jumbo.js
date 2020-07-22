import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import './Jumbo.css'
import Arrow from '../img/pointing.svg' 
import Linkedin from '../img/linkedin.svg'
import Mail from '../img/mail.svg'

export default function Jumbo() {
    return (
        <div className="jumbo" id="home">
            <div className="jumbo-text">
                <h1>Hi! I'm Sebastian</h1><h2>I'm currently studying my last year at the Interactive Media Technology masters programme at KTH with a focus on <span className="ux"><span className="underline">UX Design</span>,</span> <span className="research"><span className="underline">User Research</span>,</span> <span className="frontend">and <span className="underline">Frontend Development</span>.</span></h2>
            </div>
            <div className="jumbo-button-container">
                <a href="https://www.linkedin.com/in/sebastianblomkvist/" target="_blank" className="jumbo-linkedin">
                    <img src={Linkedin} alt="down arrow"/>
                </a>
                <Link to="/#contact" scroll={el => el.scrollIntoView({ behavior: 'smooth'})}>
                    <img src={Mail} alt="down arrow" className="jumbo-email"/>
                </Link>
            </div>
            <div className="arrow-container">
                <Link to="/#current-work" scroll={el => el.scrollIntoView({ behavior: 'smooth'})}>
                    <img src={Arrow} alt="down arrow" className="down-arrow"/>
                </Link>
            </div>
        </div>
    )
}
