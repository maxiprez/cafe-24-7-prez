import React from 'react';
import './Footer.css';
import { FaRegEnvelope, FaGithubAlt, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
    return (
      
<div className="footer-dark">
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Tienda</h3>
                        <ul>
                            <li><a href="#">Café</a></li>
                            <li><a href="#">Ofertas</a></li>
                            <li><a href="#">Merchandising</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Sobre Nosotros</h3>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 item text">
                        <h3>Café 24/7</h3>
                        <p>24/7 es una empresa familiar de Argentina, que le brinda a sus cliente el mejor café nacional desde hace más de 30 años. Especialistas en café tostado de granos originarios de distintas étnias.</p>
                    </div>
                    <div className="col item social"><a href="mailto: maxi.prez@gmail.com"><FaRegEnvelope /></a><a href="https://github.com/maxiprez" target="_blank"><FaGithubAlt /></a><a href="https://www.linkedin.com/in/maximiliano-prez/" target="_blank"><FaLinkedinIn /></a></div>
                </div>
                <p className="copyright">Maximiliano Prez © 2021</p>
            </div>
        </footer>
</div>
        
    )
}
