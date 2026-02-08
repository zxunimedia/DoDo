import React from 'react';
import { 
  MessageCircle
} from 'lucide-react';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import BrandCulture from './components/BrandCulture';
import BrandValues from './components/BrandValues'; // 新增这一行
import PainPoints from './components/PainPoints';
import ServiceMatrix from './components/ServiceMatrix';
import Process from './components/Process';
import Cases from './components/Cases';
import MediaCenter from './components/MediaCenter';
import Blog from './components/Blog';
import SocialProof from './components/SocialProof';
import Team from './components/Team';
import BusinessAssistantColumn from './components/BusinessAssistantColumn';
import MarketingRecruitment from './components/MarketingRecruitment'; 
import Recruitment from './components/Recruitment';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ChatAssistant from './components/ChatAssistant';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#020617]">
      <Navbar />
      
      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="manifesto">
          <Manifesto />
        </section>

        <section id="culture">
          <BrandCulture />
        </section>

        {/* 新增：品牌使命/願景/理念三卡片布局 */}
        <section id="brand-values" className="py-32 bg-black">
          <BrandValues />
        </section>

        {/* 只保留一个 pain-points 区块（删除重复的） */}
        <section id="pain-points" className="py-32 bg-white">
          <PainPoints />
        </section>

        <section id="services" className="py-32 bg-[#020617]">
          <ServiceMatrix />
        </section>

        <section id="process" className="py-32 bg-black">
          <Process />
        </section>

        <section id="cases" className="py-32 bg-[#020617]">
          <Cases />
        </section>
       {/* 以下保持你原有代码不变 */}
        <section id="media-center" className="py-32 bg-black overflow-hidden">
          <MediaCenter />
        </section>

        <section id="blog" className="py-32 bg-[#020617] overflow-hidden">
          <Blog />
        </section>

        <section id="social-proof" className="py-32 bg-black overflow-hidden">
          <SocialProof />
        </section>

        <section id="team" className="py-32 bg-[#020617]">
          <Team />
        </section>

        {/* 專屬招聘專欄區塊 */}
        <section id="assistant-hiring">
          <BusinessAssistantColumn />
        </section>

        <section id="marketing-hiring">
          <MarketingRecruitment />
        </section>

        <section id="recruitment" className="py-32 bg-black">
          <Recruitment />
        </section>

        <section id="faq" className="py-32 bg-[#020617]">
          <FAQ />
        </section>
      </main>

      <Footer />
      
      {/* Floating CTA for Mobile */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <a 
          href="https://line.me" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white p-5 rounded-full shadow-[0_10px_30px_rgba(22,163,74,0.4)] transition-all hover:scale-110 flex items-center justify-center group"
          title="加 LINE 諮詢"
        >
          <MessageCircle className="w-8 h-8" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 font-black tracking-widest text-lg">
            加 LINE 諮詢
          </span>
        </a>
      </div>

      <ChatAssistant />
    </div>
  );
};

export default App;
