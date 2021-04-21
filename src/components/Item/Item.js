import React from 'react'


export default function Item ({post}){

    return(
            <div>
           <div class="col">
                <div class="card h-100">
                <img src={post.pictureUrl} class="card-img-top" alt={post.id}/>
                <div class="card-body">
                    <h5 class="card-title">{post.title}</h5>
                    <p class="card-text">{post.description}</p>
                    <h4>{post.price}</h4>
                </div>
                <a href="#" class="btn btn-primary">Ver detalle</a>
                </div>
            </div>


              
            </div>
      


           
      
    );
}
