import React,{ useState, useContext } from 'react';
import { FaTrashAlt, FaRegCheckCircle, FaPlus, FaMinus } from "react-icons/fa";
import { CartContext } from '../../context/CartContext';
import './Cart.css'


export default function Cart({ itemSale, onRemove }) {

const [number, setNumber] = useState(itemSale.quantity);
const { updateToCart } = useContext(CartContext);

//Para probar:
if (isNaN(number)){
    console.log('No es un numero!');
}

function onIncrement(){
    setNumber(number + 1);
    itemSale.quantity = number;
}

function onDecrement(){
    setNumber(number - 1);
    itemSale.quantity = number;
}

const [show, setShow] = useState(false);

function updateQuantity(){
    const newItem = {
        id: itemSale.id,
        title: itemSale.title,
        precio: itemSale.precio,
        quantity: number
        
    };
    
    console.log(newItem);
    updateToCart(newItem);
    setShow({
        hidden: true
    });
}

let subTotal = itemSale.precio * number;

    return (
      <>
      <tr>
            <th scope="row">{itemSale.id}</th>
            <td>{itemSale.title}</td>
            <td className="container-plus-minus row">
                {
                 number > 1 ? <button onClick={onDecrement} hidden={show.hidden} className="btn btn-danger btn-xs mr-2"><FaMinus /></button> : <button className="btn btn-danger btn-xs mr-2" disabled><FaMinus /></button>
                }
                <span className="text-center">{number}</span>
                {
                 number < 5 ? <button onClick={onIncrement} hidden={show.hidden} className="btn btn-success btn-xs ml-2"><FaPlus /></button> : <button className="btn btn-success btn-xs ml-2" disabled><FaPlus /></button>
                }
            </td>
            <td>
                <button onClick={updateQuantity} className="action-button-ok"><i><FaRegCheckCircle/></i></button>
                <button onClick={() => onRemove(itemSale.id)} className="action-button-del">
                <i><FaTrashAlt /></i> 
                </button>
            </td>
            <td>$ <span>{subTotal}</span></td>
        </tr>
      </>
    )
}
