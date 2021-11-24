import React from 'react'
import {Link} from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            
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
        </div>
    )
}

export default Navbar