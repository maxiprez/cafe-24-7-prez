import React from 'react';
import './HeroImageCompany.css';
import {  useHistory } from 'react-router-dom';

export default function HeroImageCompany() {
    const history = useHistory();
    return (
        <>
             <div className="hero-image-company">
                  
                  <div className="hero-text">
                    <h2 className="hero-title" style= {{fontSize:'50px'}}>La clave es la selección</h2>
                    <p>Desde fines de los '80 nuestro café es cultivado y seleccionado en Brasil, Colombia y otras partes del mundo. Aquí se tuestan los granos y envasan para así formar parte de cada charla de café.</p>
                    <button type="button" onClick={() => history.push(`/products`)} className="btn-detalle btn-detalle-volver-a-tienda btn btn-primary" >IR A TIENDA</button>
                </div>
                
            </div>
            
        </>
    )
}
