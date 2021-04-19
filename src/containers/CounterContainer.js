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

  function agregarCompra(){
      if (number > stock){
        alert('No hay stock suficiente');
      } else if(number === 0){
       alert('No se agregó ningún producto');
              }else{
                  alert("Se agregó correctamente");
              }
  }

        return(

        <div>
           <ItemCount  number = {number}
                     increment = {onIncrement}
                     decrement = {onDecrement}
                      agregar = {agregarCompra}/>
        </div>

        );

        

 
}

