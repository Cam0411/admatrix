
import React, { useState, memo, useCallback } from 'react';

const faqItems = [
    { question: "Dữ liệu của tôi nằm ở đâu?", answer: "Hệ thống phải hỗ trợ kiến trúc, cho phép dữ liệu nằm nguyên tại Warehouse của bạn (BigQuery, Snowflake). Bạn phải là người nắm giữ chìa khóa." },
    { question: "Khả năng hợp nhất định danh hoạt động như thế nào?", answer: "Cần có thuật toán ghép nối chính xác để tạo ra góc nhìn khách hàng 360 độ chân thực, không phải một cái kho chứa rác." },
    { question: "Nền tảng có sẵn sàng cho kỷ nguyên Agentic AI không?", answer: "Phải có API mở và lớp ngữ nghĩa để các AI Agent có thể truy cập, hiểu và tự động triển khai chiến dịch mà không cần can thiệp thủ công." },
    { question: "Độ trễ của dữ liệu từ khi phát sinh đến khi kích hoạt là bao lâu?", answer: "Khả năng xử lý phải đạt mức Real-time (mili giây) hoặc Near Real-time. Chờ 2 tiếng mới gửi mail khuyến mãi thì đã quá muộn." },
    { question: "Giải pháp đáp ứng Nghị định 13 (Việt Nam) và các tiêu chuẩn bảo mật 2026 ra sao?", answer: "Cần tích hợp sẵn cơ chế quản lý sự đồng ý, mã hóa dữ liệu đầu cuối và các giao thức bảo mật lớp doanh nghiệp." },
    { question: "Marketer (không biết code) có tự sử dụng được không?", answer: "Cần có giao diện kéo thả (No-code) hoặc sử dụng ngôn ngữ tự nhiên (NLQ) để bất kỳ nhân viên Marketing nào cũng có thể lấy insights mà không cần qua IT." },
    { question: "Bạn đo lường tăng trưởng thực tế như thế nào?", answer: "Hệ thống phải hỗ trợ thử nghiệm A/B Testing ở cấp độ dữ liệu để chứng minh sự tăng trưởng doanh thu thực tế, không phải chỉ số ảo." },
    { question: "Chi phí sẽ tăng trưởng như thế nào theo quy mô dữ liệu?", answer: "Mô hình giá phải minh bạch, tách biệt giữa chi phí nền tảng và chi phí lưu trữ/xử lý dữ liệu để không bị 'ngã ngửa' khi hóa đơn tăng phi mã." },
    { question: "Khả năng kết nối với hệ sinh thái quảng cáo hiện có?", answer: "MDP chỉ có giá trị khi nó 'nói chuyện' được với Facebook, Google, Tiktok, CRM, Email... Cần có sẵn các đầu nối hai chiều và API linh hoạt." },
    { question: "Thời gian để thấy được giá trị đầu tiên là bao lâu?", answer: "Lộ trình triển khai phải theo từng giai đoạn. Phải thấy được kết quả đo lường được trong vòng 3-6 tháng đầu tiên, không phải các dự án kéo dài hàng năm." }
];

const AccordionItem: React.FC<{ item: typeof faqItems[0]; isOpen: boolean; onClick: (index: number) => void; index: number; }> = memo(({ item, isOpen, onClick, index }) => {
    const handleClick = useCallback(() => onClick(index), [index, onClick]);

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200/80 overflow-hidden transition-all duration-300 hover:shadow-lg">
            <button
                className="w-full flex justify-between items-center text-left py-5 px-6 gap-4"
                onClick={handleClick}
                aria-expanded={isOpen}
            >
                <span className="text-base md:text-lg font-semibold text-gray-800">{item.question}</span>
                <span className="rounded-full border border-gray-300 w-8 h-8 flex items-center justify-center shrink-0">
                    <i className={`fas fa-chevron-down text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
                </span>
            </button>
            <div
                className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
                <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-gray-600">
                        {item.answer}
                    </p>
                </div>
            </div>
        </div>
    );
});

const FaqSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [showAll, setShowAll] = useState(false);

    const handleToggle = useCallback((index: number) => {
        setOpenIndex(openIndex => openIndex === index ? null : index);
    }, []);

    const displayedItems = showAll ? faqItems : faqItems.slice(0, 5);

  return (
    <section id="faq" className="py-16 md:py-20 bg-slate-50/70">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Câu hỏi thường gặp</h2>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
            {displayedItems.map((item, index) => (
                <AccordionItem
                    key={index}
                    item={item}
                    isOpen={openIndex === index}
                    onClick={handleToggle}
                    index={index}
                />
            ))}
        </div>
        
        {faqItems.length > 5 && (
            <div className="mt-8 text-center">
                <button 
                    onClick={() => setShowAll(!showAll)}
                    className="font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                >
                    {showAll ? 'Thu gọn' : 'Xem thêm 5 câu hỏi'}
                    <i className={`fas fa-chevron-down ml-2 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}></i>
                </button>
            </div>
        )}
      </div>
    </section>
  );
};

export default FaqSection;