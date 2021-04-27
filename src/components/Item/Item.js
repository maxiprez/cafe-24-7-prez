import React from 'react'
import '../Item/Item.css'
import { useHistory } from 'react-router-dom';



export default function Item ({post}){
const history = useHistory();

    return(
            <div>
           <div className="col">
                <div className="card h-100 " style={{width:"20rem"}}>
                <img src={post.pictureUrl} className="card-img-top mt-4" alt={post.id}/>
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.description}</p>
                    <h6>{post.price}</h6>
                </div>
                <div>
                    <a href="#" className="btn-comprar btn btn-primary mb-4 mr-2">Comprar</a>
                    <a type="button" onClick={() => history.push(`/cafe/${post.id}`)} className="btn-detalle btn btn-primary mb-4 ml-2">Detalle</a>
                   
                </div>
               
                </div>
            </div>


              
            </div>
      


           
      
    );
}
