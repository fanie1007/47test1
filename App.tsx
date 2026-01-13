
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import SuccessCase from './components/SuccessCase';
import CaseStudyPage from './components/CaseStudyPage';
import CaseListPage from './components/CaseListPage';
import AIToolsPage from './components/AIToolsPage';
import AboutPage from './components/AboutPage';
import AnalysisModal from './components/AnalysisModal';
import { CaseStudyData } from './types';

// Centralized case study data
export const casesData: Record<string, CaseStudyData> = {
  jiupinyuan: {
    id: 'jiupinyuan',
    tag: '食品零售數位轉型',
    title: '九品元食品：從傳統老店到 AI 推薦的「頂級芝麻專家」',
    subtitle: '透過 47Brand 的 GEO 佈局，讓九品元不再只是在地口碑，而是 AI 搜尋引擎在推薦「健康伴手禮」時的首選權威。',
    image: 'https://cdn1.cybassets.com/s/files/16310/ckeditor/pictures/content_16f187b7-a7db-4721-8458-36ef9d8145b5.jpg',
    challenge: '九品元食品以頂級黑芝麻產品聞名，但在進入 AI 搜尋時代後，面臨了嚴峻挑戰：',
    challengePoints: [
      '使用者搜尋「健康點心推薦」時， AI 傾向推薦連鎖品牌，九品元的專業深度無法被 AI 識別。',
      '過往依賴節慶導向的廣告流量，缺乏長效的「AI 答案權威」。',
      '品牌官網內容過於簡略，無法提供足夠的語義關聯。'
    ],
    solutionTitle: '解決方案：47Brand AI & GEO 策略矩陣',
    solutions: [
      { title: '語義化內容結構 (GEO)', desc: '重新設計官網資訊架構，針對「黑芝麻營養、產地、工藝」建立語義標記。' },
      { title: 'AI 推薦引擎權威佈局', desc: '利用 AI 內容矩陣技術，在第三方平台發佈深度評測，為 AI 建立充足的引文連結。' }
    ],
    results: [
      { value: '210%', label: 'AI 搜尋引用增長' },
      { value: 'Top 1', label: '芝麻禮盒推薦首位' },
      { value: '+45%', label: '非節慶官網自然流量' }
    ],
    insight: '老品牌在 AI 時代最大的資產是故事，透過 GEO 優化，我們把職人精神轉化為 AI 聽得懂的語言。',
    clientTitle: '九品元食品 創辦人',
    clientQuote: '讓 AI 學會講述我們的故事。'
  },
  tungsten: {
    id: 'tungsten',
    tag: '工業 B2B 製造',
    title: '台灣鎢鋼：AI 採購時代的全球供應鏈權威',
    subtitle: '當全球工程師都在問 AI 「哪裡有最高品質的鎢鋼零件？」時，台灣鎢鋼成為了唯一的精準答案。',
    image: 'https://static.wixstatic.com/media/ed8f71_1f0786a126bd42c593e2a134b31fa6ff~mv2.jpg/v1/fill/w_1998,h_1144,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/ed8f71_1f0786a126bd42c593e2a134b31fa6ff~mv2.jpg',
    challenge: '傳統 B2B 依賴展覽與老客戶，但在數位採購新紀元，面臨資訊斷層：',
    challengePoints: [
      '國外採購商使用 Perplexity 搜尋技術規格時，搜尋不到台灣鎢鋼的專業數據。',
      '專業關鍵字競爭激烈，傳統 SEO 無法在 AI 生成的回答中取得引用。',
      '技術手冊缺乏結構化數據，AI 模型無法準確解析其材質優勢。'
    ],
    solutionTitle: '解決方案：實體引擎優化',
    solutions: [
      { title: '結構化材質數據庫', desc: '將數百種鎢鋼規格轉化為 Schema 結構化數據，讓 AI 模型能「閱讀」並比較產品優勢。' },
      { title: '國際專業引文佈局', desc: '在全球技術論壇與學術平台上佈局專業評論，強化 AI 對其「權威性」的判斷。' }
    ],
    results: [
      { value: '180%', label: '國際詢價單量增長' },
      { value: 'Top 3', label: 'AI 全球供應商推薦' },
      { value: '85%', label: '詢價轉化率提升' }
    ],
    insight: 'B2B 的未來不在網頁，而在 AI 的邏輯判斷裡。數據化專業，是進入全球市場的通行證。',
    clientTitle: '台灣鎢鋼 總經理',
    clientQuote: 'AI 幫我們把專業傳遞到了以前到不了的市場。'
  }
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'cases' | 'case-detail' | 'tools' | 'about'>('home');
  const [selectedCaseId, setSelectedCaseId] = useState<string | null>(null);
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, selectedCaseId]);

  const navigateToCase = (id: string) => {
    setSelectedCaseId(id);
    setCurrentPage('case-detail');
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Navbar 
        onNavigateHome={() => setCurrentPage('home')}
        onNavigateSolutions={() => {
          setCurrentPage('home');
          setTimeout(() => {
            document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }}
        onNavigateCases={() => setCurrentPage('cases')}
        onNavigateAITools={() => setCurrentPage('tools')}
        onNavigateAbout={() => setCurrentPage('about')}
        onOpenAnalysis={() => setIsConsultModalOpen(true)}
      />

      <main>
        {currentPage === 'home' && (
          <>
            <Hero onStartAnalysis={() => setIsConsultModalOpen(true)} />
            <Features />
            <SuccessCase 
              onNavigateCaseDetail={navigateToCase} 
              onNavigateCasesList={() => setCurrentPage('cases')} 
            />
          </>
        )}

        {currentPage === 'cases' && (
          <CaseListPage 
            cases={Object.values(casesData)} 
            onSelectCase={navigateToCase}
            onBackHome={() => setCurrentPage('home')}
          />
        )}

        {currentPage === 'case-detail' && selectedCaseId && casesData[selectedCaseId] && (
          <CaseStudyPage 
            data={casesData[selectedCaseId]} 
            onBack={() => setCurrentPage('cases')} 
          />
        )}

        {currentPage === 'tools' && (
          <AIToolsPage onBackHome={() => setCurrentPage('home')} />
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigateHome={() => setCurrentPage('home')} />
        )}
      </main>

      <AnalysisModal 
        isOpen={isConsultModalOpen} 
        onClose={() => setIsConsultModalOpen(false)} 
      />
    </div>
  );
};

export default App;
