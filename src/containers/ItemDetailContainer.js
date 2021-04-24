import { data, map } from 'jquery';
import React, { useState, useEffect } from 'react';
import ItemDetail from '../components/ItemDetail/ItemDetail';

 function ItemDetailContainer() {
    const [dataDetailJSON, setDataDetailJSON] = useState([]);
    const API_URL_ITEMDETAIL = ('https://maxiprez.github.io/cafe-24-7-prez/src/components/data/dataDetail.JSON');

    useEffect(()=>{

        fetch(API_URL_ITEMDETAIL)
        .then((response) => response.json())
        .then ((data) => setDataDetailJSON(data))
    }, []);

    return (
        <div>
          
              {
                  dataDetailJSON.map((data)=>(
                        <ItemDetail  key={data.id} data={data}/>
                  ))}
           
          
        </div>
    )

}
export default ItemDetailContainer


    