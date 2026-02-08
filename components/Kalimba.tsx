
import React, { useState, useEffect, useRef } from 'react';
import { kalimbaAudio } from '../services/audioService';
import { KalimbaSong } from '../types';

const SONGS: KalimbaSong[] = [
  { id: '1', name: '小星星', notes: [0,0,4,4,5,5,4, 3,3,2,2,1,1,0], timing: [500,500,500,500,500,500,1000, 500,500,500,500,500,500,1000] },
  { id: '2', name: '兩隻老虎', notes: [0,1,2,0, 0,1,2,0, 2,3,4, 2,3,4], timing: [500,500,500,500, 500,500,500,500, 500,500,1000, 500,500,1000] },
  { id: '3', name: '歡樂頌', notes: [2,2,3,4,4,3,2,1,0,0,1,2,2,1,1], timing: [500,500,500,500,500,500,500,500,500,500,500,500,750,250,1000] },
  { id: '4', name: '瑪莉有隻小綿羊', notes: [2,1,0,1,2,2,2,1,1,1,2,4,4], timing: [500,500,500,500,500,500,1000, 500,500,1000, 500,500,1000] },
  { id: '5', name: '倫敦鐵橋', notes: [4,5,4,3,2,3,4, 1,2,3, 2,3,4], timing: [500,250,250,500,500,500,1000, 500,500,1000, 500,500,1000] },
  { id: '6', name: '生日快樂', notes: [0,0,1,0,3,2, 0,0,1,0,4,3], timing: [300,100,500,500,500,1000, 300,100,500,500,500,1000] },
  { id: '7', name: '奇異恩典', notes: [0,3,5,3,5,4,3,1,0], timing: [500,1000,500,1000,500,500,1000,500,1000] },
  { id: '8', name: '划小船', notes: [0,0,0,1,2,2,1,2,3,4], timing: [500,500,750,250,750,250,500,500,500,1000] },
  { id: '9', name: '王老先生有塊地', notes: [4,4,4,1,2,2,1,5,5,4], timing: [500,500,500,500,500,500,1000,500,500,1000] },
  { id: '10', name: '如果你高興', notes: [0,0,1,1,1,1,0,3,3,2], timing: [250,250,250,250,250,250,500,250,250,1000] },
  { id: '11', name: '布拉姆搖籃曲', notes: [2,2,4,2,2,4,2,4,6,5], timing: [500,500,1000,500,500,1000,500,500,500,1000] },
  { id: '12', name: '小毛驢', notes: [0,0,0,2,4,4,4,5,5,5,4], timing: [250,250,250,250,250,250,250,250,250,250,1000] },
  { id: '13', name: '叮叮噹', notes: [4,4,4, 4,4,4, 4,6,0,1,4], timing: [400,400,800, 400,400,800, 400,400,400,400,1000] },
  { id: '14', name: '茉莉花', notes: [2,2,4,5,5,4,2,2,4,2], timing: [500,500,500,500,1000,500,500,500,500,1000] },
  { id: '15', name: '舒伯特搖籃曲', notes: [4,4,3,2,1,0,1,2,3], timing: [500,500,500,500,500,500,500,500,1000] },
  { id: '16', name: '捕魚歌', notes: [4,2,4,2,1,0,1,2,4], timing: [500,500,500,500,500,500,500,500,1000] },
  { id: '17', name: '平安夜', notes: [4,5,4,2, 4,5,4,2, 6,6,4, 5,5,0], timing: [750,250,500,1000, 750,250,500,1000, 1000,500,1000, 1000,500,1000] },
  { id: '18', name: '春神來了', notes: [4,4,4,2,0,0,0,1,2,3,4], timing: [500,500,500,500,500,500,500,500,500,500,1000] },
  { id: '19', name: '大象', notes: [4,4,5,4,3,2,1,0,2,4], timing: [500,500,500,500,500,500,500,500,500,1000] },
  { id: '20', name: '小鳥在那裡', notes: [0,1,2,3,4,4,4,3,2,1,0], timing: [500,500,500,500,500,500,500,500,500,500,1000] },
];

