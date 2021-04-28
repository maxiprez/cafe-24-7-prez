import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import './ItemDetailContainer.css'


const { getItemsDetails } = require('../../services/PostService');

 function ItemDetailContainer() {
    const history = useHistory();
    const { cafeId } = useParams();
    const [dataDetailJSON, setDataDetailJSON] = useState({id: "", title: "", precio: "", roastProfile: "", tastingNotes: "", pictureUrl: "", origin: "", socialImpact: ""});

    useEffect(()=>{
     
      getItemsDetails(cafeId)
      .then(res => setDataDetailJSON(res))
    
    }, [cafeId]);

    return (
        <div className="item-detail-container">
            <div>
                <h3 className="text-center item-detail-container__title2">Deleitate en nuestro</h3>
                <h1 className="text-center item-detail-container__title1">E-shop</h1>
            </div>
            
           <div>
               <ItemDetail id={dataDetailJSON.id} title={dataDetailJSON.title} precio={dataDetailJSON.precio} roastProfile={dataDetailJSON.roastProfile} tastingNotes={dataDetailJSON.tastingNotes}  pictureUrl={dataDetailJSON.pictureUrl} origin={dataDetailJSON.origin} socialImpact={dataDetailJSON.socialImpact} />
           </div>
           <div>
             <a type="button" onClick={() => history.push(`/cafe`)} className="btn-detalle btn btn-primary mb-4 ml-2">Volver</a>
           </div>
        </div>
    )

}
export default ItemDetailContainer


    