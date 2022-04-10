import React from "react"

export default function Header() {
    return (
        <div>
            <nav className="nav--bar">
                <a href="#about" className="nav--text">About</a>
                <a href="#projects" className="nav--text">Projects</a>
                <a href="#skills" className="nav--text">Skills</a>
                <a href="#contact" className="nav--text">Contact</a>
            </nav>
            <header className="header--block">
                <div className="introduction">
                    <h2 className="hello--text">Hello my name is</h2> 
                    <h1 className="darkgray--text">Erick Lopez.</h1>
                    <h1 className="darkgray--text">I'm a Front-End Developer.</h1>
                    
                </div>
            </header>
        </div>
    )
}