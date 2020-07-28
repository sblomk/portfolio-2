import React from 'react'
import './ProjectDetails.css'

function ProjectDetails(e) {
    console.log(e.match.url)
    if (e.match.url === "/projects/spotify-running") {
        return (
            <div className="details-root">
                <div className="details-container">
                    <h1>SPOTIFY</h1>
                    <h1>SPOTIFY</h1>
                    <h1>SPOTIFY</h1>
                    <h1>SPOTIFY</h1>
                    <h1>SPOTIFY</h1>
                </div>
            </div>
        )
    }
    return (
        <div className="details-root">
            <div className="details-container">
                <h1>VELO</h1>
                <h1>VELO</h1>
                <h1>VELO</h1>
                <h1>VELO</h1>
                <h1>VELO</h1>
                <h1>VELO</h1>
                <h1>VELO</h1>
            </div>
        </div>
    )
}

export default ProjectDetails
