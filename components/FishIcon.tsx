
import React from 'react';

interface FishIconProps {
  className?: string;
  size?: number;
}

const FishIcon: React.FC<FishIconProps> = ({ className = "", size = 120 }) => {
  return (
    <div className={`relative flex items-center justify-center animate-float-slow ${className}`} style={{ width: size, height: size }}>
      {/* 底部陰影 */}
      <div className="absolute bottom-0 w-1/2 h-2 bg-[#588dad]/20 blur-md rounded-full"></div>
      
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full filter drop-shadow-2xl"
      >
        <defs>
          {/* 液態漸層 */}
          <linearGradient id="fishGradient" x1="20" y1="20" x2="180" y2="180" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#7da9bd" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#588dad" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#d9a0a8" stopOpacity="0.7" />
          </linearGradient>

          {/* 玻璃發光 */}
          <filter id="glassBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
          </filter>

          {/* 高光 */}
          <linearGradient id="highlightGrad" x1="100" y1="40" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="white" stopOpacity="0.8" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* 魚身 - 液態流線形 */}
        <path
          d="M160 100C160 130 130 160 90 160C50 160 20 130 20 100C20 70 50 40 90 40C130 40 160 70 160 100Z"
          fill="url(#fishGradient)"
          className="animate-liquid"
        />
        
        {/* 魚尾 - 柔軟動態 */}
        <path
          d="M150 100L185 70C190 85 190 115 185 130L150 100Z"
          fill="#d9a0a8"
          fillOpacity="0.5"
          className="animate-tail"
        />

        {/* 內部核心光暈 */}
        <circle cx="80" cy="90" r="30" fill="#e3b5b9" fillOpacity="0.3" filter="url(#glassBlur)" />

        {/* 頂部玻璃高光 */}
        <ellipse cx="85" cy="65" rx="35" ry="15" fill="url(#highlightGrad)" />

        {/* 靈動的小眼睛 */}
        <circle cx="60" cy="90" r="4" fill="white" fillOpacity="0.9" />
        <circle cx="61" cy="89" r="1.5" fill="#588dad" />
      </svg>

      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }

        @keyframes liquid {
          0%, 100% { d: path("M160 100C160 130 130 160 90 160C50 160 20 130 20 100C20 70 50 40 90 40C130 40 160 70 160 100Z"); }
          50% { d: path("M165 105C165 135 135 165 95 165C55 165 25 135 25 105C25 75 55 45 95 45C135 45 165 75 165 105Z"); }
        }
        .animate-liquid { animation: liquid 8s ease-in-out infinite; }

        @keyframes tail-wiggle {
          0%, 100% { transform: rotate(0deg); transform-origin: 150px 100px; }
          50% { transform: rotate(10deg); transform-origin: 150px 100px; }
        }
        .animate-tail { animation: tail-wiggle 4s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default FishIcon;
