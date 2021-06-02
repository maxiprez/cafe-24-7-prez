import React from 'react';
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
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
    <li><Link to={'/'} className="link-text"><a className="nav-link" href="#" onClick={scrollToTop}>Home</a></Link></li> 
    <li className="nav-item dropdown">
    <a className="nav-link" href="#" id="navbardrop" data-toggle="dropdown">
        Tienda <i><FaChevronDown /></i>
      </a>
      <div className="dropdown-menu text-center">
        <Link to={'/products'} className="link-text"><a className="dropdown-item nav-link" href="#" onClick={scrollToTop}>Todos</a></Link>  
        <Link to={'/products/Suave'} className="link-text"><a className="dropdown-item nav-link" href="#" onClick={scrollToTop}>Café Suave</a></Link>  
        <Link to={'/products/Medio'} className="link-text"><a className="dropdown-item nav-link" href="#" onClick={scrollToTop}>Café Medio</a></Link>
        <Link to={'/products/Intenso'} className="link-text"><a className="dropdown-item nav-link" href="#" onClick={scrollToTop}>Café Intenso</a></Link>
      </div>
    </li>
      
     
      <li><Link to={'/company'} className="link-text"><a className="nav-link" href="#" onClick={scrollToTop}>Empresa</a></Link></li> 
      <li><Link to={'/contact'} className="link-text"><a className="nav-link" href="#" onClick={scrollToTop}>Contacto</a></Link></li> 
    </ul>
  
  </div>
 
  </div>
</nav>
    );
}

export default Navbar;
