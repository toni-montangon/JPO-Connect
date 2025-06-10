import React from 'react';
import './Footer.css';
import logo from '../assets/Logo_Plateforme.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section logo-section">
        <img src={logo} alt="Logo La Plateforme" className="logo" />
        <div className="social-icons">
          <img src="/facebook.png" alt="Facebook" />
          <img src="/instagram.png" alt="Instagram" />
          <img src="/linkedin.png" alt="LinkedIn" />
          <img src="/youtube.png" alt="YouTube" />
        </div>
      </div>

      <div className="footer-section">
        <h4>La Plateforme</h4>
        <ul>
          <li><a href="#">Accueil</a></li>
          <li><a href="#">Qui sommes-nous ?</a></li>
          <li><a href="#">Notre brochure</a></li>
          <li><a href="#">Ils parlent de nous</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Les Formations</h4>
        <ul>
          <li><a href="#">Bachelor IT</a></li>
          <li><a href="#">Master of Science</a></li>
          <li><a href="#">Innovation Lab</a></li>
          <li><a href="#">Développement</a></li>
        </ul>
      </div>

      <div className="footer-section contact-section">
        <h4>Informations</h4>
        <p>8 mai 1945, Martigues</p>
        <p>Tél : 04.84.89.43.69</p>
        <button className="contact-button">Contact</button>
      </div>
    </footer>
  );
};

export default Footer;
