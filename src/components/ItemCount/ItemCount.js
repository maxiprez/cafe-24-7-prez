import React from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './ItemCount.css';



export default function Counter({number, increment, decrement, agregar, cantidad}){

    
return(

    <div className="text-center">
        <div >{cantidad(number)}</div>
            <button className="btn btn-danger btn-xs" onClick={decrement}> <FaMinus /> </button>
        <div className="btn-add-remove">
          {
           number > 5 ? <button className="btn btn-success btn-xs ml-4" onClick={increment} disabled> <FaPlus /> </button> :
            <button className="btn btn-success btn-xs ml-4" onClick={increment}> <FaPlus /> </button>
           }
        </div> 
        <div className="btn-add-to-cart">
           {
           number > 5 ? <button className="btn btn-primary btn-agregar-carrito mt-4 text-center" hidden>Agregar al Carrito</button> :
            <button className="btn btn-primary mt-4 btn-agregar-carrito text-center" onClick={agregar}>Agregar al Carrito</button> 
            }
           
        </div>
        <div> 
        
        </div>
    </div>
    
);

}