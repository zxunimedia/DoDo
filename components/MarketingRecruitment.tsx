
import React from 'react';
import { Phone, PhoneCall, Target, Rocket, Sparkles, MapPin, ArrowUpRight } from 'lucide-react';

const MarketingRecruitment: React.FC = () => {
  const benefits = [
    { label: "全職菁英", color: "border-gold/40 bg-gold/10 text-gold-light" },
    { label: "高額獎金", color: "border-red-500/50 bg-red-500/10 text-red-400" },
    { label: "轉換跑道", color: "border-gold/40 bg-gold/10 text-gold-light" },
    { label: "二度就業", color: "border-gold/40 bg-gold/10 text-gold-light" },
    { label: "工讀可", color: "border-white/30 bg-white/10 text-white/80" }
  ];

  return (
    <div className="relative py-40 bg-[#020202] overflow-hidden border-t border-gold/10">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
      <div className="absolute -right-40 top-1/4 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[180px] float-anim"></div>
      <div className="absolute -left-40 bottom-1/4 w-[600px] h-[600px] bg-red-900/5 rounded-full blur-[150px] float-anim" style={{ animationDelay: '-5s' }}></div>

      <div className="container mx-auto px-10 relative z-10">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-24">
          
          {/* Left: Visual Content with Layered Effects */}
          <div className="lg:w-5/12 reveal-right">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-gold via-white to-gold rounded-[3.5rem] opacity-20 group-hover:opacity-50 blur-2xl transition-all duration-1000"></div>
              <div className="relative h-[700px] rounded-[3.5rem] overflow-hidden border border-white/10 gold-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80" 
                  alt="Marketing Strategy" 
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                <div className="absolute bottom-16 left-12 right-12">
                  <div className="flex gap-5 mb-8">
                    <div className="p-5 bg-gold/20 backdrop-blur-xl rounded-2xl border border-gold/40 group-hover:rotate-6 transition-transform">
                      <Target className="text-gold" size={36} />
                    </div>
                    <div className="p-5 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 group-hover:-rotate-6 transition-transform">
                      <Rocket className="text-white" size={36} />
                    </div>
                  </div>
                  <h4 className="text-white text-3xl font-bold mb-3 serif tracking-widest drop-shadow-lg">定義你的行銷主場</h4>
                  <p className="text-gold-light/60 text-sm tracking-[0.3em] uppercase font-bold">Impact the Future</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text & Contact with Enhanced Clarity */}
          <div className="lg:w-7/12 reveal-left">
            <div className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full border border-gold/50 bg-gold/10 text-gold-light text-xs font-black tracking-[0.4em] uppercase mb-12 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
              <Sparkles size={16} className="text-gold animate-pulse" /> Elite Marketing Recruitment
            </div>

            <h2 className="text-5xl md:text-8xl font-black text-white mb-12 serif leading-tight md:whitespace-nowrap">
              徵求 <span className="text-gold-gradient">行銷高手</span>
            </h2>

            <div className="flex flex-wrap gap-5 mb-14">
              {benefits.map((b, i) => (
                <span key={i} className={`px-8 py-3 rounded-full border font-black tracking-[0.2em] text-sm transition-all hover:scale-110 hover:shadow-lg active:scale-95 cursor-default ${b.color}`}>
                  {b.label}
                </span>
              ))}
            </div>

            <p className="text-white/80 text-2xl leading-relaxed mb-20 font-light max-w-2xl tracking-wide">
              我們在尋找能用故事定義價值、用數據精準獲客的靈魂夥伴。欣至善有限公司提供你成就自我、彼此溫暖的頂級舞台。
            </p>

            {/* Contact Grid with Premium Hover Effects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="p-12 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all group cursor-pointer shadow-xl">
                <div className="text-gold mb-8 group-hover:scale-125 group-hover:translate-x-2 transition-transform">
                  <Phone size={40} strokeWidth={1.5} />
                </div>
                <h5 className="text-white/40 text-xs font-black tracking-widest uppercase mb-3">Office Line</h5>
                <a href="tel:062674113" className="text-4xl font-black text-white hover:text-gold transition-colors tracking-tighter block mb-4">
                  06-267-4113
                </a>
                <p className="text-white/30 text-sm flex items-center gap-3 font-medium">
                  <MapPin size={16} className="text-gold/50" /> 台南市東區旗艦店
                </p>
              </div>

              <div className="p-12 rounded-[3rem] bg-gradient-to-br from-gold/20 to-transparent border border-gold/30 hover:border-gold/60 transition-all group relative overflow-hidden shadow-2xl cursor-pointer">
                <div className="absolute top-0 right-0 p-10 text-gold/5 group-hover:rotate-12 group-hover:scale-125 transition-all duration-700">
                  <PhoneCall size={140} strokeWidth={0.5} />
                </div>
                <div className="relative z-10">
                  <h5 className="text-gold font-black tracking-[0.3em] uppercase mb-5 text-[11px]">Direct Manager</h5>
                  <div className="flex items-baseline gap-4 mb-8">
                    <span className="text-5xl font-black text-white serif drop-shadow-xl">飛飛</span>
                    <span className="text-gold-light/90 text-sm font-bold tracking-[0.2em]">專案經理</span>
                  </div>
                  <a href="tel:0934166323" className="inline-flex items-center gap-5 text-4xl font-black text-white hover:text-gold-light transition-colors tracking-tighter">
                    <span className="text-gold-gradient">0934-166323</span>
                    <div className="w-14 h-14 rounded-full bg-gold text-black flex items-center justify-center group-hover:scale-125 transition-transform shadow-[0_10px_30px_rgba(212,175,55,0.4)]">
                      <ArrowUpRight size={28} />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingRecruitment;
