import React, { useState, useEffect }from 'react'
import './ItemListContainer.css'
import ItemList from '../../components/ItemList/ItemList';
import Loading from '../../components/Loading/Loading';


const { getItems } = require('../../services/PostService');

function ItemListContainer() {
 const [dataJSON, setDataJSON] = useState ([]);
const [loading, setLoading] = useState(false);

    useEffect (()=>{
        getItems()
        .then(res => setDataJSON(res))
      const timer = setTimeout(() => {
          setLoading(true);
      }, 1000);
      return () => clearTimeout(timer);
}, []);

    return (
        <>
            <h1 className="text-center item-list-container__title">Nuestra selección exclusiva de cafés</h1> 
            <div className="item-list-container d-flex justify-content-center">  
            { loading ? <ItemList dataJsonInput = {dataJSON} /> : <Loading />}
            </div>
        </>
    )
}

export default ItemListContainer

