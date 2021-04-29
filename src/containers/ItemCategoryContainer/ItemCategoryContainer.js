import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList/ItemList';
import './ItemCategoryContainer.css';


const { getItems } = require('../../services/PostService');

export default function ItemCategoryContainer() {

   const { categoryId } = useParams();
   const [dataJSON, setDataJSON]  = useState([]);
    


useEffect(() => {
     getItems(categoryId)
     .then(res => setDataJSON(
        res.filter(function(item){
            return item.category === categoryId;
        })
        ))

     
     console.log(categoryId);
  }, [categoryId])


    //   useEffect(()=>{
    //       getItems()
    //      .then(res =>
    //         setDataJSON(
    //          res.filter(function(item){
    //        return item.category === categoryId;
    //      })
    //     ))
    //  console.log(categoryId)
    //  }, [categoryId])


    return (
        <div className="item-category-container">
            <ItemList dataJsonInput = {dataJSON}/>
        </div>
    )
}
