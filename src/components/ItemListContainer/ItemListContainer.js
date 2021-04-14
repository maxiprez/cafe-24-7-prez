import React from 'react';
import './ItemListContainer.css';



 function showHome(props){

return(
<header className='parallax hero-box'>
<div class="left-side">
              <h1>{props.greeting}</h1>
               <p>{props.bannerP}</p>
              <a href="#">Sobre Nosotros</a>
            </div>
</header>
    
)

}
export default showHome;