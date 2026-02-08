import React from 'react';

const BrandValues: React.FC = () => {
  // 卡片数据（对应你的图片路径和文案）
  const brandCards = [
    {
      imgSrc: "E:\\ESD-USB\\components\\image\\品牌使命.png",
      title: "品牌使命",
      enTitle: "MISSION",
      desc: "讓人們便捷獲取房地產知識，用科技資源創新的房地產服務"
    },
    {
      imgSrc: "E:\\ESD-USB\\components\\image\\品牌願景.png",
      title: "品牌願景",
      enTitle: "VISION",
      desc: "以創新精神、專業團隊，提供優質房地產服務，打造新世代"
    },
    {
      imgSrc: "E:\\ESD-USB\\components\\image\\經營理念.png",
      title: "經營理念",
      enTitle: "PHILOSOPHY",
      desc: "強調前瞻性與團隊精神，融合優質體驗，創「不動產科技」新"
    }
  ];

  return (
    <section className="py-16 px-6 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brandCards.map((card, index) => (
            <div 
              key={index}
              className="rounded-2xl overflow-hidden bg-black/50 border border-white/10 transition-all hover:scale-105 hover:border-gold/30"
            >
              {/* 图片区域（尺寸适配之前推荐的360×320） */}
              <div className="w-full h-64 overflow-hidden">
                <img 
                  src={card.imgSrc}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform hover:scale-110"
                />
              </div>
              {/* 文字区域 */}
              <div className="p-6">
                <h3 className="text-white font-bold text-xl mb-2 flex items-center gap-2">
                  {card.title}
                  <span className="text-white/50 text-sm font-normal">
                    {card.enTitle}
                  </span>
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandValues;
