
import React from 'react';

const SocialProof: React.FC = () => {
  const images = [
    { src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80", title: "年度房產論壇講員" },
    { src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80", title: "智慧平台開幕典禮" },
    { src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80", title: "稅務規劃講座現場" },
    { src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80", title: "團隊菁英培訓營" },
    { src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80", title: "VIP客戶酬謝晚宴" },
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16 reveal">
        <h2 className="text-red-800 font-bold tracking-widest uppercase mb-4">信任加速器</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900">社會背書與活動足跡</h3>
        <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
          每一場講座、每一次互動，都是我們累積專業與信任的過程。
        </p>
      </div>

      <div className="flex flex-nowrap gap-6 overflow-x-auto pb-8 snap-x no-scrollbar reveal">
        {images.map((img, index) => (
          <div key={index} className="flex-none w-72 md:w-96 snap-center group relative rounded-3xl overflow-hidden shadow-lg bg-slate-100">
            <img 
              src={img.src} 
              alt={img.title} 
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-red-900/90 via-red-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
              <p className="text-white font-bold text-lg">{img.title}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 bg-red-900 rounded-[3rem] p-8 md:p-16 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden reveal">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="text-center md:text-left relative z-10">
          <h4 className="text-3xl font-bold mb-3">想了解更多專業知識？</h4>
          <p className="text-red-100 text-lg opacity-80 font-light">訂閱我們的智慧房產週報，掌握第一手市場動態與致富關鍵。</p>
        </div>
        <div className="flex w-full md:w-auto gap-3 relative z-10">
          <input 
            type="email" 
            placeholder="輸入您的信箱" 
            className="flex-1 md:w-72 px-8 py-5 rounded-2xl text-slate-900 focus:outline-none focus:ring-4 focus:ring-red-500/30 shadow-inner"
          />
          <button className="glass-btn-3d glass-3d-red text-white font-bold px-10 py-5 rounded-2xl shadow-xl whitespace-nowrap">
            立即訂閱
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
