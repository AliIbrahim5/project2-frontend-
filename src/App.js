import './App.css';
import React from 'react'
import {Route,Routes,Link} from "react-router-dom";
import {SiShopify}from "react-icons/si"
import{RiLoginBoxFill} from "react-icons/ri"
import {RiPhoneFindFill} from "react-icons/ri"
import {MdAppRegistration} from "react-icons/md"
import {HiHome} from "react-icons/hi"
import Home from './components/Home';
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Regestier from './components/Regestier';
import Favorite from './components/Favorite';

function logout(){
  localStorage.removeItem("newUser")
  window.location.reload(false);
}

function App() {
  return (

  <>

  <div className="container">
    <div className="link">
   <Link to="/home"><a href="#">HOME</a></Link>
   
   <Link to="/Regestier"><li><a href="#">Sign Up</a></li></Link>
   
   <Link to="/cards"><li><a href="#"><RiPhoneFindFill/></a></li></Link>
   
   <Link to="/login"><li><a href="#"><RiLoginBoxFill/></a></li></Link>
   
   <Link to="/Favorite"><li><a href="#"><SiShopify/></a></li></Link>
   {localStorage.getItem("newUser")?
   <button onClick={() =>{logout();}}>logout</button>
   :
   ""
  }
   </div>
 
   
  
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
        <Route path="/Favorite" element={<Favorite/>} />
   </Routes>

   </>

  
   



  
  )



}


export default App;
