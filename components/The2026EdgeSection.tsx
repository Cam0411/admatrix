
import React from 'react';

const edgeData = [
  {
    icon: 'fa-search-dollar',
    title: 'Giải Mã "Hộp Đen" Cross-Channel',
    subtitle: 'Ads to Order Attribution',
    current: 'Bạn chạy Ads Facebook nhưng không biết đơn hàng có đổ về Shopee/TikTok không.',
    breakthrough: 'Công nghệ MDP tự động hóa 95% quy trình đối soát này, cho biết chính xác 1 đồng quảng cáo mang về bao nhiêu đồng doanh thu trên sàn. Case study: Somehow đã giảm 50% chi phí Ads nhờ sự minh bạch này.'
  },
  {
    icon: 'fa-tachometer-alt',
    title: 'Quản Trị gần như thời gian thực',
    subtitle: ' Neare Real-time',
    current: 'Báo cáo tháng/tuần đã quá trễ để sửa sai trong các dịp Mega Sale.',
    breakthrough: 'Dữ liệu cập nhật với độ trễ chỉ 30 giây - 1 phút so với thực tế. Giúp ra quyết định "tắt/bật" chiến dịch trong ngày siêu sale ngay lập tức.'
  },
  {
    icon: 'fa-user-shield',
    title: 'Data Ownership & Legal Compliance',
    subtitle: 'Sở hữu & Tuân thủ',
    current: 'Sàn TMĐT siết chặt luật chơi và dữ liệu. Thuế siết chặt quy định xuất hóa đơn điện tử.',
    breakthrough: 'Doanh nghiệp chuyển dịch sang sở hữu dữ liệu khách hàng (Customer Profile 360) và sử dụng hệ thống tự động xuất hóa đơn đa sàn để tránh rủi ro pháp lý.'
  }
];

const The2026EdgeSection: React.FC = () => {
  return (
    <section id="edge" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">3 "Vũ Khí" Giúp Bạn Bứt Phá Năm 2026</h2>
          <p className="text-base md:text-lg text-gray-500 max-w-3xl mx-auto">
            Đây không phải là lý thuyết. Đây là những năng lực thực chiến giúp doanh nghiệp sống sót và thống trị trong bối cảnh thị trường mới.
          </p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {edgeData.map((item, index) => (
            <div key={index} className="bg-slate-50 border border-gray-200/80 rounded-2xl p-8 flex flex-col hover:shadow-xl transition-shadow duration-300 h-full">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 rounded-lg p-4 mr-4">
                  <i className={`fas ${item.icon} text-3xl text-blue-600`}></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="font-semibold text-blue-700">{item.subtitle}</p>
                </div>
              </div>
              
              <div className="space-y-4 flex-grow flex flex-col">
                <div>
                  <p className="font-semibold text-red-600 mb-1">Thực trạng:</p>
                  <p className="text-gray-600">{item.current}</p>
                </div>
                <div className="mt-auto pt-4 border-t border-gray-200">
                  <p className="font-semibold text-green-600 mb-1">Đột phá:</p>
                  <p className="text-gray-600">{item.breakthrough}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default The2026EdgeSection;
