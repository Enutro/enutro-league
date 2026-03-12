//-------------------------Code à utiliser pour placer le texte sur la gauche-------------------------
// const About = () => {
//   return (
//     <section style={{
//       width: '100%',
//       maxWidth: '1200px',
//       margin: '0 auto',
//       padding: '100px 5vw',
//       display: 'flex',
//       flexDirection: 'column',
//       zIndex: 1
//     }}>
//       <h2 style={{ 
//         fontSize: '1.2rem', 
//         textTransform: 'uppercase', 
//         letterSpacing: '2px', 
//         color: '#D2FFFF', 
//         marginBottom: '2rem',
//         fontWeight: '600'
//       }}>
//         / Parcours & Vision \
//       </h2>
      
//       <p style={{ 
//         fontSize: '1.5rem', 
//         lineHeight: '1.4', 
//         color: '#fff', 
//         fontWeight: '600', 
//         marginBottom: '2rem' 
//       }}>
//         Étudiant en ingénierie à <span style={{ color: '#00d8ff' }}>CESI</span> et apprenti chez <span style={{ color: '#00d8ff' }}>RAYAM</span>.
//       </p>

//       <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#aaa', fontWeight: '300' }}>
//         Actuellement en première année de cycle ingénieur, mon approche de l'informatique repose sur la compréhension des structures : de l'architecture des systèmes à l'optimisation des flux de données. 
//         Cette immersion en alternance me permet de confronter la rigueur théorique aux exigences réelles du terrain.
//         <br /><br />
//         J'envisage l'informatique comme un outil de résolution de problèmes complexes, où chaque structure doit être cohérente, performante et tournée vers l'avenir.
//       </div>
//     </section>
//   );
// }

// export default About;


//-------------------------Code à utiliser pour centrer au milieu de la page-------------------------
const About = () => {
  return (
    <section style={{
      width: '100%',
      maxWidth: '950px', 
      margin: '40px auto',
      padding: '80px 40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center', 
      textAlign: 'center',  
      zIndex: 1,
      // --- Le "Back" moins visible ---
      backgroundColor: 'rgba(0, 0, 0, 0.2)', // Noir très léger (20% d'opacité)
      backdropFilter: 'blur(8px)',           // Flou un peu plus doux que 12px
      WebkitBackdropFilter: 'blur(8px)', 
      borderRadius: '40px',                  // Arrondi très large pour fondre les bords
      border: '1px solid rgba(255, 255, 255, 0.03)', // Bordure quasi invisible
    }}>
      <h2 style={{ 
        fontSize: '1rem', 
        textTransform: 'uppercase', 
        letterSpacing: '4px', 
        color: '#00d8ff', 
        marginBottom: '2.5rem',
        fontWeight: '700',
        textShadow: '0 0 20px rgba(0, 216, 255, 0.3)'
      }}>
        / Parcours & Vision \
      </h2>
      
      <p style={{ 
        fontSize: 'clamp(2rem, 5vw, 2.5rem)', 
        lineHeight: '1.2', 
        fontWeight: '800', 
        marginBottom: '2.5rem',
        maxWidth: '850px',
        background: 'linear-gradient(to right, #ffffff, #a1a1a1)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textShadow: '0 10px 30px rgba(0,0,0,0.5)',
        letterSpacing: '-1px'
      }}>
        JE VAIS FOUDROYER LES DIAM COMME IL FAUT.
      </p>

      <div style={{ 
        fontSize: '1.15rem', 
        lineHeight: '1.8', 
        color: '#A9B1D6', 
        fontWeight: '400',
        maxWidth: '750px',
        textShadow: '0 2px 15px rgba(0, 0, 0, 0.9)' // Ombre renforcée pour compenser le fond clair
      }}>
        Actuellement Platine et en plein audit de la défaite, mon approche de la Faille repose sur la <strong>déconstruction des structures</strong> : de l’architecture des tours que je sacrifie pour optimiser mes flux de golds au démantèlement psychologique de mes adversaires. 
        <br /><br />
        Cette immersion forcée en SoloQ me permet de confronter ma rigueur tactique à l’exigence réelle du terrain, peuplé de quatre coéquipiers qui ont manifestement <strong>le temps de réaction d'une huître en plein jet lag</strong> et qui ne savent pas lire une minimap sans assistance respiratoire.
        <br /><br />
        
        <span style={{ 
          color: '#fff', 
          fontStyle: 'italic', 
          opacity: 0.8,
          fontSize: '1rem'
        }}>
          J'envisage la Faille comme un outil de résolution de problèmes complexes, où chaque structure de lane doit être cohérente, performante et tournée vers l'avenir.
        </span>
      </div>
    </section>
  );
}

export default About;