
import React from 'react';
import { Phone, MapPin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-black text-white pt-32 pb-16">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="bg-black border border-gold/40 text-gold px-3.5 py-1.5 rounded-xl font-black text-2xl tracking-tighter shadow-[0_0_15px_rgba(212,175,55,0.2)]">欣</div>
              <span className="text-white font-bold text-2xl tracking-widest">欣至善有限公司</span>
            </div>
            <h4 className="text-3xl md:text-5xl font-bold mb-10 serif leading-tight">
              準備好開啟您的 <br /> <span className="text-gold-gradient">智慧房產旅程？</span>
            </h4>
            <div className="flex flex-wrap gap-6">
              <a href="https://line.me" className="premium-btn px-12 py-5 rounded-full font-bold text-lg">
                加 LINE 諮詢
              </a>
              <button className="px-12 py-5 rounded-full border border-white/20 font-bold text-lg hover:bg-white/10 transition-all">
                預約實體參訪
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-10">
            <div>
              <h5 className="text-gold font-bold tracking-widest mb-8 text-sm uppercase">Navigation</h5>
              <ul className="space-y-4 text-white/50 font-light">
                <li><a href="#services" className="hover:text-gold transition-colors">智慧服務</a></li>
                <li><a href="#culture" className="hover:text-gold transition-colors">品牌理念</a></li>
                <li><a href="#team" className="hover:text-gold transition-colors">專家團隊</a></li>
                <li><a href="#blog" className="hover:text-gold transition-colors">財商專欄</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-gold font-bold tracking-widest mb-8 text-sm uppercase">Contact</h5>
              <ul className="space-y-4 text-white/50 font-light">
                <li className="flex items-center gap-3"><Phone size={16} /> 06-2674113</li>
                <li className="flex items-start gap-3"><MapPin size={16} className="mt-1" /> 台南市東區大同路二段595號</li>
                <li className="flex items-center gap-3"><Mail size={16} /> service@xinzhishan.com</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40 text-xs tracking-widest uppercase">
          <p>© 2024 XIN ZHI SHAN LIMITED COMPANY. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
