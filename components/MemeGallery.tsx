
import React, { useState } from 'react';

interface Meme {
  id: string;
  category: 'animal' | 'work' | 'life' | 'abstract';
  title: string;
  emoji: string;
  caption: string;
  color: string;
}

const MEMES: Meme[] = [
  { id: '1', category: 'animal', title: '驚訝小貓', emoji: '🙀', caption: '當你發現明天是週一的瞬間', color: 'bg-orange-100' },
  { id: '2', category: 'work', title: '效率大師', emoji: '🐌', caption: '這是我處理緊急工作的速度', color: 'bg-blue-100' },
  { id: '3', category: 'life', title: '人間清醒', emoji: '🤡', caption: '以為早起能變強，結果只是提早困了', color: 'bg-purple-100' },
  { id: '4', category: 'abstract', title: '靈魂出竅', emoji: '🫠', caption: '週五下午的我，已經溶解在椅子上', color: 'bg-green-100' },
  { id: '5', category: 'animal', title: '思考人生', emoji: '🦥', caption: '只要我動得夠慢，時間就追不上我', color: 'bg-yellow-100' },
  { id: '6', category: 'life', title: '運動計畫', emoji: '🛌', caption: '我的運動就是翻個身繼續睡', color: 'bg-rose-100' },
  { id: '7', category: 'work', title: '薪水小偷', emoji: '🥷', caption: '老闆沒看見我，我就是透明的', color: 'bg-slate-100' },
  { id: '8', category: 'abstract', title: '大腦當機', emoji: '🌀', caption: '剛才想說什麼來著？算了不重要', color: 'bg-indigo-100' },
];

const MemeGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [luckyMeme, setLuckyMeme] = useState<Meme | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);

  const filteredMemes = selectedCategory === 'all' 
    ? MEMES 
    : MEMES.filter(m => m.category === selectedCategory);

  const pickLucky = () => {
    setIsSpinning(true);
    setLuckyMeme(null);
    setTimeout(() => {
      const random = MEMES[Math.floor(Math.random() * MEMES.length)];
      setLuckyMeme(random);
      setIsSpinning(false);
    }, 800);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-2xl h-full mt-4 space-y-6">
      <div className="text-center w-full">
        <h2 className="text-2xl font-bold text-slate-700">沙雕傳送門</h2>
        <p className="text-slate-500 text-xs font-light mt-1">生活已經很難了，過來笑一下吧</p>
      </div>

      {/* Categories */}
      <div className="flex space-x-2 overflow-x-auto w-full pb-2 scrollbar-hide justify-center">
        {['all', 'animal', 'work', 'life', 'abstract'].map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all ${
              selectedCategory === cat ? 'bg-slate-800 text-white shadow-lg' : 'bg-white/40 text-slate-500 hover:bg-white/60'
            }`}
          >
            {cat === 'all' ? '全部搞笑' : (cat === 'animal' ? '萌寵翻車' : (cat === 'work' ? '社畜日常' : (cat === 'life' ? '人間真實' : '抽象藝術')))}
          </button>
        ))}
      </div>

      {/* Lucky Draw Button */}
      <button 
        onClick={pickLucky}
        disabled={isSpinning}
        className="group relative px-8 py-4 bg-yellow-400 rounded-2xl shadow-xl hover:bg-yellow-500 transition-all active:scale-95 disabled:opacity-50"
      >
        <span className="text-lg font-black text-yellow-900">✨ 隨機抽一張不開心 ✨</span>
        <div className="absolute -top-2 -right-2 bg-rose-500 text-white text-[8px] px-2 py-0.5 rounded-full animate-bounce">HELP!</div>
      </button>

      {/* Lucky Meme Popup */}
      {luckyMeme && (
        <div className="w-full animate-in zoom-in duration-300">
          <div className={`mx-auto max-w-sm p-6 rounded-[2.5rem] border-4 border-white shadow-2xl ${luckyMeme.color} transform rotate-2`}>
            <div className="bg-white rounded-2xl p-8 text-center flex flex-col items-center">
              <span className="text-8xl mb-6 transform group-hover:scale-110 transition-transform">{luckyMeme.emoji}</span>
              <h3 className="text-xl font-black text-slate-800 mb-2">《{luckyMeme.title}》</h3>
              <p className="text-slate-600 font-medium italic">"{luckyMeme.caption}"</p>
            </div>
            <div className="mt-4 flex justify-between items-center px-4">
              <span className="text-[10px] font-bold text-slate-400">#笑死 #呼呼拍拍</span>
              <button className="text-xl hover:scale-125 transition-transform">❤️</button>
            </div>
          </div>
        </div>
      )}

      {isSpinning && (
        <div className="flex flex-col items-center py-12">
          <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-xs text-slate-400 animate-pulse">正在搜尋全宇宙最搞笑的靈魂...</p>
        </div>
      )}

      {/* Gallery Grid */}
      {!luckyMeme && !isSpinning && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
          {filteredMemes.map(meme => (
            <div 
              key={meme.id}
              className={`aspect-[3/4] p-4 rounded-3xl ${meme.color} flex flex-col items-center justify-center text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all cursor-pointer border-2 border-transparent hover:border-white`}
            >
              <span className="text-4xl mb-3">{meme.emoji}</span>
              <h4 className="text-[10px] font-bold text-slate-700 leading-tight">{meme.title}</h4>
            </div>
          ))}
        </div>
      )}

      <style>{`
        @keyframes zoom-in {
          from { opacity: 0; transform: scale(0.5) rotate(-10deg); }
          to { opacity: 1; transform: scale(1) rotate(2deg); }
        }
        .animate-zoom-in { animation: zoom-in 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
      `}</style>
    </div>
  );
};

export default MemeGallery;
