import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <main>
        <h1>Bienvenue</h1>
      </main>
      <Footer /> {/* ← Doit être visible ici */}
    </div>
  );
}


export default App;
