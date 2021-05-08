import React, { useContext } from 'react'
import './CartPageContainer.css'
import { useHistory } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import CartList from '../../components/CartList/CartList';


export default function CartPageContainer() {
     const {cart, setCart} = useContext(CartContext);
     const history = useHistory();

     function handleRemove(id){
         const newcart = cart.filter((item) => item.id !== id);
         setCart(newcart);
     }
   
    return (
        <div className="text-center cart-page-container__title">
            {/* <h1 className="cart-page-container__title">Carrito de compras</h1> */}
            <div>
                <CartList  onRemove={handleRemove}/>
            </div>
            
            
            <button className="btn btn-primary btn-lg btn-back-to-products" onClick={() => history.push('/products')}>Volver a tienda</button>
        </div>
    )
}
