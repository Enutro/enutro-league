import { useEffect, useRef } from 'react';
import arcadeMusic from '../assets/audio/Piercieng.mp3';

export const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const startAudio = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.05; // Gestion du volume
        audioRef.current.play()
          .then(() => {
            window.removeEventListener('click', startAudio);
            window.removeEventListener('scroll', startAudio);
          })
          .catch(error => console.log("L'autoplay a été bloqué par le navigateur :", error));
      }
    };

    window.addEventListener('click', startAudio);
    window.addEventListener('scroll', startAudio);

    return () => {
      window.removeEventListener('click', startAudio);
      window.removeEventListener('scroll', startAudio);
    };
  }, []);

  return (
    <audio 
      ref={audioRef} 
      src={arcadeMusic} 
      loop 
      style={{ display: 'none' }} 
    />
  );
};