
import React from 'react';
import { CaseStudyData } from '../types';

interface Props {
  cases: CaseStudyData[];
  onSelectCase: (id: string) => void;
  onBackHome: () => void;
}

const CaseListPage: React.FC<Props> = ({ cases, onSelectCase, onBackHome }) => {
  return (
    <div className="bg-[#fafafa] min-h-screen pb-32">
      {/* Page Header */}
      <section className="bg-white pt-32 pb-24 border-b border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-[100px] -mr-32 -mt-32"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-brand-gold font-bold tracking-[0.4em] uppercase text-xs mb-6">Portfolio</h2>
          <h1 className="text-4xl lg:text-6xl font-black text-brand-charcoal mb-8">實戰案例</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            看見 47Brand 如何幫助不同產業的企業，在 AI 搜尋新時代重新拿回品牌話語權，建立不可撼動的數位能見度。
          </p>
        </div>
      </section>

      {/* Grid of Cases */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cases.map((c) => (
            <div 
              key={c.id} 
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-brand-gold/10 transition-all duration-700 border border-slate-100 flex flex-col group cursor-pointer"
              onClick={() => onSelectCase(c.id)}
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img src={c.image} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute top-6 left-6 bg-brand-charcoal text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest border border-white/20">
                  {c.tag}
                </div>
              </div>
              <div className="p-10 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-brand-charcoal mb-5 group-hover:text-brand-gold transition-colors line-clamp-2">
                  {c.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1 line-clamp-3 font-medium">
                  {c.subtitle}
                </p>
                <div className="flex items-center justify-between pt-8 border-t border-slate-50">
                   <div className="flex gap-6">
                      {c.results.slice(0, 2).map((r, i) => (
                        <div key={i}>
                          <div className="text-brand-gold font-black text-xl mb-1">{r.value}</div>
                          <div className="text-[10px] text-slate-400 uppercase font-black tracking-widest">{r.label}</div>
                        </div>
                      ))}
                   </div>
                   <div className="w-12 h-12 rounded-2xl bg-[#fafafa] flex items-center justify-center text-brand-charcoal group-hover:bg-brand-gold group-hover:text-white transition-all duration-500 shadow-sm">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-brand-charcoal rounded-[4rem] p-16 lg:p-24 text-center text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[150px] -mr-64 -mt-64 group-hover:bg-brand-gold/20 transition-all duration-1000"></div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-10 relative z-10 leading-tight">也想打造屬於您的 <span className="text-brand-gold italic">AI 成功案例</span>？</h2>
          <p className="text-slate-400 mb-16 max-w-2xl mx-auto text-xl font-medium leading-relaxed relative z-10">
            別讓您的品牌在 AI 答案中缺席。現在就開始免費的 GEO 網站權威健檢，獲取轉型第一手資料。
          </p>
          <button 
            onClick={onBackHome}
            className="bg-brand-gold text-white px-16 py-6 rounded-2xl font-bold text-xl hover:bg-[#b08b53] shadow-2xl shadow-brand-gold/20 transition-all active:scale-95 relative z-10 tracking-widest uppercase"
          >
            立即獲取免費診斷
          </button>
        </div>
      </section>
    </div>
  );
};

export default CaseListPage;
