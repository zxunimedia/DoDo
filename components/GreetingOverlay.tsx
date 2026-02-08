
import React, { useState, useEffect, useMemo } from 'react';

interface GreetingOverlayProps {
  onClose: () => void;
}

type StyleType = 'poetic' | 'silly' | 'philosophical';

const GREETINGS: Record<string, Record<StyleType, string[]>> = {
  morning: {
    poetic: ["露水吻過葉尖，新的一天是宇宙寄給你的情書。", "晨光熹微，你在夢與醒的邊界，撿到了一束溫柔。", "風在早起吹奏，想聽聽你靈魂甦醒的聲音。"],
    silly: ["鬧鐘響了，但我跟床還在熱戀期，真的不想分手。", "起床這種事，就像拔掉正在充電的手機——心很痛。", "早起是為了生活，不起床是為了夢想。"],
    philosophical: ["今天的你，是未來的你所期待的那個起點。", "世界還在半睡半醒，這是你超越自己的最好時機。", "光亮並非來自太陽，而是來自你對生活的熱望。"]
  },
  afternoon: {
    poetic: ["陽光透過玻璃，將影子拉成了漫長的思念。", "午後的風，正試著翻開你心底那一頁未讀的溫柔。", "世界被曬得懶洋洋的，適合把煩惱也拿出來晾乾。"],
    silly: ["午餐吃了什麼不重要，重要的是午睡能睡多久。", "我的靈魂在下午兩點準時出竅，去尋找冰美式了。", "如果努力有用的話，那還要午休做什麼？"],
    philosophical: ["停下腳步並非虛度，而是為了聽見心跳的頻率。", "午後的靜謐，是給忙碌靈魂的一段留白。", "有些答案不在奔跑中，而在這杯微涼的茶裡。"]
  },
  evening: {
    poetic: ["晚風剪裁了晚霞，為疲憊的世界披上輕紗。", "月色是宇宙寄來的慰藉，安撫每一個不安的靈魂。", "星星在夜空眨眼，是在對今天的你說：辛苦了。"],
    silly: ["太陽下班了，為什麼我還在處理別人的情緒？", "體重不會因為你早睡而減輕，但心情會。", "晚飯後我唯一想運動的部位，就是我的眼皮。"],
    philosophical: ["白晝的喧囂已遠去，現在只需專注於與自己對話。", "黑夜不是光的終點，而是思考的深度。", "結束是為了更好的開始，晚安，親愛的自己。"]
  },
  lateNight: {
    poetic: ["萬籟俱寂，靈魂在此刻才擁有了真正的自由。", "夢境是另一種現實，在那裡你可以飛向任何星辰。", "深夜的雨聲，是大地在對寂寞的人竊竊私語。"],
    silly: ["熬夜不是因為不累，是覺得這段時間才真的屬於我。", "我不是在熬夜，我是在守護這個世界的和平（其實是在刷手機）。", "深夜的靈感，通常在早上起來後發現都是廢話。"],
    philosophical: ["黑暗中，最微弱的光亮也顯得格外珍貴。", "寂寞是靈魂的排毒，讓你學會與孤獨共處。", "在全世界都入睡時，你的夢正在發光。"]
  }
};

const GreetingOverlay: React.FC<GreetingOverlayProps> = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  const greeting = useMemo(() => {
    const hour = new Date().getHours();
    let timeKey = 'morning';
    if (hour >= 11 && hour < 17) timeKey = 'afternoon';
    else if (hour >= 17 && hour < 23) timeKey = 'evening';
    else if (hour >= 23 || hour < 5) timeKey = 'lateNight';

    const styles: StyleType[] = ['poetic', 'silly', 'philosophical'];
    const selectedStyle = styles[Math.floor(Math.random() * styles.length)];
    const list = GREETINGS[timeKey][selectedStyle];
    
    return {
      text: list[Math.floor(Math.random() * list.length)],
      styleName: selectedStyle === 'poetic' ? '詩意' : (selectedStyle === 'silly' ? '白爛' : '哲學')
    };
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 800);
  };

  return (
    <div 
      onClick={handleClose}
      className={`fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/20 backdrop-blur-md transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div 
        className={`relative w-full max-w-lg bg-[#f6dedd]/80 backdrop-blur-3xl p-12 rounded-[4rem] shadow-[0_30px_100px_rgba(0,0,0,0.1)] border border-white/60 transform transition-all duration-1000 ${isVisible ? 'scale-100 translate-y-0 rotate-0' : 'scale-90 translate-y-10 rotate-2'}`}
      >
        <div className="flex flex-col items-center space-y-10 text-center">
          <div className="flex flex-col items-center">
            <span className="text-4xl mb-4">✨</span>
            <div className="px-4 py-1 rounded-full bg-[#588dad]/10 border border-[#588dad]/20">
              <span className="text-[10px] font-black tracking-[0.3em] text-[#588dad] uppercase">
                時光絮語 · {greeting.styleName}
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-2xl sm:text-3xl font-bold text-[#588dad] leading-relaxed tracking-wider break-keep">
              {greeting.text}
            </p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-[#d9a0a8] text-xs font-medium tracking-[0.5em] animate-pulse">
              點擊任意處繼續旅程
            </p>
          </div>
        </div>

        {/* 裝飾線條 */}
        <div className="absolute top-10 left-10 w-12 h-12 border-t-2 border-l-2 border-[#d9a0a8]/30 rounded-tl-3xl"></div>
        <div className="absolute bottom-10 right-10 w-12 h-12 border-b-2 border-r-2 border-[#d9a0a8]/30 rounded-br-3xl"></div>
      </div>
    </div>
  );
};

export default GreetingOverlay;
