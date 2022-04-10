
import React from "react";


//import ErrorPage from "./Pages/ErrorPage"
//import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom"
import Views from "./Views";


function App() {
  return (
   <Router>
   <Views />
   </Router>
  );
}

export default App;
