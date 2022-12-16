import "./singleuser.css"
import React from 'react'
import { BiEditAlt } from 'react-icons/bi';

const SingleUser = () => {

  return (
    <div className="singleUserContainer">
        <div className="singleUserWrapper">
            <div><BiEditAlt className="singleUserEdit"/></div>
            <div>
                <img src="https://www.bellanaija.com/wp-content/uploads/2015/01/MXaa41eH_400x400.jpeg" alt="user pic" 
                className="singleUserImg" />
            </div>
            <div className="singleUserText">
                <p>Name: James Ake</p>
                <p>Age: 20</p>
                <p>Hobby: Football</p>
            </div>
            <span className="deleteBtn">DELETE USER</span>
        </div>
    </div>
  )
}

export default SingleUser
