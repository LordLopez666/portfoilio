import React from "react"
import emailjs from "emailjs-com"

export default function Contact() {
    function sendEmail(e) {
        e.preventDefault();
        
    emailjs.sendForm("gmail", "template_d2n873q", e.target, "xmfMs81-iGWlTwVbS")
        .then((result) => {
            console.log(result.text)
        }, (error) => {
            console.log(error.text)
        })
        e.target.reset()
    }

    return (
        <div>
            <div className="contact--section" id="contact">
                <form className="contact--form" onSubmit={sendEmail}>
                    <h1 className="white--text">Contact</h1>
                    <div className="form--elements">
                        <input
                            type="text"
                            placeholder="Name"
                            name="name"
                        />
                    </div>
                    <div className="form--elements">
                        <input
                            type="email"
                            placeholder="Your Email"
                            name="email"
                        />
                    </div>
                    <div className="form--elements">
                        <input type="subject" placeholder="Subject" name="subject"/>
                    </div>
                    <div className="form--elements">
                        <textarea 
                            placeholder="Message"
                            name="message"
                            className="email--message"
                        ></textarea>
                    </div>
                    <div className="form--elements">
                        <input type="submit" className="submit--btn" value="Send"></input>
                    </div>
                </form>
                
                <div className="contact--links">
                    <div>
                        <a href="https://www.linkedin.com/in/erick1op6z/">
                            <i class="fa fa-linkedin-square contact--icon--font" aria-hidden="true"></i>
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/LordLopez666">
                            <i class="fa fa-github contact--icon--font" aria-hidden="true"></i>
                        </a>
                    </div>
                    <div>
                        <a href="https://codepen.io/LordLopez">
                            <i class="fa fa-codepen contact--icon--font" aria-hidden="true"></i>
                        </a>
                    </div>
                    <div>
                        <a href="https://twitter.com/6LordLopez9">
                            <i class="fa fa-twitter-square contact--icon--font" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>  
                <p className="credits">Built and designed by Erick Lopez</p>     
            </div>
        </div>
    )
}