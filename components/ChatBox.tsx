
import React, { useState, useRef, useEffect } from 'react';
import { getHealingResponse } from '../services/geminiService';
import { Message } from '../types';

const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: '你好呀，我是你的療育夥伴。今天過得怎麼樣？有什麼想分享的嗎？', timestamp: Date.now() }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', text: input, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const response = await getHealingResponse(history, input);
    setMessages(prev => [...prev, { role: 'model', text: response, timestamp: Date.now() }]);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col h-[520px] w-full max-w-lg bg-[#f6dedd]/40 backdrop-blur-2xl rounded-[3rem] border border-white/80 shadow-2xl overflow-hidden">
      <div className="p-5 bg-white/40 border-b border-[#e3b5b9]/30 flex items-center justify-between">
        <h2 className="font-bold text-[#588dad] tracking-widest">心靈對話</h2>
        <div className="w-2.5 h-2.5 rounded-full bg-[#d9a0a8] animate-pulse shadow-[0_0_10px_#d9a0a8]"></div>
      </div>
      
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-5 scrollbar-hide">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] px-5 py-3.5 rounded-[1.8rem] shadow-sm transition-all duration-500 ${
              msg.role === 'user' 
                ? 'bg-[#588dad] text-[#f6dedd] rounded-tr-none' 
                : 'bg-white/90 text-[#588dad] border border-[#e3b5b9]/20 rounded-tl-none font-medium'
            }`}>
              <p className="text-sm leading-relaxed">{msg.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white/60 px-5 py-3.5 rounded-[1.8rem] rounded-tl-none shadow-sm flex space-x-1.5 items-center">
              <div className="w-2 h-2 bg-[#d9a0a8] rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-[#d9a0a8] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-[#d9a0a8] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        )}
      </div>

      <div className="p-5 bg-white/40 border-t border-[#e3b5b9]/30 flex space-x-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="在這裡留下你的心聲..."
          className="flex-1 px-5 py-3.5 rounded-full bg-white/80 border border-[#e3b5b9]/20 focus:outline-none focus:ring-2 focus:ring-[#7da9bd]/30 text-sm text-[#588dad] placeholder-[#7da9bd]/60"
        />
        <button
          onClick={handleSend}
          disabled={isLoading}
          className="w-12 h-12 flex items-center justify-center bg-[#588dad] text-white rounded-full shadow-lg hover:bg-[#7da9bd] active:scale-90 transition-all disabled:opacity-50"
        >
          <span className="text-xl">✨</span>
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
