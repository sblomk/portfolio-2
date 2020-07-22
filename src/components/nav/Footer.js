import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <div className="footer">
            <div className="line"></div>
            <p>© Sebastian Blomkvist {(new Date().getFullYear())}</p>
        </div>
    )
}
