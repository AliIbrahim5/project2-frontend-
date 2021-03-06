import React from "react";
import axios from "axios";
import "./style.css"
// import {useNavigate} from "react-router";
import {useState, useEffect} from "react";

const Favorite = () => {
    // const navigate = useNavigate();
    const [account, setAccount] = useState([]);
    const [local, setLocal] = useState([]);

    // Get email from localStorage
    const getLocalStorage = async () => {
        const item = await JSON.parse(localStorage.getItem("newUser"));
        setLocal(item);
    };

    // Get info the character base on email from backend
    const getData = async () => {
        if (local) {
            const item = await axios.get(`https://mersall.herokuapp.com/favv/${local.email}`);
            setAccount(item.data);
        }

    };

    
    useEffect(() => {
        getLocalStorage();
        // eslint-disable-next-line
    }, []);

  
    useEffect(() => {
        getData();
        // eslint-disable-next-line
    }, [local]);

    


    // Remove  favorite
    const removeFavorite = (id) => {
        axios.put(`https://mersall.herokuapp.com/removeFav/${local.email}/${id}`);
        getLocalStorage();
    };
    return (
        <section className={"cards-section"}>
            <div className="cards-container">
                {account.length > 0 &&
                account.map((item, i) => {
                    return (
                        <div className="card">
                            <img src={item.img} alt="#" className="card-imag"/>
                            <div className="card-details">
                                <h2 className="info__name">{item.name}</h2>
                                <p className="info__price">{item.price} <span>SR</span></p>
                                <button className={"info__button"} onClick={() => removeFavorite(item._id)}> Remove</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>

    );
};

export default Favorite;