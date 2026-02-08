import React from 'react';
import { 
  MessageCircle
} from 'lucide-react';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import BrandCulture from './components/BrandCulture';
import BrandValues from './components/BrandValues'; // 品牌三卡片
import PainPoints from './components/PainPoints';
import ServiceMatrix from './components/ServiceMatrix';
import Process from './components/Process';
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
        {/* 1. 首屏英雄区 */}
        <section id="hero">
          <Hero />
        </section>

        {/* 2. 品牌宣言 */}
        <section id="manifesto">
          <Manifesto />
        </section>

        {/* 3. 品牌文化 */}
        <section id="culture">
          <BrandCulture />
        </section>

        {/* 4. 品牌使命/願景/理念（新增三卡片） */}
        <section id="brand-values" className="py-32 bg-black">
          <BrandValues />
        </section>

        {/* 5. 为何选择欣至善（无重复） */}
        <section id="pain-points" className="py-32 bg-white">
          <PainPoints />
        </section>

        {/* 6. 服务矩阵 */}
        <section id="services" className="py-32 bg-[#020617]">
          <ServiceMatrix />
        </section>

        {/* 7. 服务流程（仅保留一个，删除重复） */}
        <section id="process" className="py-32 bg-black">
          <Process />
        </section>

        {/* 8. 媒体中心 */}
        <section id="media-center" className="py-32 bg-black overflow-hidden">
          <MediaCenter />
        </section>

        {/* 9. 博客/资讯 */}
        <section id="blog" className="py-32 bg-[#020617] overflow-hidden">
          <Blog />
        </section>

        {/* 10. 客户证言 */}
        <section id="social-proof" className="py-32 bg-black overflow-hidden">
          <SocialProof />
        </section>

        {/* 11. 团队介绍 */}
        <section id="team" className="py-32 bg-[#020617]">
          <Team />
        </section>

        {/* 12. 招聘专栏 */}
        <section id="assistant-hiring">
          <BusinessAssistantColumn />
        </section>

        <section id="marketing-hiring">
          <MarketingRecruitment />
        </section>

        <section id="recruitment" className="py-32 bg-black">
          <Recruitment />
        </section>

        {/* 13. 常见问题 */}
        <section id="faq" className="py-32 bg-[#020617]">
          <FAQ />
        </section>
      </main>

      <Footer />
      
      {/* 移动端悬浮LINE按钮 */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <a 
          href="https://line.me/R/ti/p/@09341663236"  {/* 修正为正确的LINE链接 */}
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
