import React from 'react';
import './CartWidget.css';
import cart from './cart.svg'

function CartWidget(){
return(

<a className="navbar-brand mr-4 navbar-brand__cart align-middle ml-auto mr-3 order-lg-last" href="#">
   <img src={cart} alt="cart..." style={{width:"2rem"}}></img>
   </a>
    );  

}

export default CartWidget;