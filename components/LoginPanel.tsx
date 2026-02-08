
import React, { useState } from 'react';
import MobileAppIcon from './MobileAppIcon';

interface LoginPanelProps {
  onLogin: () => void;
  expectedCode: string;
}

const LoginPanel: React.FC<LoginPanelProps> = ({ onLogin, expectedCode }) => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === expectedCode) {
      onLogin();
    } else {
      setError('暗號不正確，請在心中默念正確的咒語');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen z-10 p-4">
      <div className="bg-[#f6dedd]/60 backdrop-blur-2xl p-10 rounded-[3rem] shadow-2xl border border-white/60 w-full max-w-md text-center transform transition-all duration-1000">
        
        {/* 六角恐龍手機圖標 */}
        <div className="flex justify-center mb-8">
          <MobileAppIcon size={140} className="hover:scale-105 transition-transform duration-500 cursor-pointer" />
        </div>
        
        <h1 className="text-4xl font-bold text-[#588dad] mb-3 tracking-[0.2em]">呼呼拍拍</h1>
        <p className="text-[#7da9bd] mb-12 font-light italic tracking-wider">六角恐龍陪你，找回心中的寧靜</p>
        
        <form onSubmit={handleLogin} className="space-y-8">
          <div className="text-left">
            <label className="block text-[10px] font-bold text-[#d9a0a8] mb-4 ml-2 uppercase tracking-[0.3em]">輸入你的靈魂暗號</label>
            <input
              type="password"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setError('');
              }}
              placeholder="••••••"
              className="w-full px-6 py-5 rounded-[2rem] bg-white/80 border border-[#e3b5b9]/30 focus:outline-none focus:ring-2 focus:ring-[#7da9bd]/50 transition-all text-center text-2xl font-medium tracking-[0.8em] text-[#588dad]"
            />
            {error && <p className="text-[#d9a0a8] text-[10px] mt-3 text-center animate-pulse font-medium">{error}</p>}
          </div>
          
          <button
            type="submit"
            className="w-full py-5 rounded-[2rem] bg-[#588dad] text-[#f6dedd] font-bold hover:bg-[#7da9bd] transition-all shadow-xl active:scale-95 duration-300 tracking-[0.2em]"
          >
            開啟治癒之門
          </button>
        </form>
        
        <div className="mt-12 flex flex-col items-center space-y-2">
          <div className="w-8 h-1 bg-[#588dad]/20 rounded-full"></div>
          <p className="text-[#7da9bd] text-[9px] font-medium opacity-60 uppercase tracking-widest">
            A gentle Axolotl is waiting for you
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPanel;
