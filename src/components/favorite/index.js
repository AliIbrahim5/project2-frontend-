import React from "react";
import axios from "axios";
import "./style.css"
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
const Favorite = () => {
  const navigate = useNavigate();
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
      const item = await axios.get( `http://localhost:5000/favv/${local.email}`);
      setAccount(item.data);
    }
   
  };

  // invoke functions getLocalStorage
  useEffect(() => {
    getLocalStorage();
    // eslint-disable-next-line
  }, []);

  // invoke functions getData 
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [local]);

  // Navigate to character info 
  const itemInfo = (name) => {
    console.log(name);
    navigate(`/character/name/${name}`);
  };


  // Remove from favorite
  const removeFavorite = (id) => {
    axios.put(`http://localhost:5000/removeFav/${local.email}/${id}`);
    getLocalStorage();
  };
  return (
  <>
        
      {account.length &&
        account.map((item, i) => {
          return (
            <div className="mohu1">
            <div className="cards1">
            <div className="devv1">
              <div onClick={() => itemInfo(item.name)}>
                {" "}
                <h1 className="info__name1">{item.name}</h1>
                <img src={item.img} alt="iphone" />
              </div>
              <button onClick={() => removeFavorite(item._id)}> Remove</button>
            </div>
             </div>
             </div>
          );
        })}
      {/* {account.length &&
      account.map((item,i)=>{
        <div key={i}>
          <h1>{item[0].name}</h1>
          <img src={item[0].img} alt="character"/>
        </div>
      }) } */}
      </>
     
  );
};

export default Favorite;