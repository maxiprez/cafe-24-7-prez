import React from 'react';

import './ItemCount.css';

export default function Counter({number, increment, decrement, agregar, cantidad}){

return(
    <div>
        <div>{cantidad(number)}</div>
            <button className="btn btn-danger btn-xs" onClick={decrement}> - </button>
        <div className="btn-add-remove">
          {
           number > 5 ? <button className="btn btn-success btn-xs ml-4" onClick={increment} disabled> + </button> :
            <button className="btn btn-success btn-xs ml-4" onClick={increment}> + </button>
           }
        </div> 
        <div className="btn-add-to-cart">
           {
           number > 5 ? <button className="btn btn-primary mt-4 text-center" disabled>Agregar al carrito</button> :
            <button className="btn btn-primary mt-4 text-center" onClick={agregar}>Agregar al carrito</button>
             }
        </div>
    </div>
);

}