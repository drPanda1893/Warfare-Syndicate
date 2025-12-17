import React, { useState } from 'react';
import { Target } from 'lucide-react';

export default function MortarTool() {
  const [input, setInput] = useState({ dist: '', elev: '' });
  const [calc, setCalc] = useState(null);

  const handleCalc = () => {
    if(!input.dist) return;
    // Vereinfachte Formel für Arma Reforger 82mm
    const elevResult = 1200 - (input.dist * 0.8);
    setCalc({ 
      elev: Math.floor(elevResult), 
      flight: (input.dist * 0.02).toFixed(1),
      charge: input.dist > 2000 ? 2 : 1
    });
  };

  return (
    <div className="h-full flex flex-col justify-center animate-in slide-in-from-right duration-500">
      <div className="bg-slate-900/80 border border-slate-700 p-8 rounded-sm backdrop-blur-md relative overflow-hidden max-w-lg mx-auto w-full shadow-2xl">
        
        {/* HUD Ecken */}
        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-amber-500/50"></div>
        <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-amber-500/50"></div>
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-amber-500/50"></div>
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-amber-500/50"></div>

        <h2 className="text-2xl font-mono text-amber-500 mb-6 flex items-center gap-2 border-b border-slate-700 pb-4">
          <Target /> ARTILLERY COMPUTER
        </h2>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="text-xs text-slate-500 uppercase tracking-wider block mb-1">Target Dist (m)</label>
            <input 
              type="number" 
              className="w-full bg-black/50 border border-slate-700 text-green-500 font-mono text-lg p-2 focus:border-amber-500 outline-none transition-colors"
              placeholder="0000"
              onChange={e => setInput({...input, dist: e.target.value})}
            />
          </div>
          <div>
            <label className="text-xs text-slate-500 uppercase tracking-wider block mb-1">Target Alt (m)</label>
            <input 
              type="number" 
              className="w-full bg-black/50 border border-slate-700 text-green-500 font-mono text-lg p-2 focus:border-amber-500 outline-none transition-colors"
              placeholder="000"
              onChange={e => setInput({...input, elev: e.target.value})}
            />
          </div>
        </div>

        <button 
          onClick={handleCalc}
          className="w-full bg-amber-700 hover:bg-amber-600 text-black font-bold py-3 uppercase tracking-widest transition-colors mb-6 shadow-[0_0_15px_rgba(180,83,9,0.4)]"
        >
          Compute Solution
        </button>

        {calc && (
          <div className="grid grid-cols-3 gap-2 text-center bg-black/60 p-4 border border-green-900/50">
            <div>
              <div className="text-[10px] text-slate-500 uppercase">Elevation</div>
              <div className="text-2xl text-green-400 font-mono font-bold">{calc.elev}</div>
            </div>
            <div>
              <div className="text-[10px] text-slate-500 uppercase">Charge</div>
              <div className="text-2xl text-green-400 font-mono font-bold">{calc.charge}</div>
            </div>
            <div>
              <div className="text-[10px] text-slate-500 uppercase">Time of Flight</div>
              <div className="text-2xl text-green-400 font-mono font-bold">{calc.flight}s</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}