import React, { useState, useEffect } from 'react';

// Si tu utilises finalement React Router, garde l'import Link. 
// Sinon, on utilise une prop passée par App.tsx.
const Suite = ({ onNavigate }: { onNavigate: () => void }) => {

  const [isFixing, setIsFixing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showError, setShowError] = useState(false); 

  const incidentLogs = [
    { type: "CRITICAL", code: "SUPP_GAP_001", msg: "L'unité Support tente un trade 1v2 pendant que je freeze la wave." },
    { type: "WARNING", code: "JGL_AFK_FARM", msg: "Engagement majeur au Drake. Le jungler allié privilégie actuellement la biodiversité locale." },
    { type: "ERROR", code: "MACRO_ERR_404", msg: "Toplane incapable de localiser la touche 'Teleport' sur son interface." },
    { type: "FATAL", code: "BRAIN_NOT_FOUND", msg: "Collision mentale généralisée détectée lors du dernier teamfight." }
  ];

  useEffect(() => {
    let interval = null; 

    if (isFixing && progress < 100) {
      interval = setInterval(() => {
        setProgress(prev => {
          const next = prev + Math.floor(Math.random() * 15) + 1;
          return next > 100 ? 100 : next;
        });
      }, 200);
    } else if (progress === 100) {
      setTimeout(() => {
        setIsFixing(false);
        setProgress(0);
        setShowError(true);
      }, 500);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isFixing, progress]);

  const btnStyle = {
    background: 'transparent',
    padding: '12px 25px',
    cursor: 'pointer',
    fontSize: '0.8rem',
    textTransform: 'uppercase',
    transition: 'all 0.2s ease-in-out',
    fontFamily: '"Courier New", Courier, monospace',
    border: '1px solid',
    display: 'inline-block',
    textDecoration: 'none',
    outline: 'none'
  };

  return (
    <div style={{
      backgroundColor: '#000',
      color: '#aaa',
      fontFamily: '"Courier New", Courier, monospace',
      padding: '60px 20px',
      lineHeight: '1.6',
      width: '100%',
      position: 'relative'
    }}>
      
      {/* --- MODALE D'ERREUR STYLISÉE --- */}
      {showError && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.9)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          backdropFilter: 'blur(8px)'
        }}>
          <div style={{
            width: '450px',
            backgroundColor: '#050000',
            border: '1px solid #ff4444',
            padding: '40px',
            boxShadow: '0 0 30px rgba(255, 68, 68, 0.2)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Ligne de scan animation */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, height: '2px',
                background: 'rgba(255, 68, 68, 0.3)',
                boxShadow: '0 0 10px #ff4444',
                animation: 'scanline 3s linear infinite'
            }} />

            <h2 style={{ color: '#ff4444', fontSize: '1rem', marginBottom: '20px', letterSpacing: '3px' }}>
              [!] CRITICAL_RUNTIME_ERROR
            </h2>
            <p style={{ color: '#eee', fontSize: '0.85rem', marginBottom: '30px', textAlign: 'left', lineHeight: '1.5' }}>
              REPAIR_SEQUENCE_TERMINATED.<br/><br/>
              Cause: <span style={{color: '#ff4444'}}>Incompatible_Teammate_Hardware</span><br/>
              Logic board not detected in 4/5 units.
            </p>
            <button 
              onClick={() => setShowError(false)}
              style={{ ...btnStyle, borderColor: '#ff4444', color: '#ff4444' }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 68, 68, 0.1)'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              DISMISS_REPORT
            </button>
          </div>
        </div>
      )}

      {/* --- OVERLAY DE CHARGEMENT --- */}
      {isFixing && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: '#000',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9998,
          color: '#00d8ff'
        }}>
          <p style={{ marginBottom: '20px', letterSpacing: '4px', fontSize: '1rem' }}>EXECUTING_BRAIN_PATCH.SH</p>
          <div style={{ width: '300px', border: '1px solid #00d8ff', padding: '4px' }}>
            <div style={{
              backgroundColor: '#00d8ff',
              height: '10px',
              width: `${progress}%`,
              transition: 'width 0.1s linear'
            }}></div>
          </div>
          <p style={{ marginTop: '15px', fontSize: '0.7rem', opacity: 0.6 }}>BRAIN_PATCH_PROGRESS: 45.2 MB/S</p>
        </div>
      )}

      {/* --- CONTENU --- */}
      <div style={{ 
        maxWidth: '900px', 
        margin: '0 auto', 
        filter: (isFixing || showError) ? 'blur(4px)' : 'none', 
        transition: 'filter 0.4s' 
      }}>
        
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{ color: '#00d8ff', fontSize: '0.8rem', letterSpacing: '3px', borderBottom: '1px solid #1a1a1a', paddingBottom: '10px' }}>
            [01] SYSTEM_INCIDENT_REPORTS
          </h2>
          <div style={{ marginTop: '20px', backgroundColor: '#050505', border: '1px solid #111', padding: '15px' }}>
            {incidentLogs.map((log, i) => (
              <div key={i} style={{ marginBottom: '10px', fontSize: '0.8rem' }}>
                <span style={{ color: log.type === 'FATAL' || log.type === 'CRITICAL' ? '#ff4444' : '#ffaa00' }}>{log.type}</span>
                <span style={{ color: '#444', marginLeft: '10px' }}>[{log.code}]</span>
                <span style={{ color: '#eee', marginLeft: '10px' }}>{log.msg}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '80px' }}>
          <h2 style={{ color: '#00d8ff', fontSize: '0.8rem', letterSpacing: '3px', borderBottom: '1px solid #1a1a1a', paddingBottom: '10px' }}>
            [02] DEPLOYMENT_STATUS
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginTop: '30px' }}>
            <div>
              <h3 style={{ fontSize: '0.75rem', color: '#fff' }}>CURRENT_ENVIRONMENT</h3>
              <p style={{ fontSize: '0.85rem', marginTop: '10px' }}>
                <strong style={{ color: '#00d8ff' }}>Platine(Hardstuck)</strong><br />
                Température : 180°C<br />
                Mental : 2%
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '0.75rem', color: '#fff' }}>LOAD_BALANCING</h3>
              <p style={{ fontSize: '0.85rem', marginTop: '10px' }}>
                <strong style={{ color: '#00d8ff' }}>Rôle : ADC</strong><br />
                Winrate : 49.9%<br />
                Poids des mates : 450kg
              </p>
            </div>
          </div>
        </section>

        <section style={{ textAlign: 'center', padding: '40px', border: '1px dashed #222' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <button 
              onClick={() => setIsFixing(true)}
              disabled={isFixing || showError}
              style={{
                ...btnStyle,
                borderColor: '#00d8ff',
                color: '#00d8ff',
                opacity: (isFixing || showError) ? 0.5 : 1
              }}
              onMouseOver={(e) => !isFixing && !showError && (e.currentTarget.style.backgroundColor = 'rgba(0, 216, 255, 0.1)')}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              Run Fix_Teammates.exe
            </button>

            {/* Changement ici : On utilise la prop onNavigate passée par App.tsx */}
            <button 
              onClick={onNavigate}
              style={{
                ...btnStyle,
                borderColor: '#ffaa00',
                color: '#ffaa00',
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 170, 0, 0.1)'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              [ ACCESS_PLAYER_PROFILE ]
            </button>
          </div>
        </section>

        <footer style={{ marginTop: '100px', textAlign: 'center', opacity: 0.2 }}>
          <p style={{ fontSize: '0.6rem' }}>BUILD 2026.03.12 // PLAT_VIBES_OS</p>
        </footer>

      </div>

      <style>{`
        @keyframes scanline {
          0% { top: 0; }
          100% { top: 100%; }
        }
      `}</style>
    </div>
  );
};

export default Suite;