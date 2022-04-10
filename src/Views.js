import React from "react";
import Header from "./Pages/Header"
import About from "./Pages/About"
import Skills from "./Pages/Skills"
import Projects from "./Pages/Projects"
import Contact from "./Pages/Contact"
import Tenzies from "./Tenzies/Tenzies";
import NotesApp from "./Notes/NotesApp";
import MemeApp from "./Memes/MemeApp";

import ErrorPage from "./Pages/ErrorPage"
//import { HashLink } from 'react-router-hash-link';
import { Routes, Route } from "react-router-dom"


function Views() {
  return (
   <div>
     <Routes>
         <Route 
         exact path="/" 
         element={
            <div>
                <Header />
                <About />
                <Projects />
                <Skills />
                <Contact />
            </div>  
         }>
         
         </Route>
         <Route path="/tenzies" element={<Tenzies />}></Route>
         <Route path="/notes-app" element={<NotesApp />}></Route>
         <Route path="/meme-generator" element={<MemeApp />}></Route>
         <Route path="*" element={<ErrorPage />}></Route>
     </Routes>
   </div>
  );
}

export default Views;