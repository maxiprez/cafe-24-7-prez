import React from 'react';
import './Logo.css';
import logo from './24_7cafe-logo.png';
import { Link } from 'react-router-dom';




function Logo (){



return(
    <Link to={'/'}><a className="navbar-brand" href="#">
    <img src={logo} alt="logo..." style={{width:"5rem"}}></img>
  </a></Link>

);

}

export default Logo;