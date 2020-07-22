import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import SideNavToggle from './SideNavToggle'
import './Nav.css'

const Nav = props => (
    <header className="nav">
        <nav className="nav-content">
            <div className="nav-content-container">
                <div className="nav-logo">
                    <h4>Sebastian</h4>
                </div>
                <ul className="nav-links">
                    <HashLink style={{textDecoration: 'none'}} to="/#home" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end'})}>
                        <li><span>Home</span></li>
                    </HashLink>
                    <HashLink style={{textDecoration: 'none'}} to="/#projects" scroll={el => el.scrollIntoView({ behavior: 'smooth'})}>
                        <li><span>Projects</span></li>
                    </HashLink>
                    <HashLink style={{textDecoration: 'none'}} to="/#about" scroll={el => el.scrollIntoView({ behavior: 'smooth'})}> 
                        <li><span>About Me</span></li>
                    </HashLink>
                    <HashLink style={{textDecoration: 'none'}} to="/#contact" scroll={el => el.scrollIntoView({ behavior: 'smooth'})}> 
                        <li><span>Contact</span></li>
                    </HashLink>
                </ul>
                <div className="nav-burger">
                    <SideNavToggle click={props.sideNavClick} />
                </div>
            </div>
        </nav>
        
    </header>
)

export default Nav