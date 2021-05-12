import React, { useContext } from 'react';
import './CartWidget.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {CartContext} from '../../context/CartContext';


function CartWidget(){
const { totalItems } = useContext(CartContext);

return(


<Link className="navbar-brand mr-4 navbar-brand__cart align-middle ml-auto mr-3 order-lg-last"  to={'/cart'}>
<span className="total-items-cart">{totalItems}</span>
 <i><AiOutlineShoppingCart /></i> 
  
</Link>

    );
  }

export default CartWidget;