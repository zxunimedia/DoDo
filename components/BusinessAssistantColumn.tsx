
import React from 'react';
import { Phone, MapPin, Sparkles, UserCheck, ArrowRight, HeartHandshake } from 'lucide-react';

const BusinessAssistantColumn: React.FC = () => {
  return (
    <div className="relative py-32 bg-black overflow-hidden border-t border-gold/10">
      {/* Decorative Gold Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-900/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Left: Imagery & Philosophy */}
          <div className="lg:w-1/2 reveal">
            <div className="relative">
              <div className="absolute -inset-4 border border-gold/20 rounded-[3rem] rotate-3 -z-10"></div>
              <div className="relative h-[600px] rounded-[3rem] overflow-hidden gold-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80" 
                  alt="Office Life" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-12 left-12 right-12">
                  <p className="text-gold-gradient text-xl font-medium mb-4 serif italic">
                    「肯為別人撐傘，才會有人為你開路」
                  </p>
                  <p className="text-white/70 text-sm tracking-[0.2em]">
                    我們尋找的不只是助理，而是共同成就的夥伴。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Info & Contact */}
          <div className="lg:w-1/2 reveal reveal-delay-2">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gold/40 bg-gold/10 text-gold-light text-[10px] font-bold tracking-[0.3em] uppercase mb-8 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
              <Sparkles size={12} className="text-gold" /> Career Opportunity
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 serif leading-tight">
              <span className="md:whitespace-nowrap block">招聘 <span className="text-gold-gradient">業務助理</span></span>
              <span className="text-2xl md:text-3xl text-gold-light font-light tracking-widest mt-4 block">台南東區旗艦店</span>
            </h2>

            <p className="text-white/60 text-lg leading-relaxed mb-12 font-light">
              在欣至善有限公司，成功的價值不在於你超越多少人，而在於你幫助多少人。如果你認同「互助互贏」的理念，具備細心與熱忱，我們誠摯邀請你加入台南東區團隊，與「飛飛」一起為客戶開路。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-4 mb-4 text-gold">
                  <UserCheck size={24} />
                  <span className="font-bold tracking-widest text-gold-light">職位需求</span>
                </div>
                <ul className="text-white/70 space-y-2 text-sm font-light">
                  <li>• 協助業務行程規劃與庶務</li>
                  <li>• 客戶關係初步維護與聯繫</li>
                  <li>• 品牌形象與社群內容協作</li>
                </ul>
              </div>
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-4 mb-4 text-gold">
                  <UserCheck size={24} />
                  <span className="font-bold tracking-widest text-gold-light">夥伴福利</span>
                </div>
                <ul className="text-white/70 space-y-2 text-sm font-light">
                  <li>• 智慧房產科技操作訓練</li>
                  <li>• 優於業界的成長獎金機制</li>
                  <li>• 透明且溫暖的升遷管道</li>
                </ul>
              </div>
            </div>

            {/* Contact Card */}
            <div className="group relative p-10 rounded-[2.5rem] bg-gradient-to-br from-gold/30 to-transparent border border-gold/50 hover:border-gold transition-all duration-500 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div className="absolute top-0 right-0 p-6 text-gold/10 group-hover:text-gold/20 transition-colors">
                <Phone size={80} strokeWidth={1} />
              </div>
              <div className="relative z-10">
                <h4 className="text-gold-light font-bold tracking-[0.2em] mb-2 uppercase text-xs">Contact Manager</h4>
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="text-4xl font-bold text-white serif drop-shadow-lg">飛飛</span>
                  <span className="text-gold-light/80 text-sm font-medium tracking-widest">專案經理</span>
                </div>
                <a 
                  href="tel:0934166323" 
                  className="inline-flex items-center gap-4 text-2xl md:text-3xl font-bold text-white hover:text-gold transition-colors tracking-tighter"
                >
                  <span className="text-gold-gradient">0934-166323</span>
                  <div className="w-12 h-12 rounded-full bg-gold text-black flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                    <ArrowRight size={24} />
                  </div>
                </a>
                <div className="mt-8 flex items-center gap-2 text-white/50 text-sm tracking-widest">
                  <MapPin size={14} className="text-gold" /> 台南市東區（詳細地址請電洽）
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessAssistantColumn;
