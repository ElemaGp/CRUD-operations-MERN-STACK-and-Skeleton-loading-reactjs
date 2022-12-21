import "./cards.css"
import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import CardSkeleton from "../../CardSkeleton";

const Cards = () => {
   const [users, setUsers] = useState("");
   const [errMessage, setErrMessage] = useState("");
   const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        getUsers();
      },[]); 

      const getUsers = async () =>{
        setIsLoading(true);
        try{
            const response = await axios.get("/users/");
            setUsers(response.data); 
            console.log(response); 
            setIsLoading(false);
        }catch(err){
            setErrMessage(err.response.statusText);
            console.log(err);
            setIsLoading(false);
        }
    }


  return (
  <div className="cardsContainer">
    <div className="cards">
    {isLoading && <CardSkeleton cards={8} />}
    {users &&
    users.map(({_id, name, age,  hobby, profilePic})=>{ //i chose to destructure it here. Alternaltively, i could just put eg "person" in the bracket, and in the jsx below, write "person.title", "person.age" etc.
        return(
            <div className="card" key={_id}>
                <div className="imgWrapper">
                 <img src={profilePic} alt="pictures" className="cardImage" />
                </div>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <p>Hobby: {hobby}</p>
                <Link to= {`/user/${_id}`}>
                  <button className="cardBtn">VIEW MORE</button>
                </Link>
            </div>
          
        )
    })
    
    }
    
    </div>
    {
    errMessage && 
    <div>{errMessage}</div>
    }
    <Link to="/create" className="createNewBtn"><span>CREATE NEW</span></Link>
  </div>
  )
}

export default Cards