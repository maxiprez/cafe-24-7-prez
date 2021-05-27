import React from 'react'
import './CardsHomeContainer.css'
import Card1 from '../../assets/img/cafe-home-trabajo.jfif'
import Card2 from '../../assets/img/cafe-home-office.jfif'
import Card3 from '../../assets/img/cafe-home-delivered.jfif'

export default function CardsHomeContainer() {
    return (
 <>
     <div className="col-12">
              <h1 className="cards-home-container__title__h1">Cómo trabajamos</h1>
         <div className="card-deck">
            <div className="card card-home">
                <img src={Card1} className="card-img-top-home img-fluid" alt="..."/>
                <div className="card-body ">
                    <h5 className="card-title cards-home-container__title">Actuar</h5>
                    <p className="card-text cards-home-container__text">Elegimos la mejor forma de trabajar para estar con vos.</p>
                </div>
            </div>
            <div className="card card-home">
                <img src={Card2} className="card-img-top-home img-fluid" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title cards-home-container__title">Confiar</h5>
                    <p className="card-text cards-home-container__text">En la fábrica, en la oficina, en tu casa.</p>
                </div>
            </div>
            <div className="card card-home">
                <img src={Card3} className="card-img-top-home img-fluid" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title cards-home-container__title">Estar con vos</h5>
                    <p className="card-text cards-home-container__text">Te acompañamos estés en donde estés.</p>
                </div>
            </div>
        </div>
     </div> 
</>
    )
}
