
import React, { useState, useEffect } from 'react';
import { ChameleonState } from '../types';

const SPECIES_VARIANTS = [
  { name: '高冠變色龍', base: '#86efac', gradient: 'from-green-300 to-green-600' },
  { name: '國王變色龍', base: '#93c5fd', gradient: 'from-blue-300 to-indigo-600' },
  { name: '地毯變色龍', base: '#fca5a5', gradient: 'from-pink-300 to-rose-600' },
  { name: '七彩變色龍', base: '#fcd34d', gradient: 'from-yellow-200 to-orange-500' },
  { name: '侏儒變色龍', base: '#d1d5db', gradient: 'from-slate-300 to-slate-500' }
];

const Terrarium: React.FC = () => {
  const [chameleons, setChameleons] = useState<ChameleonState[]>(() => {
    const saved = localStorage.getItem('healing_chameleons');
    return saved ? JSON.parse(saved) : [];
  });
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [message, setMessage] = useState('安靜的森林裡，誰在樹枝上悄悄變色？');
  const [isCatching, setIsCatching] = useState(false);

  useEffect(() => {
    localStorage.setItem('healing_chameleons', JSON.stringify(chameleons));
  }, [chameleons]);

  const adoptChameleon = () => {
    if (chameleons.length >= 4) {
      setMessage('棲息地的空間有限，給目前的夥伴多一點愛吧。');
      return;
    }
    const variant = SPECIES_VARIANTS[Math.floor(Math.random() * SPECIES_VARIANTS.length)];
    const newChameleon: ChameleonState = {
      id: Date.now().toString(),
      species: variant.name,
      baseColor: variant.base,
      currentColor: variant.base,
      growth: 0,
      hunger: 60,
      mood: 'calm',
      stage: 'juvenile'
    };
    setChameleons([...chameleons, newChameleon]);
    setSelectedIndex(chameleons.length);
    setMessage(`你遇見了一隻「${variant.name}」，它看起來正試著適應你。`);
  };

  const feed = () => {
    if (selectedIndex === null) return;
    const target = chameleons[selectedIndex];
    
    if (target.hunger >= 100) {
      setMessage('它肚子圓滾滾的，再吃就動不了啦。');
      return;
    }

    setIsCatching(true);
    setTimeout(() => {
      setIsCatching(false);
      setChameleons(prev => {
        const next = [...prev];
        const c = { ...next[selectedIndex] };
        c.hunger = Math.min(100, c.hunger + 25);
        c.growth = Math.min(100, c.growth + 10);
        c.mood = 'happy';
        
        // 成長階段更新
        if (c.growth >= 100) c.stage = 'adult';
        else if (c.growth > 40) c.stage = 'subadult';
        
        next[selectedIndex] = c;
        return next;
      });
      setMessage('咻！準確地捕捉到了蟋蟀，這是一頓美味的大餐。');
    }, 400);
  };

  const changeColor = (color: string) => {
    if (selectedIndex === null) return;
    setChameleons(prev => {
      const next = [...prev];
      next[selectedIndex] = { ...next[selectedIndex], currentColor: color };
      return next;
    });
    setMessage(`它優雅地變幻了色彩，與環境融為一體。`);
  };

  const activeCham = selectedIndex !== null ? chameleons[selectedIndex] : null;

  return (
    <div className="flex flex-col items-center w-full max-w-2xl h-full mt-4 space-y-4">
      <div className="text-center w-full">
        <h2 className="text-2xl font-bold text-slate-700">幻彩棲息地</h2>
        <p className="text-slate-500 text-xs font-light mt-1">隱藏在葉片間的優雅，隨心變換色彩</p>
      </div>

      {/* Habitat Area */}
      <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-emerald-100 to-teal-50 rounded-[3rem] border-8 border-white/40 shadow-2xl overflow-hidden">
        {/* Environment Decoration */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute top-10 left-10 text-6xl">🌿</div>
          <div className="absolute bottom-20 right-10 text-6xl rotate-12">🍃</div>
          <div className="absolute top-40 right-40 text-4xl opacity-30">🕸️</div>
        </div>

        {/* The Branch */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4 bg-amber-900/30 rounded-full blur-[2px]" />

        {/* Chameleon Display */}
        {activeCham && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <div 
              className="relative transition-all duration-1000 ease-in-out transform hover:scale-105"
              style={{ 
                color: activeCham.currentColor,
                filter: `drop-shadow(0 0 15px ${activeCham.currentColor}44)`
              }}
            >
              {/* Chameleon Emoji & Visuals */}
              <span className={`text-[120px] transition-transform ${isCatching ? 'scale-x-125' : ''}`}>🦎</span>
              
              {/* Tongue Animation */}
              {isCatching && (
                <div className="absolute top-1/2 left-full w-32 h-2 bg-rose-400 rounded-full origin-left animate-tongue-out" />
              )}
              
              {/* Rotating Eye */}
              <div className="absolute top-[45%] left-[25%] w-2 h-2 bg-black rounded-full animate-eye-roll" />
            </div>
            
            {/* Growth Status Badge */}
            <div className="mt-4 bg-white/40 backdrop-blur-md px-4 py-1 rounded-full text-[10px] font-bold text-slate-600 border border-white/50">
              {activeCham.species} ({activeCham.stage === 'adult' ? '成年' : (activeCham.stage === 'subadult' ? '亞成' : '幼體')})
            </div>
          </div>
        )}

        {/* List of Chameleons */}
        <div className="absolute bottom-6 left-6 right-6 flex space-x-3 overflow-x-auto pb-2 scrollbar-hide">
          {chameleons.map((c, i) => (
            <button
              key={c.id}
              onClick={() => {
                setSelectedIndex(i);
                setMessage(`${c.species} 正對著你轉動眼睛呢。`);
              }}
              className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center transition-all ${
                selectedIndex === i ? 'bg-white shadow-lg scale-110 border-2 border-emerald-200' : 'bg-white/30 border border-white/20'
              }`}
            >
              <span className="text-3xl" style={{ color: c.currentColor }}>🦎</span>
            </button>
          ))}
          {chameleons.length < 4 && (
            <button 
              onClick={adoptChameleon}
              className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/20 border-2 border-dashed border-white/40 flex items-center justify-center text-white text-2xl"
            >
              ＋
            </button>
          )}
        </div>
      </div>

      {/* Controls */}
      {activeCham && (
        <div className="w-full bg-white/50 backdrop-blur-xl p-6 rounded-[2.5rem] border border-white/60 shadow-xl">
          <div className="flex justify-between items-center mb-6">
            <div className="flex space-x-2">
              <button onClick={() => changeColor('#86efac')} className="w-8 h-8 rounded-full bg-green-300 border-2 border-white shadow-sm hover:scale-110 transition-transform" />
              <button onClick={() => changeColor('#93c5fd')} className="w-8 h-8 rounded-full bg-blue-300 border-2 border-white shadow-sm hover:scale-110 transition-transform" />
              <button onClick={() => changeColor('#fca5a5')} className="w-8 h-8 rounded-full bg-pink-300 border-2 border-white shadow-sm hover:scale-110 transition-transform" />
              <button onClick={() => changeColor('#fcd34d')} className="w-8 h-8 rounded-full bg-yellow-300 border-2 border-white shadow-sm hover:scale-110 transition-transform" />
              <button onClick={() => changeColor('#4b5563')} className="w-8 h-8 rounded-full bg-slate-600 border-2 border-white shadow-sm hover:scale-110 transition-transform" />
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-[10px] text-slate-400 font-bold uppercase">飽食度</div>
                <div className="w-24 h-1.5 bg-slate-200 rounded-full overflow-hidden mt-1">
                  <div className="h-full bg-orange-400 transition-all duration-500" style={{ width: `${activeCham.hunger}%` }} />
                </div>
              </div>
              <button 
                onClick={feed}
                disabled={isCatching}
                className="bg-emerald-500 text-white p-3 rounded-2xl shadow-lg hover:bg-emerald-600 active:scale-95 transition-all disabled:opacity-50"
              >
                🦟 餵食蟋蟀
              </button>
            </div>
          </div>
          
          <p className="text-center text-slate-600 text-[11px] font-medium italic">{message}</p>
        </div>
      )}

      <style>{`
        @keyframes tongue-out {
          0% { transform: scaleX(0); opacity: 0; }
          40% { transform: scaleX(1); opacity: 1; }
          100% { transform: scaleX(0); opacity: 0; }
        }
        .animate-tongue-out { animation: tongue-out 0.4s ease-out; }
        
        @keyframes eye-roll {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(2px, -1px); }
          50% { transform: translate(-1px, 2px); }
          75% { transform: translate(-2px, 0); }
        }
        .animate-eye-roll { animation: eye-roll 3s infinite; }
      `}</style>
    </div>
  );
};

export default Terrarium;
