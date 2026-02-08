
import React, { useState, useEffect, useRef } from 'react';
import { FishState } from '../types';

const FISH_SPECIES = [
  { name: '金亮小魚', emoji: '🐠', finalEmoji: '🐠' },
  { name: '紅粉鬥魚', emoji: '🐟', finalEmoji: '🐟' },
  { name: '幻彩霓虹', emoji: '🐡', finalEmoji: '🐡' },
  { name: '深海發光水母', emoji: '🎐', finalEmoji: '🐙' },
  { name: '療育小海龜', emoji: '🐢', finalEmoji: '🐢' },
  { name: '幸運錦鯉', emoji: '🎏', finalEmoji: '🐬' }
];

const FishTank: React.FC = () => {
  const [fishes, setFishes] = useState<FishState[]>(() => {
    const saved = localStorage.getItem('healing_fishtank');
    return saved ? JSON.parse(saved) : [];
  });
  const [food, setFood] = useState<{ x: number, y: number, id: number }[]>([]);
  const [message, setMessage] = useState('看著水面波紋，心情也跟著平靜了。');
  const requestRef = useRef<number>(null);

  useEffect(() => {
    localStorage.setItem('healing_fishtank', JSON.stringify(fishes));
  }, [fishes]);

  // 游動與餵食邏輯
  useEffect(() => {
    const update = () => {
      setFishes(prev => prev.map(fish => {
        let { x, y, direction, hunger, growth, stage } = fish;
        
        // 飢餓度隨時間緩慢下降
        const newHunger = Math.max(0, hunger - 0.05);

        // 如果有飼料，游向最近的飼料
        if (food.length > 0 && hunger < 80) {
          const nearestFood = food[0];
          const dx = nearestFood.x - x;
          const dy = nearestFood.y - y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          
          if (dist < 5) {
            // 吃到飼料
            setFood(f => f.filter(it => it.id !== nearestFood.id));
            return { 
              ...fish, 
              hunger: Math.min(100, hunger + 30), 
              growth: Math.min(100, growth + 5),
              stage: growth + 5 >= 100 ? 'adult' : (growth + 5 > 30 ? 'fry' : 'egg')
            };
          }

          x += dx / dist * 0.5;
          y += dy / dist * 0.5;
          direction = dx > 0 ? 1 : -1;
        } else {
          // 隨機游動
          x += (Math.random() - 0.5) * 0.3 + (direction * 0.2);
          y += (Math.random() - 0.5) * 0.2;

          if (x < 5) direction = 1;
          if (x > 95) direction = -1;
          if (y < 10) y = 10;
          if (y > 90) y = 90;
        }

        return { ...fish, x, y, direction, hunger: newHunger };
      }));
      requestRef.current = requestAnimationFrame(update);
    };
    requestRef.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(requestRef.current!);
  }, [food]);

  const addEgg = () => {
    if (fishes.length >= 8) {
      setMessage('水族箱已經很熱鬧了，先照顧好現有的魚兒吧。');
      return;
    }
    const species = FISH_SPECIES[Math.floor(Math.random() * FISH_SPECIES.length)];
    const newFish: FishState = {
      id: Date.now().toString(),
      species: species.name,
      emoji: '🥚', // 初始是蛋
      growth: 0,
      hunger: 50,
      x: 20 + Math.random() * 60,
      y: 70 + Math.random() * 20,
      direction: Math.random() > 0.5 ? 1 : -1,
      stage: 'egg'
    };
    setFishes([...fishes, newFish]);
    setMessage('獲得了一顆神祕魚蛋！記得餵食讓它孵化。');
  };

  const dropFood = () => {
    const newFood = { x: 20 + Math.random() * 60, y: 0, id: Date.now() };
    setFood(prev => [...prev, newFood]);
    // 飼料下沉動畫
    const timer = setInterval(() => {
      setFood(curr => curr.map(f => f.id === newFood.id ? { ...f, y: f.y + 1 } : f).filter(f => f.y < 95));
    }, 50);
    setTimeout(() => clearInterval(timer), 5000);
  };

  const cleanTank = () => {
    setFishes(fishes.filter(f => f.hunger > 10)); // 移除餓死的魚(示意)
    setMessage('水質淨化完成，空氣中帶著淡淡的海鹽味。');
  };

  return (
    <div className="flex flex-col items-center w-full max-w-2xl h-full mt-4 space-y-4">
      <div className="text-center w-full">
        <h2 className="text-2xl font-bold text-slate-700">舒壓水族箱</h2>
        <p className="text-slate-500 text-xs font-light mt-1">聽，那是氣泡與水流的耳語</p>
      </div>

      {/* Tank Container */}
      <div className="relative w-full aspect-[16/9] bg-gradient-to-b from-blue-400/30 to-blue-900/40 backdrop-blur-md rounded-[2.5rem] border-4 border-white/30 shadow-2xl overflow-hidden group">
        {/* Animated Bubbles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i} 
              className="absolute bg-white/20 rounded-full animate-float-up"
              style={{ 
                left: `${Math.random() * 100}%`, 
                width: `${4 + Math.random() * 8}px`, 
                height: `${4 + Math.random() * 8}px`,
                bottom: '-20px',
                animationDuration: `${5 + Math.random() * 5}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        {/* Food */}
        {food.map(f => (
          <div 
            key={f.id} 
            className="absolute w-2 h-2 bg-amber-600 rounded-full shadow-sm"
            style={{ left: `${f.x}%`, top: `${f.y}%` }}
          />
        ))}

        {/* Fishes */}
        {fishes.map(fish => {
          const currentSpecies = FISH_SPECIES.find(s => s.name === fish.species);
          const displayEmoji = fish.stage === 'egg' ? '🥚' : (fish.stage === 'fry' ? '🦐' : currentSpecies?.finalEmoji || '🐠');
          
          return (
            <div
              key={fish.id}
              className="absolute transition-all duration-300 pointer-events-none"
              style={{ 
                left: `${fish.x}%`, 
                top: `${fish.y}%`, 
                transform: `translate(-50%, -50%) scaleX(${fish.direction}) ${fish.stage === 'egg' ? '' : 'scale(1.2)'}`,
                filter: fish.hunger < 20 ? 'grayscale(0.8)' : 'none'
              }}
            >
              <div className="relative">
                <span className="text-3xl drop-shadow-lg">{displayEmoji}</span>
                {/* Hunger bar */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-1 bg-black/20 rounded-full overflow-hidden">
                  <div className="h-full bg-green-400" style={{ width: `${fish.hunger}%` }} />
                </div>
              </div>
            </div>
          );
        })}

        {/* Overlay reflection */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
      </div>

      {/* Control Panel */}
      <div className="w-full bg-white/40 backdrop-blur-xl p-6 rounded-[2rem] border border-white/50 shadow-xl">
        <div className="grid grid-cols-3 gap-4">
          <button 
            onClick={addEgg}
            className="flex flex-col items-center p-3 bg-indigo-50 hover:bg-indigo-100 rounded-2xl border border-indigo-100 transition-all active:scale-95"
          >
            <span className="text-2xl mb-1">🥚</span>
            <span className="text-[10px] font-bold text-indigo-600">抽魚蛋</span>
          </button>
          <button 
            onClick={dropFood}
            className="flex flex-col items-center p-3 bg-orange-50 hover:bg-orange-100 rounded-2xl border border-orange-100 transition-all active:scale-95"
          >
            <span className="text-2xl mb-1">🥯</span>
            <span className="text-[10px] font-bold text-orange-600">餵飼料</span>
          </button>
          <button 
            onClick={cleanTank}
            className="flex flex-col items-center p-3 bg-cyan-50 hover:bg-cyan-100 rounded-2xl border border-cyan-100 transition-all active:scale-95"
          >
            <span className="text-2xl mb-1">🧼</span>
            <span className="text-[10px] font-bold text-cyan-600">淨化</span>
          </button>
        </div>
        <p className="mt-4 text-center text-slate-500 text-[11px] font-medium animate-pulse">{message}</p>
      </div>

      <style>{`
        @keyframes float-up {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          20% { opacity: 0.5; }
          100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
        }
        .animate-float-up { animation: float-up linear infinite; }
      `}</style>
    </div>
  );
};

export default FishTank;
