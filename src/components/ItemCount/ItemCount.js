import React from 'react';
import packCafe from './pack-cafe.png';
import './ItemCount.css';

export default function Counter({number, increment, decrement, agregar, cantidad}){

return(
    <div>
        
        <div className="card text-center align-self-center" style={{maxWidth: '500px'}} >
            <div className="row align-items-center h-100"> 
                 <div className="col-sm-5">
                     <img className="card-img-top" src={packCafe}  />
                </div>
            <div className="col-sm-7">
              <div className="card-body">
                    <h5 className="card-title mb-4 mt-4">Café molido Italiano</h5>
                    <div className='line-bottom'></div>
                    <p className="card-text mb-4 mt-4">Café tipo Italiano fuerte con notas de caramelo.</p>
                   <div className='' >
                                                 
                            <div>{cantidad(number)}</div>
                                                                     
                        <button className="btn btn-danger btn-xs" onClick={decrement}> - </button>

                      {
                          number > 5 ? <button className="btn btn-success btn-xs ml-4" onClick={increment} disabled> + </button> :
                                       <button className="btn btn-success btn-xs ml-4" onClick={increment}> + </button>
                      }
                        
                 
                    
                   </div> 

                
                  {
                      number > 5 ? <button className="btn btn-primary mt-4 text-center" disabled>Agregar al carrito</button> :
                                   <button className="btn btn-primary mt-4 text-center" onClick={agregar}>Agregar al carrito</button>

                  }
                   
            </div>
         </div>  
       </div>
     </div>
    </div>
);

}