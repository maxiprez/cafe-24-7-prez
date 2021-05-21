import React from 'react';
import CardsHomeContainer from '../../containers/CardsHomeContainer/CardsHomeContainer';
import './Home.css';



 function showHome(props){

return(
  <>
        <header className='parallax hero-box'>
           <div className="left-side">
              <h1>{props.titulo}</h1>
               <p>{props.descripcion}</p>
              <a href="#">Sobre Nosotros</a>
            </div>
        </header>
        <div>
          <CardsHomeContainer />
        </div>
  </>

    
)

}
export default showHome;