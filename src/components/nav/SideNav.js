import React from 'react'
import { Link } from 'react-router-dom'

import { HashLink } from 'react-router-hash-link'

import './SideNav.css'

const SideNav = props => {
    let sideNavClasses = 'side-nav'
    if (props.show) {
        sideNavClasses = 'side-nav open'
    }

    return (
    <nav className={sideNavClasses}>
        <ul>
            <HashLink style={{textDecoration: 'none', margin: '10%'}} to="/#home" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end'})} onClick={props.close}>
            <li><span>Home</span></li>
            </HashLink>
            <HashLink style={{textDecoration: 'none', margin: '10%'}} to="/#projects" scroll={el => el.scrollIntoView({ behavior: 'smooth'})} onClick={props.close}>
                <li><span>Projects</span></li>
            </HashLink>
            <HashLink style={{textDecoration: 'none', margin: '10%'}} to="/#about" scroll={el => el.scrollIntoView({ behavior: 'smooth'})} onClick={props.close}> 
                <li><span>About Me</span></li>
            </HashLink>
            <HashLink style={{textDecoration: 'none', margin: '10%'}} to="/#contact" scroll={el => el.scrollIntoView({ behavior: 'smooth'})} onClick={props.close}> 
                <li><span>Contact</span></li>
            </HashLink>
        </ul>
    </nav>
    )
}

export default SideNav