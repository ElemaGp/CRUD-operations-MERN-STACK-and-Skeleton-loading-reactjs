import "./cards.css"
import React from 'react'

const Cards = () => {
    const peopleData = [
        {
            id: 1,
            name: "James Ake",
            age: 20,
            hobby: "Football",
            image: "https://www.bellanaija.com/wp-content/uploads/2015/01/MXaa41eH_400x400.jpeg",

        },
        {
            id: 2,
            name: "Sharon Ade",
            age: 22,
            hobby: "Piano",
            image: "https://media.theeverygirl.com/wp-content/uploads/2019/11/patrice-williams-headshot-theeverygirl.jpg",
        },
        {
            id: 3,
            name: "Helen Ola",
            age: 19,
            hobby: "Dancing",
            image: "https://i0.wp.com/misspetitenaijablog.com/wp-content/uploads/2018/06/Screen-Shot-2018-06-17-at-15.31.08.png?resize=487%2C512",
        },
        {
            id: 4,
            name: "Collins Emeka",
            age: 24,
            hobby: "Music",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLR1zJ3iH2Q_Utjracjg2j51TP24dYBmN01g&usqp=CAU",
        }
    ]

  return (
    <div className="cards">
    {
    peopleData.map(({id, name, age,  hobby, image})=>{ //i chose to destructure it here. Alternaltively, i could just put eg "person" in the bracket, and in the jsx below, write "person.title", "person.age" etc.
        return(
            <div className="card">
                <div className="imgWrapper">
                 <img src={image} alt="pictures" />
                </div>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <p>Hobby: {hobby}</p>
                <button>VIEW MORE</button>
            </div>
        )
    })
    
    }
    </div>
  )
}

export default Cards