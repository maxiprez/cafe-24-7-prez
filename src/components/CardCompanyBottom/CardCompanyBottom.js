import React from 'react';
import './CardCompanyBottom.css';
import cafeCompany2 from '../../assets/img/company-cafe-2.jpg';

export default function CardCompanyBottom() {
    return (
        <>
              <div className="card mb-3 card-company-bottom" style={{maxWidth: '1200px'}}>
              <div className="row g-0">
              <div className="col-md-4 img-card-company">
                <img
                    src={cafeCompany2}
                    alt=""
                    className="img-fluid"
                    
                />
                </div>

                <div className="col-md-8">
                <div className="card-body">
                    
                    <p className="card-text card-text-company">
                    La constante innovación en tecnología hace a nuestro tostadero uno de los más modernos del país. Contamos con máquinas de tostado y envasado de última generación y somos proveedores de empresas, restaurantes, confiterías y hoteles. Además, contamos con un amplio abanico de productos para el consumo familiar.Brindamos atención personalizada con seriedad, responsabilidad y la calidez que el cliente merece. 
                    Recientemente hemos lanzado nuestra tienda online, mediante la cual podrás comprar nuestros productos de manera segura y recibirlos en tu domicilio.
                    </p>
                    
                </div>
                </div>

               
              </div>
            </div>
        </>
    )
}
