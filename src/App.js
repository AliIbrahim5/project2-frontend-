import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cards from "./components/Cards";
import Login from "./components/Login";
import Regestier from "./components/Regestier";
import Favorite from "./components/Favorite";
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
