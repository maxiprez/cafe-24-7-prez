import React,{ useState, useContext } from 'react';
import { FaTrashAlt, FaRegCheckCircle, FaPlus, FaMinus } from "react-icons/fa";
import { CartContext } from '../../context/CartContext';
import './Cart.css'


export default function Cart({ itemSale, onRemove }) {

const { updateToCart } = useContext(CartContext);
console.log(itemSale.quantity);


function onIncrementQuantity(){
    const newItem = {
        id: itemSale.id,
        category: itemSale.category,
        precio: itemSale.precio,
        quantity: itemSale.quantity + 1
   }
   console.log(newItem);
   updateToCart(newItem);
}

function onDecrementQuantity(){
    const newItem = { id: itemSale.id,
    category: itemSale.category,
    precio: itemSale.precio,
    quantity: itemSale.quantity -1 
 }
  console.log(newItem);
  updateToCart(newItem);
}

let subTotal = (itemSale.precio*itemSale.quantity);

    return (
      <>
      <tr>
            <th scope="row">{itemSale.id}</th>
            <td>{itemSale.title}</td>
            <td className="container-plus-minus row">
                {
                 itemSale.quantity > 1 ? <button onClick={onDecrementQuantity}  className="btn btn-danger btn-xs mr-2"><FaMinus /></button> : <button className="btn btn-danger btn-xs mr-2" disabled><FaMinus /></button>
                }
                <span className="text-center">{itemSale.quantity}</span>
                {
                 itemSale.quantity < 5 ? <button onClick={onIncrementQuantity}  className="btn btn-success btn-xs ml-2"><FaPlus /></button> : <button className="btn btn-success btn-xs ml-2" disabled><FaPlus /></button>
                }
            </td>
            <td>
                
                <button onClick={() => onRemove(itemSale.id)} className="action-button-del">
                <i><FaTrashAlt /></i> 
                </button>
            </td>
            <td>$ <span>{subTotal}</span></td>
        </tr>
      </>
    )
}
