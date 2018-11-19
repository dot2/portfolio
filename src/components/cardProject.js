import React from 'react'
import './contactSection.css'
import { Link } from 'react-router-dom';
import arrow from'../images/arrow-right.svg';


const CardProject = props => (
    <div className="Card projectCard">
        <img className="thumbnail" src={props.image} />
        <h3 >{props.title}</h3>
        <p>{props.text}</p>
        <div className="projectLink">
            View project
            <img src={arrow} alt="View project icon"/>
        </div>
    </div>
)

export default CardProject