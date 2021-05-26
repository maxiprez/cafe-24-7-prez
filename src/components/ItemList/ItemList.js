import React from 'react';
import Item from '../Item/Item';



export default function ItemList({dataJsonInput}){
    return(
     
       <div className="text-center card-group d-flex justify-content-center">
           {
               dataJsonInput.map((data)=>{
                    return(
                        <Item key={data.id} data={data} />
                    )
               })
           }
       </div>
       
    
 )

}