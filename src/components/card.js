import React from 'react'
import './card.css'

const Card = props => (
    <div className="Card">
        <img src={props.image} />
        <h2>{props.title}</h2>
        <p>{props.text}</p>
    </div>
)

export default Card