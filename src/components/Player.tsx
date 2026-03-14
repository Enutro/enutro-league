import React, { useState } from 'react';
import jinx from '../assets/champions/jinx.jpg';
import kaisa from '../assets/champions/kaisa.jpg';
import ashe from '../assets/champions/ashe.jpg';
import caitlyn from '../assets/champions/caitlyn.jpg';
import nilah from '../assets/champions/nilah.jpg';
import sivir from '../assets/champions/sivir.jpg';
import varus from '../assets/champions/varus.jpg';
import yunara from '../assets/champions/yunara.jpg';

interface PlayerProps {
  onBack: () => void;
}

const Player: React.FC<PlayerProps> = ({ onBack }) => {
  const [selectedChamps, setSelectedChamps] = useState<any[]>([]);

  // Ajout de la propriété 'tag' pour chaque champion
  const CHAMPIONS = [
    { name: "YUNARA", mastery: "Mastery 4", points: "12k PTS", image: yunara, stats: { winrate: 50, kda: 1.78 }, color: "#ffffff", tag: "PROTO_UNIT" },
    { name: "CAITLYN", mastery: "Mastery 5", points: "22k PTS", image: caitlyn, stats: { winrate: 43, kda: 1.75 }, color: "#7b00ff", tag: "SNIPER_V5" },
    { name: "ASHE", mastery: "Mastery 7", points: "49k PTS", image: ashe, stats: { winrate: 60, kda: 2.94 }, color: "#00d8ff", tag: "FROST_OS" },
    { name: "VARUS", mastery: "Mastery 9", points: "67k PTS", image: varus, stats: { winrate: 53, kda: 2.47 }, color: "#ff4444", tag: "CORRUPT_MOD" },
    { name: "SIVIR", mastery: "Mastery 11", points: "88k PTS", image: sivir, stats: { winrate: 80, kda: 3.52 }, color: "#ffaa00", tag: "VELOCITY" },
    { name: "NILAH", mastery: "Mastery 11", points: "88k PTS", image: nilah, stats: { winrate: 38, kda: 1.48 }, color: "#00ffcc", tag: "HYDRO_BLADE" },
    { name: "JINX", mastery: "Mastery 12", points: "106k PTS", image: jinx, stats: { winrate: 50, kda: 1.64 }, color: "#ff00d4", tag: "CHAOS_CORE" },
    { name: "KAI'SA", mastery: "Mastery 31", points: "307k PTS", image: kaisa, stats: { winrate: 33, kda: 2.37 }, color: "#a335ee", tag: "VOID_GEAR" }
  ];

  const handleSelect = (champ: any) => {
    const isAlreadySelected = selectedChamps.find(c => c.name === champ.name);
    if (isAlreadySelected) {
      setSelectedChamps(selectedChamps.filter(c => c.name !== champ.name));
    } else {
      if (selectedChamps.length < 2) {
        setSelectedChamps([...selectedChamps, champ]);
      } else {
        setSelectedChamps([selectedChamps[1], champ]);
      }
    }
  };

  const renderStatBar = (val: number, type: 'wr' | 'kda') => {
    const total = 10;
    let scale = type === 'wr' ? Math.round(val / 10) : Math.round(val * 2);
    const filledCount = Math.min(Math.max(scale, 0), 10);
    return `[${"█".repeat(filledCount)}${" ".repeat(total - filledCount)}]`;
  };

  return (
    <div style={{
      backgroundColor: 'transparent', color: '#aaa', fontFamily: '"Courier New", Courier, monospace',
      minHeight: '100vh', width: '100vw', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', overflowX: 'hidden', position: 'relative', zIndex: 10, padding: '40px 0'
    }}>
      
      <header style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1 style={{ color: '#fff', fontSize: '4rem', letterSpacing: '10px', margin: 0, textShadow: '0 0 30px rgba(0,216,255,0.3)' }}>
          SUMMONER <span style={{ color: '#ffaa00' }}>ENUTRO888</span>
        </h1>
        <div style={{ color: '#00d8ff', fontSize: '0.8rem', letterSpacing: '3px', marginTop: '10px' }}>
          {selectedChamps.length < 2 ? `[ SELECT_${2 - selectedChamps.length}_UNITS_TO_COMPARE ]` : "[ ANALYSIS_READY ]"}
        </div>
      </header>

      {/* CARROUSEL */}
      <section style={{ width: '100%', position: 'relative' }}>
        <div style={{ display: 'flex', width: 'max-content', animation: 'scrollChampions 45s linear infinite', padding: '20px 0' }}>
          {[...CHAMPIONS, ...CHAMPIONS].map((champ, i) => {
            const isSelected = selectedChamps.some(c => c.name === champ.name);
            return (
              <div 
                key={i}
                onClick={() => handleSelect(champ)}
                style={{
                  width: '320px', height: '520px', backgroundColor: 'rgba(5, 5, 5, 0.95)', 
                  border: isSelected ? `2px solid ${champ.color}` : `1px solid ${champ.color}44`,
                  margin: '0 20px', display: 'flex', flexDirection: 'column', position: 'relative',
                  flexShrink: 0, overflow: 'hidden', cursor: 'pointer',
                  boxShadow: isSelected ? `0 0 25px ${champ.color}66` : `0 10px 30px rgba(0,0,0,0.9)`,
                  transform: isSelected ? 'translateY(-15px)' : 'none', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                <div style={{ width: '100%', height: '65%', overflow: 'hidden', position: 'relative' }}>
                  <img src={champ.image} alt={champ.name} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: isSelected ? 1 : 0.8 }} />
                  
                  {/* MASTERY BADGE */}
                  <div style={{
                    position: 'absolute', top: '12px', left: '12px', backgroundColor: 'rgba(0,0,0,0.9)',
                    padding: '6px 14px', fontSize: '0.9rem', border: `2px solid ${champ.color}`,
                    color: champ.color, fontWeight: '900', textTransform: 'uppercase'
                  }}>{champ.mastery}</div>

                  {/* DYNAMIC TAG BADGE */}
                  <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    right: '10px',
                    backgroundColor: 'rgba(0, 0, 0, 0.85)',
                    color: '#fff',
                    padding: '2px 8px',
                    fontSize: '0.65rem',
                    border: '1px solid #333',
                    letterSpacing: '1px',
                    fontWeight: 'bold',
                    clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)' // Petite forme trapèze
                  }}>
                    {champ.tag}
                  </div>
                </div>
                
                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#050505', borderTop: `2px solid ${champ.color}44` }}>
                  <div>
                    <h3 style={{ color: '#fff', margin: '0', fontSize: '1.4rem', letterSpacing: '2px' }}>{champ.name}</h3>
                    <div style={{ color: '#fff', fontSize: '0.85rem', fontWeight: '900' }}>XP_POINTS: {champ.points}</div>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: champ.color, whiteSpace: 'pre', fontWeight: 'bold' }}>
                    WINRATE {renderStatBar(champ.stats.winrate, 'wr')} {champ.stats.winrate}%<br/>
                    KDA_AVG {renderStatBar(champ.stats.kda, 'kda')} {champ.stats.kda.toFixed(2)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* COMPARATEUR / BATTLE BOX */}
      {selectedChamps.length > 0 && (
        <section style={{
          width: '85%', maxWidth: '1100px', margin: '50px auto 0 auto', 
          backgroundColor: 'rgba(5,5,5,0.9)', border: '1px solid #333', padding: '40px',
          boxShadow: '0 0 50px rgba(0,0,0,1)', position: 'relative', overflow: 'hidden'
        }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'rgba(0,216,255,0.2)', animation: 'radarScan 4s linear infinite' }} />
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            
            <div style={{ flex: 1, textAlign: 'left', borderLeft: `4px solid ${selectedChamps[0].color}`, paddingLeft: '20px' }}>
              <div style={{ fontSize: '0.7rem', color: selectedChamps[0].color, marginBottom: '5px' }}>TAG: {selectedChamps[0].tag}</div>
              <h2 style={{ color: selectedChamps[0].color, fontSize: '2.5rem', margin: 0 }}>{selectedChamps[0].name}</h2>
              <div style={{ fontSize: '1.2rem', color: '#fff', marginTop: '10px' }}>WINRATE: {selectedChamps[0].stats.winrate}%</div>
              <div style={{ fontSize: '1rem', color: '#666' }}>KDA_INDEX: {selectedChamps[0].stats.kda}</div>
            </div>

            <div style={{ padding: '0 40px', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#ffaa00', textShadow: '0 0 20px #ffaa0066', fontStyle: 'italic' }}>VS</div>
            </div>

            <div style={{ flex: 1, textAlign: 'right', borderRight: `4px solid ${selectedChamps[1]?.color || '#222'}`, paddingRight: '20px' }}>
              {selectedChamps[1] ? (
                <>
                  <div style={{ fontSize: '0.7rem', color: selectedChamps[1].color, marginBottom: '5px' }}>TAG: {selectedChamps[1].tag}</div>
                  <h2 style={{ color: selectedChamps[1].color, fontSize: '2.5rem', margin: 0 }}>{selectedChamps[1].name}</h2>
                  <div style={{ fontSize: '1.2rem', color: '#fff', marginTop: '10px' }}>WINRATE: {selectedChamps[1].stats.winrate}%</div>
                  <div style={{ fontSize: '1rem', color: '#666' }}>KDA_INDEX: {selectedChamps[1].stats.kda}</div>
                </>
              ) : (
                <div style={{ color: '#333', fontSize: '1.5rem', letterSpacing: '5px' }}>[ WAITING_FOR_TARGET ]</div>
              )}
            </div>
          </div>

          {selectedChamps.length === 2 && (
            <div style={{ marginTop: '40px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '10px', color: '#00d8ff' }}>
                <span>&lt; SIMULATED_COMBAT_POWER</span>
                <span>EFFICIENCY_RATIO &gt;</span>
              </div>
              <div style={{ height: '15px', width: '100%', display: 'flex', backgroundColor: '#111', border: '1px solid #333' }}>
                <div style={{ 
                  width: `${(selectedChamps[0].stats.winrate / (selectedChamps[0].stats.winrate + selectedChamps[1].stats.winrate)) * 100}%`,
                  backgroundColor: selectedChamps[0].color, transition: 'width 0.6s cubic-bezier(0.65, 0, 0.35, 1)',
                  boxShadow: `inset 0 0 10px rgba(0,0,0,0.5)`
                }} />
                <div style={{ 
                  flex: 1, backgroundColor: selectedChamps[1].color, transition: 'width 0.6s cubic-bezier(0.65, 0, 0.35, 1)',
                  boxShadow: `inset 0 0 10px rgba(0,0,0,0.5)`
                }} />
              </div>
            </div>
          )}
        </section>
      )}

      <section style={{
        width: '85%', maxWidth: '1100px', margin: '40px auto 0 auto',
        display: 'flex', flexDirection: 'column', alignItems: 'center'
      }}>
        <div style={{
          fontSize: '0.7rem', color: '#00d8ff', marginBottom: '10px', 
          width: '100%', textAlign: 'left', letterSpacing: '2px'
        }}>
          [ Les diams vont finir comme ça ]
        </div>
        <div style={{
          width: '100%',
          aspectRatio: '16/9',
          border: '1px solid #333',
          backgroundColor: '#000',
          position: 'relative',
          boxShadow: '0 0 20px rgba(0,0,0,0.5)'
        }}>
          <iframe
            src="https://clips.twitch.tv/embed?clip=BusySnappyGarageHotPokket&parent=localhost&parent=127.0.0.1&parent=enutro-league.vercel.app&autoplay=false"
            height="100%"
            width="100%"
            frameBorder="0"
            allowFullScreen={true}
            scrolling="no"
            style={{ position: 'absolute', top: 0, left: 0 }}
          ></iframe>
        </div>
      </section>

      <footer style={{ textAlign: 'center', marginTop: '60px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <button onClick={onBack} style={{
          background: 'transparent', color: '#00d8ff', border: '1px solid #00d8ff',
          padding: '12px 35px', cursor: 'pointer', textTransform: 'uppercase', 
          letterSpacing: '2px', transition: 'all 0.3s', fontWeight: 'bold'
        }}
        onMouseOver={(e) => e.currentTarget.style.background = 'rgba(0,216,255,0.1)'}
        onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
        >{"<"} RETURN_TO_DASHBOARD</button>

        <a href="https://www.op.gg/summoners/euw/enutro888-EUW" target="_blank" rel="noreferrer"
          style={{
            background: 'transparent', color: '#ffaa00', border: '1px solid #ffaa00',
            padding: '12px 35px', cursor: 'pointer', textTransform: 'uppercase', 
            letterSpacing: '2px', transition: 'all 0.3s', textDecoration: 'none',
            fontSize: '0.8rem', display: 'inline-block', fontWeight: 'bold'
          }}
          onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255, 170, 0, 0.1)'}
          onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
        >[ ACCESS_OPGG ] {">"}</a>
      </footer>

      <style>{`
        @keyframes scrollChampions {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-360px * ${CHAMPIONS.length})); } 
        }
        @keyframes radarScan {
          0% { top: 0; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        section:hover div { animation-play-state: paused; }
      `}</style>
    </div>
  );
};

export default Player;