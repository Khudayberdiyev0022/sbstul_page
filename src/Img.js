import React from 'react'
import dish4 from "./images/dish-4.jpg"
import dish5 from "./images/dish-5.jpg"
import dish6 from "./images/dish-6.jpg"
import './components/img.css'

const img = () => {
    return (
        <div>
            <div className="container">
                <img src={dish4} alt="card1" />
                <img src={dish5} alt="card2" />
                <img src={dish6} alt="card3" />
            </div>
        </div>
    )
}

export default img
