
import React from 'react';

interface SuccessCaseProps {
  onNavigateCaseDetail: (id: string) => void;
  onNavigateCasesList: () => void;
}

const casesPreview = [
  {
    id: 'jiupinyuan',
    title: '九品元食品',
    desc: '從在地名店轉型為 AI 推薦的芝麻權威專家',
    img: 'https://cdn1.cybassets.com/s/files/16310/ckeditor/pictures/content_16f187b7-a7db-4721-8458-36ef9d8145b5.jpg',
    metrics: 'AI 引用 +210%'
  },
  {
    id: 'tungsten',
    title: '台灣鎢鋼',
    desc: 'B2B 製造業如何打入全球 AI 供應鏈地圖',
    img: 'https://static.wixstatic.com/media/ed8f71_1f0786a126bd42c593e2a134b31fa6ff~mv2.jpg/v1/fill/w_1998,h_1144,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/ed8f71_1f0786a126bd42c593e2a134b31fa6ff~mv2.jpg',
    metrics: '國際詢價 +180%'
  },
  {
    id: 'gongying',
    title: '共盈系統家居',
    desc: '語義化美學，讓 AI 把風格推薦給準屋主',
    img: 'https://static.wixstatic.com/media/ed8f71_05eae282884b404592f8a718d86d579d~mv2.jpg/v1/fill/w_1200,h_916,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ed8f71_05eae282884b404592f8a718d86d579d~mv2.jpg',
    metrics: '風格精準獲客 +150%'
  },
  {
    id: 'yida',
    title: '億達工程',
    desc: '建立工程實體權威，在 AI 摘要中識別專業',
    img: 'https://static.wixstatic.com/media/ed8f71_9b054996d2bc48e09a2e59434ea7d0dd~mv2.jpg/v1/fill/w_1520,h_1582,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/ed8f71_9b054996d2bc48e09a2e59434ea7d0dd~mv2.jpg',
    metrics: '產業權威度 Top 3'
  }
];

const SuccessCase: React.FC<SuccessCaseProps> = ({ onNavigateCaseDetail, onNavigateCasesList }) => {
  return (
    <section id="cases" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="text-left">
            <h2 className="text-brand-gold font-bold tracking-[0.4em] uppercase text-xs mb-4">Case Studies</h2>
            <p className="text-4xl lg:text-5xl font-bold text-brand-charcoal">實戰案例：47 如何建立數位權威</p>
          </div>
          <button 
            onClick={onNavigateCasesList}
            className="group flex items-center gap-3 text-brand-charcoal font-bold hover:text-brand-gold transition-all"
          >
            探索更多案例
            <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {casesPreview.map((c) => (
            <div 
              key={c.id} 
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-brand-gold/10 transition-all duration-700 border border-slate-50 flex flex-col cursor-pointer"
              onClick={() => onNavigateCaseDetail(c.id)}
            >
              <div className="h-56 overflow-hidden relative">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur shadow-xl px-4 py-2 rounded-full text-xs font-black text-brand-gold">
                  {c.metrics}
                </div>
              </div>
              <div className="p-10 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-brand-charcoal mb-4 group-hover:text-brand-gold transition-colors">{c.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1">{c.desc}</p>
                <div className="flex items-center gap-2 text-brand-charcoal font-bold text-xs uppercase tracking-widest opacity-60 group-hover:opacity-100 group-hover:text-brand-gold transition-all">
                  Read Case Study
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Banner Block */}
        <div className="mt-24 bg-brand-charcoal rounded-[3.5rem] p-16 lg:p-24 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-[120px] -mr-32 -mt-32"></div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-8 leading-tight">不只是 SEO，而是打造 <span className="text-brand-gold italic">AI 時代的「數位實體」</span></h3>
              <p className="text-slate-400 mb-12 text-lg leading-relaxed max-w-lg">
                在 AI 回答攔截 70% 搜尋流量的今天，您的品牌如果不具備語義權威，就會在數位世界中沈默。我們為您提供全方位的解決方案。
              </p>
              <button 
                onClick={onNavigateCasesList}
                className="bg-brand-gold text-white px-12 py-5 rounded-full font-bold hover:bg-[#b08b53] transition-all shadow-xl shadow-brand-gold/10"
              >
                預約一對一深度拆解
              </button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: '品牌關鍵字', value: '1,000+' },
                { label: 'AI 答案引用率', value: 'Top 3' },
                { label: 'CPA 成本降低', value: '45%' },
                { label: '24/7 聲量監控', value: 'Live' }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 hover:border-brand-gold/50 transition-all group">
                  <div className="text-brand-gold font-black text-4xl mb-2 group-hover:scale-110 transition-transform origin-left">{item.value}</div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold tracking-[0.2em]">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessCase;
