
import React, { useState, memo, useCallback } from 'react';

const testimonialsData = [
  {
    client: 'NEWAGE',
    categories: [
      { title: '1. Về khả năng Báo cáo & Tính năng hệ thống', questions: [
          "Có thể thêm các trường thông tin như ngành hàng, bộ lọc (filter) theo nhu cầu (ví dụ: lọc theo Collection, SKU) vào báo cáo sàn không?",
          "Bên MDP có dịch vụ 'làm hộ' (Outsource) toàn bộ việc xây dựng báo cáo không, vì bên chị không có nhân sự chuyên môn?",
          "Có tách được dữ liệu theo từng nhân viên (Sales/Marketing), từng mã nội dung (Content ID), từng KOC/KOL và từng Target Audience không?",
          "Có demo nào về mô hình quản lý Ads gắn liền với doanh thu thực tế và số lượng tin nhắn (từ Meta sang Pancake) không?",
          "Xem báo cáo trên điện thoại (Mobile) có ổn không? Có cần đăng nhập hay tải app không?",
          "Có giới hạn số lượng người dùng (User) hay tài khoản truy cập không?",
          "Hệ thống có bắn thông báo cảnh báo về các phần mềm chat công việc như Slack hay Microsoft Teams được không?",
        ] 
      },
      { title: '2. Về Kết nối & Độ chính xác dữ liệu', questions: [
          "Trong một Business Manager (BM) có 5 tài khoản quảng cáo, liệu có đồng bộ được hết cả 5 không?",
          "Làm thế nào để đảm bảo dữ liệu kéo về chính xác khớp cao (có được 100% không)?",
          "Làm sao để nhận biết được lỗi khi dữ liệu bị sai hoặc API lỗi?",
          "Dữ liệu có update theo giờ hay ngay lập tức không? Có thể kéo số thủ công (Manual pull) ngay lập tức không?",
          "Với các chiến dịch Mega Live lớn, hệ thống có chạy thẳng về MDP và xử lý kịp thời không?",
          "Bên MDP có phải là Partner chính thức của Facebook và Google không?",
        ] 
      },
      { title: '3. Về Chi phí & Hợp đồng', questions: [
          "Trong năm đầu tiên và các năm tiếp theo, chi phí có khác nhau không? Có trọn gói không?",
          "Có các chi phí ẩn hay phát sinh nào khác không?",
          "Khi làm Trial (thử nghiệm), bên MDP có tính phí khởi tạo hay không?",
          "Yêu cầu bóc tách rõ chi phí cho từng hạng mục: phí kết nối, phí làm báo cáo, và phí đồng hành.",
        ] 
      },
    ]
  },
  {
    client: 'LAMME',
    categories: [
      { title: '1. Về Kỹ thuật và Khả năng xử lý dữ liệu', questions: [
          "Dữ liệu kéo về thì độ trễ như thế nào? Có xem được Real-time không?",
          "Có thể soi sâu xuống từng bài viết hay từng video không? Muốn biết video nào thực sự ra đơn chứ không chỉ là ra tin nhắn.",
          "Báo cáo RFM này dùng cho dữ liệu từ Nhanh.vn đúng không?",
        ] 
      },
      { title: '2. Về Tùy chỉnh báo cáo và Quản trị nhân sự', questions: [
          "Cần hiểu rõ hơn là mình tối ưu theo cách nào và đọc chỉ số như thế nào?",
          "Trong báo cáo của Ads, có thể tùy chỉnh chỉ hiển thị 3 chỉ số quan trọng thôi được không?",
          "Có vẽ được báo cáo hiệu quả từng bạn sale dựa trên doanh thu không?",
        ] 
      },
      { title: '3. Về Bảo mật và Chính sách sàn (Shopee Mall)', questions: [
          "Nếu lấy thông tin khách hàng, Shopee Mall của chị có bị ảnh hưởng gì không?",
          "Thông tin khách hàng (tên, SĐT, địa chỉ) sẽ lấy những gì để chuyển sang Zalo OA chăm sóc?",
        ] 
      },
    ]
  },
  {
    client: 'HÙNG',
    categories: [
      { title: '1. Về chi phí, gói dịch vụ và các mẫu báo cáo', questions: [
          "Với các template có sẵn, cách tính phí sẽ như thế nào?",
          "Có thể demo 8 cái dashboard cơ bản có sẵn không?",
        ] 
      },
      { title: '2. Về quản lý và tối ưu quảng cáo Facebook', questions: [
          "Có thể tối ưu quảng cáo (bật/tắt) trực tiếp trên dashboard không?",
          "Thời gian cập nhật dữ liệu quảng cáo là khi nào? Có real-time không?",
          "Có thể cắt dữ liệu theo các chiều (dimension) như tên chiến dịch, location không?",
          "Khi có chênh lệch dữ liệu real-time của Facebook, nó thường rơi vào chi phí hay doanh thu?",
        ]
      },
      { title: '3. Về dữ liệu khách hàng và cái nhìn tổng thể đa kênh', questions: [
          "Vòng đời khách hàng này là xét trên từng kênh hay tổng thể?",
          "Có xem được khách hàng mua chéo kênh hay không?",
          "Muốn có dữ liệu tổng thể về sản phẩm và vòng đời khách hàng trên tất cả các kênh thì có làm được không?",
        ] 
      },
    ]
  }
];

