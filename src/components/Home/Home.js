import React from 'react';
import CardsHomeContainer from '../../containers/CardsHomeContainer/CardsHomeContainer';
import './Home.css';
import AboutUs from '../AboutUs/AboutUs';
import {  animateScroll as scroll } from "react-scroll";

 function showHome(props){

 function scrollToBottom () {
    scroll.scrollToBottom(100);
};


return(
  <>
        <header className='parallax hero-box'>
           <div className="left-side">
              <h1>{props.titulo}</h1>
               <p>{props.descripcion}</p>
              <button onClick={scrollToBottom}>Sobre Nosotros</button>
            </div>
        </header>
        <div>
          <CardsHomeContainer />
          <AboutUs />
        </div>
  </>

    
)

}
export default showHome;