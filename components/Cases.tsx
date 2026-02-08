
import React from 'react';
import { ArrowRight, MapPin, Plus } from 'lucide-react';

const Cases: React.FC = () => {
  const cases = [
    {
      title: "台北大安：首席智慧辦公室",
      location: "Taipei, Daan District",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      delay: "reveal-delay-1"
    },
    {
      title: "台中七期：莊園級景觀邸",
      location: "Taichung, Situn District",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
      delay: "reveal-delay-2"
    },
    {
      title: "高雄亞灣：海景智慧旗艦店",
      location: "Kaohsiung, Qianzhen District",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      delay: "reveal-delay-3"
    }
  ];

  return (
    <div className="container mx-auto px-10">
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10 reveal">
        <div className="max-w-2xl">
          <h2 className="text-gold font-bold tracking-[0.3em] uppercase mb-4 text-sm">Portfolio</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-slate-900 serif">尊榮成交案例</h3>
        </div>
        <button className="premium-btn px-10 py-5 rounded-full font-bold flex items-center gap-3">
          瀏覽全球配置方案 <ArrowRight size={20} />
        </button>
      </div>

      <div className="space-y-16">
        {cases.map((c, i) => (
          <div key={i} className={`group relative h-[500px] md:h-[700px] rounded-[3rem] overflow-hidden gold-shadow reveal ${c.delay}`}>
            <img src={c.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3000ms]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            
            <div className="absolute bottom-16 left-16 right-16 flex flex-col md:flex-row items-end justify-between gap-10">
              <div className="text-white">
                <div className="flex items-center gap-2 text-gold font-bold text-sm tracking-widest mb-4">
                  <MapPin size={16} /> {c.location}
                </div>
                <h4 className="text-3xl md:text-6xl font-bold serif">{c.title}</h4>
              </div>
              <button className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-full text-white hover:bg-white hover:text-black transition-all">
                <Plus size={32} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cases;
