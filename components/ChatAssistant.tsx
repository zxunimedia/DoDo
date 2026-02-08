import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Sparkles } from 'lucide-react';

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  // LINE 跳转链接（ID：09341663236）
  const lineLink = "https://line.me/R/ti/p/@09341663236";

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-28 right-6 bg-yellow-500 text-black p-5 rounded-full shadow-[0_10px_30px_rgba(212,175,55,0.4)] transition-all hover:scale-110 z-50 ${isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}
      >
        <Bot className="w-8 h-8" />
      </button>

      <div className={`fixed bottom-6 right-6 w-80 sm:w-[400px] bg-black/95 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.8)] border border-yellow-500/30 flex flex-col overflow-hidden transition-all duration-500 z-[60] ${isOpen ? 'h-[600px] opacity-100 scale-100 translate-y-0' : 'h-0 opacity-0 scale-95 translate-y-10 pointer-events-none'}`}>
        <div className="bg-gradient-to-r from-black via-[#1a1a1a] to-black p-6 flex justify-between items-center text-white border-b border-yellow-500/20">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-yellow-500/10 rounded-xl border border-yellow-500/20">
              <Sparkles size={18} className="text-yellow-500" />
            </div>
            <span className="font-black tracking-widest serif text-yellow-400">欣至善 智慧助理</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-full transition-colors">
            <X size={24} className="text-white/50" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-black/40">
          {/* 固定欢迎语 */}
          <div className="flex justify-start">
            <div className="max-w-[85%] rounded-3xl px-5 py-4 text-sm leading-relaxed tracking-wide bg-white/5 text-white/80 backdrop-blur-md border border-white/10 rounded-bl-none">
              尊榮的客戶您好！我是欣至善有限公司的專屬助理。<br/><br/>
              如需諮詢房市趨勢、預算配置建議，或是預約專業顧問，請點擊下方按鈕，由專人為您服務！
            </div>
          </div>

          {/* LINE 跳转按钮 */}
          <div className="flex justify-center mt-8">
            <a 
              href={lineLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-yellow-500 text-black font-bold px-8 py-4 rounded-3xl shadow-lg shadow-yellow-500/20 hover:scale-105 transition-all w-full justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.5 17.5c1.5-1 3-2.5 3-5.5 0-3-2-4-3-4s-4 2-6 2c-.5 0-1-.5-1-1s.5-1 1-1c3 0 6-2 8-4 0-1-2-2-3-2s-4 1-6 1-4-1-5-1-1 2-1 3v1c0 2 1 4 3 5 0 1 2 3 3 4 .5 1 1 2 3 2 2 0 4-1 5-2z" />
                <path d="M10 11.5c.5-.5 1-1 1-2s0-1.5-1-2" />
                <path d="M14 11.5c.5-.5 1-1 1-2s0-1.5-1-2" />
                <path d="M10.5 15c1 0 2-.5 2-1s-1-2-2-1" />
              </svg>
              加入 LINE ID：09341663236
            </a>
          </div>

          {/* 立即预约电话按钮 */}
          <div className="flex justify-center mt-4">
            <a 
              href="tel:0934166323" 
              className="flex items-center gap-3 bg-blue-900 text-white font-bold px-8 py-4 rounded-3xl shadow-lg shadow-blue-900/20 hover:scale-105 transition-all border border-yellow-500/30 w-full justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              立即預約：0934-166323
            </a>
          </div>
          
          <div ref={messagesEndRef} />
        </div>

        {/* 底部提示文字 */}
        <div className="p-6 border-t border-yellow-500/20 bg-black text-center text-white/50 text-sm">
          點擊上方按鈕，立即與專業顧問對話
        </div>
      </div>
    </>
  );
};

export default ChatAssistant;
