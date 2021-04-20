import React from 'react';
import './Home.css';



 function showHome(props){

return(
<header className='parallax hero-box'>
<div class="left-side">
              <h1>{props.titulo}</h1>
               <p>{props.descripcion}</p>
              <a href="#">Sobre Nosotros</a>
            </div>
</header>
    
)

}
export default showHome;