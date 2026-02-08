
import React from 'react';

const Team: React.FC = () => {
  const members = [
    {
      name: "林建勳",
      role: "創辦人 / 首席顧問",
      experience: "25年不動產配置經驗",
      specialty: "大宗資產開發、遺產避稅規劃",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "張曉芸",
      role: "智慧估價技術長",
      experience: "前外資商仲分析師",
      specialty: "大數據行情預測、投報精算",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "陳宏毅",
      role: "資深貸款規劃師",
      experience: "15年銀行授信主管背景",
      specialty: "銀行對接優化、企業融資建議",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "王雅淳",
      role: "法務與代書部經理",
      experience: "資深專業代書",
      specialty: "產權清理、產權信託規劃",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16 reveal">
        <h2 className="text-red-800 font-bold tracking-widest uppercase mb-4">顧問亮點</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900">領先業界的菁英核心</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {members.map((member, index) => (
          <div key={index} className={`bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 group reveal reveal-delay-${index + 1}`}>
            <div className="relative h-80 overflow-hidden bg-slate-200">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
            </div>
            <div className="p-8 text-center">
              <div className="mb-4">
                <h4 className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-red-800 transition-colors">{member.name}</h4>
                <p className="text-red-700 font-medium text-sm">{member.role}</p>
              </div>
              <div className="space-y-3 pt-4 border-t border-slate-100 inline-block text-left w-full">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-300 mt-2 flex-shrink-0"></div>
                  <p className="text-slate-600 text-sm leading-relaxed">{member.experience}</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-300 mt-2 flex-shrink-0"></div>
                  <p className="text-slate-600 text-sm leading-relaxed">{member.specialty}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
