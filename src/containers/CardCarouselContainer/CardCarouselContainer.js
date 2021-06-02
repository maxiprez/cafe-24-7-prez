import React, { useState, useEffect } from 'react';
import Carousel from 'react-elastic-carousel';
import './CardCarouselContainer.css';
import CardCarousel from '../../components/CardCarousel/CardCarousel';

const { getItems } = require('../../services/PostService');

export default function CardCarouselContainer() {

const [dataInput, setDataInput] = useState([]);

useEffect(() => {
    getItems()
    .then(res => setDataInput(res))
}, []);



const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 500, itemsToShow: 2},
    {width: 768, itemsToShow: 3},
    {width: 1200, itemsToShow: 4}
];

    return (
    <>
        <div className="carousel-container">
          <h1 className="text-center mb-4">Conocé nuestros productos destacados!</h1>
            <Carousel breakPoints = {breakPoints} >
                {
                    dataInput.map((data)=>{
                        return(
                            <CardCarousel key={data.id} data={data} />
                        )
                    })
                }
            </Carousel>
        </div>
     </>
    )
}
