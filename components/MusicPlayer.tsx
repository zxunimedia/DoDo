
import React, { useState, useRef, useEffect } from 'react';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // 使用更穩定、高品質的療癒/冥想系音軌
  const musicUrl = "https://assets.mixkit.co/music/preview/mixkit-meditation-soft-bells-604.mp3"; 

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        setHasError(false);
        audioRef.current.play().catch(e => {
          console.error("播放失敗，可能是瀏覽器限制或網路問題:", e);
          setHasError(true);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-24 right-6 z-30 flex flex-col items-end space-y-3 pointer-events-none">
      {/* 播放狀態標籤 */}
      {(isPlaying || hasError) && (
        <div className={`bg-white/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/50 shadow-sm animate-slide-up pointer-events-auto`}>
          <p className={`text-[10px] font-medium whitespace-nowrap ${hasError ? 'text-red-500' : 'text-slate-600'}`}>
            {hasError ? '⚠️ 音訊載入失敗，請重試' : '✨ 能量淨化中：藏式療癒音'}
          </p>
        </div>
      )}

      <div className="relative pointer-events-auto">
        {/* 擴散波紋動畫 (僅在播放時顯示) */}
        {isPlaying && (
          <>
            <div className="absolute inset-0 bg-blue-300 rounded-full animate-ping-slow opacity-20"></div>
            <div className="absolute inset-0 bg-blue-200 rounded-full animate-ping-slower opacity-10"></div>
          </>
        )}
        
        {/* 播放按鈕 */}
        <button
          onClick={togglePlay}
          className={`relative w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-700 border-2 ${
            isPlaying 
              ? 'bg-slate-800 text-white scale-110 border-blue-300' 
              : 'bg-white/60 text-slate-700 hover:bg-white/80 border-white/50'
          }`}
          title={isPlaying ? "暫停能量" : "開始淨化負能量"}
        >
          <span className={`text-3xl transition-transform duration-1000 ${isPlaying ? 'rotate-[360deg] animate-pulse' : ''}`}>
            {isPlaying ? '☸️' : '🔔'}
          </span>
          
          {/* 底部小燈頭 */}
          <div className={`absolute -bottom-1 w-2 h-2 rounded-full ${isPlaying ? 'bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]' : 'bg-slate-300'}`}></div>
        </button>
      </div>

      <audio
        ref={audioRef}
        src={musicUrl}
        loop
        onEnded={() => setIsPlaying(false)}
        onError={() => setHasError(true)}
      />

      <style>{`
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up { animation: slide-up 0.4s ease-out; }
        
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.3; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        @keyframes ping-slower {
          0% { transform: scale(1); opacity: 0.2; }
          100% { transform: scale(2.8); opacity: 0; }
        }
        .animate-ping-slow { animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .animate-ping-slower { animation: ping-slower 4s cubic-bezier(0, 0, 0.2, 1) infinite; animation-delay: 1s; }
      `}</style>
    </div>
  );
};

export default MusicPlayer;
