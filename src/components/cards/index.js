import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import "./style.css";

const Cards = () => {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);
  const [email, setEmail] = useState("");
  const [remAdd, setRemAdd] = useState([]);

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
  const user = JSON.parse(localStorage.getItem("newUser"));

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
  const getDataEmail = async () => {
    const item = await axios.get(
      `http://localhost:5000/alluse`
    );
    setRemAdd(item.data);
    
  };
  ///start
  const removeOrAdd = async (id) => {
    let test = [];

    remAdd.forEach((item) => {
      test.push(item._id);
    });

    if (test.includes(id)) {

      document.getElementById(`${id}`).innerHTML = "add";

      await axios.put(
        `http://localhost:5000/removeFav/${user.email}/${id}`
      );
    } else {

      document.getElementById(`${id}`).innerHTML = "remove";

      await axios.put(
        `http://localhost:5000/favorite/${user.email}/${id}`
      );
    }
    test = [];
    getDataEmail();
  };
////finsh


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

                        <h4 className="info__dac" >{item.dac}</h4>

                        <img src={item.img} alt="#" />

                        <p className="info__price">{item.price}SR</p>

                        <button className="info__button" id={item._id} onClick={() => removeOrAdd(item._id)}>add To cart</button>
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
