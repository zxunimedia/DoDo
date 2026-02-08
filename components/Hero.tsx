
import React, { useState, useEffect } from 'react';
import { MessageCircle, Calendar, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1920&q=80",
      title: "數據・資產・欣至善",
      desc: "從傳統房產到智慧配置，欣至善定義未來居住的價值標準。"
    },
    {
      url: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1920&q=80",
      title: "精英財富・智慧領航",
      desc: "專為高資產族群量身定制，每一項決策都具備前瞻數據視野。"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((p) => (p + 1) % slides.length), 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen min-h-[800px] flex items-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0 overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[3000ms] ease-in-out ${
              index === currentSlide ? 'opacity-70 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img 
              src={slide.url} 
              alt="" 
              className={`w-full h-full object-cover ${index === currentSlide ? 'ken-burns' : ''}`} 
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90 z-20"></div>
      </div>

      <div className="container mx-auto px-10 relative z-30">
        <div className="max-w-5xl">
          <div className="inline-flex items-center gap-3 px-8 py-3 rounded-full border border-gold/60 bg-black/40 backdrop-blur-3xl mb-12 animate-in fade-in slide-in-from-bottom-12 duration-[1500ms] shadow-[0_0_30px_rgba(212,175,55,0.25)] group cursor-default">
            <Sparkles size={18} className="text-gold animate-pulse group-hover:scale-125 transition-transform" />
            <span className="text-gold-gradient text-sm font-black tracking-[0.4em] uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
              XIN ZHI SHAN INTELLIGENT REAL ESTATE
            </span>
          </div>
          
          <div className="overflow-hidden">
            <h1 className="text-6xl md:text-9xl font-black leading-[1.05] text-white mb-12 serif animate-in fade-in slide-in-from-bottom-20 duration-[1800ms]">
              掌握 <span className="text-gold-gradient">欣至善</span><br />
              開啟智慧資產局
            </h1>
          </div>
          
          <p className="text-xl md:text-3xl text-white/90 mb-16 max-w-5xl font-light leading-relaxed tracking-[0.15em] animate-in fade-in slide-in-from-bottom-24 duration-[2000ms]">
            {slides[currentSlide].desc}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-10 animate-in fade-in slide-in-from-bottom-32 duration-[2200ms]">
            <a 
              href="https://line.me"
              className="w-full sm:w-auto premium-btn px-14 py-7 rounded-full font-black text-xl group shadow-[0_20px_50px_rgba(0,0,0,0.5)] active:scale-95"
            >
              <MessageCircle size={28} className="mr-4 group-hover:scale-125 transition-transform duration-500" />
              加 LINE 啟動智慧服務
            </a>
            <a 
              href="#footer"
              className="w-full sm:w-auto px-14 py-7 rounded-full border border-white/30 text-white font-bold text-xl hover:bg-white/10 hover:border-white transition-all backdrop-blur-lg flex items-center justify-center group active:scale-95"
            >
              <Calendar size={28} className="mr-4 group-hover:rotate-12 transition-transform" />
              預約專業評估
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-20 left-10 z-40 flex gap-6">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className="group py-4 px-2"
          >
            <div className={`h-1.5 transition-all duration-1000 rounded-full relative overflow-hidden ${idx === currentSlide ? 'w-24 bg-gold shadow-[0_0_10px_rgba(212,175,55,0.8)]' : 'w-10 bg-white/20 hover:bg-white/40'}`}>
               {idx === currentSlide && (
                 <div className="absolute inset-0 bg-white/30 animate-[shine-gold_2s_infinite]"></div>
               )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
