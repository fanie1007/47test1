
import React from 'react';

const Hero: React.FC<{ onStartAnalysis: () => void }> = ({ onStartAnalysis }) => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-[#fafafa]">
      {/* Background Image Container - Positioned and shifted to the right */}
      <div className="absolute top-0 right-0 w-full lg:w-[75%] h-full z-0">
        <img 
          src="https://static.wixstatic.com/media/ed8f71_9472879bac124a399452335fecc738e0~mv2.jpg/v1/fit/w_2500,h_1330,al_c/ed8f71_9472879bac124a399452335fecc738e0~mv2.jpg" 
          alt="47Brand AI Technology Interface" 
          className="w-full h-full object-cover object-right"
        />
        {/* Subtle transparent mask for smaller screens */}
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#fafafa] via-[#fafafa]/40 to-transparent lg:hidden"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-3xl pt-32 pb-16 animate-in fade-in slide-in-from-left duration-1000">
          
          <h1 className="text-4xl lg:text-[76px] font-black text-brand-charcoal mb-10 leading-[1.2] tracking-tight">
            讓 AI 成為您的<br />
            最強業務：打造<br />
            <span className="text-brand-gold">不可取代</span>的吸引力
          </h1>
          
          <p className="text-lg lg:text-xl text-slate-500 leading-relaxed max-w-xl mb-14 font-medium">
            47Brand 專為中小企業與個人品牌量身定制。我們不只做行銷，更透過 AI 語義邏輯與極致美學，讓您的價值在生成式搜尋時代被優先推薦，實現「客戶主動敲門」的品牌變現力。
          </p>
          
          <div className="flex flex-wrap gap-5">
            <button 
              onClick={onStartAnalysis}
              className="bg-brand-gold text-white px-12 py-5 rounded-xl font-black text-base hover:bg-brand-lightGold transition-all shadow-2xl shadow-brand-gold/20 active:scale-95 tracking-widest uppercase"
            >
              預約專業品牌建議
            </button>
            <button 
              className="bg-white border-2 border-brand-charcoal/10 text-brand-charcoal px-12 py-5 rounded-xl font-black text-base hover:bg-slate-50 transition-all shadow-lg active:scale-95 tracking-widest uppercase"
            >
              查看品牌美學案例
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