interface FallingNote {
  id: number;
  keyIndex: number;
  top: number;
}

const Kalimba: React.FC = () => {
  const [currentSong, setCurrentSong] = useState<KalimbaSong | null>(null);
  const [fallingNotes, setFallingNotes] = useState<FallingNote[]>([]);
  const [activeKeys, setActiveKeys] = useState<boolean[]>(new Array(7).fill(false));
  const requestRef = useRef<number>(null);

  const playKey = (index: number) => {
    kalimbaAudio.playNote(index);
    setActiveKeys(prev => {
      const next = [...prev];
      next[index] = true;
      return next;
    });
    setTimeout(() => {
      setActiveKeys(prev => {
        const next = [...prev];
        next[index] = false;
        return next;
      });
    }, 150);
  };

  const startSong = (song: KalimbaSong) => {
    setCurrentSong(song);
    setFallingNotes([]);
    let currentTime = 0;
    song.notes.forEach((note, i) => {
      currentTime += song.timing[i];
      setTimeout(() => {
        setFallingNotes(prev => [...prev, { id: Math.random(), keyIndex: note, top: -50 }]);
      }, currentTime);
    });
  };

  useEffect(() => {
    const update = () => {
      setFallingNotes(prev => 
        prev
          .map(note => ({ ...note, top: note.top + 3 }))
          .filter(note => note.top < 600)
      );
      requestRef.current = requestAnimationFrame(update);
    };
    requestRef.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(requestRef.current!);
  }, []);

  return (
    <div className="flex flex-col items-center w-full h-full max-w-lg mt-8">
      <div className="bg-white/40 backdrop-blur-md p-4 rounded-3xl w-full border border-white/50 mb-4">
        <select 
          onChange={(e) => {
            const song = SONGS.find(s => s.id === e.target.value);
            if(song) startSong(song);
          }}
          className="w-full bg-white/60 p-2 rounded-xl border border-slate-200 focus:outline-none"
          defaultValue=""
        >
          <option value="" disabled>選擇一首療育曲目彈奏...</option>
          {SONGS.map(song => (
            <option key={song.id} value={song.id}>{song.name}</option>
          ))}
        </select>
      </div>

      <div className="relative flex-1 w-full bg-white/20 backdrop-blur-sm rounded-3xl border border-white/30 overflow-hidden mb-20 shadow-inner">
        {/* Falling Notes */}
        {fallingNotes.map(note => (
          <div 
            key={note.id}
            className="absolute w-12 h-12 bg-blue-300 rounded-full shadow-[0_0_15px_rgba(147,197,253,0.8)] animate-pulse"
            style={{ 
              left: `${(note.keyIndex * (100/7)) + (100/14)}%`, 
              top: `${note.top}px`,
              transform: 'translateX(-50%)'
            }}
          />
        ))}

        {/* Target Guide Area */}
        <div className="absolute bottom-10 w-full h-1 bg-white/30" />
      </div>

      {/* Kalimba Keys */}
      <div className="flex w-full justify-between px-2 h-40">
        {['Do', 'Re', 'Mi', 'Fa', 'So', 'La', 'Si'].map((label, i) => (
          <button
            key={i}
            onPointerDown={() => playKey(i)}
            className={`flex-1 mx-1 rounded-b-3xl transition-all duration-75 border-t-4 ${
              activeKeys[i] 
                ? 'bg-slate-700 h-[100%] shadow-inner translate-y-2 border-slate-400' 
                : 'bg-white/40 h-[90%] border-white/80 shadow-lg'
            }`}
          >
            <div className="flex flex-col items-center justify-end h-full pb-4 pointer-events-none">
              <span className="text-[10px] text-slate-500 font-bold uppercase">{label}</span>
              <div className="w-1.5 h-6 bg-slate-300 rounded-full mt-2 opacity-40"></div>
            </div>
          </button>
        ))}
      </div>
      
      <p className="text-slate-500 text-[10px] mt-4 font-light">點擊琴鍵或隨著點點節奏彈奏，釋放指尖的療育力量</p>
    </div>
  );
};

export default Kalimba;
