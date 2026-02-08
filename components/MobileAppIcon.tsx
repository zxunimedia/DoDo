
import React from 'react';

interface MobileAppIconProps {
  size?: number;
  className?: string;
}

const MobileAppIcon: React.FC<MobileAppIconProps> = ({ size = 120, className = "" }) => {
  return (
    <div 
      className={`relative flex items-center justify-center ${className}`} 
      style={{ width: size, height: size }}
    >
      {/* 外部柔和立體陰影 */}
      <div className="absolute inset-2 bg-[#588dad]/10 blur-xl rounded-[30%] translate-y-4"></div>
      
      {/* 圖標主體 (iOS Squircle 風格) */}
      <div className="relative w-full h-full bg-gradient-to-br from-[#f6dedd] to-[#e3b5b9] rounded-[28%] shadow-[inset_0_2px_12px_rgba(255,255,255,0.9),0_12px_35px_rgba(88,141,173,0.15)] border border-white/50 overflow-hidden flex items-center justify-center">
        
        {/* 背景折射動態光感 */}
        <div className="absolute top-[-25%] left-[-25%] w-[110%] h-[110%] bg-white/40 blur-3xl rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-[-15%] right-[-15%] w-[90%] h-[90%] bg-[#588dad]/15 blur-2xl rounded-full"></div>

        {/* 核心 3D 六角恐龍 */}
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[90%] h-[90%] filter drop-shadow-[0_8px_18px_rgba(217,160,168,0.4)]"
        >
          <defs>
            <linearGradient id="axoIconGrad" x1="40" y1="40" x2="160" y2="160">
              <stop offset="0%" stopColor="#f6dedd" />
              <stop offset="60%" stopColor="#d9a0a8" />
              <stop offset="100%" stopColor="#588dad" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          
          {/* 六隻小角 (外鰓) */}
          <g stroke="#d9a0a8" strokeWidth="7" strokeLinecap="round" opacity="0.8">
            <path d="M45 75C30 60 25 70 40 80" />
            <path d="M40 100C20 100 20 110 40 110" />
            <path d="M45 125C30 140 25 130 40 120" />
            
            <path d="M135 75C150 60 155 70 140 80" />
            <path d="M140 100C160 100 160 110 140 110" />
            <path d="M135 125C150 140 155 130 140 120" />
          </g>

          {/* 身體 */}
          <path
            d="M140 100C140 128 115 150 85 150C55 150 30 128 30 100C30 72 55 50 85 50C115 50 140 72 140 100Z"
            fill="url(#axoIconGrad)"
            fillOpacity="0.9"
          />
          
          {/* 尾巴 */}
          <path d="M130 100Q165 85 175 100Q165 115 130 100Z" fill="#d9a0a8" fillOpacity="0.5" />

          {/* 眼睛與微笑 */}
          <circle cx="65" cy="95" r="4" fill="#588dad" />
          <circle cx="105" cy="95" r="4" fill="#588dad" />
          <path d="M78 112Q85 118 92 112" stroke="#588dad" strokeWidth="2" strokeLinecap="round" fill="none" />

          {/* 表面玻璃折射高光 */}
          <ellipse cx="85" cy="70" rx="35" ry="12" fill="white" fillOpacity="0.35" />
        </svg>

        {/* 表面玻璃掃光條 */}
        <div className="absolute top-0 left-0 w-full h-[50%] bg-gradient-to-b from-white/30 to-transparent skew-y-[-15deg] translate-y-[-25%]"></div>
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default MobileAppIcon;
