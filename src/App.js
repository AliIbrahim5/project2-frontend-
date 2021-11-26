import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Regestier from "./components/Regestier";
import Favorite from "./components/Favorite";



function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Cards" element={<Cards />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/Regestier" element={<Regestier />} />
        <Route path="/Favorite" element={<Favorite />} />
      </Routes>
    </>
  );
}

export default App;
