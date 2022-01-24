import React from 'react'
import './style1.css';
import { NavLink } from 'react-router-dom'

const Cards = (props) => {
    return (
        <div className="col-md-4 col-10 mx-auto">
            <div className="cards">
            <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc}></img>
            <div className="card-body">
            <h5 className="card-title font-weight-bold text-dark">{props.title}</h5>
            <p className="card-text text-dark">{props.content}</p>
            </div> 
            </div>
        </div>
    )
}

export default Cards