const QuestionCategory: React.FC<{
  category: { title: string; questions: string[] };
  isOpen: boolean;
  onClick: (index: number) => void;
  index: number;
}> = memo(({ category, isOpen, onClick, index }) => {
  const handleClick = useCallback(() => onClick(index), [index, onClick]);
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="w-full flex justify-between items-center text-left py-4 px-1 gap-4"
        onClick={handleClick}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-gray-800">{category.title}</span>
        <span className="transform transition-transform duration-300">
           <i className={`fas fa-chevron-down text-gray-500 ${isOpen ? 'rotate-180' : ''}`}></i>
        </span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
            <ul className="list-disc list-inside space-y-2 text-gray-600 pb-4 pl-1">
                {category.questions.map((q, qIndex) => (
                    <li key={qIndex}>{q}</li>
                ))}
            </ul>
        </div>
      </div>
    </div>
  );
});


const TestimonialsSection: React.FC = () => {
    const [activeClient, setActiveClient] = useState(testimonialsData[0].client);
    const [openCategoryIndex, setOpenCategoryIndex] = useState<number | null>(0);
    
    const activeData = testimonialsData.find(t => t.client === activeClient);

    const handleCategoryToggle = useCallback((index: number) => {
        setOpenCategoryIndex(openCategoryIndex => openCategoryIndex === index ? null : index);
    }, []);

    const handleClientChange = useCallback((clientName: string) => {
        setActiveClient(clientName);
        setOpenCategoryIndex(0); // Reset accordion to open the first category
    }, []);

    return (
        <section id="testimonials" className="py-16 md:py-20 bg-slate-50/70">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Câu Hỏi Thực Tế Từ Khách Hàng</h2>
                    <p className="text-base md:text-lg text-gray-500 max-w-3xl mx-auto">
                        Lắng nghe những băn khoăn và yêu cầu thực tế từ các doanh nghiệp đã đồng hành cùng Admatrix.
                    </p>
                </div>
                
                <div className="max-w-4xl mx-auto">
                    {/* Client Tabs */}
                    <div className="flex justify-center border-b border-gray-300 mb-8">
                        {testimonialsData.map((testimonial) => (
                            <button
                                key={testimonial.client}
                                onClick={() => handleClientChange(testimonial.client)}
                                className={`py-3 px-4 md:px-6 text-base md:text-lg font-semibold transition-colors duration-300 border-b-4 -mb-px ${
                                    activeClient === testimonial.client
                                        ? 'border-blue-600 text-blue-600'
                                        : 'border-transparent text-gray-500 hover:text-blue-600 hover:border-blue-300'
                                }`}
                            >
                                {testimonial.client}
                            </button>
                        ))}
                    </div>

                    {/* Questions Accordion */}
                    <div className="bg-white rounded-xl shadow-lg border border-gray-200/80 p-4 md:p-8 animate-fade-in">
                       {activeData && activeData.categories.map((category, index) => (
                           <QuestionCategory 
                                key={index}
                                category={category}
                                isOpen={openCategoryIndex === index}
                                onClick={handleCategoryToggle}
                                index={index}
                           />
                       ))}
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

export default TestimonialsSection;