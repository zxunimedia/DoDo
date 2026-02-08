
import React from 'react';
import { Season } from '../types';

interface BackgroundProps {
  season: Season;
}

// 配色常量
const COLORS = {
  steelBlue: '#588dad',
  mutedBlue: '#7da9bd',
  mutedRose: '#d9a0a8',
  lightRose: '#e3b5b9',
  mistPink: '#f6dedd',
};

const SpringBackground: React.FC = () => (
  <div className="absolute inset-0 bg-gradient-to-b from-[#7da9bd] via-[#e3b5b9] to-[#f6dedd] overflow-hidden">
    {/* 櫻花花瓣與貓咪抓蝴蝶 */}
    {[...Array(15)].map((_, i) => (
      <div
        key={i}
        className="absolute animate-petal"
        style={{
          left: `${Math.random() * 100}%`,
          top: `-10%`,
          animationDuration: `${6 + Math.random() * 8}s`,
          animationDelay: `${Math.random() * 5}s`,
          opacity: 0.6,
          fontSize: `${16 + Math.random() * 10}px`,
          color: '#ffffff'
        }}
      >
        🌸
      </div>
    ))}
    <div className="absolute bottom-20 left-10 text-9xl opacity-10 filter grayscale">🐱</div>
    <div className="absolute bottom-60 left-40 text-4xl opacity-40 animate-butterfly">🦋</div>
    <style>{`
      @keyframes petal {
        0% { transform: translateY(0) rotate(0deg) translateX(0); }
        50% { transform: translateY(50vh) rotate(180deg) translateX(20px); }
        100% { transform: translateY(110vh) rotate(360deg) translateX(-20px); }
      }
      .animate-petal { animation: petal linear infinite; }
      @keyframes butterfly {
        0%, 100% { transform: translate(0, 0) rotate(0deg); }
        25% { transform: translate(100px, -50px) rotate(10deg); }
        50% { transform: translate(50px, -100px) rotate(-10deg); }
        75% { transform: translate(-50px, -50px) rotate(5deg); }
      }
      .animate-butterfly { animation: butterfly 12s ease-in-out infinite; }
    `}</style>
  </div>
);

const SummerBackground: React.FC = () => (
  <div className="absolute inset-0 bg-gradient-to-b from-[#588dad] to-[#7da9bd] overflow-hidden">
    {/* 海浪與沙灘感 */}
    <div className="absolute bottom-0 w-full h-1/2 bg-[#f6dedd] opacity-40 animate-wave" style={{ borderRadius: '60% 40% 0 0' }}></div>
    <div className="absolute bottom-0 w-full h-2/3 bg-[#e3b5b9] opacity-20 animate-wave-slow" style={{ borderRadius: '40% 60% 0 0' }}></div>
    <div className="absolute top-10 right-10 text-8xl opacity-10 text-white animate-pulse">☀️</div>
    <style>{`
      @keyframes wave {
        0%, 100% { transform: translateY(0) scaleY(1); }
        50% { transform: translateY(20px) scaleY(1.05); }
      }
      .animate-wave { animation: wave 8s ease-in-out infinite; }
      .animate-wave-slow { animation: wave 12s ease-in-out infinite; animation-delay: 1s; }
    `}</style>
  </div>
);

const AutumnBackground: React.FC = () => (
  <div className="absolute inset-0 bg-gradient-to-tr from-[#d9a0a8] via-[#e3b5b9] to-[#7da9bd] overflow-hidden">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute animate-fall"
        style={{
          left: `${Math.random() * 100}%`,
          top: `-10%`,
          animationDuration: `${8 + Math.random() * 10}s`,
          animationDelay: `${Math.random() * 5}s`,
          opacity: 0.5,
          fontSize: `${20 + Math.random() * 10}px`
        }}
      >
        🍁
      </div>
    ))}
    <style>{`
      @keyframes fall {
        0% { transform: translateY(0) rotate(0deg) scale(1); opacity: 0; }
        10% { opacity: 0.5; }
        90% { opacity: 0.5; }
        100% { transform: translateY(110vh) rotate(720deg) scale(0.8); opacity: 0; }
      }
      .animate-fall { animation: fall linear infinite; }
    `}</style>
  </div>
);

const WinterBackground: React.FC = () => (
  <div className="absolute inset-0 bg-gradient-to-b from-[#7da9bd] to-[#f6dedd] overflow-hidden">
    {[...Array(60)].map((_, i) => (
      <div
        key={i}
        className="absolute bg-white rounded-full animate-snow"
        style={{
          left: `${Math.random() * 100}%`,
          top: `-5%`,
          width: `${2 + Math.random() * 4}px`,
          height: `${2 + Math.random() * 4}px`,
          animationDuration: `${5 + Math.random() * 10}s`,
          animationDelay: `${Math.random() * 5}s`,
          opacity: 0.7,
          filter: 'blur(1px)'
        }}
      ></div>
    ))}
    <style>{`
      @keyframes snow {
        0% { transform: translateY(0) translateX(0); }
        50% { transform: translateY(50vh) translateX(30px); }
        100% { transform: translateY(105vh) translateX(-30px); }
      }
      .animate-snow { animation: snow linear infinite; }
    `}</style>
  </div>
);

const Background: React.FC<BackgroundProps> = ({ season }) => {
  switch (season) {
    case Season.Spring: return <SpringBackground />;
    case Season.Summer: return <SummerBackground />;
    case Season.Autumn: return <AutumnBackground />;
    case Season.Winter: return <WinterBackground />;
    default: return <div className="absolute inset-0 bg-[#f6dedd]" />;
  }
};

export default Background;
