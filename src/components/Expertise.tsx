//-------------------------Code à utiliser pour placer le texte sur la gauche-------------------------
// const Expertise = () => {
//   const skills = [
//     {
//       title: "Architecture Systèmes",
//       desc: "Conception de structures logicielles modulaires et analyse des interactions système.",
//       icon: "⚙️"
//     },
//     {
//       title: "Développement Fullstack",
//       desc: "Construction d'applications robustes, du design de l'interface à la logique serveur.",
//       icon: "💻"
//     },
//     {
//       title: "Réseaux & Infra",
//       desc: "Gestion d'infrastructures informatiques et optimisation de la connectivité réseau.",
//       icon: "🌐"
//     },
//     {
//       title: "Data Management",
//       desc: "Modélisation de bases de données et optimisation des flux d'informations.",
//       icon: "📊"
//     }
//   ];

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
//         letterSpacing: '5px', 
//         color: '#D2FFFF', 
//         marginBottom: '3rem',
//         fontWeight: '600'
//       }}>
//         / Expertise Technique \
//       </h2>

//       <div style={{
//         display: 'grid',
//         gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
//         gap: '20px',
//         width: '100%',
//         marginTop:'2rem'
//       }}>
//         {skills.map((skill, index) => (
//           <div key={index} style={{
//             background: 'rgba(255, 255, 255, 0.03)',
//             border: '1px solid rgba(255, 255, 255, 0.1)',
//             padding: '30px',
//             borderRadius: '15px',
//             transition: 'all 0.3s ease',
//             cursor: 'default'
//           }}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.borderColor = '#D2FFFF';
//             e.currentTarget.style.transform = 'translateY(-5px)';
//             e.currentTarget.style.background = 'rgba(210, 255, 255, 0.05)';
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
//             e.currentTarget.style.transform = 'translateY(0)';
//             e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
//           }}>
//             <div style={{ fontSize: '1.5rem', marginBottom: '15px' }}>{skill.icon}</div>
//             <h3 style={{ 
//               color: '#D2FFFF', 
//               fontSize: '1.1rem', 
//               marginBottom: '10px',
//               fontWeight: '600'
//             }}>
//               {skill.title}
//             </h3>
//             <p style={{ color: '#999', fontSize: '0.9rem', lineHeight: '1.5' }}>
//               {skill.desc}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Expertise;


//-------------------------Code à utiliser pour centrer au milieu de la page-------------------------
const Expertise = () => {
  const skills = [
    {
      title: "Génie Civil & Structures",
      desc: "Optimisation du démantèlement des tours adverses et architecture de défense imprenable (jusqu'à ce que mon Top meure en 1v1).",
      icon: "🏗️"
    },
    {
      title: "Logistique & Flux de Golds",
      desc: "Gestion avancée de la data économique : maximisation du farm personnel et redistribution zéro vers mes mates inutiles.",
      icon: "💰"
    },
    {
      title: "Réseaux & Vision Panoramique",
      desc: "Déploiement d'une infrastructure de wards haute performance étant donné que la map me parle plus que mes coéquipiers.",
      icon: "📡"
    },
    {
      title: "Gestion de Crise (Psychologie)",
      desc: "Tentatives désespérées de debugger le cerveau de quatre individus en plein crash système dès la 5ème minute.",
      icon: "🧠"
    },
    {
      title: "Ingénierie du Positionnement",
      desc: "Calcul de trajectoires complexes pour éviter les sorts adverses pendant que mon support fonce dans le tas tête la première.",
      icon: "📐"
    }
  ];

  return (
    <section style={{
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '100px 5vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center', 
      zIndex: 1
    }}>
      <h2 style={{ 
        fontSize: '1.2rem', 
        textTransform: 'uppercase', 
        letterSpacing: '5px', 
        color: '#D2FFFF', 
        marginBottom: '3rem',
        fontWeight: '600',
        textAlign: 'center'
      }}>
        / Expertise Technique \
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '30px',
        width: '100%',
        marginTop:'2rem'
      }}>
        {skills.map((skill, index) => (
          <div key={index} style={{
            background: 'rgba(10, 10, 10, 0.75)', 
            backdropFilter: 'blur(8px)', 
            border: '1px solid rgba(255, 255, 255, 0.15)',
            padding: '30px',
            borderRadius: '15px',
            transition: 'all 0.3s ease',
            cursor: 'default',
            textAlign: 'center' 
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#D2FFFF';
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.background = 'rgba(210, 255, 255, 0.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
          }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '15px' }}>{skill.icon}</div>
            <h3 style={{ color: '#D2FFFF', fontSize: '1.1rem', marginBottom: '10px', fontWeight: '600' }}>
              {skill.title}
            </h3>
            <p style={{ color: '#999', fontSize: '0.9rem', lineHeight: '1.5',textShadow: '0 2px 10px rgba(0, 0, 0, 0.9)', }}>
              {skill.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Expertise;