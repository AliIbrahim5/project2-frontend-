import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import "./style.css";

const Cards = () => {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);
  const [email, setEmail] = useState("")

  const data = () => {
    // eslint-disable-next-line
    axios
      .get("http://localhost:5000/allcards")
      .then((dete) => {
        setCards(dete.data);
        // console.log(dete.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
      if(localStorage.getItem("newUser")) setEmail(localStorage.getItem("newUser"))
      else {
        Swal.fire({
            title: "To view the site, please login!",
            text: "After pressing ok, you will be directed to login",
            icon: "question",
            didClose: () => {
              navigate("/login");
            },
          })
      }

    data();
  }, []);



  return (
    <>
      {/* <Cards/> */}
      <div>
        {/* {console.log(cards)} */}
        {email ? (
          <>
            {cards.length &&
              cards.map((item) => {
                return (
                  <div className="cards">
                    <h1>{item.name}</h1>
                    <hr />
                    <h2>Brand:{item.Brand}</h2>
                    <hr />
                    <h4>{item.dac}</h4>
                    <hr />
                    <img src={item.img} alt="#" />
                    <hr />
                    <p>{item.price}SR</p>
                    <button>like</button>
                  </div>
                );
              })}
          </>
        ) : (
          <>
          </>
        )}
      </div>
    </>
  );
};

export default Cards;

{
  /* <p>you need to login</p> */
}
