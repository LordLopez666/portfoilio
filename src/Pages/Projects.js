


import React from "react"
import { Link } from "react-router-dom"

export default function Projects() {
    return (
        
            <div id="projects" className="projects--section">
                
                <h2 className="projects--title">These are some of my projects</h2>
                
                <div className="current--projects">  
                    <Link to="/tenzies" className="img-hover-zoom--brightness img-hover-zoom projects--dimensions">
                        <img src="./images/projects-tenzies-img.png" alt="This zooms-in really well and smooth" />
                    </Link> 
                    
                    <Link to="/notes-app" className="img-hover-zoom--brightness projects--dimensions img-hover-zoom">
                        <img src="./images/projects-notes-img.png" alt="This zooms-in really well and smooth" />
                    </Link>
                    <Link to="/meme-generator" className="img-hover-zoom--brightness projects--dimensions img-hover-zoom">
                        
                            <img 
                                src="./images/projects-meme-image1.png" 
                                alt="This zooms-in really well and smooth" 
                                />
                        
                    </Link>
                </div>          
        </div>
    )
}