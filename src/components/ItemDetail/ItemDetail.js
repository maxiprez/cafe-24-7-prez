import React from 'react';
import CounterContainer from '../../containers/CounterContainer/CounterContainer';
import './ItemDetail.css';
import CardTutorial from '../CardTutorial/CardTutorial'



export default function ItemDetail({id, title, precio, roastProfile, tastingNotes, pictureUrl, origin, socialImpact}) {
   
    return (
         

    <div className="container-cards">       
        <CardTutorial/>

        {/* <h1 className="text-center mt-4">Detalle del producto: {id}</h1> */}
          <div className="container-fluid">
            
                <div className="card card-modal mb-3 ml-auto col-6" style={{maxWidth: "540px"}}>

                    <div className="row no-gutters">
                        <div className="col-md-4">
                        <img src={pictureUrl} className="card-img-top h-100 card-img-top-detail"  alt={id}/>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h4 className="card-title">{title}</h4>
                            <h5 className="card-text">Precio: {precio}</h5>
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
                        <CounterContainer/>
                    </div>
                </div>
                      
            </div>
        
        
      
       </div>    


  )
}
