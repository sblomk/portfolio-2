import React from 'react'
import './Home.css'
import Jumbo from '../components/home/Jumbo'
import Current from '../components/home/Current'
import Projects from '../components/home/Projects'
import About from '../components/home/About'


export default function Home() {
    return (
        <div className="container">
            <Jumbo />
            <Current />
            <Projects />
            <About />
        </div>
    )
}
