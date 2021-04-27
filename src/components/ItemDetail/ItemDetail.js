import React from 'react';
import './ItemDetail.css';
import CounterContainer from '../../containers/CounterContainer';


export default function ItemDetail({id, title, precio, roastProfile, tastingNotes, pictureUrl, origin, socialImpact}) {
    //console.log(data);
    return (
         

    <div>           
         <div className="container">

                <div className="card card-modal mb-3" style={{maxWidth: "540px"}}>

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

                </div>

            </div>
        <div className="counter-container">
             <CounterContainer />
        </div>
       </div>    


  )
}
