import React from 'react';
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo';


function Navbar() {
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
      <li className="nav-item"><a className="nav-link" href="#">Tienda</a></li>
      <li className="nav-item"><a className="nav-link" href="#">Empresa</a></li>
      <li className="nav-item"><a className="nav-link" href="#">Nosotros</a></li>
      <li className="nav-item"><a className="nav-link" href="#">Servicios</a></li>
      <li className="nav-item"><a className="nav-link" href="#">Contacto</a></li>
    </ul>
  
  </div>
 
  </div>
</nav>
    );
}

export default Navbar;
