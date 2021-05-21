import React from 'react'
import './CardTutorial.css'

export default function CardTutorial() {
    return (
        <>
            <div >
                <div className="card border-secondary" style={{width: "400px;"}}>
                    <div className="card-body text-secondary">
                    <div className="card-header"><h5>¿Cómo comprar On-line?</h5></div>  
                        
                        <ol className="mt-4">
                            <li>
                                <p className="card-text">Elegí tus productos: comprá café premium de forma fácil y rápida.</p>
                            </li>
                            <li>
                                <p className="card-text">Pagalos de forma segura usando MercadoPago o en efectivo al delivery.</p>
                            </li>
                            <li>
                                <p className="card-text">Retirá en nuestra tienda o recibilo por OCA en todo el país. Si tu compra supera los $2000 el envío es GRATIS para CABA y GBA.</p>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}






