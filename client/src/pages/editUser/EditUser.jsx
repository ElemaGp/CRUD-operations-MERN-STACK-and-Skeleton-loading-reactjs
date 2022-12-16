import "./editUser.css"

import React, { useState } from 'react'

const EditUser = () => {
    const [name, setName] = useState(""); //i'll change these to have the value of the cariables as initial values
    const [age, setAge] = useState("");
    const [hobby, setHobby] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
    }

  return (
    <div className="editContainer">
        <div className="editWrapper">
            <form className="editForm" onSubmit={handleSubmit}>

                <img src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg" 
                alt="user pic" 
                className="editImg"
                />
                
                <div className="eachContainer">
                    <label htmlFor="name">NAME:</label>
                    <input id="name" 
                    type="text"
                    value={name} 
                    onChange={(e)=>setName(e.target.value)}
                    />
                </div>

                <div className="eachContainer">
                    <label htmlFor="age">AGE:</label>
                    <input id="age" 
                    type="number"
                    value={age} 
                    onChange={(e)=>setAge(e.target.value)}
                    />
                </div>

                <div className="eachContainer">
                    <label htmlFor="hobby">HOBBY:</label>
                    <input id="hobby" 
                    type="text"
                    value={hobby} 
                    onChange={(e)=>setHobby(e.target.value)}
                    />
                </div>

                <button className="editBtn">EDIT USER</button>

            </form>
        </div>
    </div>
  )
}

export default EditUser
