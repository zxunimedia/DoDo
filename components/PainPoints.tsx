import React from 'react';

const PainPoints: React.FC = () => {
  return (
    <section id="pain-points" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* 优化后的标签 + 标题（无小白格） */}
        <div className="mb-12 text-center">
          <div className="inline-block mb-4 px-6 py-2 rounded-full bg-black/10 border border-yellow-500/20 text-yellow-500 text-sm font-medium tracking-widest">
            BRAND VISION
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
            為何選擇 
            <span className="text-yellow-500"> 欣至善</span>？
          </h2>
        </div>
      
    {/* 视频展示的黑色区块 */}
<div className="relative bg-black rounded-2xl overflow-hidden shadow-xl">
  {/* 视频比例容器（16:9） */}
  <div className="aspect-video w-full">
    {/* 替换成你的视频实际路径（注意转义反斜杠） */}
    <video 
      src="E:\\ESD-USB\\videos\\品牌願景.mp4"  // Windows路径需转义为双反斜杠
      controls 
      className="w-full h-full object-cover"  // 修正为 className
      poster="可选：视频封面图路径（如E:\\ESD-USB\\images\\video-cover.jpg）"
    >
      您的浏览器不支持视频播放
    </video>
  </div>

  {/* 视频下方说明文字（可选） */}
  <div className="p-8 text-white/80">
    <p className="text-lg">
      欣至善堅持以專業、誠信、創新的理念，為客戶打造一站式房產服務體驗。
    </p>
  </div>
</div>
      </div>
      </div>
    </section>
  );
};

export default PainPoints;

        {/* Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none"></div>

        {/* Custom Video Controls */}
        <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
          <div className="flex items-center gap-6">
            <button 
              onClick={togglePlay}
              className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-gold hover:text-black transition-all transform hover:scale-110 active:scale-90"
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
            </button>
            <div>
              <h4 className="text-white font-bold text-2xl serif tracking-widest mb-1">品牌核心價值</h4>
              <p className="text-gold-light/60 text-xs tracking-[0.2em] uppercase">Xin Zhi Shan Visionary Movie</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleMute}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
            <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all">
              <Maximize size={20} />
            </button>
          </div>
        </div>

        {/* Center Play Indicator (Only shows when paused) */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-32 h-32 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center animate-ping"></div>
            <div className="absolute w-24 h-24 rounded-full bg-gold text-black flex items-center justify-center shadow-[0_0_50px_rgba(212,175,55,0.5)]">
              <Play size={40} className="ml-2" />
            </div>
          </div>
        )}

        {/* Decorative corner lines */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-gold/40 m-8 rounded-tl-3xl opacity-40"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-gold/40 m-8 rounded-br-3xl opacity-40"></div>
      </div>

      <div className="mt-16 text-center reveal reveal-delay-4">
        <p className="text-slate-500 text-lg max-w-3xl mx-auto font-light leading-relaxed">
          我們深信，每一塊土地、每一間房產，背後都有著專屬的故事與無限的可能性。<br />
          透過數據領航與專家經驗，欣至善為您守護資產價值的永續發展。
        </p>
      </div>
    </div>
  );
};

export default PainPoints;
