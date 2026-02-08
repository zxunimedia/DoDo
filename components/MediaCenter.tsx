
import React from 'react';
import { Newspaper, Camera, ExternalLink, Calendar, Sparkles, ArrowUpRight, Instagram } from 'lucide-react';

const MediaCenter: React.FC = () => {
  const items = [
    {
      type: "權威報導",
      source: "經濟日報 (UDN)",
      date: "2024.11.12",
      title: "房多多打造小資世代購屋新革命 用知識與科技翻轉買房人生",
      link: "https://money.udn.com/money/story/5635/8927133",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
      delay: "reveal-delay-1"
    },
    {
      type: "即時新聞",
      source: "Yahoo 財經",
      date: "2024.11.12",
      title: "房多多打造小資世代購屋新革命 領航房產科技新趨勢",
      link: "https://tw.stock.yahoo.com/news/%E6%88%BF%E5%A4%9A%E5%A4%9A%E6%89%93%E9%80%A0%E5%B0%8F%E8%B3%87%E4%B8%96%E4%BB%A3%E8%B3%BC%E5%B1%8B%E6%96%B0%E9%9D%A9%E5%91%BD-%E7%94%A8%E7%9F%A5%E8%AD%98%E8%88%87%E7%A7%91%E6%8A%80%E7%BF%BB%E8%BD%89%E8%B2%B7%E6%88%BF%E4%BA%BA%E7%94%9F-082936174.html",
      image: "https://images.unsplash.com/photo-1460472178825-e5240623abe5?auto=format&fit=crop&w=800&q=80",
      delay: "reveal-delay-2"
    },
    {
      type: "社群報導",
      source: "Instagram Reels",
      date: "2024.12.20",
      title: "欣至善 x 房多多：影音直擊小資購屋新革命，科技與知識的完美融合",
      link: "https://www.instagram.com/reels/DNh1GsdBgMO/",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80",
      delay: "reveal-delay-3"
    },
    {
      type: "深度專訪",
      source: "中華新聞網 (ChinaTrends)",
      date: "2024.10.25",
      title: "數據領航資產配置：欣至善房產智慧平台引領產業轉型",
      link: "https://chinatrends.news/archives/60795",
      image: "https://images.unsplash.com/photo-1454165833767-0239edae6031?auto=format&fit=crop&w=800&q=80",
      delay: "reveal-delay-1"
    },
    {
      type: "產業焦點",
      source: "工商時報 (CTEE)",
      date: "2024.09.05",
      title: "數據領航・智慧配置 欣至善定義房產新價值標準",
      link: "https://www.ctee.com.tw/news/20250709702150-431208",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      delay: "reveal-delay-2"
    },
    {
      type: "財經快報",
      source: "經濟日報 (UDN)",
      date: "2024.08.18",
      title: "欣至善智慧平台成果發表：小資族也能掌握的房產致富密碼",
      link: "https://money.udn.com/money/story/6722/8886091",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80",
      delay: "reveal-delay-3"
    }
  ];

  return (
    <div className="container mx-auto px-10">
      <div className="text-center mb-24 reveal">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-6 shadow-sm">
          <Sparkles size={12} /> Press & Media Coverage
        </div>
        <h3 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight serif">
          權威背書 / <span className="text-gold-gradient">媒體報導</span>
        </h3>
        <p className="text-slate-500 mt-6 max-w-2xl mx-auto font-light">
          欣至善與房多多平台深耕房產科技，獲得多家主流媒體與社群報導，專業實力深獲各界肯定。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map((item, index) => (
          <div 
            key={index} 
            className={`group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 hover:border-gold/40 hover:shadow-2xl transition-all duration-700 reveal ${item.delay} shadow-xl shadow-slate-200/50 flex flex-col h-full`}
          >
            <div className="relative h-64 overflow-hidden bg-slate-100">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute top-6 left-6 flex gap-2">
                <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${item.type === '權威報導' ? 'bg-gold text-black' : item.type === '社群報導' ? 'bg-pink-600 text-white' : 'bg-black/60 text-white backdrop-blur-md'}`}>
                  {item.type}
                </span>
              </div>
              <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <a 
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="premium-btn px-8 py-3 rounded-full font-bold flex items-center gap-2 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 shadow-xl"
                >
                  {item.source === 'Instagram Reels' ? <Instagram size={18} /> : <ExternalLink size={18} />} 閱讀全文
                </a>
              </div>
            </div>
            
            <div className="p-10 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-gold">
                  {item.source === 'Instagram Reels' ? <Instagram size={16} /> : <Newspaper size={16} />}
                  <span className="font-bold text-sm tracking-widest uppercase">{item.source}</span>
                </div>
                <span className="text-slate-400 text-xs flex items-center gap-2 font-light">
                  <Calendar size={14} /> {item.date}
                </span>
              </div>
              <h4 className="text-2xl font-bold text-slate-900 group-hover:text-gold transition-colors line-clamp-2 serif leading-snug mb-8 flex-1">
                {item.title}
              </h4>
              <div className="pt-6 border-t border-slate-50">
                <a 
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold font-bold text-xs tracking-[0.2em] uppercase flex items-center gap-2 hover:text-gold-light transition-colors"
                >
                  View Content <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 text-center reveal reveal-delay-3">
        <a 
          href="https://money.udn.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-12 py-5 rounded-full border border-slate-200 font-bold text-lg hover:bg-slate-50 transition-all inline-flex items-center gap-4 text-slate-500 hover:text-slate-900"
        >
          查看更多媒體足跡 <ArrowUpRight size={20} />
        </a>
      </div>
    </div>
  );
};

export default MediaCenter;
