import React from 'react'
import './card.css'
import { Link } from 'react-router-dom';
import arrow from'../images/arrow-right.svg';


const ContactSection = props => (
    <div className="contactSection">
        <div className="contactInfo">
            <h2>Looking for a creator?</h2>
            <p>Let’s chat and see how I can provide value to your team or company.</p>
            <div className="btn">Contact me</div>
        </div>
    </div>
)

export default ContactSection