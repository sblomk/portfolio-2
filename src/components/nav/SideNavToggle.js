import React from 'react'

import './SideNavToggle.css'

const SideNavToggle = props => (
    <button className="toggle-side" onClick={props.click}>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
    </button>
)

export default SideNavToggle
