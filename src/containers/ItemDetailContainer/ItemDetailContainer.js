import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import db from '../../firebase';



 function ItemDetailContainer() {
    const history = useHistory();
    const { itemId } = useParams();
    const [dataJSON, setDataJSON] = useState({});
   

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
      <>
        <div>
                    <h3 className="text-center item-detail-container__title2">Deleitate en nuestro</h3>
                    <h1 className="text-center item-detail-container__title1">E-shop</h1>
        </div>
                             
              <div className="item-detail-container">
                <ItemDetail  data={ dataJSON } />
              </div>
              
              
               <div className="col text-center mt-4">
                 <button type="button" onClick={() => history.push(`/products`)} className="btn-detalle btn-detalle-volver btn btn-primary mb-4 ml-2" >Volver</button>
              </div>
      </>
    )

}
export default ItemDetailContainer


    