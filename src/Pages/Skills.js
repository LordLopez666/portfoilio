import React from "react";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Skills() {
    return (
        <div id="skills" className="skills--section">
            <h2 className="skills--header white--text">These are some of the skills 
            I've been working on recently:</h2>
            <div className="skills--block">
                <div className="aligned">
                    <div className="react--icon"><img src="logo192.png" /></div>
                    <h2 className="white--text">React</h2>
                    </div>
                <div className="aligned">
                    <i className="fab fa-js icon--font"></i>
                    <h2 className="white--text">javaScript</h2>
                </div>
                <div className="aligned">
                    <i className="fa fa-html5 icon--font" aria-hidden="true"></i>
                    <h2 className="white--text">HTML</h2>
                </div>
                <div className="aligned">
                    <i className="fa fa-css3 icon--font" aria-hidden="true"></i>
                    <h2 className="white--text">CSS</h2>
                </div>
                <div className="aligned">
                    <i className="fa fa-wordpress icon--font" aria-hidden="true"></i>
                    <h2 className="white--text">WordPress</h2>
                </div>
                
            </div>
        </div>
    )
}