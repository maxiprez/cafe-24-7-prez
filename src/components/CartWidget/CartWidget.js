import React from 'react';
import './CartWidget.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
function CartWidget(){
return(

<Link className="navbar-brand mr-4 navbar-brand__cart align-middle ml-auto mr-3 order-lg-last"  to={'/cart'}><a href="#">
  <i><AiOutlineShoppingCart /></i> 
   </a></Link>
    );}

export default CartWidget;