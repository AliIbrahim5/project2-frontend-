import React, {useState, useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router";
import Swal from "sweetalert2";
import "./style.css";

const Cards = () => {
    const navigate = useNavigate();
    const [cards, setCards] = useState([]);
    const [email, setEmail] = useState("");
    const [remAdd, setRemAdd] = useState([]);

    // const addtofavorite = () => {
    //   navigate("/favorite");
    // };

    const data = () => {
        // eslint-disable-next-line
        axios
            .get("https://mersall.herokuapp.com/allcards")
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
        // eslint-disable-next-line
    }, []);

    const getDataEmail = async () => {
        const item = await axios.get(`https://mersall.herokuapp.com/alluse`);
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

            await axios.put(`https://mersall.herokuapp.com/removeFav/${user.email}/${id}`);
        } else {
            document.getElementById(`${id}`).innerHTML = "remove";

            await axios.put(`https://mersall.herokuapp.com/favorite/${user.email}/${id}`);
        }
        test = [];
        getDataEmail();
    };
    ////finsh

    return (
        <section className={"cards-section"}>
            {email ? (
                <div className="cards-container">
                    {cards.map((item) => {
                        return (
                            <div className="card" >
                                <img src={item.img} alt="#" className="card-imag"/>
                                <div className="card-details">
                                    <h2 className="info__name" >{item.name}</h2>
                                    <p className="info__price">{item.price} <span>SR</span></p>
                                    <p className="info__brand">Brand: <span>{item.Brand}</span></p>
                                    <p className="info__dac">{item.dac}</p>
                                    <button className="info__button" id={item._id} onClick={() => removeOrAdd(item._id)}>add To cart</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : ("")}
        </section>

    );
};

export default Cards;
