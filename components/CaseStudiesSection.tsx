
import React, { useState } from 'react';

// FIX: Add explicit type `React.FC` to the `Highlight` component to allow it to accept React's special `key` prop.
const Highlight: React.FC<{ children: React.ReactNode }> = ({ children }) => <span className="font-bold text-amber-500">{children}</span>;

// A simple parser to highlight numbers in text
const HighlightNumbers = ({ text }) => {
    if (!text) return null;
    const parts = text.split(/(\b\d[\d,.]*[%]?\b tỷ?|~\d+ triệu\/tháng|\d+-\d+%?)/g);
    return (
        <>
            {parts.map((part, i) =>
                 /(\b\d[\d,.]*[%]?\b tỷ?|~\d+ triệu\/tháng|\d+-\d+%?)/g.test(part) ? (
                    <Highlight key={i}>{part}</Highlight>
                ) : (
                    part
                )
            )}
        </>
    );
};

const caseStudiesData = [
  {
    id: 'drpong',
    name: 'Dr.Pong',
    title: 'Mô hình tăng trưởng tinh gọn',
    challenge: 'Thương hiệu mới, cần tối ưu vận hành và chi phí quảng cáo đắt đỏ ngay từ đầu để đối mặt với phí sàn tăng cao.',
    solution: 'Áp dụng tư duy "Bắn bia 10 điểm": Dùng dữ liệu để tìm ra sản phẩm/kênh hiệu quả nhất và dồn lực vào đó. Tự động hóa báo cáo Ads, Affiliate.',
    result: 'Tăng trưởng từ 0 lên 10 tỷ VNĐ/tháng trong chưa đầy 3 năm với bộ máy cực kỳ tinh gọn (15-18 nhân sự).',
  },
  {
    id: 'somehow',
    name: 'Somehow',
    title: 'Tối ưu chi phí Marketing',
    challenge: 'Chi phí quảng cáo Facebook quá lớn (~300 triệu/tháng) nhưng không đo lường được hiệu quả ra đơn hàng thực tế.',
    solution: 'Sử dụng MDP để so khớp chi phí quảng cáo từ Facebook với doanh thu thực tế từ đơn hàng. Nhận diện và cắt giảm các chiến dịch "đốt tiền".',
    result: 'Giảm 40-50% chi phí quảng cáo, nhưng doanh thu vẫn giữ vững, không bị sụt giảm.',
  },
  {
    id: '160store',
    name: '160 Store',
    title: 'Quản trị vận hành toàn diện',
    challenge: 'Quy mô lớn, nhiều cửa hàng, khối lượng dữ liệu khổng lồ. Cần quản lý chặt chẽ hiệu suất từng phòng ban, nhân viên.',
    solution: 'Sử dụng full phân hệ của MDP (Kho, Marketing, CSKH, KPI). Xây dựng văn hóa "nói chuyện bằng dữ liệu" để quản trị KPI chi tiết.',
    result: 'Được đánh giá là bên vận hành hiệu quả nhất, kiểm soát tốt dòng tiền và hiệu suất, duy trì vị thế lớn mạnh trên thị trường.',
  },
  {
    id: 'nshop',
    name: 'N-shop',
    title: 'Bài học về tự xây hệ thống',
    challenge: 'Nghĩ rằng xây dựng hệ thống dữ liệu là đơn giản, quyết định tự xây dựng in-house và ngưng hợp đồng với MDP.',
    solution: '(Sai lầm) Tuyển dụng 2 nhân sự IT với tổng chi phí ~60 triệu/tháng.',
    result: 'Thất bại hoàn toàn. Sau 5 tháng, hệ thống tự xây vẫn không vận hành được. Phải quay lại sử dụng MDP sau khi nhận ra sự phức tạp của việc xử lý dữ liệu đa sàn.',
  },
  {
    id: 'stella',
    name: 'Stella',
    title: 'Chẩn bệnh mô hình kinh doanh',
    challenge: 'Doanh thu lớn nhưng mô hình "lướt sóng", tỷ lệ khách hàng quay lại cực thấp (Shopee 8%, TikTok 0%), lợi nhuận mỏng.',
    solution: 'MDP phân tích và chỉ ra mô hình kinh doanh cực kỳ rủi ro. Chỉ cần sàn tăng phí nhẹ hoặc ads đắt lên là sẽ lỗ ngay lập tức.',
    result: 'Cung cấp bức tranh thực tế để chủ doanh nghiệp nhìn thấy rủi ro "lãi ảo lỗ thật" và thay đổi chiến lược từ "săn bắn" sang "nuôi dưỡng" khách hàng.',
  },
];

const CaseStudiesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(caseStudiesData[0].id);
  const activeCase = caseStudiesData.find(cs => cs.id === activeTab);

  return (
    <section id="casestudy" className="py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sức Mạnh Của MDP Trong Thực Tế</h2>
          <p className="text-base md:text-lg text-gray-500 max-w-3xl mx-auto">
            Những câu chuyện thành công (và cả thất bại) từ các doanh nghiệp Retail & E-commerce.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Tabs */}
          <div className="lg:w-1/4 flex lg:flex-col overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
            {caseStudiesData.map(cs => (
              <button
                key={cs.id}
                onClick={() => setActiveTab(cs.id)}
                className={`text-left w-full p-4 rounded-lg text-base md:text-lg font-semibold whitespace-nowrap transition-colors duration-300 ${
                  activeTab === cs.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-slate-100'
                }`}
              >
                {cs.name}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="lg:w-3/4">
            {activeCase && (
              <div className="bg-white border border-gray-200/80 rounded-2xl p-8 animate-fade-in shadow-lg">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{activeCase.title}</h3>
                <p className="text-purple-600 text-xl font-semibold mb-6">{activeCase.name}</p>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-lg text-blue-700 mb-2"><i className="fas fa-exclamation-triangle mr-2"></i>Thách thức</h4>
                    <p className="text-gray-600"><HighlightNumbers text={activeCase.challenge} /></p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-green-600 mb-2"><i className="fas fa-lightbulb mr-2"></i>Giải pháp</h4>
                    <p className="text-gray-600"><HighlightNumbers text={activeCase.solution} /></p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-yellow-600 mb-2"><i className="fas fa-chart-pie mr-2"></i>Kết quả</h4>
                    <p className="text-gray-600"><HighlightNumbers text={activeCase.result} /></p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
       <style>{`
        .animate-fade-in {
            animation: fadeIn 0.5s ease-in-out;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
       `}</style>
    </section>
  );
};

export default CaseStudiesSection;