import React from 'react';
import './Company.css';
import cafeCompany from '../../assets/img/company-cafe.jpg';
import cafeCompany2 from '../../assets/img/company-cafe-2.jpg';
import {  useHistory } from 'react-router-dom';

export default function Company() {
    const history = useHistory();

    return (
        <>
           <div>
                <h3 className="text-center item-detail-container__title2">Pasado y presente</h3>
                <h1 className="text-center item-detail-container__title1">Empresa</h1>
           </div>

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

            <div className="hero-image-company">
                <div className="hero-text">
                    <h2 className="hero-title" style= {{fontSize:'50px'}}>La clave es la selección</h2>
                    <p>Desde fines de los '80 nuestro café es cultivado y seleccionado en Brasil, Colombia y otras partes del mundo. Aquí se tuestan los granos y envasan para así formar parte de cada charla de café.</p>
                    <button type="button" onClick={() => history.push(`/products`)} className="btn-detalle btn-detalle-volver-a-tienda btn btn-primary" >IR A TIENDA</button>
                </div>
            </div>

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
