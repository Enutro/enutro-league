//-------------------------Code à utiliser pour placer le texte sur la gauche-------------------------
// const Hero = () => {
//   return (
//     <section style={{
//       height: '100vh',
//       width: '100%',
//       maxWidth: '1200px',
//       margin: '0 auto',
//       padding: '0 5vw',
//       position: 'relative', 
//       display: 'flex',
//       alignItems: 'flex-start', // Aligne le contenu au début (à gauche)
//       justifyContent: 'center', // Centre verticalement
//       flexDirection: 'column',
//       zIndex: 2,
//     }}>
//       <div style={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center', // Garde le contenu aligné au centre de CE bloc
//         textAlign: 'center',  // Garde le style de texte "centré" que tu aimes
//         maxWidth: 'fit-content', // Le bloc ne prend que la place nécessaire
//       }}>
//         <h1 style={{ 
//           fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', 
//           fontWeight: '800',
//           lineHeight: '1.1',
//           marginBottom: '1.5rem',
//           background: 'linear-gradient(to right, #ffffff, #a1a1a1)',
//           WebkitBackgroundClip: 'text',
//           WebkitTextFillColor: 'transparent',
//           textShadow: '0 10px 30px rgba(0,0,0,0.3)',
//           maxWidth: '800px', // Limite la largeur pour forcer les retours à la ligne
//         }}>
//           Concevoir au-delà du plat : je bâtis des interfaces où le code prend du relief
//         </h1>

//         <p style={{ 
//           fontSize: 'clamp(1rem, 4vw, 1.25rem)',
//           maxWidth: '600px',
//           lineHeight: '1.6',
//           color: '#ccc',
//           marginBottom: '2rem'
//         }}>
//           Salut, je suis <span style={{ color: '#fff', fontWeight: 'bold' }}>Durtelle de Saint Sauveur Noa</span>. 
//           <br />Futur ingénieur informatique.
//         </p>

//         <div style={{
//           marginTop: '20px',
//           fontSize: '0.9rem',
//           opacity: 0.5,
//           animation: 'bounce 2s infinite'
//         }}>
//           Scrollez pour découvrir ↓
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;


//-------------------------Code à utiliser pour centrer au milieu de la page-------------------------
const Hero = () => {
  return (
    <section style={{
      height: '100vh',
      width: '100vw', 
      position: 'relative', 
      display: 'flex',
      alignItems: 'center',     
      justifyContent: 'center',  
      zIndex: 2,
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',   
        textAlign: 'center',    
        width: '100%',           
        maxWidth: '900px',       
        padding: '20px',
      }}>
       <h1 style={{ 
          fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', 
          fontWeight: '500',
          lineHeight: '1.1',
          marginBottom: '1.5rem',
          background: 'linear-gradient(to right, #ffffff, #a1a1a1)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 10px 30px rgba(0,0,0,0.3)',
        }}>
          Je structure des strats de génie pour des mates qui ne savent même pas que la mini-map existe. Bienvenue dans 
          <span style={{
            background: 'linear-gradient(to bottom, #57ebde 0%, #29a0b1 50%, #164a5c 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: '800', 
            filter: 'drop-shadow(0px 0px 10px rgba(87, 235, 222, 0.3))' 
          }}> l'enfer du Platine</span>.
        </h1>

        <p style={{ 
          fontSize: 'clamp(1rem, 4vw, 1.25rem)',
          maxWidth: '600px',
          lineHeight: '1.6',
          color: '#ccc',
          marginBottom: '2rem'
        }}>
          Salut, je suis <span style={{ color: '#fff', fontWeight: 'bold' }}>Enutro</span>. 
          <br />Un ancient jgl reconvertie en adc, oui je suis devenu fou.
          <br />Btw je vaux large le diam
        </p>

        <div style={{
          marginTop: '20px',
          fontSize: '0.9rem',
          opacity: 0.5,
          animation: 'bounce 2s infinite'
        }}>
          Scrollez pour découvrir ↓
        </div>
      </div>
    </section>
  );
}

export default Hero;