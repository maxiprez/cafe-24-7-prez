import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ItemDetail from '../components/ItemDetail/ItemDetail';


const { getItemsDetails } = require('../services/PostService');

 function ItemDetailContainer() {
    const { cafeId } = useParams();
    const [dataDetailJSON, setDataDetailJSON] = useState({id: "", title: "", precio: "", roastProfile: "", tastingNotes: "", pictureUrl: "", origin: "", socialImpact: ""});

    useEffect(()=>{
     
      getItemsDetails(cafeId)
      .then(res => setDataDetailJSON(res))
    
    }, [cafeId]);

    return (
        <div>
            <h1 className="mt-4 text-center">Detalle del producto</h1>
           <div>
               <ItemDetail id={dataDetailJSON.id} title={dataDetailJSON.title} precio={dataDetailJSON.precio} roastProfile={dataDetailJSON.roastProfile} tastingNotes={dataDetailJSON.tastingNotes}  pictureUrl={dataDetailJSON.pictureUrl} origin={dataDetailJSON.origin} socialImpact={dataDetailJSON} />
           </div>
        </div>
    )

}
export default ItemDetailContainer


    