import React, { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import CardTutorial from '../CardTutorial/CardTutorial'
import { useHistory } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

export default function ItemDetail({ data }) {
  const history = useHistory();
  const { addToCart } = useContext(CartContext);

  
 const [show, setShow] = useState (true);

 let quantityBuy;

 function finishButton (quantity){

 setShow({
     hidden: true
 });

quantityBuy = quantity;
console.log('El valor del ItemCount es: ', quantityBuy);

productSelected();
}

function productSelected (){
    const newItem = {
        id: data.id,
        titulo: data.title,
        precio: data.precio,
        cantidad: quantityBuy
    };
    console.log(newItem);
    addToCart(newItem);
}


return (
         

    <div className="container-cards"  >       
        <CardTutorial/>

        
          <div className="container-fluid" id={data.id}>
            
                <div className="card card-modal mb-3" style={{maxWidth: "540px"}}>

                    <div className="row no-gutters">
                        <div className="col-md-4">
                        <img src={data.pictureUrl} className="card-img-top h-100 card-img-top-detail"  alt= {data.id}/>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h4 className="card-title">{data.title}</h4>
                            <h5 className="card-text">Precio: ${data.precio}</h5>
                            <h5 className="card-text">Categoría: {data.category}</h5>
                            <ul className="card-text-list">
                                <li>Roast Profile: {data.roastProfile}</li>
                                <li>Intensidad: {data.tastingNotes}</li>
                                <li>Origen: {data.origin}</li>
                            </ul>
                            <p className="card-text card-text-small"><small className="text-muted">Impacto Social: {data.socialImpact}</small></p>
                        </div>
                            
                        </div>
                       
                    </div>
                    <div className="counter-container">
                        <ItemCount  finalizarCompra = {finishButton} cantidadCompra ={quantityBuy}/>
                      
                        <button hidden = {!show.hidden} onClick={() => history.push('/cart')} className="btn btn-danger btn-terminar-compra text-center mt-4">Terminar compra</button> 
                   </div>
                </div>
            </div>
       </div>    


  )
}
