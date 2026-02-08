
import React from 'react';
import { ArrowRight, Briefcase } from 'lucide-react';

const Recruitment: React.FC = () => {
  const jobs = [
    { title: "不動產配置顧問", type: "正職", location: "台北/桃園/台中" },
    { title: "數據分析工程師", type: "正職", location: "台北總部" },
    { title: "法務代書助理", type: "約聘/實習", location: "台北/高雄" }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="bg-slate-900 rounded-[3rem] p-8 md:p-20 relative overflow-hidden shadow-2xl">
        {/* Decorative circle - Reddish */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-red-500/10 rounded-full blur-3xl"></div>
        
        <div className="flex flex-col lg:flex-row gap-12 relative z-10">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-red-400 font-bold tracking-widest uppercase mb-4">加入我們</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
              一起定義 <br /> 房地產的智慧未來
            </h3>
            <p className="text-slate-400 text-lg mb-10">
              我們在尋找對資產規劃有熱忱、敢於挑戰現狀的各界菁英。在房多多，你不只是一個仲介，更是一個全方位的智慧財富顧問。
            </p>
            <button className="w-full lg:w-auto bg-white text-slate-900 font-bold px-10 py-5 rounded-2xl hover:bg-red-50 transition-all flex items-center justify-center gap-2">
              查看完整職缺 <ArrowRight size={20} />
            </button>
          </div>
          
          <div className="lg:w-1/2 flex flex-col gap-4">
            {jobs.map((job, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-2xl flex items-center justify-between hover:bg-slate-800 transition-colors group cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="bg-slate-700 p-3 rounded-xl text-red-400">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">{job.title}</h4>
                    <div className="flex gap-3 text-slate-400 text-sm">
                      <span>{job.type}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                    </div>
                  </div>
                </div>
                <button className="text-white/50 group-hover:text-red-400 transition-colors">
                  <ArrowRight size={24} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruitment;
