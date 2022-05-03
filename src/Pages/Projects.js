import React, { useState } from "react"
import { Link } from "react-router-dom"

import memesImg from "../images/projects-meme-image1.png"
import notesImg from "../images/projects-notes-img.png"
import tenziesImg from "../images/projects-tenzies-img.png"

export default function Projects() {
    const [isShown, setIsShown] = useState(false)
    const [isShown1, setIsShown1] = useState(false)
    const [isShown2, setIsShown2] = useState(false)
    
    return (
        <div id="projects" className="projects--section">            
            <h2 className="projects--title">These are some of my projects</h2>        
            <div className="current--projects">  
                    <div className="aligned">
                        <Link to="/tenzies" className="img-hover-zoom--brightness img-hover-zoom projects--dimensions">
                            <img 
                                onMouseEnter={() => setIsShown(true)}
                                onMouseLeave={() => setIsShown(false)}
                                src={tenziesImg} 
                                alt="This zooms-in really well and smooth" 
                            />
                        </Link> 
                        <h2 className="project--name" 
                            >
                            Tenzies Game
                        </h2>
                        {isShown && (
                        <div className="aligned white--background">
                            <h4>React, JSX, CSS</h4>
                            <ul>
                                <li>javaScript</li>
                                <li>useState, useEffect</li>
                                <li>react-confetti</li>
                                <li>nanoid</li>
                                
                            </ul>
                        </div>
                    )}  
                    </div>
                    <div className="aligned">
                        <Link to="/notes-app" className="img-hover-zoom--brightness projects--dimensions img-hover-zoom">
                            <img 
                                onMouseEnter={() => setIsShown1(true)}
                                onMouseLeave={() => setIsShown1(false)}
                                src={notesImg} 
                                alt="This zooms-in really well and smooth" 
                            />
                        </Link>
                        <h2 className="project--name">Notes App</h2>
                        {isShown1 && (
                        <div className="aligned white--background">
                            <h4>React, JSX, CSS</h4>
                            <ul>
                                <li>useState, useEffect</li>
                                <li>javaScript</li>
                                <li>nanoid</li>
                                <li>react-split</li>
                                <li>react-showdown</li>
                            </ul>
                        </div>
                    )} 
                    </div>      
                        
                    <div className="aligned">
                        <Link to="/meme-generator" className="img-hover-zoom--brightness projects--dimensions img-hover-zoom">
                            <img 
                                onMouseEnter={() => setIsShown2(true)}
                                onMouseLeave={() => setIsShown2(false)}
                                src={memesImg} 
                                alt="This zooms-in really well and smooth" /> 
                        </Link>
                        <h2 className="project--name">Meme Generator</h2>
                        {isShown2 && (
                        <div className="aligned white--background">
                            <h4>React, JSX, CSS</h4>
                            <ul>
                                <li>useState, useEffect</li>
                                <li>javaScript</li>
                                <li>API</li>
                                <li>JSON</li>
                                <li>fetch</li>
                            </ul>
                        </div>
                    )} 
                    </div>   
            </div>  
                  
        </div>
    )
}