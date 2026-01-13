
import React from 'react';

const AboutPage: React.FC<{ onNavigateHome: () => void }> = ({ onNavigateHome }) => {
  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Professional Brand Showcase Banner - Clear & Original */}
      <section className="relative w-full h-[60vh] min-h-[550px] overflow-hidden bg-slate-100 flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://static.wixstatic.com/media/ed8f71_9472879bac124a399452335fecc738e0~mv2.jpg/v1/fit/w_2500,h_1330,al_c/ed8f71_9472879bac124a399452335fecc738e0~mv2.jpg" 
            alt="Brand Mockup Background" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-2xl animate-in fade-in slide-in-from-left duration-1000">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-white"></div>
              <span className="text-white font-bold tracking-[0.4em] text-xs uppercase drop-shadow-md">Since 2024 / Visionary</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-[1.3] drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]">
              讓 AI 成為您的<br />
              <span className="text-brand-gold">最強業務</span>
            </h1>
            <p className="text-xl text-white leading-relaxed max-w-lg mb-10 font-bold drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]">
              在 47Brand，我們專注於將中小企業的實力轉化為 AI 時代的權威標準，讓精準客戶在搜尋的第一時間主動找到你。
            </p>
            <div className="flex gap-4">
               <div className="bg-[#c59d5f] text-white px-8 py-4 rounded-xl font-bold tracking-widest text-sm shadow-xl shadow-brand-gold/20 cursor-pointer">預約諮詢</div>
               <div className="bg-white/20 backdrop-blur border border-white/30 text-white px-8 py-4 rounded-xl font-bold tracking-widest text-sm cursor-pointer">關於 47</div>
            </div>
          </div>
        </div>
      </section>

      {/* Logic & Emotion Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-3xl">
                <img 
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800" 
                  alt="Business Strategy" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-slate-50 border border-slate-100 p-10 rounded-full flex flex-col items-center justify-center text-center shadow-2xl">
                <span className="text-5xl font-black text-[#c59d5f] mb-2">47</span>
                <span className="text-[10px] font-bold tracking-[0.3em] text-[#4b4b4b] uppercase">Logic & Soul</span>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="text-3xl lg:text-5xl font-bold text-[#4b4b4b] mb-8 leading-tight">
                  為什麼是 <span className="text-[#c59d5f]">47</span>？
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  成功的品牌是「數據理性」與「美學感性」的完美加總。我們取名為 47, 代表著建立品牌不可或缺的黃金比例：
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-8 group">
                  <div className="text-6xl font-black text-[#c59d5f]/20 group-hover:text-[#c59d5f] transition-colors duration-500">04</div>
                  <div>
                    <h4 className="text-xl font-bold text-[#4b4b4b] mb-3">4 分的理性數據分析</h4>
                    <p className="text-slate-500 leading-relaxed text-sm">基於 AI 語義邏輯與 GEO 技術, 精準切入市場缺口, 確保品牌在數位引擎中具備「被搜尋」的硬實力。</p>
                  </div>
                </div>

                <div className="flex gap-8 group">
                  <div className="text-6xl font-black text-[#c59d5f]/20 group-hover:text-[#c59d5f] transition-colors duration-500">07</div>
                  <div>
                    <h4 className="text-xl font-bold text-[#4b4b4b] mb-3">7 分的品牌感性美學</h4>
                    <p className="text-slate-500 leading-relaxed text-sm">透過視覺、故事與共鳴, 賦予品牌獨特的靈魂與溫度, 讓客戶在第一眼看見時就產生信任與歸屬感。</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-100">
                <blockquote className="text-xl italic text-slate-400 font-light border-l-4 border-[#c59d5f] pl-6 py-2">
                  「在這個 AI 取代平庸的時代，唯有獨特的品牌人格能長存。」
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values / Stats */}
      <section className="py-24 bg-[#4b4b4b] text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 text-center">
          <div>
            <div className="text-4xl font-black text-[#c59d5f] mb-2">100+</div>
            <div className="text-xs tracking-widest uppercase font-bold opacity-60">企業成功轉型</div>
          </div>
          <div>
            <div className="text-4xl font-black text-[#c59d5f] mb-2">24/7</div>
            <div className="text-xs tracking-widest uppercase font-bold opacity-60">AI 聲量監控</div>
          </div>
          <div>
            <div className="text-4xl font-black text-[#c59d5f] mb-2">Top 3</div>
            <div className="text-xs tracking-widest uppercase font-bold opacity-60">產業能見度排行</div>
          </div>
          <div>
            <div className="text-4xl font-black text-[#c59d5f] mb-2">47%</div>
            <div className="text-xs tracking-widest uppercase font-bold opacity-60">平均獲客成本降低</div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <img 
            src="https://static.wixstatic.com/media/ed8f71_65c92ce413374d949abe29af9e99969d~mv2.png/v1/fill/w_172,h_172,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ed8f71_65c92ce413374d949abe29af9e99969d~mv2.png" 
            alt="Logo Icon" 
            className="w-16 h-16 mx-auto mb-10 grayscale hover:grayscale-0 transition-all duration-500"
          />
          <h2 className="text-3xl font-bold text-[#4b4b4b] mb-12">準備好與 47Brand 一起開啟您的品牌新頁嗎？</h2>
          <button 
            onClick={onNavigateHome}
            className="bg-[#c59d5f] text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-[#b08b53] transition-all shadow-2xl active:scale-95"
          >
            返回首頁，預約諮詢
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
