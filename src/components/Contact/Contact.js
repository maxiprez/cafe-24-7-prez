import React, { useState } from 'react';
import { MdDone } from "react-icons/md";
import './Contact.css';
import { useHistory } from 'react-router-dom';

const { newMessage } = require('../../services/PostService');

export default function Contact() {
	const history = useHistory();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState(0);
	const [city, setCity] = useState('');
	const [message, setMessage] = useState('');
	const [messageId, setMessageId] = useState('');
    
       

	function addNewMessage (event){
        event.preventDefault();
		
        const client = {
            name: name,
			email: email,
			phone: phone,
			city: city,
			message: message
			
        };
		 newMessage(client)
        .then(messageId => setMessageId(messageId));
    }

	function closeAndReset(){
         history.push('/')
    }

    return (
	<>
	  <div className="contact_header jumbotron text-center">
			<h1 className="display-4">Contactanos!</h1>
			<p>Por favor, completá los siguiente campos si deseas contactarnos.</p>
	  </div>
			<div id="form" className="contact_form_wrapper container was-validated">
				<div className="row">
					<div className="col-sm-12">
						<div className="contact_form">
							<div className="row">
								<div className="col-12 col-sm-6">
									<div className="form-group">
										<label for="name">Nombre completo</label>
										<input id="name" type="text" onChange={event => setName(event.target.value)} maxLength="50" className="form-control" placeholder="Ingresá tu nombre completo" required/>
									</div>
								</div>
								<div className="col-12 col-sm-6">
								<div className="form-group">
										<label for="email">Email</label>
										<input id="email" type="email" onChange={event => setEmail(event.target.value)} className="form-control" placeholder="Ingresá tu Email" required/>
									</div>
								</div>
							</div>
							<div className="row mt-2">
								<div className="col-12 col-sm-6">
									<div className="form-group">
										<label for="phone">Teléfono</label>
										<input id="phone" type="phone" onChange={event => setPhone(event.target.value)} className="form-control" placeholder="Ingresá tu teléfono con código de área" pattern="[0-9]{3}-[0-9]{4}[0-9]{4}" required/>
										<small className="text-muted">Formato: 011-45467890</small>
									</div>
								</div>
								<div className="col-12 col-sm-6">
									<div className="form-group">
										<label for="city">Localidad</label>
										<input id="city" type="text" onChange={event => setCity(event.target.value)} className="form-control" placeholder="Ingresá tu localidad" required/>
									</div>
								</div>
							</div>
							<div className="row mt-2">
								<div className="col-sm-12">
									<div className="form-group">
										<label>Mensaje</label>
										<textarea id={messageId} onChange={event => setMessage(event.target.value)} className="form-control" maxLength="500" required>
										</textarea>
									</div>
								</div>
							</div>
							<div className="row text-center mt-2">
								<div className="col-sm-12">
									{!name || !phone || !email || !city || !message ? <button className="btn btn-md btn-primary" type="submit" disabled>Enviar</button> : <button className="btn btn-md btn-primary" type="button" data-toggle="modal" data-target="#myModal"  onClick={addNewMessage}>Enviar</button>}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		{/* Modal: */}

	<div id="myModal" className="modal fade">
	  <div className="modal-dialog modal-confirm">
		<div className="modal-content">
			<div className="modal-header">
				<div className="icon-box">
					<i className="react-icon-done"><MdDone /></i>
				</div>				
				<h4 className="modal-title w-100">Envío exitoso!</h4>	
			</div>
			<div className="modal-body">
				<p className="text-center">Su mensaje ha sido enviado correctamente, en breve nos estaremos contactando con vos.</p>
			</div>
			<div className="modal-footer">
				<button className="btn btn-success btn-block" data-dismiss="modal" type="button" onClick={closeAndReset}>OK</button>
			</div>
		</div>
	</div>
</div>   

    </>
    )
}
