import React from 'react';
import './ItemDetail.css';
import CounterContainer from '../../containers/CounterContainer';

export default function ItemDetail({data}) {
    //console.log(data);
    return (
        
    <div className="modal fade" id={`card${data.id}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
        <div className="modal-header">
                    <h5 className="modal-title" >{data.title}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                   <div className="container">
                <div className="card card-modal mb-3" style={{maxWidth: "540px"}}>
                <div className="row no-gutters">
               
                    <div className="col-md-4">
                    <img src={data.pictureUrl} className="card-img-top h-100 card-img-top-detail"  alt={data.id}/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h4 className="card-title">{data.title}</h4>
                        <h5 className="card-text">Precio: {data.precio}</h5>
                        <ul>
                            <li>Roast Profile: {data.roastProfile}</li>
                            <li>Intensidad: {data.tastingNotes}</li>
                            <li>Origen: {data.origin}</li>
                        </ul>
                        <p className="card-text"><small className="text-muted">Impacto Social: {data.socialImpact}</small></p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        <div className="counter-container">
             <CounterContainer/>
        </div>
           




                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary btn-cerrar" data-dismiss="modal">Cerrar</button>
                  
                </div>





            </div>
        </div>
     </div>
    )
}
