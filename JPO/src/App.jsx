import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="jpo-main">
        <h1 className="jpo-title">Bienvenue à la Journée Portes Ouvertes de La Plateforme_</h1>
        <h2 className="jpo-subtitle">Découvrez nos campus à Martigues, Marseille et Cannes !</h2>
        <p className="jpo-description">
          Venez rencontrer nos équipes, visiter nos locaux et découvrir nos formations innovantes.<br />
          Profitez d'ateliers, de conférences et d'échanges avec nos étudiants et formateurs.
        </p>
        <div className="jpo-cities">
          <div className="jpo-city martigues">
            <img className="jpo-city-img" src="assets/assets/matiguesImg.jpg" alt="Campus de Martigues" />
            <h3>Martigues</h3>
            <p>📍 12 Rue de la République<br />13500 Martigues</p>
            <p>🗓️ 15 juin 2025</p>
          </div>
          <div className="jpo-city marseille">
            <h3>Marseille</h3>
            <p>📍 8 Rue d'Hozier<br />13002 Marseille</p>
            <p>🗓️ 22 juin 2025</p>
          </div>
          <div className="jpo-city cannes">
            <h3>Cannes</h3>
            <p>📍 1 Avenue Maurice Chevalier<br />06150 Cannes</p>
            <p>🗓️ 29 juin 2025</p>
          </div>
        </div>
        <a href="#" className="jpo-btn">Je m'inscris à la JPO</a>
      </main>
      <Footer />
    </div>
  );
}

export default App;
