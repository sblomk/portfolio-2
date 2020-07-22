import React from 'react'
import './Current.css'
import Deedster from '../img/deedster.png'

export default function Current() {
    return (
        <div className="current-root" id="current-work">
            <div className="current-work-container">
                <h1>CURRENT WORK</h1>
                <div className="current-work-content">
                    <div className="current-work-text">
                        <h2>I'm doing my Master Thesis at <a href="https://www.deedster.com/" target="_blank"><span className="underline">Deedster!</span></a></h2>
                        <p>I'm working on how to increase user engagement with push notifications. My mission is to design push-strategies to enhance the User Experience to persuade and motivate increased engagement with the Deedster app. I will be conducting A/B testing and an engagement analysis from user behavioral data to determine an optimal strategy for their application.</p>
                    </div>
                    <div className="current-work-img">
                        <img src={Deedster} className="current-img" alt="Deedster"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
