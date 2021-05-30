import React from 'react';
import logo from '../../assets/img/24_7cafe-logo.png';
import { Link } from 'react-router-dom';
import {  animateScroll as scroll } from "react-scroll";



function Logo (){

function scrollToTop () {
  scroll.scrollToTop(100);
};

return(
  <>
    <Link to={'/'} className="navbar-brand" onClick={scrollToTop}>
      <img src={logo} alt="logo..." style={{width:"5rem"}}></img>
    </Link>
  </>
);

}

export default Logo;