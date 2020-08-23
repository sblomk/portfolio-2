import React from 'react'
import './Projects.css'
import ProjectCard from './ProjectCard'
import Data from './ProjectData'

export default function Projects() {
    console.log(Data)
    return (
        <div className="projects-root" id="projects">
            <div className="projects-container">
                <h1>SELECTED PROJECTS</h1>
                <div className="card-container">
                    {Data.map((project) => (
                        <ProjectCard link={project.link} name={project.name} desc={project.desc} />
                    ))}
                </div>
            </div>
        </div>
    )
}
