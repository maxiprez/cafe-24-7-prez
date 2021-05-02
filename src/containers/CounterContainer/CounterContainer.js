import React, { useState } from 'react';
import ItemCount from '../../components/ItemCount/ItemCount';

export default function CounterContainer ({productName, finalizarCompra}){
 
//const finalizar = finish;
const [number, setNumber] = useState(1);
var stock = 5;

function onIncrement (){
    setNumber(number + 1);
}

function onDecrement ()  {
    setNumber(number < 1 ? 0 : number - 1);
}



function cantidad (){
     if(number > stock){
         return(
             <p className='noStock'>Stock insuficiente.</p>
         )
     } else return (<p className='align-self-center'>Cantidad: {number}</p>)

}

// function agregarCarrito (){
//     if(number === 0){
//         alert('no se pudo agregar nada');
//     } else return (console.log('termina tu compra'))
// }

function onAdd() {
    if (number !== 0){
        console.log (`Se agregaron: ${number} unidad/es de: ${productName} al carrito`)
        
       finalizarCompra(number);
    }
    else return (console.log('No se agregó ningún producto'));
   
}
 

        return(

        <div>
           <ItemCount   number = {number}
                     increment = {onIncrement}
                     decrement = {onDecrement}
                     cantidad  = {cantidad}
                      agregar = {onAdd}
                         />
        </div>

        );

 
        }

