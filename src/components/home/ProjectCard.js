import React from 'react'
import {Link} from 'react-router-dom'
import './ProjectCard.css'
import RunningLogo from '../img/spotifyRunning.jpg'
import VeloLogo from '../img/veloIcon.png'

function ProjectCard(props) {
    let pic
    if (props.name === "Spotify Running"){
        pic = RunningLogo
    } else {
        pic = VeloLogo
    }
    return (
        <div className="card-outer">
            <Link to={`/projects/${props.link}`}>
                <div className="card">
                    <div className="pic-container">
                        <img src={pic} className="card-pic"></img>
                    </div>
                    <div className="summary-container">
                        <h2>{props.name}</h2>
                        <p>awddddddddddddddd awddddddddddddddd </p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProjectCard
