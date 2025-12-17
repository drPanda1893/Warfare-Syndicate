import React from 'react';
import { 
  Activity, 
  Users, 
  Radio, 
  Target, 
  Terminal, 
  ShieldCheck,
  ChevronRight,
  Youtube
} from 'lucide-react';
import { SOCIALS } from '../lib/data';

// Kleiner Helper für die Buttons
const MenuButton = ({ label, active, onClick, icon }) => (
  <button 
    onClick={onClick}
    className={`
      group w-full text-left px-6 py-4 flex items-center justify-between
      border-l-4 transition-all duration-300 backdrop-blur-sm
      ${active 
        ? 'bg-amber-500/10 border-amber-500 text-amber-500 pl-8' 
        : 'border-transparent text-slate-400 hover:text-slate-100 hover:bg-slate-800/50 hover:pl-7'}
    `}
  >
    <div className="flex items-center gap-4">
      <span className={`transition-colors ${active ? 'text-amber-500' : 'text-slate-600 group-hover:text-slate-400'}`}>
        {icon}
      </span>
      <span className="font-mono uppercase tracking-widest font-bold text-lg">
        {label}
      </span>
    </div>
    {active && <ChevronRight className="animate-pulse" />}
  </button>
);

export default function MainMenu({ view, setView }) {
  return (
    <div className="w-80 h-full bg-slate-950/80 backdrop-blur-xl border-r border-white/10 flex flex-col justify-between shrink-0 z-20">
      
      {/* Header */}
      <div className="p-8 border-b border-white/5">
        <h1 className="text-4xl font-black italic tracking-tighter text-slate-100 mb-1">
          WS<span className="text-amber-600">.</span>UNIT
        </h1>
        <div className="flex items-center gap-2 text-xs font-mono text-amber-600">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          ONLINE // 72 OPERATORS
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 py-8 space-y-2 overflow-y-auto custom-scrollbar">
        <MenuButton 
          label="Overview" 
          icon={<Activity size={20}/>} 
          active={view === 'home'} 
          onClick={() => setView('home')} 
        />
        <MenuButton 
          label="Squad Roster" 
          icon={<Users size={20}/>} 
          active={view === 'squads'} 
          onClick={() => setView('squads')} 
        />
        <MenuButton 
          label="Command Staff" 
          icon={<ShieldCheck size={20}/>} 
          active={view === 'staff'} 
          onClick={() => setView('staff')} 
        />
        <MenuButton 
          label="Enlistment" 
          icon={<Radio size={20}/>} 
          active={view === 'join'} 
          onClick={() => setView('join')} 
        />
        
        <div className="my-4 border-t border-white/5 mx-6"></div>
        
        <MenuButton 
          label="Mortar Calc" 
          icon={<Target size={20}/>} 
          active={view === 'mortar'} 
          onClick={() => setView('mortar')} 
        />
      </nav>

      {/* Externe Links & Footer */}
      <div className="p-6 border-t border-white/5 bg-black/20">
        <div className="flex flex-col gap-2 mb-4">
           <a href={SOCIALS.discord} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-500 hover:text-[#5865F2] transition-colors group">
              <Terminal size={16} />
              <span className="font-mono text-sm font-bold group-hover:underline">JOIN DISCORD</span>
            </a>
            <a href={SOCIALS.youtube} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-500 hover:text-[#FF0000] transition-colors group">
              <Youtube size={16} />
              <span className="font-mono text-sm font-bold group-hover:underline">YOUTUBE CHANNEL</span>
            </a>
        </div>
        <div className="text-[10px] text-slate-600 font-mono">
          WARFARE SYNDICATE<br/>
          EST. 2024 // ARMA REFORGER
        </div>
      </div>
    </div>
  );
}