
import React, { useState } from 'react';

interface ModuleProps {
  title: string;
  items?: string[];
  isOpenDefault?: boolean;
}

const ServiceModule: React.FC<ModuleProps> = ({ title, items, isOpenDefault = false }) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  return (
    <div className="border-b border-slate-100 py-8">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left group"
      >
        <h3 className={`text-xl lg:text-2xl font-bold transition-all duration-500 ${isOpen ? 'text-[#c59d5f]' : 'text-[#4b4b4b] group-hover:text-[#c59d5f]'}`}>
          {title}
        </h3>
        <span className={`text-3xl font-light transition-transform duration-500 ${isOpen ? 'rotate-180 text-[#c59d5f]' : 'text-slate-300'}`}>
          {isOpen ? '−' : '+'}
        </span>
      </button>
      {isOpen && items && (
        <ul className="mt-8 space-y-5 pl-4 animate-in fade-in slide-in-from-top duration-500">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-4 text-slate-500 font-bold text-sm tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c59d5f] mt-1.5 shrink-0"></span>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const AIToolsPage: React.FC<{ onBackHome: () => void }> = ({ onBackHome }) => {
  return (
    <div className="bg-white min-h-screen pb-40">
      {/* Header Section */}
      <section className="bg-[#fafafa] pt-32 pb-24 relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#c59d5f]/5 rounded-full blur-[100px]"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="flex justify-center items-center gap-6 mb-10">
            <div className="h-px bg-[#c59d5f]/30 w-16 lg:w-40"></div>
            <h2 className="text-xs font-black text-[#c59d5f] tracking-[0.6em] uppercase">
              Brand AI Solutions
            </h2>
            <div className="h-px bg-[#c59d5f]/30 w-16 lg:w-40"></div>
          </div>
          <h1 className="text-4xl lg:text-6xl font-black text-[#4b4b4b] mb-10 leading-tight">
            AI 驅動的品牌成長模組
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-xl font-medium leading-relaxed">
            透過 47Brand 的技術架構，將零散的行銷工作轉化為自動化的品牌權威輸出，讓您的影響力 24 小時不斷線。
          </p>
        </div>
      </section>

      {/* Modules Content */}
      <div className="max-w-7xl mx-auto px-6 mt-24">
        <div className="grid lg:grid-cols-2 gap-x-24 gap-y-6">
          {/* Column 1 */}
          <div className="space-y-2">
            <ServiceModule 
              title="AI Agent 自動化工作流" 
              isOpenDefault={true}
              items={[
                "智慧客服語義回答庫建置",
                "潛在客戶開發自動化追蹤系統",
                "AI 銷售顧問：24/7 在線引導成交",
                "自定義業務邏輯 Agent 串接與佈署"
              ]}
            />
            <ServiceModule 
              title="產業知識與內容產製" 
              isOpenDefault={true}
              items={[
                "產業知識庫自動化整理與建模",
                "AI 驅動專業部落格貼文產製佈局",
                "多語系語義優化內容轉譯",
                "權威性白皮書內容自動化生成建議"
              ]}
            />
            <ServiceModule 
              title="核心 GEO 技術診斷" 
              isOpenDefault={false}
              items={[
                "AI Search 索引狀態全方位診斷",
                "Schema 語義標記結構優化",
                "搜尋引擎友善度 (On-Page) 強化"
              ]}
            />
          </div>

          {/* Column 2 */}
          <div className="space-y-2">
             <ServiceModule 
              title="大數據搜集與市場分析" 
              isOpenDefault={true}
              items={[
                "全網競品聲量與排名監控",
                "產業熱門趨勢與語義關鍵字分析",
                "搜尋引擎演算法異動即時預警",
                "大數據驅動的品牌定位建議報告"
              ]}
            />
            <ServiceModule 
              title="全渠道社群行銷佈局" 
              isOpenDefault={true}
              items={[
                "AI 社群媒體貼文自動化排程與優化",
                "YouTube 影音排名優化 (VSEO)",
                "在地搜尋 GMB (我的商家) 聲量維護",
                "全網語境權威路徑佈局策略"
              ]}
            />
            <ServiceModule 
              title="47 專屬顧問與教育訓練" 
              isOpenDefault={true}
              items={[
                "策略顧問 1對1 定期線上深度諮詢",
                "企業內部 AI 轉型實務應用課程",
                "每月品牌權威能見度成長報告"
              ]}
            />
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="max-w-5xl mx-auto px-6 mt-40">
        <div className="bg-[#4b4b4b] rounded-[3rem] p-16 lg:p-24 text-center text-white relative overflow-hidden group shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-[#c59d5f]/10 to-[#4b4b4b] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          <h3 className="text-3xl lg:text-4xl font-bold mb-8 relative z-10 leading-tight">準備好導入您的 <span className="text-[#c59d5f] italic">AI Agent</span> 嗎？</h3>
          <p className="text-slate-400 mb-16 text-lg font-medium relative z-10">與 47Brand 顧問聯繫，為您的企業量身打造專屬的 AI 自動化增長模組。</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
             <button className="bg-[#c59d5f] hover:bg-[#b08b53] text-white px-12 py-5 rounded-2xl font-bold transition-all shadow-xl active:scale-95 tracking-widest uppercase text-sm">
                索取解決方案詳情
             </button>
             <button onClick={onBackHome} className="bg-white/5 hover:bg-white/10 text-white px-12 py-5 rounded-2xl font-bold transition-all border border-white/10 active:scale-95 tracking-widest uppercase text-sm">
                返回首頁
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIToolsPage;
