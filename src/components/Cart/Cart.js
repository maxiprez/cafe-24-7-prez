import React,{ useContext } from 'react';
import { FaTrashAlt, FaPlus, FaMinus } from "react-icons/fa";
import { CartContext } from '../../context/CartContext';
import './Cart.css'


export default function Cart({ itemSale }) {

const { updateToCart, handleRemove } = useContext(CartContext);
console.log('Se agregaron al cart:', itemSale.cantidad);


function onIncrementcantidad(){
    const newItem = {
        id: itemSale.id,
        titulo: itemSale.titulo,
        precio: itemSale.precio,
        cantidad: itemSale.cantidad + 1
   }
   console.log(newItem);
   updateToCart(newItem);
}

function onDecrementcantidad(){
    const newItem = {
         id: itemSale.id,
         titulo: itemSale.titulo,
         precio: itemSale.precio,
         cantidad: itemSale.cantidad - 1 
 }
  console.log(newItem);
  updateToCart(newItem);
}

let subTotal = (itemSale.precio * itemSale.cantidad);

    return (
      <>
        <tr>
                <th>{itemSale.titulo}</th>
                <td className="container-plus-minus row">
                    {
                    itemSale.cantidad > 1 ? <button onClick={onDecrementcantidad}  className="btn btn-danger btn-xs mr-2"><FaMinus /></button> : <button className="btn btn-danger btn-xs mr-2" disabled><FaMinus /></button>
                    }
                    <span className="text-center">{itemSale.cantidad}</span>
                    {
                    itemSale.cantidad < 5 ? <button onClick={onIncrementcantidad}  className="btn btn-success btn-xs ml-2"><FaPlus /></button> : <button className="btn btn-success btn-xs ml-2" disabled><FaPlus /></button>
                    } 
                </td>
                <td>
                    
                    <button onClick={() => handleRemove(itemSale.id)} className="action-button-del">
                    <i><FaTrashAlt /></i> 
                    </button>
                </td>
                <td>$<span>{subTotal}</span></td>
            </tr>
      </>
    )
}
