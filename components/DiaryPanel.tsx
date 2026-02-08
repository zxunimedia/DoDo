
import React, { useState, useEffect } from 'react';
import { DiaryEntry } from '../types';

interface DiaryPanelProps {
  expectedCode: string;
}

const DiaryPanel: React.FC<DiaryPanelProps> = ({ expectedCode }) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [unlockKey, setUnlockKey] = useState('');
  const [entries, setEntries] = useState<DiaryEntry[]>(() => {
    const saved = localStorage.getItem('healing_diaries');
    return saved ? JSON.parse(saved) : [];
  });
  const [newEntry, setNewEntry] = useState('');

  useEffect(() => {
    localStorage.setItem('healing_diaries', JSON.stringify(entries));
  }, [entries]);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (unlockKey === expectedCode) {
      setIsUnlocked(true);
    } else {
      alert('這把鑰匙似乎打不開這本日記...再想一下？');
    }
  };

  const addEntry = () => {
    if (!newEntry.trim()) return;
    const entry: DiaryEntry = {
      id: Date.now().toString(),
      content: newEntry,
      date: new Date().toLocaleDateString('zh-TW', { month: 'long', day: 'numeric', weekday: 'short' })
    };
    setEntries([entry, ...entries]);
    setNewEntry('');
  };

  if (!isUnlocked) {
    return (
      <div className="w-full max-w-lg bg-white/40 backdrop-blur-md rounded-[2.5rem] border border-white/50 shadow-xl p-10 text-center mt-6">
        <div className="text-5xl mb-6">🫧</div>
        <h2 className="text-xl font-bold text-slate-700 mb-4 tracking-wide">沈默的海洋日記</h2>
        <p className="text-slate-500 text-sm mb-8 font-light">那些無法對人言說的話語，都鎖進了水底</p>
        <form onSubmit={handleUnlock} className="flex flex-col space-y-4">
          <input
            type="password"
            value={unlockKey}
            onChange={(e) => setUnlockKey(e.target.value)}
            placeholder="輸入解鎖密語..."
            className="w-full px-4 py-4 rounded-2xl bg-white/60 border border-slate-100 focus:outline-none text-center tracking-widest"
          />
          <button
            type="submit"
            className="w-full py-4 bg-indigo-400 text-white rounded-2xl hover:bg-indigo-500 transition-colors shadow-md"
          >
            潛入心底
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="w-full max-w-lg bg-white/60 backdrop-blur-md rounded-[2.5rem] border border-white/50 shadow-xl p-8 mt-6 flex flex-col max-h-[600px]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-slate-700 flex items-center">
          <span className="mr-3 text-3xl">🌊</span> 靈魂之書
        </h2>
        <button onClick={() => setIsUnlocked(false)} className="text-xs text-slate-400 hover:text-slate-600 underline">
          合上日記
        </button>
      </div>

      <div className="mb-6 space-y-3">
        <textarea
          value={newEntry}
          onChange={(e) => setNewEntry(e.target.value)}
          placeholder="今天的雲朵是什麼形狀的？心情呢？"
          className="w-full h-32 p-5 rounded-3xl bg-white/80 border border-slate-100 focus:outline-none focus:ring-1 focus:ring-indigo-200 text-sm resize-none shadow-inner"
        />
        <button
          onClick={addEntry}
          className="w-full py-3 bg-slate-800 text-white rounded-2xl text-sm font-medium hover:bg-slate-700 transition-all shadow-lg"
        >
          細心收藏這段記憶
        </button>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4 pr-2 scrollbar-hide">
        {entries.length === 0 ? (
          <p className="text-center text-slate-400 italic text-sm py-16 font-light">這裡暫時是平靜的，等待你的漣漪...</p>
        ) : (
          entries.map(entry => (
            <div key={entry.id} className="bg-white/80 p-5 rounded-3xl shadow-sm border border-white/40 transition-transform hover:scale-[1.01]">
              <div className="text-[10px] text-slate-300 font-bold mb-2 uppercase tracking-widest">{entry.date}</div>
              <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-wrap">{entry.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DiaryPanel;
