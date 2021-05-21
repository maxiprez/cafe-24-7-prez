import React, { useContext } from 'react'
import Cart from '../Cart/Cart';
import { CartContext } from '../../context/CartContext';

export default function CartList() {

    const { cart, clearCart, totalPrice } = useContext(CartContext);
    console.log(cart);
    
    

    if (cart.length === 0 ) return <h1 className="text-center">Tu carrito está vacío</h1>

    return (
        <>
          
            <table className="table table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Producto</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Eliminar</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(item => (
                        <Cart key={item.id} itemSale={item} />
                        
                    ))}
                </tbody>
                <tfoot>
                
                        <tr id="cart-footer">
                       
                            <td></td>
                            <td>
                                <button className="btn btn-danger btn-sm" id="vaciar-carrito" onClick={clearCart}>
                                    Vaciar Carrito
                                </button>
                            </td>
                            <td className="font-weight-bold">Total a abonar</td>
                            <td className="font-weight-bold">$<span>{totalPrice}</span></td>
                        </tr>
                    
                </tfoot>
            </table>
            
      
       </>
    )
}
