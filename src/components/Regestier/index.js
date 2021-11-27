import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./style.css"
import { useNavigate } from "react-router";
import {Link} from "react-router-dom";
const Regestier = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getData = async () => {
    const items = await axios.get("https://mersall.herokuapp.com/alluse");
    setUsers(items.data);
  };

  const ckeck = (e) => {
    e.preventDefault();

    let check = true;
    // eslint-disable-next-line
    users.map((item) => {
      if (item.email === email) {
        check = false;
      }
    });

    if (check) {
      try {
        axios.post("https://mersall.herokuapp.com/caeert", {
            username: username,
          email: email,
          password: password,
        });
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    } else {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Are you sure you are registered?',
        text: "Do you have an account",
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes I have',
        cancelButtonText: 'no I do not have',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Go to login',
            'Go to login',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'You must create an account',
            'To be able to enter',
            'error'
          )
        }
      })
      // let myWindow = window.open("", "", "width=200,height=100");
      // myWindow.document.write("<p> email existing</p>");
      // myWindow.focus();
      navigate("/");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // const loginPage = () => {
  //   navigate("/login");
  // };

  return (
      <section className="section-login vvv">
        <div className="login-box">
          <form onSubmit={ckeck} className={"form"}>
            <div className="input-field">
              <p>username</p>
              <input type="text" name="username" placeholder="ex.AliAlyahya"
                     onChange={(e) => setUserName(e.target.value)}/>
            </div>
            <div className="input-field">
              <p>Email</p>
              <input type="text" name="email" placeholder="example@gmail.com"
                     onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="input-field">
              <p>password</p>
              <input type="password" name="password" placeholder="ex.12345"
                     onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <input type="submit" value="Login" className={"btn"}/>
            <p><Link to="/login" className={"register"}>Already have an account ?</Link></p>
          </form>
        </div>
      </section>
    // <div className="fff">
    // <div className="reg">
    //   <form onSubmit={ckeck}>
    //     <input
    //       type="text"
    //       name="username"
    //       placeholder="username"
    //       onChange={(e) => setUserName(e.target.value)}
    //     />
    //     <input
    //       type="email"
    //       name="email"
    //       placeholder="email"
    //       onChange={(e) => setEmail(e.target.value)}
    //     />
    //     <input
    //       type="password"
    //       name="password"
    //       placeholder="password"
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //     <input type="submit" value="Register" />
    //   </form>
    //   <p onClick={loginPage}>Already have an account ?</p>
    // </div>
    // </div>
  );
};

export default Regestier;









// Regestier