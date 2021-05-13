import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import Loading from '../../components/Loading/Loading';



const { getItemsDetails } = require('../../services/PostService');

 function ItemDetailContainer() {
    const history = useHistory();
    const { itemId } = useParams();
    const [dataJSON, setDataJSON] = useState({id: "", title: "", precio: "", category:"", roastProfile: "", tastingNotes: "", pictureUrl: "", origin: "", socialImpact: ""});
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
     
      getItemsDetails(itemId)
      .then(res => setDataJSON(res));
      const timer = setTimeout(()=>{
        setLoading(true);
      }, 1000);
      return () => clearTimeout(timer);
   
    
    }, [itemId]);

     
     console.log(dataJSON);
    return (
        <div className="item-detail-container">
            <div>
                <h3 className="text-center item-detail-container__title2">Deleitate en nuestro</h3>
                <h1 className="text-center item-detail-container__title1">E-shop</h1>
            </div>
            
           <div>
           { loading ?  <ItemDetail  data={ dataJSON } /> : <Loading /> }
           </div>
           <div>
             <a type="button" onClick={() => history.push(`/products`)} className="btn-detalle btn btn-primary mb-4 ml-2">Volver</a>
           </div>
        </div>
    )

}
export default ItemDetailContainer


    