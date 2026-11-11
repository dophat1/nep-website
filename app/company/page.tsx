'use client';
import { useLanguage } from '../i18n';

export default function Company(){
  const {lang}=useLanguage(); const vi=lang==='vi';
  const values=vi?[
    ['Rõ ràng trước phức tạp','Giúp đội ngũ dễ thấy và hiểu câu trả lời hữu ích tiếp theo.'],
    ['Hữu ích trong đúng ngữ cảnh','Bắt đầu từ công việc và hệ thống đội ngũ đang sử dụng.'],
    ['Con người giữ vai trò trung tâm','Giải thích được đề xuất và để mọi hành động có thể kiểm tra.'],
  ]:[
    ['Clarity before complexity','Make the next useful answer easy to see and understand.'],
    ['Useful in context','Start from the real work and systems a team already uses.'],
    ['Human judgment stays central','Make recommendations legible and keep actions reviewable.'],
  ];
  return <><section className="page-hero"><div className="container"><span className="eyebrow">{vi?'Về Nếp':'Company'} / Công ty Cổ phần Công nghệ Nếp</span><h1>{vi?'Công nghệ gần hơn với cách doanh nghiệp làm việc.':'Technology that feels closer to how business works.'}</h1><p>{vi?'Sứ mệnh giả định của Nếp: giúp doanh nghiệp vừa và nhỏ Việt Nam vận hành thông minh hơn bằng chính công cụ, dữ liệu và quy trình họ đang có.':'Our fictional mission: help Vietnamese SMEs operate more intelligently using the tools, data, and workflows they already have.'}</p></div></section>
  <section className="section dark-section"><div className="container split"><div><span className="eyebrow">{vi?'Câu chuyện giả định':'Our story, imagined'}</span><h2 className="section-title">{vi?'Cái tên gợi sự kết nối và nề nếp.':'Named for what holds things together.'}</h2></div><p className="section-intro">{vi?'“Nếp” gợi trật tự, thói quen và nhịp sống quen thuộc. Câu chuyện sáng lập hư cấu này bắt đầu từ một quan sát: đội ngũ đang phát triển thường đã có thông tin cần thiết, nhưng thiếu một cách bình tĩnh để kết nối chúng. Chúng tôi hình dung Nếp Technologies để khám phá trải nghiệm vận hành gần gũi hơn.':'“Nếp” can evoke order, habits, and the familiar rhythm of daily life. This fictional founding story begins with a simple observation: growing teams often have the information they need, but lack a calm way to connect it. We imagined Nếp Technologies to explore what a more grounded operating experience could feel like.'}</p></div></section>
  <section className="section"><div className="container"><span className="eyebrow">{vi?'Giá trị':'Values'}</span><h2 className="section-title">{vi?'Một vài nguyên tắc cho ý tưởng này.':'A few principles for the concept.'}</h2><div className="three-grid">{values.map(([title,body],i)=><article className="card" key={title}><span className="eyebrow">0{i+1}</span><h3>{title}</h3><p>{body}</p></article>)}</div><p className="muted" style={{marginTop:34,fontSize:13}}>{vi?'Đây là startup hư cấu và dự án portfolio. Tên pháp lý tiếng Việt chỉ dùng trong mô phỏng; không ngụ ý đăng ký doanh nghiệp thật.':'This is a fictional startup simulation and portfolio project. The Vietnamese legal-style name is part of the concept and does not imply actual registration.'}</p></div></section></>
}
