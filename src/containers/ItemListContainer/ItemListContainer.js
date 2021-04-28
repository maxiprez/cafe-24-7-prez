import React, { useState, useEffect }from 'react'
import './ItemListContainer.css'
import ItemList from '../../components/ItemList/ItemList';



const { getItems } = require('../../services/PostService');

function ItemListContainer() {
 const [dataJSON, setDataJson] = useState ([]);


    useEffect (()=>{
        getItems()
        .then(res => setDataJson(res))
       
}, []);

    return (
        <div className="item-list-container">
             <h1 className="text-center item-list-container__title">Nuestra selección exclusiva de cafés</h1> 
            <ItemList dataJsonInput = {dataJSON} />
        </div>
    )
}

export default ItemListContainer

