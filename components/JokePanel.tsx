
import React, { useState, useEffect } from 'react';
import { fetchLatestJokes, WebJoke } from '../services/jokeService';

const JokePanel: React.FC = () => {
  const [joke, setJoke] = useState<WebJoke | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const getNewJoke = async () => {
    setIsLoading(true);
    setIsOpened(false);
    const result = await fetchLatestJokes();
    setJoke(result);
    setIsLoading(false);
    // 稍微延遲讓載入動畫完成再顯示開啟效果
    setTimeout(() => setIsOpened(true), 100);
  };

  useEffect(() => {
    getNewJoke();
  }, []);

  return (
    <div className="flex flex-col items-center w-full max-w-lg h-full mt-4 space-y-6">
      <div className="text-center w-full">
        <h2 className="text-2xl font-bold text-slate-700">笑話能量站</h2>
        <p className="text-slate-500 text-xs font-light mt-1">從雲端即時捕獲的快樂，隨時更新</p>
      </div>

      <div className="relative w-full aspect-square max-h-[400px] flex items-center justify-center">
        {isLoading ? (
          <div className="flex flex-col items-center space-y-4">
            <div className="text-6xl animate-bounce">🎣</div>
            <p className="text-xs text-slate-400 animate-pulse">正在網路海洋釣取新鮮笑話...</p>
          </div>
        ) : (
          <div className={`w-full p-8 rounded-[3rem] bg-amber-50 border-4 border-white shadow-2xl transition-all duration-700 transform ${isOpened ? 'scale-100 rotate-0 opacity-100' : 'scale-50 rotate-12 opacity-0'}`}>
            <div className="flex flex-col h-full justify-between items-center text-center space-y-6">
              <div className="text-5xl">😂</div>
              <div className="flex-1 overflow-y-auto w-full px-2 scrollbar-hide">
                <p className="text-lg font-medium text-slate-700 leading-relaxed whitespace-pre-wrap">
                  {joke?.text}
                </p>
              </div>
              
              {joke?.sources && joke.sources.length > 0 && (
                <div className="w-full pt-4 border-t border-amber-200">
                  <p className="text-[10px] text-amber-600 mb-2 font-bold uppercase tracking-tighter">來源探索</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {joke.sources.map((src, idx) => (
                      <a 
                        key={idx} 
                        href={src.uri} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[9px] bg-amber-200/50 px-2 py-1 rounded-full text-amber-800 hover:bg-amber-300 transition-colors truncate max-w-[150px]"
                      >
                        🔗 {src.title || '前往來源'}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <button
        onClick={getNewJoke}
        disabled={isLoading}
        className="px-10 py-4 bg-amber-400 text-amber-900 font-black rounded-2xl shadow-xl hover:bg-amber-500 transition-all active:scale-95 disabled:opacity-50 flex items-center space-x-2"
      >
        <span>🔄 換一個梗</span>
      </button>

      <div className="bg-white/30 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white/50 max-w-xs">
        <p className="text-[10px] text-slate-400 text-center font-light leading-relaxed">
          💡 笑話經由 AI 聯網即時整理，內容豐富多樣。笑一笑，沒什麼大不了！
        </p>
      </div>
    </div>
  );
};

export default JokePanel;
