
import React from 'react';
import { Quote } from 'lucide-react';

const Manifesto: React.FC = () => {
  return (
    <div className="relative py-32 md:py-48 bg-black overflow-hidden border-y border-gold/10">
      {/* Background Subtle Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-10 relative z-10 text-center">
        <div className="inline-block mb-16 reveal">
          <Quote size={48} className="text-gold opacity-40 mx-auto" />
        </div>

        <div className="max-w-5xl mx-auto space-y-8 md:space-y-12 reveal active">
          <h2 className="text-2xl md:text-3xl text-gold/80 tracking-[0.4em] font-light uppercase mb-16">
            Our Philosophy
          </h2>
          
          <div className="space-y-6 md:space-y-10 serif">
            <p className="text-3xl md:text-6xl text-white font-bold tracking-widest leading-tight">
              融入成功的價值
            </p>
            <p className="text-2xl md:text-4xl text-white/60 font-light tracking-[0.2em]">
              不在於你超越多少人，而在於你幫助多少人
            </p>
            
            <div className="h-px w-24 bg-gold/30 mx-auto my-16"></div>
            
            <p className="text-3xl md:text-5xl text-gold-gradient font-bold tracking-widest leading-tight">
              肯為別人撐傘，才會有人為你開路
            </p>
            <p className="text-2xl md:text-4xl text-white/80 font-medium tracking-[0.2em]">
              互助才會互贏
            </p>
            
            <div className="pt-16">
              <p className="text-xl md:text-3xl text-white/50 font-light italic leading-relaxed max-w-5xl mx-auto tracking-[0.1em]">
                人生並不全是競爭和利益，更多的是相互成就，彼此溫暖。
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24 reveal reveal-delay-3">
          <div className="inline-flex flex-col items-center">
            <div className="w-px h-20 bg-gradient-to-b from-gold to-transparent"></div>
            <span className="mt-4 text-gold/40 text-[10px] tracking-[0.5em] uppercase">欣至善 品牌精髓</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manifesto;
