import React from 'react'
import './Contact.css';


export default function Contact() {
    return (
        <>
       <div className="contact_header jumbotron text-center">
  <h1 className="display-4">Contactanos!</h1>
  <p>Por favor, completá los siguiente campos si deseas contactarnos.</p>
</div>
<div className="contact_form_wrapper container">
	<div className="row">
		<div className="col-sm-12">
			<div className="contact_form">
				<div className="row">
					<div className="col-12 col-sm-6">
						<div className="form-group">
							<label>Nombre completo</label>
							<input type="text" className="form-control" placeholder="Ingresá tu nombre completo" required/>
						</div>
					</div>
					<div className="col-12 col-sm-6">
					<div className="form-group">
							<label>Email</label>
							<input type="email" className="form-control" placeholder="Ingresá tu Email" required/>
						</div>
					</div>
				</div>
				<div className="row mt-2">
					<div className="col-12 col-sm-6">
						<div className="form-group">
							<label>Teléfono</label>
							<input type="phone" className="form-control" placeholder="Ingresá tu teléfono con código de área" required/>
						</div>
					</div>
					<div className="col-12 col-sm-6">
						<div className="form-group">
							<label>Localidad</label>
							<input type="text" className="form-control" placeholder="Ingresá tu localidad" required/>
						</div>
					</div>
				</div>
				<div className="row mt-2">
					<div className="col-sm-12">
						<div className="form-group">
							<label>Asunto</label>
							<input type="text" className="form-control" placeholder="Ingresá el asunto" required/>
						</div>
					</div>
				</div>
				<div className="row mt-2">
					<div className="col-sm-12">
						<div className="form-group">
							<label>Mensaje</label>
							<textarea className="form-control">
							</textarea>
						</div>
					</div>
				</div>
				<div className="row text-center mt-2">
					<div className="col-sm-12">
						<button className="btn btn-md btn-primary" type="button">Enviar</button>
					</div>
				</div>

			</div>
		</div>
	</div>
</div>

        </>
    )
}
