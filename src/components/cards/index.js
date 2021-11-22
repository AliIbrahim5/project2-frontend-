import React,{useState,useEffect} from 'react'
import axios from 'axios'
import "./style.css"

const Cards = () => {
    const [cards, setCards] = useState([])
    
    const data = async()=>{
        const card = await axios.get('http://localhost:5000/allcards').then((dete)=>{
            setCards(dete.data)
            // console.log(dete.data);
            
        })
    }

    useEffect(() => {
    data()
        
      
    }, [])
    
    
    return (
        <>
        <div>
        {/* {console.log(cards)} */}
       {cards.map((item)=>{

           return(

           <div className="cards">
               
              <h1>{item.name}</h1>
              <hr />
              <h2>Brand:{item.Brand}</h2>
              <hr />
              <h4>{item.dac}</h4>
              <hr />
              <img src={item.img} alt="#"/>
              <hr />
              <p>{item.price}</p>

              
            </div>

           
           )
       })}
       </div>
       </>
       
    )
}

export default Cards
