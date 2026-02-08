
import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles, Maximize } from 'lucide-react';

const PainPoints: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="container mx-auto px-10">
      <div className="mb-24 reveal">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/5 text-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-6 shadow-sm">
          <Sparkles size={12} /> Brand Vision
        </div>
        <h3 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight serif">
          為何選擇 <span className="text-gold-gradient">欣至善？</span>
        </h3>
      </div>
      
      {/* Video Section */}
      <div className="relative group rounded-[3rem] overflow-hidden bg-black border border-slate-200 gold-shadow reveal reveal-delay-2 aspect-video md:aspect-[21/9]">
        <video 
          ref={videoRef}
          className="w-full h-full object-cover opacity-90 transition-transform duration-[3000ms] group-hover:scale-105"
          autoPlay
          muted
          loop
          playsInline
          src="775399311.636653.MP4"
        >
          您的瀏覽器不支援影片播放。
        </video>

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
