import React, { useContext } from 'react';
import './CartWidget.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import  {  animateScroll as scroll } from "react-scroll";

function CartWidget(){
const { totalItems } = useContext(CartContext);


function scrollToTop(){
  scroll.scrollToTop(100);
}

return(
   <>
      <Link className="navbar-brand mr-4 navbar-brand__cart align-middle ml-auto mr-3 order-lg-last"  to={'/cart'} onClick={scrollToTop}>
        <i><AiOutlineShoppingCart /></i> 
        <span className="total-items-cart">{totalItems}</span>
      </Link>
   </>
    );
  }

export default CartWidget;