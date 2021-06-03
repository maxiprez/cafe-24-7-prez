import React from 'react';
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo';
import { FaChevronDown } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import {  animateScroll as scroll } from "react-scroll";




function Navbar() {

  function scrollToTop () {
    scroll.scrollToTop(100);
  };


return (

<nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div className="container-fluid">
   
   <Logo />

  <CartWidget />
   
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse text-md-right text-center" id="collapsibleNavbar">

    <ul className="navbar-nav ">
    <li><NavLink activeClassName="active" to={'/home'} className="link-text nav-link" onClick={scrollToTop}>Home</NavLink></li> 
    <li className="nav-item dropdown">
    <Link className="nav-link" id="navbardrop" data-toggle="dropdown">
        Tienda <i><FaChevronDown /></i>
    </Link>
      <div className="dropdown-menu text-center">
        <Link to={'/products'} className="link-text dropdown-item nav-link" onClick={scrollToTop}>Todos</Link>  
        <Link to={'/products/Suave'} className="link-text dropdown-item nav-link" onClick={scrollToTop}>Café Suave</Link>  
        <Link to={'/products/Medio'} className="link-text dropdown-item nav-link" onClick={scrollToTop}>Café Medio</Link>
        <Link to={'/products/Intenso'} className="link-text dropdown-item nav-link" onClick={scrollToTop}>Café Intenso</Link>
      </div>
    </li>
      
     
      <li><NavLink activeClassName="active" to={'/company'} className="link-text nav-link" onClick={scrollToTop}>Empresa</NavLink></li> 
      <li><NavLink activeClassName="active" to={'/contact'} className="link-text nav-link" onClick={scrollToTop}>Contacto</NavLink></li> 
    </ul>
  
  </div>
 
  </div>
</nav>
    );
}

export default Navbar;
