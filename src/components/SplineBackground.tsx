import { useEffect, useRef } from 'react';
import '@splinetool/viewer';

const SplineElement = 'spline-viewer' as any;

const SplineBackground = () => {
  const splineRef = useRef<any>(null);

  useEffect(() => {
    const shadowBuster = setInterval(() => {
      if (splineRef.current && splineRef.current.shadowRoot) {
        const shadow = splineRef.current.shadowRoot;
        
        // On cible le logo par ID et par balise lien
        const logo = shadow.querySelector('#logo');
        const link = shadow.querySelector('a'); 
        
        if (logo) logo.style.display = 'none';
        
        if (link && link.href.includes('spline')) {
          link.style.display = 'none';
          link.style.opacity = '0';
          link.style.pointerEvents = 'none';
        }
      }
    }, 100);

    const timeout = setTimeout(() => clearInterval(shadowBuster), 10000);

    return () => {
      clearInterval(shadowBuster);
      clearTimeout(timeout);
    };
  }, []);

  // AJOUT DU RETURN : C'est ce qui manquait pour que le composant soit valide
  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100vw', 
      height: '100vh', 
      zIndex: -1,
      backgroundColor: '#000' 
    }}>
      <SplineElement 
        ref={splineRef}
        url="https://prod.spline.design/98Q9QVQ9yK5o4uYF/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default SplineBackground;