
import React, { useState } from 'react';
import MobileAppIcon from './MobileAppIcon';

interface SettingsPanelProps {
  loginCode: string;
  diaryCode: string;
  onSave: (login: string, diary: string) => void;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({ loginCode, diaryCode, onSave }) => {
  const [newLogin, setNewLogin] = useState(loginCode);
  const [newDiary, setNewDiary] = useState(diaryCode);
  const [isSaved, setIsSaved] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(newLogin, newDiary);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  return (
    <div className="w-full max-w-md bg-white/50 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/60 shadow-2xl animate-in fade-in duration-500 overflow-y-auto max-h-[80vh] scrollbar-hide">
      <div className="text-center mb-8">
        {/* 圖標預覽 */}
        <div className="flex justify-center mb-4">
          <MobileAppIcon size={80} />
        </div>
        <h2 className="text-2xl font-bold text-slate-700">偏好設定</h2>
        <p className="text-slate-500 text-xs font-light mt-1">定義你的專屬通關密語</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">修改進入暗號 (目前: {loginCode})</label>
          <input
            type="text"
            value={newLogin}
            onChange={(e) => setNewLogin(e.target.value)}
            className="w-full px-5 py-4 rounded-2xl bg-white/80 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-300 text-slate-700 font-medium text-center"
            placeholder="輸入新的進入暗號..."
          />
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">修改日記暗號 (目前: {diaryCode})</label>
          <input
            type="text"
            value={newDiary}
            onChange={(e) => setNewDiary(e.target.value)}
            className="w-full px-5 py-4 rounded-2xl bg-white/80 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-300 text-slate-700 font-medium text-center"
            placeholder="輸入新的日記暗號..."
          />
        </div>

        <button
          type="submit"
          className={`w-full py-4 rounded-2xl font-bold transition-all shadow-lg active:scale-95 ${
            isSaved ? 'bg-green-500 text-white' : 'bg-slate-800 text-white hover:bg-slate-700'
          }`}
        >
          {isSaved ? '✓ 已成功修改' : '儲存變更'}
        </button>
      </form>

      <div className="mt-8 space-y-4">
        <div className="p-4 bg-white/40 rounded-2xl border border-white/60">
          <p className="text-[10px] text-[#588dad] font-bold mb-2 uppercase tracking-tighter">📱 如何擁有這個圖標？</p>
          <p className="text-[9px] text-slate-500 leading-relaxed">
            點擊瀏覽器的「分享」按鈕，選擇「加入主畫面」，這隻漂亮的 3D 玻璃魚就會出現在你的手機桌面上，隨時為你提供溫暖的擁抱。
          </p>
        </div>
        
        <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100">
          <p className="text-[9px] text-amber-700 font-medium leading-relaxed">
            💡 小提醒：暗號儲存在本機瀏覽器。若清除瀏覽器緩存，暗號將會恢復為初始設定。
          </p>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
