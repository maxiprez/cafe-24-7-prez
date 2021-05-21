import React, { useState, useContext } from 'react';
import './OrderPage.css';
import { CartContext } from '../../context/CartContext';
import { useHistory } from 'react-router-dom';

const { newOrder } = require ('../../services/PostService');

export default function OrderPage() {
    const history = useHistory();
    const { cart, totalPrice, clearCart } = useContext(CartContext);

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
                <input onChange={event => setPhone(event.target.value)} type="tel" className="form-control" id="validationPhone" placeholder="Ingrese su número de teléfono con código de área sin el 0 y el celular sin el 15" pattern="[0-9]{2}[0-9]{4}[0-9]{4}" required/>
            </div>

            {/* <div className="custom-control custom-checkbox mb-3">
                <input type="checkbox" className="custom-control-input" id="checkboxValidation" required/>
                <label className="custom-control-label" for="checkboxValidation">Acepto los términos y condiciones</label>
            </div>  */}
              <div className="custom-control custom-checkbox mb-3">
                <input onChange={event => setCheckbox(event.target.true)} type="checkbox" className="custom-control-input" id="customControlValidation1" required />
                <label className="custom-control-label" for="customControlValidation1">Acepto los términos y condiciones</label>
                <div className="invalid-feedback">*Tienes que aceptar los términos y condiciones.</div>
            </div>
         
           
           { !name || !phone || !email || checkbox === false ? <button className="btn btn-primary mt-2" type="button" disabled>Confirmar Compra</button> : <button className="btn btn-primary" type="button" data-toggle="modal" data-target="#modal" onClick={addNewOrder}>Confirmar Compra</button>}
            </form>

            <div className="modal fade" id="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Resumen de su compra</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body text-center">
                            <p className="text-modal-order">*Su pedido ha sido guardado*</p>
                            <p className="text-modal-order">Código de compra: {orderId}</p>
                            <p className="text-modal-order">Total a abonar: ${totalPrice}</p>
                            <small class="text-muted">En instantes lo estaremos contactando para confirmar su compra.</small>
                          
                    </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={closeAllAndReset}>Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
