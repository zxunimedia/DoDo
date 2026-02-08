
import React from 'react';
import { Sparkles, Zap, Globe, Users } from 'lucide-react';

const BrandCulture: React.FC = () => {
  const cultureItems = [
    {
      title: "品牌使命",
      english: "Mission",
      quote: "「讓人們便捷獲取房地產知識，用科技讓複雜的房地產更簡單。」",
      tagline: "科技賦能・知識民主化",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      delay: "reveal-delay-1"
    },
    {
      title: "品牌願景",
      english: "Vision",
      quote: "「以創新精神、專業團隊，提供一條龍房地產服務，成為新房地產科技第一品牌。」",
      tagline: "領航亞太・科技房產標竿",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      delay: "reveal-delay-2"
    },
    {
      title: "經營理念",
      english: "Philosophy",
      quote: "強調前瞻性與團隊精神，融合「傳統經驗」與「頂尖科技」及對市場的敏銳觸角。創造共好的服務體驗。",
      tagline: "團隊協作・敏銳洞察",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      delay: "reveal-delay-3"
    }
  ];

  return (
    <div className="relative py-40 bg-[#1c1412] overflow-hidden border-t border-gold/10">
      {/* Background Decorative Elements - Warm Coffee Glow */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"></div>
      <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/[0.03] rounded-full blur-[150px] opacity-40 float-anim"></div>
      <div className="absolute -right-40 bottom-0 w-[600px] h-[600px] bg-[#3d2b1f]/20 rounded-full blur-[120px] opacity-30"></div>
      
      <div className="container mx-auto px-10 relative z-10">
        <div className="text-center mb-32 reveal">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gold/30 bg-gold/5 text-gold text-[10px] font-black tracking-[0.4em] uppercase mb-10 shadow-sm">
            <Sparkles size={14} className="animate-pulse" /> Corporate Core DNA
          </div>
          <h3 className="text-4xl md:text-7xl font-bold text-white mb-10 serif leading-tight">
            定義新時代的 <span className="text-gold-gradient">房產文明</span>
          </h3>
          <p className="text-white/40 max-w-4xl mx-auto text-xl md:text-2xl leading-relaxed font-light tracking-widest">
            我們透過科技與智慧的融合，在變動的市場中為客戶建立永恆的價值。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {cultureItems.map((item, index) => (
            <div key={index} className={`flex flex-col reveal ${item.delay}`}>
              {/* 上方照片區塊 */}
              <div className="relative group mb-12">
                <div className="absolute -inset-1 bg-gradient-to-b from-gold/30 to-transparent rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 gold-shadow shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1500ms]"
                  />
                  {/* 照片內裝飾遮罩 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1c1412]/80 via-transparent to-transparent opacity-60"></div>
                </div>
              </div>

              {/* 下方文字區塊 */}
              <div className="px-4">
                <div className="flex items-baseline gap-4 mb-6">
                  <h4 className="text-3xl font-bold text-white serif tracking-widest">
                    {item.title}
                  </h4>
                  <span className="text-gold/40 font-light text-xl tracking-tighter uppercase">{item.english}</span>
                </div>
                
                <p className="text-white/80 leading-relaxed text-xl mb-10 font-light tracking-wide min-h-[100px]">
                  {item.quote}
                </p>

                <div className="flex items-center gap-3 pt-8 border-t border-white/10">
                  <div className="p-2 rounded-lg bg-gold/10 text-gold shadow-[0_0_10px_rgba(212,175,55,0.2)]">
                    {index === 0 && <Zap size={16} />}
                    {index === 1 && <Globe size={16} />}
                    {index === 2 && <Users size={16} />}
                  </div>
                  <span className="text-gold-light/60 font-black text-xs tracking-[0.3em] uppercase">
                    {item.tagline}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandCulture;
