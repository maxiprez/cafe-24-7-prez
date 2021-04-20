import React, { useState } from 'react';
import ItemCount from '../components/ItemCount/ItemCount';

export default function CounterContainer (props){

const [number, setNumber] = useState(1);
var stock = 5;

function onIncrement (){
    setNumber(number + 1);
}

function onDecrement ()  {
    setNumber(number < 1 ? 0 : number - 1);
}


function cantidad (){
     if(number > 5){
         return(
             <p className='noStock'>Stock insuficiente.</p>
         )
     } else return (<p className='align-self-center'>Cantidad: {number}</p>)

}

function agregarCarrito (){
    if(number === 0){
        alert('no se pudo agregar nada');
    } else{
       alert('agregado');
    }
}
 

        return(

        <div>
           <ItemCount   number = {number}
                     increment = {onIncrement}
                     decrement = {onDecrement}
                     cantidad  = {cantidad}
                      agregar = {agregarCarrito}/>
        </div>

        );

        

 
}

