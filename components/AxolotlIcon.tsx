
import React from 'react';

interface AxolotlIconProps {
  className?: string;
  size?: number;
}

const AxolotlIcon: React.FC<AxolotlIconProps> = ({ className = "", size = 120 }) => {
  return (
    <div className={`relative flex items-center justify-center animate-float-slow ${className}`} style={{ width: size, height: size }}>
      {/* 底部柔和陰影 */}
      <div className="absolute bottom-1 w-2/3 h-3 bg-[#588dad]/15 blur-xl rounded-full"></div>
      
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full filter drop-shadow-2xl"
      >
        <defs>
          {/* 主體液態漸層 */}
          <linearGradient id="axoBodyGrad" x1="40" y1="40" x2="160" y2="160">
            <stop offset="0%" stopColor="#f6dedd" />
            <stop offset="50%" stopColor="#e3b5b9" />
            <stop offset="100%" stopColor="#d9a0a8" />
          </linearGradient>

          {/* 外鰓（六角）漸層 */}
          <linearGradient id="gillGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#d9a0a8" />
            <stop offset="100%" stopColor="#588dad" stopOpacity="0.6" />
          </linearGradient>

          {/* 玻璃折射光 */}
          <filter id="axoBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
          </filter>

          {/* 頂部高光 */}
          <linearGradient id="axoHighlight" x1="100" y1="40" x2="100" y2="120" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="white" stopOpacity="0.7" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* 身體與頭部 - 玻璃液態感 */}
        <path
          d="M145 100C145 130 120 155 85 155C50 155 25 130 25 100C25 70 50 45 85 45C120 45 145 70 145 100Z"
          fill="url(#axoBodyGrad)"
          className="animate-liquid-slow"
        />

        {/* 尾巴 */}
        <path
          d="M135 100Q175 80 185 100Q175 120 135 100Z"
          fill="#d9a0a8"
          fillOpacity="0.5"
          className="animate-tail-wiggle"
        />

        {/* 外鰓（六隻角）- 左側 */}
        <g className="animate-gills-left">
          <path d="M40 70C25 55 15 65 30 75" stroke="url(#gillGrad)" strokeWidth="6" strokeLinecap="round" />
          <path d="M35 100C15 100 15 110 35 110" stroke="url(#gillGrad)" strokeWidth="6" strokeLinecap="round" />
          <path d="M40 130C25 145 15 135 30 125" stroke="url(#gillGrad)" strokeWidth="6" strokeLinecap="round" />
        </g>

        {/* 外鰓（六隻角）- 右側 */}
        <g className="animate-gills-right">
          <path d="M130 70C145 55 155 65 140 75" stroke="url(#gillGrad)" strokeWidth="6" strokeLinecap="round" />
          <path d="M135 100C155 100 155 110 135 110" stroke="url(#gillGrad)" strokeWidth="6" strokeLinecap="round" />
          <path d="M130 130C145 145 155 135 140 125" stroke="url(#gillGrad)" strokeWidth="6" strokeLinecap="round" />
        </g>

        {/* 臉部表情 */}
        <circle cx="65" cy="95" r="3.5" fill="#588dad" />
        <circle cx="105" cy="95" r="3.5" fill="#588dad" />
        <path d="M75 115Q85 122 95 115" stroke="#588dad" strokeWidth="2" strokeLinecap="round" fill="none" />

        {/* 內部折射核心 */}
        <circle cx="85" cy="100" r="25" fill="white" fillOpacity="0.15" filter="url(#axoBlur)" />

        {/* 頂部反射 */}
        <ellipse cx="85" cy="65" rx="30" ry="12" fill="url(#axoHighlight)" />
      </svg>

      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(-1deg); }
          50% { transform: translateY(-12px) rotate(1deg); }
        }
        .animate-float-slow { animation: float-slow 5s ease-in-out infinite; }

        @keyframes liquid-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02, 0.98); }
        }
        .animate-liquid-slow { animation: liquid-slow 8s ease-in-out infinite; }

        @keyframes gills-left {
          0%, 100% { transform: rotate(0deg) translateX(0); }
          50% { transform: rotate(-5deg) translateX(-2px); }
        }
        @keyframes gills-right {
          0%, 100% { transform: rotate(0deg) translateX(0); }
          50% { transform: rotate(5deg) translateX(2px); }
        }
        .animate-gills-left { animation: gills-left 3s ease-in-out infinite; transform-origin: 85px 100px; }
        .animate-gills-right { animation: gills-right 3s ease-in-out infinite; transform-origin: 85px 100px; }
        
        @keyframes tail-wiggle {
          0%, 100% { transform: skewX(0deg); }
          50% { transform: skewX(5deg); }
        }
        .animate-tail-wiggle { animation: tail-wiggle 4s ease-in-out infinite; transform-origin: 135px 100px; }
      `}</style>
    </div>
  );
};

export default AxolotlIcon;
