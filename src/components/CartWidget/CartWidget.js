import React from 'react';
import './CartWidget.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';

function CartWidget(){
return(

<a className="navbar-brand mr-4 navbar-brand__cart align-middle ml-auto mr-3 order-lg-last" href="#">
  <i><AiOutlineShoppingCart /></i> 
   </a>
    );}

export default CartWidget;