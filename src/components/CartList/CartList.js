import React, {useContext} from 'react'
import Cart from '../Cart/Cart';
import {CartContext} from '../../context/CartContext';

export default function CartList({ onRemove }) {

    const { cart, clearCart } = useContext(CartContext);
    console.log(cart)
    

    if (cart.length === 0 ) return <h1 className="text-center">Tu carrito está vacío</h1>

    return (
        <div>
          
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Producto</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Confirmar / Eliminar</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(item => (
                        <Cart key={item.id} itemSale={item} onRemove={onRemove}/>
                    ))}
                </tbody>
                <tfoot>
                
                        <tr id="footer-carrito">
                            <th></th>
                            <td></td>
                            <td>
                                <button className="btn btn-danger btn-sm" id="vaciar-carrito" onClick={clearCart}>
                                    Vaciar Carrito
                                </button>
                            </td>
                            <td className="font-weight-bold">Total a abonar</td>
                            <td className="font-weight-bold">$ <span>{}</span></td>
                        </tr>
                    
                </tfoot>
            </table>
            <p className="cart-remark">IMPORTANTE: Antes de continuar con su compra por favor confirme cada producto haciendo click en el check de cada uno.</p>
      
        </div>
    )
}
