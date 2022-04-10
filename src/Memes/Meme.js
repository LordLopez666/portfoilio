import React, { useRef } from "react"
import useDraggable from "./useDraggable.js"

const DraggableText = ({ children }) => {
    const textRef = useRef(null);
    useDraggable(textRef);
  
    return (
      <div className="meme--text" ref={textRef}>
        {children}
      </div>
    );
  };

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        topText2: "",
        bottomText: "",
        bottomText2: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemes, setAllMemes] = React.useState([])
    
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])
    
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }
    
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    
    return (
        <main className="meme--main">
            <p>Type whatever you'd like then drag the text to 
                where ever you'd like on the image.
            </p>
            <div className="meme--form">
                <input 
                    type="text"
                    placeholder="Text 1"
                    className="meme--form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Text 2"
                    className="meme--form--input"
                    name="topText2"
                    value={meme.topText2}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Text 3"
                    className="meme--form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Text 4"
                    className="meme--form--input"
                    name="bottomText2"
                    value={meme.bottomText2}
                    onChange={handleChange}
                />
                <button 
                    className="meme--form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <div meme--text--alignment>
                <DraggableText className="top1">{meme.topText}</DraggableText>
                <DraggableText className="top2">{meme.topText2}</DraggableText>
                <DraggableText className="bottom1">{meme.bottomText}</DraggableText>
                <DraggableText className="bottom2">{meme.bottomText2}</DraggableText>
                </div>
                <img src={meme.randomImage} className="meme--image" />
            </div>
        </main>
    )
}