import React from 'react'
import '../Item/Item.css'
import { useHistory } from 'react-router-dom';

export default function Item ({data}){
const history = useHistory();

   return(
       <>
            <div className="card-group">
                <div className="col">
                        <div className="card h-100 card-item" style={{width:"20rem"}}>
                            <img src={data.pictureUrl} className="card-img-top mt-4" alt={data.category}/>
                            <div className="card-body ">
                                <h5 className="card-title">{data.title}</h5>
                                <p className="card-text">{data.description}</p>
                                <h6>${data.precio}</h6>
                            </div>
                            <div>
                                <button type="button" onClick={() => history.push(`/item/${data.id}`)} className="btn-detalle btn btn-primary mb-4 ml-2">Detalle</button>
                            </div>
                        </div>
                    </div>
                </div>
      </>


           
      
    );
}
