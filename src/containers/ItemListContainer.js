import React, {useState, useEffect}from 'react'
import ItemList from '../components/ItemList/ItemList';




function ItemListContainer() {
 const [dataJSON, setDataJson] = useState ([]);


    useEffect (()=>{
         setTimeout(()=>{
        fetch('https://maxiprez.github.io/cafe-24-7-prez/src/components/data/data.JSON')
        .then((response)=>response.json())
        .then((data)=>setDataJson(data))
        }, 2000);   
}, []);

    return (
        <div>
            <ItemList dataJsonInput = {dataJSON} />
        </div>
    )
}

export default ItemListContainer

