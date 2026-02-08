
import React from 'react';
import { Home, TrendingUp, Calculator, FileText, Users, ShieldCheck, ArrowUpRight, Sparkles } from 'lucide-react';

const ServiceMatrix: React.FC = () => {
  const services = [
    {
      num: "01",
      title: "專業買賣代尋",
      description: "透過全台聯網系統，結合 AI 數據分析，為您媒合最精準的物件與最具誠意的買方，節省您的寶貴時間。",
      icon: <Home className="w-8 h-8" />,
      delay: "reveal-delay-1"
    },
    {
      num: "02",
      title: "資產投資規劃",
      description: "不只是買房，更是配置。我們深度分析區域投報率、租金收益與未來增值潛力，規劃專屬您的致富版圖。",
      icon: <TrendingUp className="w-8 h-8" />,
      delay: "reveal-delay-2"
    },
    {
      num: "03",
      title: "智慧貸款媒合",
      description: "對接全台多家一線銀行，根據您的信用條件與資產狀況，為您爭取最優利率、彈性寬限期與最高成數。",
      icon: <Calculator className="w-8 h-8" />,
      delay: "reveal-delay-3"
    },
    {
      num: "04",
      title: "節稅與遺產規劃",
      description: "房地合一、贈與、遺產稅務專業精算。透過合法節稅策略，為您的財富傳承守住每一分利潤。",
      icon: <FileText className="w-8 h-8" />,
      delay: "reveal-delay-1"
    },
    {
      num: "05",
      title: "企業資產處置",
      description: "針對法人、建商提供大宗土地或商用不動產之開發建議、價值評估與專業銷售執行。",
      icon: <Users className="w-8 h-8" />,
      delay: "reveal-delay-2"
    },
    {
      num: "06",
      title: "信託與債務重組",
      description: "透過不動產信託與債務重整顧問服務，確保您的資產在波動市場中依然能安全隔離、永續經營。",
      icon: <ShieldCheck className="w-8 h-8" />,
      delay: "reveal-delay-3"
    }
  ];

  return (
    <div className="container mx-auto px-10">
      <div className="text-center mb-32 reveal">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-10 shadow-sm">
          <Sparkles size={12} /> Service Matrix
        </div>
        {/* 標題改為單排，並使用 whitespace-nowrap 確保不換行 */}
        <h3 className="text-4xl md:text-7xl font-bold text-white leading-tight serif md:whitespace-nowrap">
          全方位的不動產 <span className="text-gold-gradient">智慧服務</span>
        </h3>
        <p className="text-white/40 mt-10 max-w-3xl mx-auto font-light leading-relaxed text-xl">
          從買屋到賣屋，從投資到節稅，我們提供一站式、標準化的高品質顧問體驗。
        </p>
      </div>

      {/* 將 grid 改為 grid-cols-1 實現單排佈局 */}
      <div className="flex flex-col gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div 
            key={index} 
            className={`group bg-white/5 p-8 md:p-12 rounded-[2.5rem] border border-white/10 hover:border-gold/40 hover:bg-white/[0.08] transition-all duration-700 flex flex-col md:flex-row items-center gap-10 reveal ${service.delay} gold-shadow relative overflow-hidden`}
          >
            {/* 編號裝飾 */}
            <div className="text-7xl font-black text-white/5 absolute -left-4 top-1/2 -translate-y-1/2 select-none group-hover:text-gold/10 transition-colors">
              {service.num}
            </div>

            {/* 圖標 */}
            <div className="flex-shrink-0 text-gold-light p-6 bg-white/5 rounded-2xl group-hover:bg-gold group-hover:text-black group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10 border border-white/5 group-hover:border-gold shadow-xl">
              {service.icon}
            </div>
            
            {/* 文字內容 */}
            <div className="flex-1 text-center md:text-left relative z-10">
              <h4 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-gold transition-colors serif tracking-widest">
                {service.title}
              </h4>
              <p className="text-white/50 leading-relaxed font-light text-lg max-w-2xl">
                {service.description}
              </p>
            </div>
            
            {/* 行動按鈕 */}
            <div className="flex-shrink-0 relative z-10">
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-white/40 group-hover:text-gold group-hover:border-gold group-hover:scale-110 transition-all duration-500">
                <ArrowUpRight size={28} />
              </div>
            </div>

            {/* 背景流光 */}
            <div className="absolute inset-0 bg-gradient-to-r from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          </div>
        ))}
      </div>

      <div className="mt-24 text-center reveal">
        <button className="premium-btn px-16 py-6 rounded-full font-black text-lg tracking-[0.2em] shadow-2xl">
          預約專屬顧問諮詢
        </button>
      </div>
    </div>
  );
};

export default ServiceMatrix;
