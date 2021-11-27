import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Cards from "./components/cards";
import Login from "./components/login";
import Regestier from "./components/Regestier";
import Favorite from "./components/favorite";
import Profile from "./components/Profile";
import Navbar from "./components/navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/Profile" element={<Profile />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/Cards" element={<Cards />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Regestier" element={<Regestier />} />
        <Route path="/Favorite" element={<Favorite />} />
      </Routes>
    </>
  );
}

export default App;
