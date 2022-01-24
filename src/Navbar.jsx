import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import AssignmentIcon from '@material-ui/icons/Assignment';
import InfoIcon from '@material-ui/icons/Info';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import './style1.css';

const Navbar=()=>{
  return (
      <div className="container-fluid nav_bg">
      <div className='row'>
        <div className="col-10 mx-auto">
       
      <nav className="navbar navbar-expand-lg navbar-light n">
    
      <NavLink exact className="navbar-brand" to="/"> BeeDesigns </NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" 
      data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
      aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item active">
            <NavLink activeClassName="menu_active" className="nav-link" to="/">
             <HomeIcon></HomeIcon> Home </NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="menu_active" className="nav-link" to="/courses">
            <AssignmentIcon></AssignmentIcon> Courses</NavLink>
          </li>
          <li className="nav-item">
            <NavLink  activeClassName="menu_active"className="nav-link" to="/about">
            <InfoIcon></InfoIcon> About</NavLink>
          </li>
          <li className="nav-item">
          <NavLink  activeClassName="menu_active"className="nav-link" to="/contact">
          <RecentActorsIcon></RecentActorsIcon> Contact</NavLink>
        </li>
        </ul>
        
      </div>
    </nav>
    </div>
    </div>
    </div>
  );
};


export default Navbar;