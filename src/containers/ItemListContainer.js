import React, { useState, useEffect }from 'react'
import ItemList from '../components/ItemList/ItemList';



const { getItems } = require('../services/PostService');

function ItemListContainer() {
 const [dataJSON, setDataJson] = useState ([]);


    useEffect (()=>{
         setTimeout(()=>{
        getItems()
        .then(res => setDataJson(res))
        }, 2000);   

}, []);

    return (
        <div>
            <ItemList dataJsonInput = {dataJSON} />
        </div>
    )
}

export default ItemListContainer

