import React from "react"

export default function MemeHeader() {
    return (
        <header className="meme--header">
            <img 
                src="./images/troll-face.png" 
                className="meme--header--image"
            />
            <h2 className="meme--header--title">Meme Generator</h2>
            
        </header>
    )
}