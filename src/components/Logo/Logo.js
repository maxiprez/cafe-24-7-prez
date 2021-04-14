import React from 'react';
import './Logo.css';
import logo from './24_7cafe-logo.png';





function Logo (){

return(
    <a className="navbar-brand" href="#">
      <img src={logo} alt="logo..." style={{width:"5rem"}}></img>
    </a>

);

}

export default Logo;