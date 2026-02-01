
import React from 'react';

const roadmapSteps = [
  {
    stage: 'Giai đoạn 1',
    duration: 'Tuần 1-2',
    title: 'Kết nối & Minh bạch hóa',
    description: 'Ngừng làm báo cáo tay. Cắm API kết nối tất cả các kênh (Sàn, Ads, POS). Nhìn thấy bức tranh toàn cảnh doanh thu/chi phí trên một màn hình duy nhất.',
    icon: 'fa-plug',
  },
  {
    stage: 'Giai đoạn 2',
    duration: 'Tháng 1',
    title: 'Tối ưu hóa Vận hành & Chi phí',
    description: 'Sử dụng báo cáo để tìm ra các "lỗ rò rỉ" tiền bạc: Đơn hoàn trả, phí sàn tính sai, quảng cáo không ra đơn. Cắt giảm lãng phí, thu hồi công nợ.',
    icon: 'fa-cogs',
  },
  {
    stage: 'Giai đoạn 3',
    duration: 'Tháng 2-3',
    title: 'Tối ưu hóa Marketing & Tăng trưởng',
    description: 'Phân tích hiệu quả đa nền tảng. Xác định sản phẩm chính và kênh có lượng trafic để dồn ngân sách scale up.',
    icon: 'fa-rocket',
  },
  {
    stage: 'Giai đoạn 4',
    duration: 'Tháng 6+',
    title: 'Khai thác giá trị trọn đời (LTV & Automation)',
    description: 'Phân tích Cohort để xem tỷ lệ khách hàng quay lại. Dùng dữ liệu để kích hoạt các chiến dịch CSKH tự động nhằm tăng LTV.',
    icon: 'fa-crown',
  },
];

const RoadmapSection: React.FC = () => {
  return (
    <section id="roadmap" className="py-16 md:py-20 bg-slate-50/70">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Lộ Trình Chuyển Đổi</h2>
          <p className="text-base md:text-lg text-gray-500 max-w-3xl mx-auto">4 Bước Thoát Khỏi "Ngục Tù Dữ Liệu" và bứt phá tăng trưởng.</p>
        </div>
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-200 -translate-y-1/2"></div>

          <div className="grid md:grid-cols-4 gap-8 md:gap-16">
            {roadmapSteps.map((step, index) => (
              <div key={index} className="relative text-center bg-white p-6 rounded-lg border border-gray-200/80 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-2xl">
                <div className="flex justify-center items-center mb-4">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl z-10">
                    <i className={`fas ${step.icon}`}></i>
                  </div>
                </div>
                <p className="text-blue-600 font-bold">{step.stage} <span className="text-gray-500 font-normal">({step.duration})</span></p>
                <h3 className="text-xl font-bold text-gray-900 my-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;