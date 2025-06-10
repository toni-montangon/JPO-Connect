import React from 'react';
import './Header.css';
import logo from '../assets/Logo_Plateforme.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Logo La Plateforme" className="logo" />
      </div>

      <nav className="header-center">
        <a href="#" className="jpo-link">S’inscrire à une JPO</a>
      </nav>

      <div className="header-right">
        <a href="#">Connexion/Inscription</a>
      </div>
    </header>
  );
};

// ✅ Cette ligne est essentielle
export default Header;

