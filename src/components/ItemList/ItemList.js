import React from 'react';
import Item from '../Item/Item';


export default function ItemList({dataJsonInput}){
    return(
     
       <div className="row row-cols-1 row-cols-md-3 g-4 text-center">
           {
               dataJsonInput.map((post)=>{
                    return(
                        <Item key={post.id} post={post}/>
                    )
               })
           }
       </div>
       
    
 )

}