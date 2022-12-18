import "./singleuser.css"
import React, { useState } from 'react'
import { BiEditAlt } from 'react-icons/bi';
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const SingleUser = () => {
  const {id} = useParams();
  const [user, setUser] = useState("");
  const [errMessage, setErrMessage] = useState("");
  

  useEffect(()=>{
      getUser();
  },[])
  


  const getUser = async () =>{
    try{
      const response = await axios.get(`/users/find/${id}`);
      setUser(response.data);
  }catch(err){
    setErrMessage(err.response.statusText);
  }
  }

  return (
    <div className="singleUserContainer">
        <div className="singleUserWrapper">
            <div><BiEditAlt className="singleUserEdit"/></div>
            <div>
                <img src="https://www.bellanaija.com/wp-content/uploads/2015/01/MXaa41eH_400x400.jpeg" alt="user pic" 
                className="singleUserImg" />
            </div>
            <div className="singleUserText">
                <p>{user.name}</p>
                <p>{user.age}</p>
                <p>{user.hobby}</p>
            </div>
            <span className="deleteBtn">DELETE USER</span>
        </div>
    </div>
  )
}

export default SingleUser
