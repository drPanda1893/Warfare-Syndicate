import React from 'react';
import MortarTool from './MortarTool';
import { SQUADS, SOCIALS, STAFF } from '../lib/data';

export default function ContentStage({ view, setView }) {
  
  return (
    <div className="flex-1 relative overflow-hidden z-10">
      
      {/* ---------------- VIEW: HOME ---------------- */}
      <div className={`absolute inset-0 p-16 flex flex-col justify-center transition-all duration-700 ${view === 'home' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20 pointer-events-none'}`}>
        <div className="max-w-3xl">
          <div className="inline-block px-3 py-1 border border-amber-500/50 text-amber-500 font-mono text-sm mb-6 bg-amber-500/10 backdrop-blur">
            INCOMING TRANSMISSION
          </div>
          <h2 className="text-7xl font-black text-white uppercase leading-none mb-6 drop-shadow-2xl">
            Casual Milsim.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">Serious Fun.</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-xl leading-relaxed mb-10 border-l-2 border-slate-500 pl-6">
            Welcome to Warfare Syndicate. We are an English speaking Arma Reforger unit focusing on immersion, teamwork, and tactical gameplay without the bureaucracy.
          </p>
          <div className="flex gap-4">
            <button onClick={() => setView('join')} className="bg-amber-600 hover:bg-amber-500 text-black px-8 py-4 font-bold uppercase tracking-wider transition-all hover:scale-105 shadow-lg shadow-amber-900/20">
              Start Application
            </button>
            <a href={SOCIALS.youtube} target="_blank" rel="noreferrer" className="border border-white/20 hover:bg-white/10 text-white px-8 py-4 font-bold uppercase tracking-wider transition-all flex items-center gap-2">
               Watch Content
            </a>
          </div>
        </div>
      </div>

      {/* ---------------- VIEW: SQUADS ---------------- */}
      <div className={`absolute inset-0 p-12 overflow-y-auto transition-all duration-700 ${view === 'squads' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'}`}>
        <h3 className="text-4xl font-black text-white uppercase mb-12 flex items-center gap-4">
          <span className="w-12 h-1 bg-amber-600"></span> Active Units
        </h3>
        
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 pb-20">
          {SQUADS.map((squad) => (
            <div key={squad.id} className="group bg-slate-900/60 hover:bg-slate-900/90 border border-white/10 hover:border-amber-500/50 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-2">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-slate-800 rounded text-slate-200 group-hover:text-amber-500 transition-colors">
                  {squad.icon}
                </div>
                <div className="text-right">
                  <div className="text-xs font-mono text-slate-500">STATUS</div>
                  <div className="text-sm font-bold text-green-500">{squad.stats.status}</div>
                </div>
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">{squad.name}</h4>
              <div className="text-xs font-mono text-amber-700 mb-4">{squad.type} UNIT</div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 h-12">
                {squad.desc}
              </p>
              <div className="w-full bg-slate-800 h-1 mt-4 relative overflow-hidden">
                <div className="absolute left-0 top-0 h-full bg-amber-600 w-3/4"></div>
              </div>
              <div className="flex justify-between mt-2 text-xs font-mono text-slate-500">
                <span>STRENGTH</span>
                <span>{squad.stats.strength} Operators</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ---------------- VIEW: STAFF / CREDITS (NEU) ---------------- */}
      <div className={`absolute inset-0 p-12 overflow-y-auto transition-all duration-700 ${view === 'staff' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
        <div className="max-w-5xl mx-auto">
          <h3 className="text-4xl font-black text-white uppercase mb-8 border-b border-white/10 pb-4">
            Command Structure
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Admins & Mods */}
            <div className="space-y-8">
              <div>
                <h4 className="text-red-500 font-mono text-sm uppercase tracking-widest mb-4 font-bold">Server Administration</h4>
                <div className="space-y-2">
                  {STAFF.admins.map((admin, i) => (
                    <div key={i} className="flex items-center justify-between bg-slate-900/80 p-4 border-l-4 border-red-600">
                      <span className="text-white font-bold text-lg">{admin.name}</span>
                      <span className="text-xs bg-red-900/30 text-red-400 px-2 py-1 rounded">ADM</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-cyan-500 font-mono text-sm uppercase tracking-widest mb-4 font-bold">Moderation</h4>
                <div className="space-y-2">
                  {STAFF.mods.map((mod, i) => (
                    <div key={i} className="flex items-center justify-between bg-slate-900/80 p-4 border-l-4 border-cyan-500">
                      <span className="text-white font-bold text-lg">{mod.name}</span>
                      <span className="text-xs bg-cyan-900/30 text-cyan-400 px-2 py-1 rounded">MOD</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Representatives */}
            <div>
              <h4 className="text-green-500 font-mono text-sm uppercase tracking-widest mb-4 font-bold">Staff Representatives</h4>
              <div className="grid grid-cols-1 gap-3">
                 {STAFF.reps.map((rep, i) => (
                    <div key={i} className="bg-slate-900/50 p-4 border border-white/5 flex flex-col">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-slate-200 font-bold">{rep.name}</span>
                        <span className="text-[10px] text-slate-500 uppercase">{rep.role}</span>
                      </div>
                      <span className="text-xs text-amber-600 font-mono">{rep.context}</span>
                    </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* ---------------- VIEW: JOIN ---------------- */}
      <div className={`absolute inset-0 p-12 flex items-center justify-center transition-all duration-700 ${view === 'join' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
        <div className="max-w-4xl w-full bg-slate-900/90 border-y-2 border-amber-600/50 p-12 backdrop-blur-xl shadow-2xl">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1 space-y-6">
              <h3 className="text-3xl font-black text-white uppercase">Recruitment Protocol</h3>
              <div className="space-y-4">
                {[
                  { step: "01", text: "Join Discord & Read Rules" },
                  { step: "02", text: "Apply in #recruitment channel" },
                  { step: "03", text: "Complete Trial Phase (1 Week)" },
                  { step: "04", text: "Earn Full Membership & Patch" }
                ].map((item) => (
                  <div key={item.step} className="flex items-center gap-4 group">
                    <div className="text-2xl font-black text-slate-700 group-hover:text-amber-600 transition-colors">{item.step}</div>
                    <div className="h-px flex-1 bg-slate-700 group-hover:bg-amber-600/50 transition-colors"></div>
                    <div className="font-mono text-slate-300 uppercase">{item.text}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 bg-black/40 p-6 border border-slate-700">
              <h4 className="text-sm font-bold text-slate-400 uppercase mb-4">Requirements</h4>
              <ul className="space-y-2 text-sm text-slate-300 font-mono">
                <li className="flex gap-2"><span className="text-green-500">✓</span> Working Microphone</li>
                <li className="flex gap-2"><span className="text-green-500">✓</span> Age 16+ (Maturity required)</li>
                <li className="flex gap-2"><span className="text-green-500">✓</span> Follow Chain of Command</li>
                <li className="flex gap-2"><span className="text-green-500">✓</span> Basic English</li>
              </ul>
              <a href={SOCIALS.discord} target="_blank" rel="noreferrer" className="block w-full mt-8 bg-[#5865F2] hover:bg-[#4752C4] text-white text-center py-3 font-bold uppercase transition-colors">
                Open Comm Link (Discord)
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- VIEW: MORTAR ---------------- */}
      <div className={`absolute inset-0 p-12 transition-all duration-700 ${view === 'mortar' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
         <MortarTool />
      </div>

    </div>
  );
}