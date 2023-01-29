import "./create.css"
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

//toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Create = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [hobby, setHobby] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();



    const handleSubmit = async (e) =>{
        e.preventDefault();

        try{
            await axios.post("auth/register", { name, age, hobby });
            setSuccessMessage("New User Created"); 
            notify();
            // navigate("/"); //comment out this "navigate" function if you want to see the toastify alert in the component.
        }catch(err){
            console.log("there's an error");
        }
    }

    const notify = () => {
        toast(successMessage, {     //you can also directly write the alert you want to display as a string in the bracket.
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        }); 
    }

  return (
    <div className="createContainer">
        <div className="createWrapper">
            <form className="createForm" onSubmit={handleSubmit}>

                <img src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg" 
                alt="user pic" 
                className="createImg"
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

                <button className="createBtn">CREATE USER</button>
                <div>{successMessage}</div>

            </form>
        </div>
        <ToastContainer /> {/*you can also style this toast container component if you want it to affect all the toast alerts in this component (unless you then style that alert seperately) */}
    </div>
  )
}

export default Create
