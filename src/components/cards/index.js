import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import "./style.css";

const Cards = () => {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);
  const [email, setEmail] = useState("");

  const addtofavorite = () => {
    navigate("/favorite");
  };

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
    if (localStorage.getItem("newUser"))
      setEmail(localStorage.getItem("newUser"));
    else {
      Swal.fire({
        title: "To view the site, please login!",
        text: "After pressing ok, you will be directed to login",
        icon: "question",
        didClose: () => {
          navigate("/login");
        },
      });
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
                    <div className="mohu">
                    <div className="cards">
                      <div >
                        <h1 className="info__name">{item.name}</h1>

                        <h2 className="info__brand">Brand:{item.Brand}</h2>

                        <h4 className="info__dac">{item.dac}</h4>

                        <img src={item.img} alt="#" />

                        <p className="info__price">{item.price}SR</p>

                        <button className="info__button" onClick={addtofavorite}>add To cart</button>
                      </div>
                    </div>
                    </div>
                  );
                })}
           
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Cards;

{
  /* <p>you need to login</p> */
}
