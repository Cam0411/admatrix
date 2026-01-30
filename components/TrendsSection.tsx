import React, { memo } from 'react';

const trendsData = [
  {
    title: 'Agentic Marketing Automation',
    subtitle: 'Khi AI không chỉ là công cụ, mà là "Nhân viên thực thi"',
    description: 'Thay vì Marketer phải thiết lập luồng, AI Agent sẽ tự truy cập vào MDP, tự phân tích, tự tạo nội dung và tự quyết định thời điểm "chạm" tốt nhất.',
    keyPoints: [
      { icon: 'fa-brain', text: 'Tự chủ ra quyết định dựa trên dữ liệu thời gian thực.' },
      { icon: 'fa-magic', text: 'Tự động cá nhân hóa nội dung bằng GenAI.' },
      { icon: 'fa-database', text: 'MDP là "bộ nhớ dài hạn" & "nguồn sự thật" cho AI.' },
    ],
  },
  {
    title: 'Composable MDP & Zero-Copy',
    subtitle: 'Tạm biệt nỗi lo "Chuyển kho dữ liệu"',
    description: 'Dữ liệu nằm yên tại kho của bạn (BigQuery, Snowflake). MDP kết nối trực tiếp để xử lý mà không cần sao chép, mang lại tốc độ, bảo mật và hiệu quả chi phí.',
    keyPoints: [
        { icon: 'fa-rocket', text: 'Triển khai tính năng mới trong vài ngày, không phải vài tháng.' },
        { icon: 'fa-lock', text: 'Bảo mật tối đa, giảm thiểu rủi ro rò rỉ dữ liệu.' },
        { icon: 'fa-puzzle-piece', text: 'Chỉ trả tiền cho những module (khối) thực sự sử dụng.' },
    ],
  },
  {
    title: 'Cá nhân hóa bảo mật cao',
    subtitle: 'Khi Third-party Cookie biến mất',
    description: 'MDP trở thành "pháo đài" giúp doanh nghiệp cá nhân hóa hiệu quả mà không xâm phạm quyền riêng tư, tuân thủ các nghị định bảo mật mới nhất.',
    keyPoints: [
      { icon: 'fa-user-shield', text: 'Sử dụng Data Clean Rooms để hợp tác an toàn.' },
      { icon: 'fa-check-circle', text: 'Tối đa hóa First-party Data dựa trên sự đồng ý.' },
      { icon: 'fa-balance-scale', text: 'Luôn tuân thủ các quy định bảo mật (Nghị định 13).' },
    ],
  }
];

const TrendItem: React.FC<{ trend: typeof trendsData[0]; reverse: boolean }> = memo(({ trend, reverse }) => {
  // A placeholder visual component created with CSS to avoid using images
  const placeholderVisual = (
    <div className="md:w-1/2 flex justify-center items-center p-4 min-h-[250px] md:min-h-0">
      <div className="w-full max-w-md h-48 bg-slate-100/50 border-2 border-dashed border-gray-300 rounded-2xl flex items-center justify-center p-4 shadow-inner transition-all duration-300 group hover:border-blue-400 hover:bg-slate-100">
        <div className="text-center">
            <i className="fas fa-image text-4xl text-gray-300 group-hover:text-blue-300 transition-colors"></i>
            <p className="text-gray-400 text-lg font-medium mt-2 group-hover:text-blue-500 transition-colors">{trend.title}</p>
        </div>
      </div>
    </div>
  );

  const textSide = (
    <div className="md:w-1/2">
      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{trend.title}</h3>
      <p className="font-semibold text-purple-700 text-lg mb-4">{trend.subtitle}</p>
      <p className="text-gray-600 mb-6">{trend.description}</p>
      <ul className="space-y-4">
        {trend.keyPoints.map((point, index) => (
          <li key={index} className="flex items-start">
            <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 shrink-0">
              <i className={`fas ${point.icon} text-green-600`}></i>
            </div>
            <p className="text-gray-700">{point.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className={`flex flex-col md:flex-row items-center gap-12 ${reverse ? 'md:flex-row-reverse' : ''}`}>
        {placeholderVisual}
        {textSide}
    </div>
  );
});


const TrendsSection: React.FC = () => {
  return (
    <section id="trends" className="py-16 md:py-20 bg-slate-50/70">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">3 Xu Hướng Đột Phá Của Marketing Data 2026</h2>
          <p className="text-base md:text-lg text-gray-500 max-w-3xl mx-auto">
            Tương lai đã ở đây. MDP không chỉ giải quyết vấn đề hôm nay, mà còn là nền tảng cho những đột phá của ngày mai.
          </p>
        </div>
        <div className="space-y-20">
            {trendsData.map((trend, index) => (
                <TrendItem key={index} trend={trend} reverse={index % 2 !== 0} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default TrendsSection;
