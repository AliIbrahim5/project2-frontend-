import React from 'react'
import {Link} from "react-router-dom";
import "./style.css"
import {MdAccountCircle} from "react-icons/md";
import {FiLogOut} from "react-icons/fi";
import {BsFillCartFill} from "react-icons/bs";


function logout() {
    localStorage.removeItem("newUser");
    window.location.reload(false);
}

const Navbar = () => {
    return (
        <header className="navbar-header">
            <div className="container">
                <div className="grid-nav">
                    <h1 className="logo"><span>m</span>ersal</h1>
                    <div className="routes">
                        <ul className="route-list">
                            <li><Link to={"/home"} className="route-url">Home</Link></li>
                            <li><Link to="/cards">Cards</Link></li>
                        </ul>
                    </div>
                    <div className="account-icons">
                        <ul className="icons-list">
                            <li><Link to={"/Favorite"} className={"cart-icon"}><BsFillCartFill/></Link></li>
                            {localStorage.getItem("newUser") ?
                                <button onClick={logout} className="logout-btn"><FiLogOut/></button> :
                                <li><Link to={"/login"}><MdAccountCircle className={"login-btn"}/></Link></li>}</ul>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Navbar


// {<div className="container">
//   <div className="link">
//     <Link to="/home">
//       <a href="dddd">HOME</a>
//     </Link>
//
//     <Link to="/Regestier">
//       <li>
//         <a href="ffff">Sign Up</a>
//       </li>
//     </Link>
//
//     <Link to="/cards">
//       <li>
//         <a href="ddddd">
//           <RiPhoneFindFill />
//         </a>
//       </li>
//     </Link>
//
//     <Link to="/login">
//       <li>
//         <a href="ssss">
//           <RiLoginBoxFill />
//         </a>
//       </li>
//     </Link>
//
//     <Link to="/Favorite">
//       <li>
//         <a href="ssss">
//           <SiShopify />
//         </a>
//       </li>
//     </Link>
//     {localStorage.getItem("newUser") ? (
//         <button
//             onClick={() => {
//               logout();
//             }}
//         >
//           logout
//         </button>
//     ) : (
//         ""
//     )}
//   </div>
// </div>}