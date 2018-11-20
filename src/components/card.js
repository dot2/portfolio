import React from 'react'
import arrow from'../images/arrow-right.svg';

import './card.css'

const Card = props => (
    <div className="Card">
        <img className="thumbnail" src={props.image} />
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        {/* <div className="hoverLaunch">
            <img src={arrow}/>
        </div> */}
    </div>
)

export default Card