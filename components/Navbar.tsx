
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '智慧服務', href: '#services' },
    { name: '品牌精神', href: '#culture' },
    { name: '媒體報導', href: '#media-center' },
    { name: '專家團隊', href: '#team' },
    { name: '人才招募', href: '#assistant-hiring' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-black/80 backdrop-blur-2xl border-b border-gold/20 py-4 shadow-2xl' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-10 flex justify-between items-center">
        <div className="flex items-center gap-4 cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="relative transform group-hover:scale-110 transition-transform duration-500">
            {/* 改為黑底金邊設計，解決黑框視覺問題 */}
            <div className="bg-black border border-gold/50 text-gold px-3.5 py-1.5 rounded-xl font-black text-2xl tracking-tighter shadow-[0_0_15px_rgba(212,175,55,0.3)] group-hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] group-hover:border-gold transition-all">
              欣
            </div>
            <div className="absolute inset-0 bg-gold/30 blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <span className="text-white font-bold text-xl tracking-widest hidden sm:block">欣至善有限公司</span>
        </div>

        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="nav-link text-white/70 hover:text-gold font-medium transition-all text-sm tracking-[0.2em] uppercase"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#footer"
            className="premium-btn px-10 py-3.5 rounded-full font-bold text-sm shadow-lg"
          >
            立即預約
          </a>
        </div>

        <button className="lg:hidden p-2 text-white hover:text-gold transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-0 left-0 w-full h-screen bg-black/98 backdrop-blur-3xl p-10 flex flex-col items-center justify-center gap-12 text-center animate-in fade-in zoom-in duration-500">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-10 right-10 text-white hover:rotate-90 transition-transform"><X size={32} /></button>
          {navLinks.map((link, i) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-3xl font-bold text-white/60 hover:text-gold transition-all tracking-[0.3em] hover:scale-110"
              style={{ transitionDelay: `${i * 100}ms` }}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="premium-btn px-16 py-6 rounded-full text-2xl font-bold">立即諮詢</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
