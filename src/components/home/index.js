import React from 'react'
import {Route,Routes} from "react-router-dom";

const Home = () => {
    return (
        <>
        <Routes>
        <Route path="/home" element={<Home/>}/>
       </Routes>
       </>
    )
}

export default Home
