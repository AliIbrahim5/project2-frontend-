import './App.css';
import React from 'react'
import {Route,Routes,Link} from "react-router-dom";
import Home from './components/Home';
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Regestier from './components/Regestier';


function App() {
  return (

  <>

  <div className="container">
   <Link to="/home">home</Link>
   /
   <Link to="/Regestier">Regestier</Link>
   /
   <Link to="/cards">Cards</Link>
   /
   <Link to="/login">login</Link>
   /////
   <Link to="/favorite">favorite</Link>
   /
   <button onClick={()=>{localStorage.removeItem("newUser")}}>logout</button>
   {/* <Link to="/home">home</Link>
   <Link to="/home">home</Link>
   <Link to="/home">home</Link> */}
   </div>

   <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Cards" element={<Cards/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Navbar" element={<Navbar/>} />
        <Route path="/Regestier" element={<Regestier/>} />
   </Routes>

   </>

  
   



  
  )



}


export default App;
