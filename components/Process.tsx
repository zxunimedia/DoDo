
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "需求諮詢",
      desc: "了解您的資產現狀、財務目標與痛點。",
      delay: "reveal-delay-1"
    },
    {
      num: "02",
      title: "精準評估",
      desc: "利用大數據估價與區域發展分析進行初判。",
      delay: "reveal-delay-2"
    },
    {
      num: "03",
      title: "方案規劃",
      desc: "量身定制最適配置方案，包含稅務與貸款試算。",
      delay: "reveal-delay-3"
    },
    {
      num: "04",
      title: "執行對接",
      desc: "媒合對象、銀行對接、法務審核一站完成。",
      delay: "reveal-delay-4"
    },
    {
      num: "05",
      title: "成交交付",
      desc: "安全履約，完成資產轉移或資金到位。",
      delay: "reveal-delay-5"
    }
  ];

  return (
    <div className="container mx-auto px-10">
      <div className="text-center mb-24 reveal">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-6 shadow-sm">
          <Sparkles size={12} /> Standard Procedure
        </div>
        <h3 className="text-4xl md:text-6xl font-bold text-white serif tracking-tight">標準化的高效率 <span className="text-gold-gradient">顧問旅程</span></h3>
      </div>

      <div className="relative">
        {/* Connection Line - Darkened with Glow */}
        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent -translate-y-16 -z-10 shadow-[0_0_15px_rgba(212,175,55,0.2)]"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {steps.map((step, index) => (
            <div key={index} className={`flex flex-col items-center text-center group reveal ${step.delay}`}>
              <div className="w-24 h-24 rounded-[2rem] bg-white/5 border border-white/10 text-gold font-bold text-3xl flex items-center justify-center mb-10 shadow-2xl group-hover:bg-gold group-hover:text-black transition-all duration-700 group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(212,175,55,0.3)] group-hover:rotate-12 backdrop-blur-xl">
                {step.num}
              </div>
              <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-gold transition-colors serif">{step.title}</h4>
              <p className="text-white/40 text-sm leading-relaxed px-4 font-light tracking-wide">
                {step.desc}
              </p>
              {index < steps.length - 1 && (
                <div className="lg:hidden my-12 animate-bounce opacity-40">
                  <ArrowRight className="rotate-90 text-gold" size={32} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-24 text-center reveal reveal-delay-5">
        <button className="premium-btn px-16 py-6 rounded-full font-black text-lg tracking-[0.2em] shadow-2xl">
          了解更多流程細節
        </button>
      </div>
    </div>
  );
};

export default Process;
