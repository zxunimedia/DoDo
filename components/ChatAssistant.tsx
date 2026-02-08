
import React, { useState, useRef, useEffect } from 'react';
import { Bot, Loader2, Send, X, Sparkles } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: '尊榮的客戶您好！我是欣至善有限公司的 AI 智慧助理。我可以幫您分析房市趨勢、預算配置建議，或是協助您預約專業顧問。有什麼我可以幫您的嗎？' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: `
            你是一位專業的「欣至善有限公司」AI 顧問助理。
            你的目標是展現極致專業、數據導察力與對客戶的溫暖。
            品牌的核心價值是「肯為別人撐傘，才會有人為你開路」。
            
            你可以回答：
            1. 買賣房產的基本流程。
            2. 房貸、稅務、產權相關的通識問題。
            3. 引導用戶加 LINE 或預約實體顧問。
            
            你的語氣應該：優雅、專業、理性。
            主要服務區域：台南東區旗艦店及全台灣。
            創辦人：林建勳 顧問。
          `
        }
      });

      const botText = response.text || "抱歉，我現在無法處理您的請求。請稍後再試，或直接加 LINE 諮詢。";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "目前的 AI 服務較為繁忙，建議您直接點擊右下角加 LINE，由專人顧問為您即時解答！" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-28 right-6 bg-gold text-black p-5 rounded-full shadow-[0_10px_30px_rgba(212,175,55,0.4)] transition-all hover:scale-110 z-50 ${isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}
      >
        <Bot className="w-8 h-8" />
      </button>

      <div className={`fixed bottom-6 right-6 w-80 sm:w-[400px] bg-black/95 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.8)] border border-gold/30 flex flex-col overflow-hidden transition-all duration-500 z-[60] ${isOpen ? 'h-[600px] opacity-100 scale-100 translate-y-0' : 'h-0 opacity-0 scale-95 translate-y-10 pointer-events-none'}`}>
        <div className="bg-gradient-to-r from-black via-[#1a1a1a] to-black p-6 flex justify-between items-center text-white border-b border-gold/20">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gold/10 rounded-xl border border-gold/20">
              <Sparkles size={18} className="text-gold" />
            </div>
            <span className="font-black tracking-widest serif text-gold-light">欣至善 智慧助理</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-full transition-colors">
            <X size={24} className="text-white/50" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-black/40">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] rounded-3xl px-5 py-4 text-sm leading-relaxed tracking-wide ${msg.role === 'user' ? 'bg-gold text-black font-bold rounded-br-none shadow-lg shadow-gold/10' : 'bg-white/5 text-white/80 backdrop-blur-md border border-white/10 rounded-bl-none'}`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white/5 text-gold p-4 rounded-3xl rounded-bl-none border border-white/10">
                <Loader2 size={20} className="animate-spin" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-6 border-t border-gold/20 bg-black">
          <div className="relative">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="輸入房產相關問題..."
              className="w-full pl-6 pr-14 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-1 focus:ring-gold text-white text-sm placeholder:text-white/20"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="absolute right-3 top-2.5 p-2 text-gold hover:bg-gold/10 rounded-xl disabled:opacity-30 transition-all active:scale-90"
            >
              <Send size={24} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatAssistant;
