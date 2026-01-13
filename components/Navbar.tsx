
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onNavigateHome: () => void;
  onNavigateSolutions: () => void;
  onNavigateCases: () => void;
  onNavigateAITools: () => void;
  onNavigateAbout: () => void;
  onOpenAnalysis: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  onNavigateHome, 
  onNavigateSolutions, 
  onNavigateCases, 
  onNavigateAITools, 
  onNavigateAbout,
  onOpenAnalysis 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-[#fafafa] py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo Section - 使用提供的 Logo 圖片 */}
        <div className="flex items-center gap-3 cursor-pointer group" onClick={onNavigateHome}>
          <img 
            src="https://static.wixstatic.com/media/ed8f71_65c92ce413374d949abe29af9e99969d~mv2.png/v1/fill/w_172,h_172,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ed8f71_65c92ce413374d949abe29af9e99969d~mv2.png" 
            alt="47Brand Logo" 
            className="w-12 h-12 object-contain"
          />
          <div className="flex flex-col leading-none">
            <span className="text-xl font-black text-brand-charcoal tracking-tight uppercase">Forty Seven</span>
            <span className="text-[9px] font-bold tracking-[0.4em] text-brand-gold uppercase mt-1">Consultant</span>
          </div>
        </div>
        
        {/* Nav Links */}
        <div className="hidden lg:flex items-center gap-10 font-bold text-brand-charcoal text-[14px]">
          <button onClick={onNavigateHome} className="hover:text-brand-gold transition">首頁</button>
          <button onClick={onNavigateSolutions} className="hover:text-brand-gold transition flex items-center gap-1">解決方案 <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></button>
          <button onClick={onNavigateCases} className="hover:text-brand-gold transition">成功案例</button>
          <button onClick={onNavigateAITools} className="hover:text-brand-gold transition">AI 工具</button>
          <button onClick={onNavigateAbout} className="hover:text-brand-gold transition">關於我們</button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-3 text-xs font-black text-brand-charcoal/60">
            <span className="hover:text-brand-gold cursor-pointer transition">TW</span>
            <span className="text-slate-200">|</span>
            <span className="hover:text-brand-gold cursor-pointer transition">JP</span>
          </div>
          <button 
            onClick={onOpenAnalysis}
            className="bg-brand-gold text-white px-8 py-3 rounded-full text-sm font-black tracking-widest hover:bg-[#b08b53] transition-all shadow-lg shadow-brand-gold/20 active:scale-95 uppercase"
          >
            立即諮詢
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
