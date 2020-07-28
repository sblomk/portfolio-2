import React from 'react'
import './Projects.css'
import ProjectCard from './ProjectCard'

export default function Projects() {
    return (
        <div className="projects-root" id="projects">
            <div className="projects-container">
                <h1>SELECTED PROJECTS</h1>
                <div className="card-container">
                    <ProjectCard link="spotify-running" name="Spotify Running"/>
                    <ProjectCard link="velo" name="Velo"/>
                </div>
            </div>
        </div>
    )
}
