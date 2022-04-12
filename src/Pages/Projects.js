import React from "react"
import { Link } from "react-router-dom"
import memesImg from "../images/projects-meme-image1.png"
import notesImg from "../images/projects-notes-img.png"
import tenziesImg from "../images/projects-tenzies-img.png"

export default function Projects() {
    return (
        
            <div id="projects" className="projects--section">
                
                <h2 className="projects--title">These are some of my projects</h2>
                
                <div className="current--projects">  
                    <div className="aligned">
                        <Link to="/tenzies" className="img-hover-zoom--brightness img-hover-zoom projects--dimensions">
                            <img src={tenziesImg} alt="This zooms-in really well and smooth" />
                        </Link> 
                        <h2 className="project--name">Tenzies Game</h2>
                    </div>
                    <div className="aligned">
                        <Link to="/notes-app" className="img-hover-zoom--brightness projects--dimensions img-hover-zoom">
                            <img src={notesImg} alt="This zooms-in really well and smooth" />
                        </Link>
                        <h2 className="project--name">Notes App</h2>
                    </div>      
                        
                    <div className="aligned">
                        <Link to="/meme-generator" className="img-hover-zoom--brightness projects--dimensions img-hover-zoom">
                            <img 
                                src={memesImg} 
                                alt="This zooms-in really well and smooth" /> 
                        </Link>
                        <h2 className="project--name">Meme Generator</h2>
                    </div> 
                    
                
                </div>          
        </div>
    )
}