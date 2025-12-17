import React from 'react';
import { BACKGROUNDS } from '../lib/data';

export default function BackgroundLayer({ view }) {
  
  // Kamera-Logik: Berechnet Zoom und Position basierend auf dem View
  const getCameraTransform = () => {
    switch(view) {
      case 'squads': return 'scale(1.1) translateX(-20px)';
      case 'join': return 'scale(1.1) translateX(20px) translateY(-10px)';
      case 'mortar': return 'scale(1.2) translateY(30px)';
      case 'staff': return 'scale(1.05) translateY(-20px) translateX(-10px)';
      default: return 'scale(1) translateX(0) translateY(0)';
    }
  };

  const currentBg = BACKGROUNDS[view] || BACKGROUNDS.home;

  return (
    <>
      {/* Das eigentliche Hintergrundbild */}
      <div 
        className="absolute inset-0 transition-all duration-1000 ease-in-out"
        style={{ 
          background: currentBg, 
          transform: getCameraTransform(),
          filter: view === 'home' ? 'brightness(1)' : 'brightness(0.6) blur(2px)' // Fokus-Effekt
        }}
      />
      
      {/* Taktisches Raster-Overlay (Grid) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
    </>
  );
}