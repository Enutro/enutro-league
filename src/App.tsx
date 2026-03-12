import { useState } from 'react';
import SplineBackground from './components/SplineBackground';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Suite from './components/Suite';
import Player from './components/Player';

document.addEventListener('wheel', (e) => {
  if (e.ctrlKey) e.preventDefault();
}, { passive: false });

document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && (e.key === '=' || e.key === '-' || e.key === '0')) {
    e.preventDefault();
  }
});

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    /* On force la hauteur à 100% et le fond transparent */
    <div className="app-container" style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'transparent' }}>
      
      {/* COUCHE 0 : LE FOND (Toujours présent) */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <SplineBackground />
      </div>

      {/* COUCHE 1 : LE CONTENU */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {currentPage === 'home' ? (
          <main style={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: 'white',
            fontFamily: '"Inter", system-ui, sans-serif'
          }}>
            <Hero />
            <About />
            <Expertise />
            <Suite onNavigate={() => {
              window.scrollTo(0, 0);
              setCurrentPage('player');
            }} />
          </main>
        ) : (
          <main style={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <Player onBack={() => {
              window.scrollTo(0, 0);
              setCurrentPage('home');
            }} />
          </main>
        )}
      </div>

      <style>{`
        body, html {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          background-color: black; /* Fond de secours si Spline met du temps à charger */
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
          40% {transform: translateY(-10px);}
          60% {transform: translateY(-5px);}
        }
      `}</style>
    </div>
  );
}

export default App;