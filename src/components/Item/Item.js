import React from 'react'
import '../Item/Item.css'
import { useHistory } from 'react-router-dom';



export default function Item ({data}){
const history = useHistory();

    return(
        <>
            
                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4" >
                    <div className="card h-100 card-item mx-auto" style={{width:"20rem"}}>
                      <img src={data.pictureUrl} className="card-img-top mt-4" alt={data.category}/>
                        <div className="card-body">
                            <h5 className="card-title">{data.title}</h5>
                            <p className="card-text">{data.description}</p>
                            <h6>${data.precio}</h6>
                        </div>
                        <div>
                           <a href="#" className="btn-comprar btn btn-primary mb-4 mr-2">Comprar</a>
                           <a type="button" onClick={() => history.push(`/item/${data.id}`)} className="btn-detalle btn btn-primary mb-4 ml-2">Detalle</a>
                        </div>
                    </div>
                </div>
                
        </>
      


           
      
    );
}
