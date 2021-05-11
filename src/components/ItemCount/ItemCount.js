import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './ItemCount.css';
//import { CartContext } from '../../context/CartContext';


export default function ItemCount({ finalizarCompra, stock }){



const [number, setNumber] = useState(1);


function onIncrement (){
    if (number <= stock){
        setNumber(number + 1);
    }
};

function onDecrement ()  {
   
        setNumber(number <= 1 ? 1 : number - 1);
  
    
}

function addtoCart() {
    finalizarCompra(number);
    console.log(`se agregaron: ${number}`)
}

 function cantidad (){     
      if(number > stock){        
            return(
             <p className='noStock'>Stock insuficiente.</p>

  )     
 } else return (<p className='align-self-center'>Cantidad: {number}</p>)

 }


return(
<>
    <div className="text-center">
        <div >{cantidad(number)}</div>
            <button className="btn btn-danger btn-xs" onClick={onDecrement}> <FaMinus /> </button>
        <div className="btn-add-remove">
          {
           number > stock ? <button className="btn btn-success btn-xs ml-4" onClick={onIncrement} disabled> <FaPlus /> </button> :
            <button className="btn btn-success btn-xs ml-4" onClick={onIncrement}> <FaPlus /> </button>
           }
        </div> 
        <div className="btn-add-to-cart">
           {
           number > stock ? <button className="btn btn-primary btn-agregar-carrito mt-4 text-center" hidden>Agregar al Carrito</button> :
            <button className="btn btn-primary mt-4 btn-agregar-carrito text-center" onClick={addtoCart}>Agregar al Carrito</button> 
            }
           
        </div>
        <div> 
        
        </div>
    </div>
</>
);

}
