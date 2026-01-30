
import React, { memo } from 'react';

// FIX: Add explicit type `React.FC` to the `Highlight` component to allow it to accept React's special `key` prop.
const Highlight: React.FC<{ children: React.ReactNode }> = ({ children }) => <span className="font-bold text-amber-500">{children}</span>;

const painPoints = [
  {
    icon: 'fa-user-tie',
    persona: 'Founder/CEO',
    title: 'Người cầm tiền nhưng mù thông tin',
    pains: [
      'Mù mờ về lợi nhuận thực: "Doanh thu 5 tỷ, nhưng thực sự bỏ túi bao nhiêu?"',
      'Nỗi sợ phụ thuộc: Sợ nhân viên nghỉ việc là mất quy trình, mất dữ liệu.',
      'Ra quyết định cảm tính: Nhập hàng, tăng ngân sách chỉ dựa vào "trực giác".'
    ],
    hook: 'Biến ma trận số liệu thành bảng điều khiển ra quyết định trong 30 giây.'
  },
  {
    icon: 'fa-file-excel',
    persona: 'Marketing/Operation Manager',
    title: 'Nạn nhân của Excel',
    pains: [
      'Cơn ác mộng báo cáo: Mất 2-3 tiếng mỗi sáng chỉ để copy-paste vào Excel.',
      'Hộp đen Marketing: Tốn tiền chạy Ads nhưng không chứng minh được ROI.',
      'Quản lý rời rạc: Không biết khách hàng mới hay cũ để re-marketing.'
    ],
    hook: 'Tự động hóa 95% báo cáo Marketing đa kênh, giải phóng bạn khỏi Excel.'
  },
   {
    icon: 'fa-briefcase',
    persona: 'Agency & Enabler',
    title: 'Người cần chứng minh năng lực',
    pains: [
        'Quá tải báo cáo: Mỗi khách hàng đòi một kiểu báo cáo, làm thủ công rất tốn công.',
        'Áp lực chứng minh ROI: Cần số liệu minh bạch để khách hàng thấy hiệu quả.',
    ],
    hook: 'Hệ thống báo cáo minh bạch giúp Agency chứng minh ROI thực tế.'
  }
];

// A simple parser to highlight numbers in text
const HighlightNumbers = memo(({ text }: { text: string }) => {
    const parts = text.split(/(\b\d[\d,.]*\b%?)/g); // Regex to find numbers, optionally with commas, dots, and a % sign
    return (
        <>
            {parts.map((part, i) =>
                /(\b\d[\d,.]*\b%?)/g.test(part) ? (
                    <Highlight key={i}>{part}</Highlight>
                ) : (
                    part
                )
            )}
        </>
    );
});


const ProblemCard: React.FC<{ point: typeof painPoints[0] }> = memo(({ point }) => (
  <div className="bg-slate-50 border border-gray-200/80 rounded-2xl p-8 transform hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col shadow-sm hover:shadow-xl">
    <div className="flex items-center mb-4">
      <i className={`fas ${point.icon} text-3xl text-blue-600 mr-4`}></i>
      <div>
        <h3 className="text-lg md:text-xl font-bold text-slate-900">{point.persona}</h3>
        <p className="text-blue-700">{point.title}</p>
      </div>
    </div>
    <ul className="space-y-3 list-inside list-disc text-slate-600 mb-6 flex-grow">
      {point.pains.map((pain, index) => (
        <li key={index}><HighlightNumbers text={pain}/></li>
      ))}
    </ul>
    <div className="mt-auto pt-4 border-t border-gray-200">
       <p className="text-base md:text-lg font-semibold text-purple-600 italic">"<HighlightNumbers text={point.hook}/>"</p>
    </div>
  </div>
));

const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Bạn đang "ngộp" trong <span className="text-blue-600">địa ngục Excel?</span></h2>
          <p className="text-base md:text-lg text-gray-500 max-w-3xl mx-auto">
            Doanh nghiệp Bán lẻ/E-commerce đang mất phương hướng trong ma trận dữ liệu phân mảnh. Nhận diện "nỗi đau" của bạn dưới đây.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <ProblemCard key={index} point={point} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;