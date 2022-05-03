import React from "react"
import { useNavigate } from "react-router-dom"

export default function MemeHeader() {
    let navigate = useNavigate()
    return (
        <header className="meme--header">
            <img 
                src="./images/troll-face.png" 
                className="meme--header--image"
            />
            <h2 className="meme--header--title">Meme Generator</h2>
            <h2 className="back--home"
                onClick={() => {
                navigate("/")
            }}>Back to Home Page</h2>
        </header>
    )
}