'use client'; // Wichtig für Next.js App Router

import React, { useState, useEffect } from 'react';
import BackgroundLayer from '@/components/BackgroundLayer';
import MainMenu from '@/components/MainMenu';
import ContentStage from '@/components/ContentStage';

export default function Home() {
  const [view, setView] = useState('home'); // start view
  const [mounted, setMounted] = useState(false);

  // Verhindert Hydration Errors bei client-side Animationen
  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return null;

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-slate-200 font-sans selection:bg-amber-500/30 selection:text-black">
      
      {/* 1. LAYER: Hintergrund & Kamera */}
      <BackgroundLayer view={view} />

      {/* 2. LAYER: UI Grid */}
      <div className="relative z-10 w-full h-full flex">
        
        {/* Links: Navigation */}
        <MainMenu view={view} setView={setView} />

        {/* Rechts: Dynamischer Inhalt */}
        <ContentStage view={view} setView={setView} />
        
      </div>
    </div>
  );
}