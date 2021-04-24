import React from 'react';
import './ItemDetail.css';

export default function ItemDetail({data}) {
    //console.log(data);
    return (
        
        <div className="modal fade" id={`card${data.id}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="card mb-3" style={{maxWidth: "540px"}}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                    <img src={data.pictureUrl} className="card-img" alt={data.id}/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{data.title}</h5>
                        <h6 className="card-text">Precio: {data.precio}</h6>
                        <ul>
                            <li>Roast Profile: {data.roastProfile}</li>
                            <li>Intensidad: {data.tastingNotes}</li>
                            <li>Origen: {data.origin}</li>
                        </ul>
                        <p className="card-text"><small className="text-muted">{data.socialImpact}</small></p>
                    </div>
                    </div>
                </div>
            </div>
         </div>
        </div>
    )
}
