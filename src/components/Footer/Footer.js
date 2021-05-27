import React from 'react';
import './Footer.css';
import { FaRegEnvelope, FaGithubAlt, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
    return (
    <>  
       <footer>
             <p className="copyright">Maximiliano Prez © 2021</p>
             <div className="social"><a href="mailto: maxi.prez@gmail.com" className="mr-2 ml-2"><FaRegEnvelope /></a><a href="https://github.com/maxiprez" target="_blank" className="mr-2 ml-2"><FaGithubAlt /></a><a href="https://www.linkedin.com/in/maximiliano-prez/" target="_blank" className="mr-2 ml-2"><FaLinkedinIn /></a></div>
       </footer>
    </>
    )
}
