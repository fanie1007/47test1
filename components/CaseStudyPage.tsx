
import React from 'react';
import { CaseStudyData } from '../types';

interface Props {
  data: CaseStudyData;
  onBack: () => void;
}

const CaseStudyPage: React.FC<Props> = ({ data, onBack }) => {
  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-6 pt-12 mb-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-brand-gold transition-colors font-bold tracking-widest uppercase text-xs"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Cases
        </button>
      </div>

      <section className="bg-slate-50 py-24 mb-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2 bg-brand-gold/10 text-brand-gold px-5 py-2 rounded-full text-[10px] font-black mb-8 uppercase tracking-[0.3em] border border-brand-gold/20">
              {data.tag}
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-brand-charcoal mb-8 leading-tight">
              {data.title}
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              {data.subtitle}
            </p>
          </div>
          <div className="rounded-[3rem] overflow-hidden shadow-2xl animate-in fade-in slide-in-from-right duration-700 border-4 border-white">
            <img src={data.image} alt={data.title} className="w-full h-[450px] object-cover" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-24">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-10 flex items-center gap-4">
            <span className="w-1.5 h-8 bg-brand-gold rounded-full"></span>
            面臨挑戰 (Challenges)
          </h2>
          <div className="prose prose-slate max-w-none text-slate-600 text-lg leading-relaxed">
            <p className="mb-8 font-medium">{data.challenge}</p>
            <div className="bg-[#fafafa] border-l-4 border-brand-charcoal p-10 rounded-r-3xl">
              <ul className="space-y-6">
                {data.challengePoints.map((p, i) => (
                  <li key={i} className="flex gap-4 text-brand-charcoal font-medium">
                    <svg className="w-6 h-6 shrink-0 text-red-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-10 flex items-center gap-4">
            <span className="w-1.5 h-8 bg-brand-gold rounded-full"></span>
            {data.solutionTitle}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {data.solutions.map((s, i) => (
              <div key={i} className="p-10 bg-brand-gold/5 rounded-[2.5rem] border border-brand-gold/10 hover:bg-white hover:shadow-2xl hover:shadow-brand-gold/5 transition-all duration-500 group">
                <h4 className="font-bold text-xl text-brand-charcoal mb-5 group-hover:text-brand-gold transition-colors">{s.title}</h4>
                <p className="text-slate-500 leading-relaxed text-sm font-medium">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-brand-charcoal rounded-[3.5rem] p-12 lg:p-20 text-white mb-24 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gold/10 rounded-full blur-[100px] -mr-40 -mt-40"></div>
          <h2 className="text-3xl font-bold mb-20 relative z-10 tracking-widest uppercase text-brand-gold">轉型成果：數據會說話</h2>
          <div className="grid md:grid-cols-3 gap-16 relative z-10">
            {data.results.map((r, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="text-6xl font-black text-brand-gold mb-4">{r.value}</div>
                <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-[10px]">{r.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#fafafa] p-12 lg:p-20 rounded-[3.5rem] mb-24 border border-slate-100 relative group overflow-hidden">
          <svg className="absolute top-8 left-8 w-24 h-24 text-brand-gold/10 group-hover:text-brand-gold/20 transition-colors" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21L14.017 18C14.017 16.899 14.914 16 16.011 16H18.011V14.011H15.011C13.911 14.011 13.011 13.111 13.011 12.011V8.011C13.011 6.911 13.911 6.011 15.011 6.011H19.011C20.111 6.011 21.011 6.911 21.011 8.011V12.011C21.011 14.211 19.211 16.011 17.011 16.011V18.011H19.011C20.111 18.011 21.011 18.911 21.011 20.011V21H14.017ZM3.011 21V18.011C3.011 16.911 3.911 16.011 5.011 16.011H7.011V14.011H4.011C2.911 14.011 2.011 13.111 2.011 12.011V8.011C2.011 6.911 2.911 6.011 4.011 6.011H8.011C9.111 6.011 10.011 6.911 10.011 8.011V12.011C10.011 14.211 8.211 16.011 6.011 16.011V18.011H8.011C9.111 18.011 10.011 18.911 10.011 20.011V21H3.011Z" />
          </svg>
          <div className="relative z-10">
            <p className="text-2xl lg:text-3xl text-brand-charcoal italic leading-relaxed mb-12 pl-6 font-light">
              "{data.clientQuote}"
            </p>
            <div className="flex items-center gap-5 pl-6">
              <div className="w-14 h-14 bg-brand-charcoal rounded-2xl flex items-center justify-center text-brand-gold font-black text-xl shadow-xl">
                47
              </div>
              <div>
                <div className="font-bold text-brand-charcoal text-lg">{data.clientTitle}</div>
                <div className="text-[10px] text-brand-gold font-black uppercase tracking-widest">Authorized Partner</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-brand-gold rounded-[2.5rem] p-12 lg:p-16 text-center text-white shadow-2xl shadow-brand-gold/20">
          <h3 className="text-3xl font-bold mb-8">想了解更多轉型細節？</h3>
          <button className="bg-brand-charcoal text-white px-12 py-5 rounded-2xl font-bold hover:bg-brand-darkCharcoal transition-all shadow-xl active:scale-95 tracking-widest uppercase text-sm">
            獲取專屬產業建議書
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPage;
