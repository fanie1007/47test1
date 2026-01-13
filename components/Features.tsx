
import React from 'react';

const features = [
  {
    title: 'GEO 品牌權威健檢',
    desc: '深度分析您的品牌在生成式引擎（如 Perplexity, Gemini）中的被引用頻率與權威性得分。',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'AI 推薦矩陣優化',
    desc: '優化網站結構與語義關聯，確保 AI 在回答相關產業問題時，將您的品牌列為首選權威建議。',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    title: '數位實體建模',
    desc: '透過專屬 AI 內容建模，將零散的資訊轉化為 AI 聽得懂的專業語言，建立不可撼動的地位。',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
];

const Features: React.FC = () => {
  return (
    <section id="solutions" className="py-32 bg-[#fafafa] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-[#c59d5f] font-bold tracking-[0.4em] uppercase text-xs mb-6">Our Methodology</h2>
          <p className="text-4xl lg:text-5xl font-bold text-[#4b4b4b] mb-8">47Brand 如何重塑品牌影響力？</p>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">我們結合了「4 分理性數據」與「7 分感性美學」，讓品牌在 AI 邏輯與人性溫度中取得完美平衡。</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <div key={i} className="group p-12 rounded-[2.5rem] bg-white border border-slate-100 hover:border-[#c59d5f]/30 hover:shadow-2xl hover:shadow-[#c59d5f]/5 transition-all duration-500">
              <div className="w-16 h-16 bg-[#fafafa] rounded-2xl flex items-center justify-center text-[#4b4b4b] group-hover:bg-[#c59d5f] group-hover:text-white transition-all duration-500 mb-10 shadow-sm">
                {f.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#4b4b4b] mb-6">{f.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-8">{f.desc}</p>
              <div className="flex items-center gap-2 text-[#c59d5f] font-bold opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0">
                <span className="text-sm uppercase tracking-widest">Learn More</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
