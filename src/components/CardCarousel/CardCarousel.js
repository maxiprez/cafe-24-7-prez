import React from 'react';
import './CardCarousel.css';
import { Link } from 'react-router-dom';

export default function CardCarousel({ data }) {
    
    return (
        <>
            <div className="carousel-card">
                <Link to={(`/item/${data.id}`)}>
                  <img src={data.pictureUrl}  class="img-fluid img-hover-zoom"  alt="" />
                </Link>
             </div>
        </>
    )
}
