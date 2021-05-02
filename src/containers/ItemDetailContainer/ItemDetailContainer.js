import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import './ItemDetailContainer.css'


const { getItemsDetails } = require('../../services/PostService');

 function ItemDetailContainer() {
    const history = useHistory();
    const { itemId } = useParams();
    const [dataJSON, setDataJSON] = useState({id: "", title: "", precio: "", category:"", roastProfile: "", tastingNotes: "", pictureUrl: "", origin: "", socialImpact: ""});

    useEffect(()=>{
     
      getItemsDetails(itemId)
      .then(res => setDataJSON(res))
    //console.log(itemId)
    }, [itemId]);

    return (
        <div className="item-detail-container">
            <div>
                <h3 className="text-center item-detail-container__title2">Deleitate en nuestro</h3>
                <h1 className="text-center item-detail-container__title1">E-shop</h1>
            </div>
            
           <div>
               <ItemDetail id={dataJSON.id} title={dataJSON.title} precio={dataJSON.precio} category={dataJSON.category} roastProfile={dataJSON.roastProfile} tastingNotes={dataJSON.tastingNotes}  pictureUrl={dataJSON.pictureUrl} origin={dataJSON.origin} socialImpact={dataJSON.socialImpact} />
           </div>
           <div>
             <a type="button" onClick={() => history.push(`/products`)} className="btn-detalle btn btn-primary mb-4 ml-2">Volver</a>
           </div>
        </div>
    )

}
export default ItemDetailContainer


    