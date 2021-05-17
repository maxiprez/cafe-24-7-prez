import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
//import Loading from '../../components/Loading/Loading';
import db from '../../firebase';


//const { getItemsDetails } = require('../../services/PostService');

 function ItemDetailContainer() {
    const history = useHistory();
    const { itemId } = useParams();
    const [dataJSON, setDataJSON] = useState({});
    const [loading, setLoading] = useState(false);





   const getItemsDetails = (productId) => {
      
      db.collection('products')
        .doc(productId)
        .get()
        .then((snapshot) => {
          setDataJSON(snapshot.data());
        });
    };
  
    useEffect(() => {
      getItemsDetails(itemId);
         
    }, [itemId]);

    console.log(dataJSON);

    return (
        <div className="item-detail-container">
            <div>
                <h3 className="text-center item-detail-container__title2">Deleitate en nuestro</h3>
                <h1 className="text-center item-detail-container__title1">E-shop</h1>
            </div>
            
           <div>
          <ItemDetail  data={ dataJSON } />
           </div>
           <div>
             <a type="button" onClick={() => history.push(`/products`)} className="btn-detalle btn btn-primary mb-4 ml-2">Volver</a>
           </div>
        </div>
    )

}
export default ItemDetailContainer


    