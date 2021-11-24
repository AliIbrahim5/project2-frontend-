import './App.css';
import React from 'react'
import {Route,Routes,Link} from "react-router-dom";
import Home from './components/Home';
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Regestier from './components/Regestier';

function logout(){
  localStorage.removeItem("newUser")
  window.location.reload(false);
}

function App() {
  return (

  <>

  <div className="container">
    <div className="link">
   <Link to="/home"><li><a href="#">Home</a></li></Link>
   /
   <Link to="/Regestier"><li><a href="#">Regestier</a></li></Link>
   /
   <Link to="/cards"><li><a href="#">cards</a></li></Link>
   /
   <Link to="/login"><li><a href="#">login</a></li></Link>
   /////
   <Link to="/favorite"><li><a href="#">favorite</a></li></Link>
   /
   </div>
   {localStorage.getItem("newUser")?
   <button onClick={() =>{logout();}}>logout</button>
   :
   ""
  }
   
  
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
