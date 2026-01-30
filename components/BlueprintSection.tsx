
import React from 'react';

const steps = [
  {
    icon: 'fa-link',
    title: '1. Hợp Nhất Tự Động',
    description: 'Kết nối API trực tiếp với hơn 35 nền tảng: Shopee, TikTok, Meta Ads, Google Ads, POS, CRM... Dữ liệu được kéo tự động, loại bỏ 100% thao tác tay.',
    layer: 'The Connector Layer'
  },
  {
    icon: 'fa-broom',
    title: '2. Làm Sạch & Chuẩn Hóa',
    description: 'Tự động Mapping (khớp nối) tên sản phẩm khác nhau về một mã SKU duy nhất. Loại bỏ đơn ảo, đơn hủy để tính toán doanh thu thực tế.',
    layer: 'The Cleaning Layer'
  },
  {
    icon: 'fa-database',
    title: '3. Kho Dữ Liệu Tập Trung',
    description: 'Nơi duy nhất chứa "sự thật" về sức khỏe doanh nghiệp. Tất cả phòng ban đều nhìn vào một con số giống nhau, chấm dứt tranh cãi nội bộ.',
    layer: 'Single Source of Truth'
  },
  {
    icon: 'fa-chart-line',
    title: '4. Trực Quan Hóa & Kích Hoạt',
    description: 'Biến dữ liệu thô thành các Dashboard thông minh trả lời câu hỏi: "Hôm nay Lãi hay Lỗ?". Kích hoạt dữ liệu sang các công cụ Automation (Chatbot, Email).',
    layer: 'Visualization & Activation'
  },
];

const BlueprintSection: React.FC = () => {
  return (
    <section id="blueprint" className="py-16 md:py-20 bg-purple-50/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Lợi ích nổi bật từ giải pháp MDP</h2>
          <p className="text-base md:text-lg text-gray-500 max-w-3xl mx-auto">
            4 năng lực cốt lõi giúp bạn biến dữ liệu thô thành lợi thế cạnh tranh bền vững.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white border border-gray-200/80 rounded-xl p-6 flex flex-col transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 h-full">
              <div className="bg-blue-100 rounded-lg w-16 h-16 flex items-center justify-center mb-5 shrink-0">
                <i className={`fas ${step.icon} text-3xl text-blue-600`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title.split('. ')[1]}</h3>
              <p className="text-gray-600 flex-grow mb-4">{step.description}</p>
              <a href="#contact" className="mt-auto font-semibold text-purple-600 hover:text-purple-800 transition-colors group">
                Xem thêm <i className="fas fa-arrow-right text-xs opacity-70 group-hover:translate-x-1 transition-transform ml-1"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlueprintSection;
