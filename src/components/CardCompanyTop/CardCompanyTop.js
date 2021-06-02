import React from 'react';
import './CardCompanyTop.css';
import cafeCompany from '../../assets/img/company-cafe.jpg';

export default function CardCompanyTop() {
    return (
        <> 
            <div className="card mb-3 card-company" style={{maxWidth: '1200px'}}>
            <div className="row g-0">
            

            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title card-title-company">Tostando el mejor café desde 1989</h5>
                <p className="card-text card-text-company">
                Café 24/7 es una empresa familiar fundada en 1989 por la familia Sarlanga -un inmigrante español- junto a un grupo de socios. Es una de las principales firmas importadoras de café del país. Hace más de tres décadas llevamos seleccionando los mejores granos de Colombia, Perú y de otros continentes para deleitar a nuestros clientes con el sabor del buen café de todas partes del mundo a un precio accesible.
                </p>
                
            </div>
            </div>
            <div className="col-md-4 img-card-company">
            <img
                src={cafeCompany}
                alt=""
                className="img-fluid"
                
            />
            </div>
            </div>
         </div>
            
    </>
    )
}
