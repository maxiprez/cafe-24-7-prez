import React, { useState } from 'react';
import CounterContainer from '../../containers/CounterContainer/CounterContainer';
import './ItemDetail.css';
import CardTutorial from '../CardTutorial/CardTutorial'
import { useHistory } from 'react-router-dom';

export default function ItemDetail({id, title, precio, category, roastProfile, tastingNotes, pictureUrl, origin, socialImpact}) {
  const history = useHistory();

  const onAdd = {
    title: title,
    precio: precio, 
    category: category,
    origin: origin,
 }


 const [show, setShow] = useState (true);

 let quantityBuy;

 function finishButton (quantity){

 setShow({
     hidden: true
 });

quantityBuy = quantity;

onAdd.quantity = quantityBuy;

}



return (
         

    <div className="container-cards">       
        <CardTutorial/>

        {/* <h1 className="text-center mt-4">Detalle del producto: {id}</h1> */}
          <div className="container-fluid">
            
                <div className="card card-modal mb-3 ml-auto col-6" style={{maxWidth: "540px"}}>

                    <div className="row no-gutters">
                        <div className="col-md-4">
                        <img src={pictureUrl} className="card-img-top h-100 card-img-top-detail"  alt= {id}/>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h4 className="card-title">{title}</h4>
                            <h5 className="card-text">Precio: {precio}</h5>
                            <h5 className="card-text">Categoría: {category}</h5>
                            <ul>
                                <li>Roast Profile: {roastProfile}</li>
                                <li>Intensidad: {tastingNotes}</li>
                                <li>Origen: {origin}</li>
                            </ul>
                            <p className="card-text"><small className="text-muted">Impacto Social: {socialImpact}</small></p>
                        </div>
                            
                        </div>
                       
                    </div>
                    <div className="counter-container">
                        <CounterContainer productName = {title} finalizarCompra = {finishButton} />
                      

                        <button hidden = {!show.hidden} onClick={() => history.push('/cart')} className="btn btn-danger btn-terminar-compra text-center mt-4">Terminar compra</button> 
                       
                            
                          
                        
                    </div>
                </div>
                      
            </div>
        
        
      
       </div>    


  )
}
