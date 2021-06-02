import React, { useState, useContext } from 'react';
import './OrderPage.css';
import { CartContext } from '../../context/CartContext';
import { useHistory } from 'react-router-dom';
import { MdDone } from "react-icons/md";

const { newOrder } = require ('../../services/PostService');

export default function OrderPage() {
    const history = useHistory();
    const { cart, totalPrice, clearCart, totalItems } = useContext(CartContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState(0);
    const [orderId, setOrderId] = useState('');
    const [checkbox, setCheckbox] = useState(false);


    function addNewOrder (event){
        event.preventDefault();
        const buyer = {
            name: name,
            email: email,
            phone: phone
        };
        newOrder(buyer, cart, totalPrice)
        .then(id => setOrderId(id));
    }

    function closeAllAndReset(){
        clearCart();
        history.push('/products')
    }

    return (
        <>
          <form className="was-validated">
          
            <div className="col-6 mb-3">
                <label for="validationName">Nombres Y Apellido</label>
                <input onChange={event => setName(event.target.value)} type="text" className="form-control" id="validationName" placeholder="Ingrese su nombre completo y apellido" required/>
            </div>
               
            <div className="col-6 mb-3">
                <label for="validationEmail">Email</label>
                <input onChange={event => setEmail(event.target.value)} type="email" className="form-control" id="validationEmail" placeholder="Ingrese su E-mail" required/>
            </div>

            <div className="col-6 mb-3">
                <label for="validationPhone">Teléfono</label>
                <input onChange={event => setPhone(event.target.value)} type="tel" className="form-control" id="validationPhone" placeholder="Ingrese su número de teléfono con código de área sin el 0 y el celular sin el 15" pattern="[0-9]{3}-[0-9]{4}[0-9]{4}" required/>
                <small className="text-muted">Formato: 011-45467890</small>
            </div>

          
              <div className="custom-control custom-checkbox mb-3">
                <input onChange={event => setCheckbox(event.target.true)} type="checkbox" className="custom-control-input" id="customControlValidation1" required />
                <label className="custom-control-label" for="customControlValidation1">Acepto los términos y condiciones</label>
                <div className="invalid-feedback">*Tienes que aceptar los términos y condiciones.</div>
            </div>
         
           
           { !name || !phone || !email || checkbox === false ? <button className="btn btn-primary mt-2" type="button" disabled>Realizar compra</button> : <button className="btn btn-primary" type="button" data-toggle="modal" data-target="#modal" onClick={addNewOrder}>Realizar compra</button>}
            </form>

            {/* Modal: */}
            
                <div id="modal" className="modal fade">
                <div className="modal-dialog modal-confirm">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="icon-box">
                                <i className="react-icon-done"><MdDone /></i>
                            </div>				
                            <h4 className="modal-title w-100">Pedido generado exitosamente!</h4>	
                        </div>
                        <div className="modal-body">
                        
                            <p className="text-modal-order"><b>Código de compra:</b> {orderId}</p>
                            <p className="text-modal-order"><b>Total a abonar:</b> ${totalPrice}</p>
                            <p className="text-modal-order"><b>Cantidad de productos:</b> {totalItems}</p>
                            <small className="text-muted">En instantes lo estaremos contactando para confirmar su compra.</small>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-success btn-block" data-dismiss="modal" type="button" onClick={closeAllAndReset}>OK</button>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}
