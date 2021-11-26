import React from "react";
import "./style.css"
import {useNavigate} from "react-router";
import {useState, useEffect} from "react";
import axios from "axios";

import Swal from "sweetalert2"
import {Link} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const getData = async () => {
        const items = await axios.get("http://localhost:5000/alluse");
        setUsers(items.data);
    };

    useEffect(() => {
        getData();
    }, []);

    const registerPage = () => {
        navigate("/Regestier");
    };

    const ckeck = (e) => {
        e.preventDefault();
        let ckeck = false;
        // eslint-disable-next-line
        users.map((item) => {
            if (item.email === email && item.password === password) {
                ckeck = true;
            }
        });
        if (ckeck) {
            try {
                localStorage.setItem(
                    "newUser",
                    JSON.stringify({email})
                );
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                })
                setInterval(() => {
                    window.location.reload(false);
                }, 1500);
                navigate("/cards");

            } catch (error) {
                console.log("error ", error);
            }

        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'email or password error!',
                footer: '<a href="">Why do I have this issue?</a>'
            })
            // let myWindow = window.open("", "", "width=500,height=500");
            // myWindow.document.write("<p> Wrong email or password </p>");
            // myWindow.focus();
        }
    };

    return (

        <section className="section-login vvv">
            <div className="login-box">
                <form onSubmit={ckeck} className={"form"}>
                    <div className="input-field">
                        <p>username</p>
                        <input type="text" name="email" placeholder="example@gmail.com"
                               onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="input-field">
                        <p>password</p>
                        <input type="password" name="password" placeholder="ex. 12345678"
                               onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <input type="submit" value="Login" className={"btn"}/>
                    <p><Link to="/Regestier" className={"register"}>Don't have an account ?</Link></p>
                </form>
            </div>
        </section>
    );
};

export default Login;
