'use client';
import { createContext, useContext, useEffect, useState } from 'react';
export type Lang = 'en' | 'vi';
const translations = {
  en: {
    platform:'Platform', demo:'Live demo', company:'Company', contact:'Contact', explore:'Explore the platform', tryDemo:'Try the demo', getInTouch:'Get in touch',
    heroEyebrow:'The operating layer for ambitious teams', heroTitle:'Less busywork.', heroAccent:'More business.', heroBody:'NếpOS connects the everyday tools, data, and decisions that keep Vietnamese businesses moving. One clearer place to understand what matters and act on it.',
    proof:'Built for the way real teams work', proofBody:'Keep the tools you already use. Bring fragmented information into focus, surface the next action, and give people time back for work that counts.',
    assistant:'Ask in plain language', analytics:'See the whole picture', agent:'Move work forward',
    assistantBody:'Get grounded answers from connected business context.', analyticsBody:'Turn scattered operational data into timely signals.', agentBody:'Put repeatable workflows on a clear, reviewable path.',
    painTitle:'Growth creates complexity. Clarity should grow with it.', pain1:'Answers live in too many tabs', pain2:'Reports arrive after decisions', pain3:'Routine follow-ups consume the day',
    previewLabel:'A closer look', previewTitle:'From question to next step.', previewBody:'The simulated distributor workspace shows how inventory, orders, and insight can meet in one calm interface.',
    ctaTitle:'Make room for the work that moves you.', ctaBody:'Explore the product concept, then test the interactive simulation with transparent sample data.',
    footerDisclosure:'Nếp Technologies is a fictional startup simulation and portfolio project. No real company or customer claims are made.',
    simulated:'Simulated data', sample:'Sample workspace', search:'Search products', all:'All stock', low:'Low stock', healthy:'Healthy',
  },
  vi: {
    platform:'Nền tảng', demo:'Bản demo', company:'Về Nếp', contact:'Liên hệ', explore:'Khám phá nền tảng', tryDemo:'Thử bản demo', getInTouch:'Liên hệ',
    heroEyebrow:'Lớp vận hành cho đội ngũ đang phát triển', heroTitle:'Bớt việc vụn.', heroAccent:'Thêm thời gian kinh doanh.', heroBody:'NếpOS kết nối công cụ, dữ liệu và quyết định thường ngày của doanh nghiệp Việt. Một nơi rõ ràng hơn để hiểu điều quan trọng và hành động.',
    proof:'Thiết kế cho cách đội ngũ thực sự làm việc', proofBody:'Giữ các công cụ đang dùng. Kết nối thông tin rời rạc, nhận diện việc cần làm và dành thời gian cho những việc tạo giá trị.',
    assistant:'Hỏi bằng ngôn ngữ tự nhiên', analytics:'Nhìn toàn cảnh', agent:'Thúc đẩy công việc',
    assistantBody:'Nhận câu trả lời dựa trên ngữ cảnh kinh doanh.', analyticsBody:'Biến dữ liệu vận hành phân tán thành tín hiệu kịp thời.', agentBody:'Đưa quy trình lặp lại vào luồng xử lý rõ ràng, có thể kiểm tra.',
    painTitle:'Doanh nghiệp phát triển, vận hành phức tạp hơn. Sự rõ ràng cũng cần lớn theo.', pain1:'Câu trả lời nằm ở quá nhiều nơi', pain2:'Báo cáo đến sau quyết định', pain3:'Việc theo dõi lặp lại chiếm cả ngày',
    previewLabel:'Xem gần hơn', previewTitle:'Từ câu hỏi đến bước tiếp theo.', previewBody:'Không gian nhà phân phối giả lập cho thấy tồn kho, đơn hàng và phân tích có thể cùng hiện diện trong một giao diện gọn gàng.',
    ctaTitle:'Dành chỗ cho công việc tạo đà phát triển.', ctaBody:'Khám phá ý tưởng sản phẩm, rồi thử bản mô phỏng tương tác với dữ liệu mẫu minh bạch.',
    footerDisclosure:'Nếp Technologies là mô phỏng startup hư cấu và dự án portfolio. Không có tuyên bố về công ty hay khách hàng thật.',
    simulated:'Dữ liệu mô phỏng', sample:'Không gian mẫu', search:'Tìm sản phẩm', all:'Tất cả tồn kho', low:'Sắp hết hàng', healthy:'Đủ hàng',
  }
} as const;
type Key = keyof typeof translations.en;
const Context = createContext<{lang:Lang; setLang:(lang:Lang)=>void; t:(key:Key)=>string}>({lang:'en',setLang:()=>{},t:(key)=>translations.en[key]});
export function LanguageProvider({children}:{children:React.ReactNode}) {
  const [lang,setLang] = useState<Lang>('en');
  useEffect(()=>{try { const saved=localStorage.getItem('nep-lang'); if(saved==='vi') setLang('vi'); } catch {}},[]);
  useEffect(()=>{document.documentElement.lang=lang; try {localStorage.setItem('nep-lang',lang);} catch {}},[lang]);
  return <Context.Provider value={{lang,setLang,t:(key)=>translations[lang][key]}}>{children}</Context.Provider>;
}
export const useLanguage=()=>useContext(Context);
