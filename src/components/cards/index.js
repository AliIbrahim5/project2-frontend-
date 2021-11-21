import {React,useState} from 'react'
import axios from 'axios'

const Cards = () => {
    const [cards, setCards] = useState([])
    
    const data = async()=>{
        const card = await axios.get('http://localhost:5000/allcards').then((dete)=>{
            setCards(dete.data)
            console.log(dete.data);
        })
    }
    
    // data()
    return (
        <div>
            Cards
        </div>
    )
}

export default Cards
