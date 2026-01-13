
import React, { useState } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const AnalysisModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'loading' | 'success'>('form');
  const [formData, setFormData] = useState({ name: '', industry: '', email: '', goals: '' });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('loading');
    
    // 完全移除 API 調用，改為純前端模擬邏輯
    setTimeout(() => {
      setStep('success');
    }, 1500);
  };

  const resetAndClose = () => {
    onClose();
    setTimeout(() => {
      setStep('form');
      setFormData({ name: '', industry: '', email: '', goals: '' });
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-[#4b4b4b]/80 backdrop-blur-md" onClick={resetAndClose}></div>
      <div className="relative bg-white w-full max-w-xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300 border border-[#c59d5f]/10">
        <button onClick={resetAndClose} className="absolute top-8 right-8 text-slate-400 hover:text-[#4b4b4b] transition-colors z-10">
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {step === 'form' && (
          <div className="p-10 lg:p-14">
            <div className="mb-10">
              <h2 className="text-3xl font-black text-[#4b4b4b] mb-3">專家品牌策略諮詢</h2>
              <p className="text-slate-500 font-medium leading-relaxed">預約 47Brand 專業顧問，為您的企業量身打造在 AI 時代的不可取代性。</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">聯絡姓名 / 職稱</label>
                <input 
                  required
                  className="w-full px-6 py-4 bg-[#fafafa] border border-slate-100 rounded-2xl focus:ring-2 focus:ring-[#c59d5f] outline-none transition-all placeholder:text-slate-300"
                  placeholder="您的尊姓大名"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">聯絡電子郵件</label>
                <input 
                  required
                  type="email"
                  className="w-full px-6 py-4 bg-[#fafafa] border border-slate-100 rounded-2xl focus:ring-2 focus:ring-[#c59d5f] outline-none transition-all placeholder:text-slate-300"
                  placeholder="contact@company.com"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">所屬產業與目標</label>
                <textarea 
                  required
                  rows={3}
                  className="w-full px-6 py-4 bg-[#fafafa] border border-slate-100 rounded-2xl focus:ring-2 focus:ring-[#c59d5f] outline-none transition-all placeholder:text-slate-300 resize-none"
                  placeholder="請簡單描述您的需求或目前遇到的轉型挑戰..."
                  value={formData.goals}
                  onChange={e => setFormData({...formData, goals: e.target.value})}
                />
              </div>
              <button className="w-full bg-[#4b4b4b] text-white py-5 rounded-2xl font-bold text-lg hover:bg-[#c59d5f] shadow-xl shadow-[#4b4b4b]/10 transition-all transform active:scale-[0.98] mt-4">
                送出預約申請
              </button>
              <p className="text-center text-[10px] text-slate-400 font-medium">您的資料將受到嚴格保密，僅用於諮詢聯繫用途。</p>
            </form>
          </div>
        )}

        {step === 'loading' && (
          <div className="p-24 text-center">
            <div className="relative w-24 h-24 mx-auto mb-10">
              <div className="absolute inset-0 border-4 border-slate-50 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-[#c59d5f] border-t-transparent rounded-full animate-spin"></div>
            </div>
            <h3 className="text-2xl font-bold text-[#4b4b4b] mb-4">正在傳送您的資訊...</h3>
            <p className="text-slate-400 max-w-sm mx-auto leading-relaxed">請稍候，我們的系統正在處理您的諮詢請求。</p>
          </div>
        )}

        {step === 'success' && (
          <div className="p-16 text-center animate-in fade-in slide-in-from-bottom duration-500">
            <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-10 border border-green-100">
              <svg className="w-12 h-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-3xl font-black text-[#4b4b4b] mb-6">預約成功</h3>
            <p className="text-lg text-slate-500 mb-12 leading-relaxed max-w-sm mx-auto">
              感謝您對 47Brand 的信任。專屬品牌顧問將在 <span className="text-[#c59d5f] font-bold">24 小時內</span> 透過電子郵件與您聯繫，開啟您的轉型之路。
            </p>
            <button 
              onClick={resetAndClose}
              className="bg-[#c59d5f] text-white px-12 py-4 rounded-2xl font-bold hover:bg-[#b08b53] transition-all shadow-xl shadow-brand-gold/20"
            >
              關閉視窗
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnalysisModal;
