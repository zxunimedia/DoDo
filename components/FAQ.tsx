
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "房多多智慧平台如何進行不動產估價？",
      answer: "我們結合實價登錄 3.0 數據、區域發展計畫大數據與顧問實地勘查，提供比傳統房仲更精確的「預測價格」，幫助您掌握未來三年的價值趨勢。"
    },
    {
      question: "諮詢需要付費嗎？",
      answer: "初次的「資產健康檢查」是完全免費的。若後續需要深度的「法律稅務專案規劃」或「專屬代尋服務」，我們將依專案複雜度報價，所有費用透明且於合約明訂。"
    },
    {
      question: "你們的服務區域涵蓋全台嗎？",
      answer: "目前我們在雙北、桃園、新竹、台中與高雄設有實體諮詢據點，線上服務則涵蓋全台灣地區。"
    },
    {
      question: "如果已經有房貸，還能透過你們優化嗎？",
      answer: "可以的。我們有專門的債務重組與房貸搬家諮詢，協助您評估是否有更低利的銀行轉貸機會，或透過二胎增貸釋放資產流動性。"
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-red-800 font-bold tracking-widest uppercase mb-4">常見問題</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900">您想知道的，都在這裡</h3>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
            <button 
              className="w-full flex items-center justify-between p-6 text-left hover:bg-red-50/30 transition-colors"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-bold text-lg text-slate-900">{faq.question}</span>
              {openIndex === index ? <Minus className="text-red-700" /> : <Plus className="text-slate-400" />}
            </button>
            
            {openIndex === index && (
              <div className="px-6 pb-6 text-slate-600 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
