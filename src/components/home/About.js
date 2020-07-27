import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import './About.css'
import EduIcon from '../img/education.svg'
import Linkedin from '../img/linkedin.svg'

export default function About() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const onNameChange = (e) => {
        setName(e.target.value)
        console.log(name)
    }

    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const onMessageChange = (e) => {
        setMessage(e.target.value)
    }

    const sendMessage = (event) =>{
        event.preventDefault()
        const templateParams = {
            from_name: name + " (" + email + ")",
            to_name: "sebbeblomkvist@gmail.com",
            feedback: message
        }
        emailjs.send("sebbeblomkvist_gmail_com", "portfolio_contact", templateParams, "user_R68NcwoJDXvDMLz7nD4W9")
            .then((result) => {
                console.log(result.text)
                notifySuccess()
            }, (error) => {
                console.log(error.text)
                notifyFail()
        })
        setName("")
        setEmail("")
        setMessage("")
    }

    const notifySuccess = () => {
        toast('Message Sent! I\'ll get back to you asap! ', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
    const notifyFail = () => toast("Something went wrong..");


    return (
        <div className="about-root" id="about">
            <div className="about-container">
                <h1>ABOUT ME</h1>
                <div className="education">
                    <h2>Education</h2>
                    <div className="education-content">
                        <img src={EduIcon} alt="Education KTH" className="education-icon" />
                        <div className="education-description">
                            <h3>KTH, Royal Institute of Technology | 2017 - June 2020</h3>
                            <p>MSE Interactive Media Technology - Human-computer Interaction, UX Design, and User Research</p>
                        </div>
                    </div>
                    <div className="education-content">
                        <img src={EduIcon} alt="Education KTH" className="education-icon" />
                        <div className="education-description">
                            <h3>KTH, Royal Institute of Technology | 2014 - 2017</h3>
                            <p>BS Media Technology - Interaction Design track</p>
                        </div>
                    </div>
                </div>
                <div className="skills">
                    <h2>Skills</h2>
                        <div className="skills-content">
                            <div className="ux-skills">
                                <h3>UX Methods</h3>
                                <p>Interviews</p>
                                <p>Cognitive walkthrough</p>
                                <p>Surveys</p>
                                <p>Contextual inquiry</p>
                                <p>Competitive analysis</p>
                                <p>Personas</p>
                                <p>Scenarios</p>
                                <p>Experience mapping</p>
                                <p>User flows</p>
                                <p>Wireframing</p>
                                <p>Hi-fi & lo-fi prototyping</p>
                                <p>Usability testing</p>
                                <p>Heuristic evaluation</p>
                                <p>A/B testing</p>
                                <p>Multivariate testing</p>
                            </div>
                            <div className="dev-other">
                                <div className="development">
                                    <h3>Development</h3>
                                    <p>HTML</p>
                                    <p>CSS</p>
                                    <p>Javascript</p>
                                    <p>JQuery</p>
                                    <p>React</p>
                                    <p>Python</p>
                                    <p>SQL</p>
                                </div>
                                <div className="other">
                                    <h3>Other</h3>
                                    <p>Persuasive design and communication</p>
                                    <p>Behavior change techniques</p>
                                    <p>Information architecture</p>
                                    <p>Cross-functional teams</p>
                                    <p>Google Analytics and BigQuery</p>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="contact" id="contact">
                    <h2>Say hi!</h2>
                    <div className="contact-info">
                        <p>You can add me on <a href="https://www.linkedin.com/in/sebastianblomkvist/" target="_blank" className="linkedin-link"><span className="underline">Linked</span><img src={Linkedin} alt="Linkedin" className="contact-linkedin"/></a> or send me an email at <span className="underline">sebastian@blomkvists.com</span>.</p>
                        <p>If you're in a hurry, you can just send me a message below!</p>
                    </div>
                    <div className="form">
                        <form id="contact-form" onSubmit={sendMessage} method="POST">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" value={name} onChange={onNameChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" aria-describedby="emailHelp" value={email} onChange={onEmailChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea className="form-control" rows="5" value={message} onChange={onMessageChange}></textarea>
                            </div>
                            <button type="submit" className="contact-btn">Send</button>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    )
}
