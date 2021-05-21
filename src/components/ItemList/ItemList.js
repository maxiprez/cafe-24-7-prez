import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';



export default function ItemList({dataJsonInput}){
    return(
     <>
     
        <div className="row row-cols-1 row-cols-md-3 container">
            {
                dataJsonInput.map((data)=>{
                        return(
                            <Item key={data.id} data={data} />
                        
                        )
                })
            }
        </div>
     
       
    </>
    
 )

}