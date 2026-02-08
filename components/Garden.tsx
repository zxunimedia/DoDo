
import React, { useState, useEffect } from 'react';
import { PlantState } from '../types';

const PLANT_TYPES = ['🌸 櫻花樹', '🌻 向日葵', '🍁 楓樹', '🎄 聖誕松', '🎍 許願竹', '🌹 永恆玫瑰', '🌵 仙人掌', '🌷 鬱金香'];

const Garden: React.FC = () => {
  const [plants, setPlants] = useState<PlantState[]>(() => {
    const saved = localStorage.getItem('healing_garden_v2');
    if (saved) return JSON.parse(saved);
    return [];
  });

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [message, setMessage] = useState('歡迎來到心靈花園，點擊「＋」播下新的希望。');

  useEffect(() => {
    localStorage.setItem('healing_garden_v2', JSON.stringify(plants));
    
    // 隨機產生蟲子邏輯
    const bugInterval = setInterval(() => {
      setPlants(prev => prev.map(p => {
        if (!p.hasBugs && p.stage !== 'adult' && Math.random() > 0.95) {
          return { ...p, hasBugs: true };
        }
        return p;
      }));
    }, 15000);

    return () => clearInterval(bugInterval);
  }, [plants]);

  const addNewSeed = () => {
    if (plants.length >= 6) {
      setMessage('花園已經很熱鬧了，先照顧好現有的夥伴吧。');
      return;
    }
    const newPlant: PlantState = {
      id: Date.now().toString(),
      type: '神祕種子',
      finalType: PLANT_TYPES[Math.floor(Math.random() * PLANT_TYPES.length)],
      growth: 0,
      lastWatered: Date.now(),
      hasBugs: false,
      stage: 'seed'
    };
    setPlants(prev => [...prev, newPlant]);
    setSelectedIndex(plants.length);
    setMessage('新生命降臨了，給它一點愛吧。');
  };

  const updatePlant = (index: number, amount: number) => {
    const target = plants[index];
    if (target.hasBugs) {
      setMessage('這棵植物正被蟲子困擾，先幫它除蟲吧！');
      return;
    }
    if (target.growth >= 100) {
      setMessage('它已經長成最美的樣子了。');
      return;
    }

    setPlants(prev => {
      const next = [...prev];
      const p = { ...next[index] };
      p.growth = Math.min(p.growth + amount, 100);
      
      if (p.growth >= 100) {
        p.stage = 'adult';
        p.type = p.finalType;
      } else if (p.growth > 60) {
        p.stage = 'seedling';
        p.type = '茁壯幼苗';
      } else if (p.growth > 20) {
        p.stage = 'sprout';
        p.type = '害羞的新芽';
      }
      
      next[index] = p;
      return next;
    });
  };

  const handleAction = (type: 'water' | 'fertilize' | 'clean') => {
    if (selectedIndex === null) {
      setMessage('請先選擇一棵植物進行照料。');
      return;
    }

    if (type === 'water') {
      updatePlant(selectedIndex, 8);
      setMessage('水分滲透了土壤，生命在悄悄萌發。');
    } else if (type === 'fertilize') {
      updatePlant(selectedIndex, 20);
      setMessage('充足的養分讓它充滿了能量！');
    } else if (type === 'clean') {
      setPlants(prev => {
        const next = [...prev];
        next[selectedIndex] = { ...next[selectedIndex], hasBugs: false };
        return next;
      });
      setMessage('蟲子被清理乾淨了，植物舒展了枝葉。');
    }
  };

  const harvestPlant = (index: number) => {
    if (window.confirm('要將這棵植物採收並製成乾燥花留念嗎？（將會移除它）')) {
      setPlants(prev => prev.filter((_, i) => i !== index));
      setSelectedIndex(null);
      setMessage('謝謝它的陪伴，下一顆種子會是什麼呢？');
    }
  };

  const getPlantVisual = (p: PlantState) => {
    if (p.hasBugs) return '🐛';
    switch (p.stage) {
      case 'seed': return '🌰';
      case 'sprout': return '🌱';
      case 'seedling': return '🌿';
      case 'adult': return p.finalType.split(' ')[0];
      default: return '🌰';
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-2xl h-full mt-4 space-y-4">
      <div className="text-center w-full">
        <h2 className="text-2xl font-bold text-slate-700">心靈莊園</h2>
        <p className="text-slate-500 text-xs font-light mt-1">同步孕育多個夢想，感受生命的律動</p>
      </div>

      {/* Grid of Pots */}
      <div className="grid grid-cols-3 gap-4 w-full p-4 bg-white/20 backdrop-blur-md rounded-[2.5rem] border border-white/40 shadow-inner">
        {plants.map((p, i) => (
          <button
            key={p.id}
            onClick={() => {
              setSelectedIndex(i);
              setMessage(`${p.type} 正在成長中...`);
            }}
            className={`relative aspect-square flex flex-col items-center justify-center rounded-3xl transition-all duration-300 ${
              selectedIndex === i 
                ? 'bg-white/60 shadow-lg ring-2 ring-blue-200 scale-105 z-10' 
                : 'bg-white/30 hover:bg-white/40 grayscale-[0.3]'
            }`}
          >
            <div className={`text-5xl transition-transform duration-500 ${p.hasBugs ? 'animate-bounce' : 'hover:rotate-12'}`}>
              {getPlantVisual(p)}
            </div>
            <div className="absolute bottom-2 w-4/5 h-1 bg-slate-200/50 rounded-full overflow-hidden">
              <div className="h-full bg-green-400" style={{ width: `${p.growth}%` }} />
            </div>
            {p.hasBugs && <div className="absolute top-1 right-1 text-xs">⚠️</div>}
          </button>
        ))}

        {plants.length < 6 && (
          <button
            onClick={addNewSeed}
            className="aspect-square flex flex-col items-center justify-center rounded-3xl bg-white/20 border-2 border-dashed border-white/50 text-white/70 hover:bg-white/30 hover:text-white transition-all text-4xl"
            title="播下新種子"
          >
            ＋
          </button>
        )}
      </div>

      {/* Selected Plant Control Panel */}
      {selectedIndex !== null && plants[selectedIndex] ? (
        <div className="w-full bg-white/50 backdrop-blur-xl p-6 rounded-[2rem] border border-white/60 shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-700">{plants[selectedIndex].type}</h3>
              <p className="text-xs text-slate-400">目前成長進度：{plants[selectedIndex].growth}%</p>
            </div>
            {plants[selectedIndex].stage === 'adult' && (
              <button 
                onClick={() => harvestPlant(selectedIndex)}
                className="text-[10px] bg-slate-700 text-white px-3 py-1 rounded-full hover:bg-slate-800 transition-colors"
              >
                採收
              </button>
            )}
          </div>

          <div className="grid grid-cols-3 gap-3">
            <button 
              onClick={() => handleAction('water')}
              className="flex flex-col items-center p-3 bg-blue-50/80 hover:bg-blue-100 rounded-2xl border border-blue-100 transition-colors group"
            >
              <span className="text-2xl mb-1 group-active:scale-125 transition-transform">💧</span>
              <span className="text-[10px] font-bold text-blue-600">澆水</span>
            </button>
            <button 
              onClick={() => handleAction('fertilize')}
              className="flex flex-col items-center p-3 bg-amber-50/80 hover:bg-amber-100 rounded-2xl border border-amber-100 transition-colors group"
            >
              <span className="text-2xl mb-1 group-active:scale-125 transition-transform">✨</span>
              <span className="text-[10px] font-bold text-amber-600">施肥</span>
            </button>
            <button 
              onClick={() => handleAction('clean')}
              className={`flex flex-col items-center p-3 rounded-2xl border transition-all group ${
                plants[selectedIndex].hasBugs ? 'bg-red-50 border-red-200' : 'bg-slate-50/50 border-slate-100 opacity-40'
              }`}
            >
              <span className="text-2xl mb-1 group-active:scale-125 transition-transform">🧹</span>
              <span className="text-[10px] font-bold text-slate-600">除蟲</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full py-12 text-center text-slate-400/60 font-light italic text-sm">
          點擊上方的植物槽位，開始今日的修護時光
        </div>
      )}

      <div className="bg-white/30 px-4 py-2 rounded-full border border-white/40">
        <p className="text-center text-slate-600 text-[11px] font-medium">{message}</p>
      </div>

      <style>{`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        .animate-in { animation: fade-in 0.3s ease-out; }
      `}</style>
    </div>
  );
};

export default Garden;
