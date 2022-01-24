
import React from 'react';
import './style1.css';
import { NavLink } from 'react-router-dom';
import web from '../src/Images/home.png'

const Commons=(props)=> {
  return (
 <section id="header" className="d-flex align-items-center">
 <div className="container fluid nav_bg">
 <div className="row">
 <div className="col-10 mx-auto">
 <div className="row">
 <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
 <h1>{props.name}</h1>
 <h4 className="my-3">
 Start learning how to do designs and create what is on your mind in digital world. We guarentee you will be on cloud 9 on your creative journey with us.
 </h4>
 <div className="mt-3">
 <NavLink to={props.visit} className="btn-get--started">{props.btnname}</NavLink>
 </div>
 </div>
 <div className="col-lg-6 order-1 order-lg-2 header-img">
   <img src={props.imgsrc} className="img-fluid animated"></img>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>
  );
}

export default Commons; 