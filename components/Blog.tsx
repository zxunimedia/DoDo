
import React from 'react';
import { BookOpen, ArrowRight, Clock, Tag, Sparkles, ArrowUpRight } from 'lucide-react';

const Blog: React.FC = () => {
  const articles = [
    {
      category: "財商教育",
      title: "如何利用房地產達成財富自由？從用錢習慣開始改變",
      excerpt: "買房不只是居住，更是一場深度的資產配置。了解好債與壞債的區別，是提升財商的第一步。我們將帶您從基礎的財務報表看懂房產價值。",
      author: "欣至善編輯部",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1554224155-169641357599?auto=format&fit=crop&w=800&q=80",
      delay: "reveal-delay-1"
    },
    {
      category: "市場分析",
      title: "2024 下半年台灣房市趨勢：數據揭秘具備增值潛力區域",
      excerpt: "透過大數據智慧估價系統，我們分析了全台重點區域的成交與供需比，發現了令人驚訝的結果，部分新興重劃區正展現出強大的抗跌性。",
      author: "張曉芸 技術長",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1460472178825-e5240623abe5?auto=format&fit=crop&w=800&q=80",
      delay: "reveal-delay-2"
    },
    {
      category: "法律節稅",
      title: "遺產稅規劃：房地合一稅制下的房產傳承最優解",
      excerpt: "房產繼承往往伴隨著高額稅賦，專業代書教您如何透過信託與合法規劃，有效節省數百萬稅金，為下一代守住辛苦累積的財富。",
      author: "王雅淳 經理",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
      delay: "reveal-delay-3"
    }
  ];

  return (
    <div className="container mx-auto px-10">
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10 reveal">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-6 shadow-sm">
            <Sparkles size={12} /> Wealth Intelligence
          </div>
          <h3 className="text-4xl md:text-6xl font-bold text-white leading-tight serif">
            知識領航：掌握 <span className="text-gold-gradient">致富關鍵</span>
          </h3>
        </div>
        <button className="text-gold font-bold flex items-center gap-3 hover:gap-5 transition-all border-b border-gold/30 pb-3 uppercase text-sm tracking-widest">
          瀏覽所有財商文章 <ArrowRight size={20} />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        {articles.map((article, index) => (
          <div key={index} className={`flex flex-col group reveal ${article.delay}`}>
            
            {/* 上方照片區塊 */}
            <div className="relative mb-10 overflow-hidden rounded-[2.5rem] aspect-[16/10] gold-shadow border border-white/10">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1200ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-40"></div>
              
              {/* 懸停浮現的閱讀按鈕 */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-16 h-16 rounded-full bg-gold text-black flex items-center justify-center shadow-2xl transform scale-50 group-hover:scale-100 transition-transform duration-500">
                  <ArrowUpRight size={28} />
                </div>
              </div>
            </div>

            {/* 下方文字內容 */}
            <div className="px-2">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-gold font-black text-[10px] tracking-[0.3em] uppercase flex items-center gap-2">
                  <Tag size={12} /> {article.category}
                </span>
                <span className="text-white/30 text-[10px] flex items-center gap-1 font-light tracking-widest uppercase">
                  <Clock size={12} /> {article.readTime}
                </span>
              </div>

              <h4 className="text-2xl md:text-3xl font-bold text-white mb-6 group-hover:text-gold transition-colors leading-snug serif tracking-wide">
                {article.title}
              </h4>

              <p className="text-white/50 leading-relaxed mb-8 font-light text-lg line-clamp-3">
                {article.excerpt}
              </p>

              <div className="flex items-center justify-between pt-8 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-gold/40"></div>
                  </div>
                  <span className="text-xs font-bold text-white/40 tracking-widest uppercase">{article.author}</span>
                </div>
                
                <button className="text-gold-light/40 group-hover:text-gold transition-colors text-xs font-black tracking-widest uppercase flex items-center gap-2">
                  Read More <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
