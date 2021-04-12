import React from 'react';
import './Navbar.css';
import logo from './24_7cafe-logo.png';
import cart from './cart.svg';



 function Navbar() {
    return (

<nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
        <img src={logo} alt="logo..." style={{width:"4.2rem"}}></img>
    </a>
    <a className="navbar-brand mr-4 navbar-brand__cart align-middle ml-auto mr-3 order-lg-last" href="#">
   <img src={cart} alt="cart..." style={{width:"2rem"}}></img>
   </a>
   
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse text-md-right text-center" id="collapsibleNavbar">

    <ul className="navbar-nav ">
      <li className="nav-item"><a className="nav-link" href="#">Café</a></li>
      <li className="nav-item"><a className="nav-link" href="#">Gift cards</a></li>
      <li className="nav-item"><a className="nav-link" href="#">Nosotros</a></li>
    </ul>
  
  </div>
 
  </div>
</nav>
    );
}

export default Navbar;
