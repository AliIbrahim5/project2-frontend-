import './App.css';
import React from 'react'
import {Route,Routes,Link} from "react-router-dom";
import Home from './components/home';
import Cards from './components//cards';
import Navbar from './components/navbar';


function App() {
  return (

  <>
    <Cards/>
   <Link to="/home">home</Link>
   <Link to="/login">login</Link>
   <Link to="/favorite">favorite</Link>
   {/* <Link to="/home">home</Link>
   <Link to="/home">home</Link>
   <Link to="/home">home</Link> */}

   </>

  
   



  
  )



}


export default App;
