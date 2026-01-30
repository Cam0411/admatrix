
import React, { useState } from 'react';

const questions = [
  {
    id: 1,
    question: "Dữ liệu của tôi nằm ở đâu? (Data Ownership)",
    details: "Hệ thống phải hỗ trợ kiến trúc Zero-copy hoặc Composable, cho phép dữ liệu nằm nguyên tại Warehouse của bạn (BigQuery, Snowflake). Bạn phải là người nắm giữ chìa khóa."
  },
  {
    id: 2,
    question: "Khả năng 'Identity Resolution' (Hợp nhất định danh) hoạt động như thế nào?",
    details: "Cần có thuật toán ghép nối chính xác (Deterministic & Probabilistic) để tạo ra góc nhìn khách hàng 360 độ chân thực, không phải một cái kho chứa rác."
  },
  {
    id: 3,
    question: "Nền tảng có sẵn sàng cho kỷ nguyên Agentic AI không?",
    details: "Phải có API mở và lớp ngữ nghĩa (Semantic Layer) để các AI Agent có thể truy cập, hiểu và tự động triển khai chiến dịch mà không cần can thiệp thủ công."
  },
  {
    id: 4,
    question: "Độ trễ của dữ liệu từ khi phát sinh đến khi kích hoạt là bao lâu?",
    details: "Khả năng xử lý phải đạt mức Real-time (mili giây) hoặc Near Real-time. Chờ 2 tiếng mới gửi mail khuyến mãi thì đã quá muộn."
  },
  {
    id: 5,
    question: "Giải pháp đáp ứng Nghị định 13 (Việt Nam) và các tiêu chuẩn bảo mật 2026 ra sao?",
    details: "Cần tích hợp sẵn cơ chế quản lý sự đồng ý (Consent Management), mã hóa dữ liệu đầu cuối và các giao thức bảo mật lớp doanh nghiệp."
  },
  {
    id: 6,
    question: "Marketer (không biết code) có tự sử dụng được không?",
    details: "Cần có giao diện kéo thả (No-code) hoặc sử dụng ngôn ngữ tự nhiên (NLQ) để bất kỳ nhân viên Marketing nào cũng có thể lấy insights mà không cần qua IT."
  },
  {
    id: 7,
    question: "Bạn đo lường 'Incremental Lift' (Tăng trưởng thực tế) như thế nào?",
    details: "Hệ thống phải hỗ trợ thử nghiệm A/B Testing ở cấp độ dữ liệu để chứng minh sự tăng trưởng doanh thu thực tế, không phải chỉ số ảo (Vanity Metrics)."
  },
  {
    id: 8,
    question: "Chi phí sẽ tăng trưởng như thế nào theo quy mô dữ liệu?",
    details: "Mô hình giá phải minh bạch, tách biệt giữa chi phí nền tảng và chi phí lưu trữ/xử lý dữ liệu để không bị 'ngã ngửa' khi hóa đơn tăng phi mã."
  },
  {
    id: 9,
    question: "Khả năng kết nối (Activation) với hệ sinh thái quảng cáo hiện có?",
    details: "MDP chỉ có giá trị khi nó 'nói chuyện' được với Facebook, Google, Tiktok, CRM, Email... Cần có sẵn các đầu nối (Connector) hai chiều và API linh hoạt."
  },
  {
    id: 10,
    question: "Thời gian để thấy được giá trị đầu tiên (Time to Value) là bao lâu?",
    details: "Lộ trình triển khai phải theo từng giai đoạn (Quick-wins). Phải thấy được kết quả đo lường được trong vòng 3-6 tháng đầu tiên, không phải các dự án kéo dài hàng năm."
  }
];

const ChecklistItem: React.FC<{ item: typeof questions[0]; index: number }> = ({ item, index }) => {
    const [isChecked, setIsChecked] = useState(false);
    
    return (
        <div className="bg-white border border-gray-200/80 rounded-lg p-6 transition-all duration-300 shadow-sm hover:shadow-lg">
            <label className="flex items-start cursor-pointer">
                <input 
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                    className="mt-1 h-5 w-5 rounded border-gray-300 bg-gray-50 text-blue-600 focus:ring-blue-500 shrink-0"
                />
                <div className="ml-4">
                    <h4 className={`text-base md:text-lg font-bold ${isChecked ? 'text-green-600 line-through' : 'text-gray-900'}`}>
                        {`Câu ${index + 1}: ${item.question}`}
                    </h4>
                    <p className={`mt-2 text-gray-600 transition-opacity duration-300 ${isChecked ? 'opacity-50' : 'opacity-100'}`}>
                        <span className="font-semibold text-blue-700">Câu trả lời kỳ vọng: </span>{item.details}
                    </p>
                </div>
            </label>
        </div>
    )
}

const ChecklistSection: React.FC = () => {
    return (
        <section id="checklist" className="py-16 md:py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <p className="font-bold text-blue-600 uppercase tracking-widest">[BONUS] BẢN KIỂM SOÁT CHIẾN LƯỢC</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 my-4">10 Câu Hỏi CMO Cần "Chất Vấn" Nhà Cung Cấp MDP</h2>
                    <p className="text-base md:text-lg text-gray-500 max-w-3xl mx-auto">
                        Trước khi ký bất kỳ hợp đồng nào vào năm 2026, hãy đảm bảo đối tác của bạn trả lời thỏa đáng những câu hỏi cốt tử này.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto space-y-6">
                    {questions.map((q, i) => (
                        <ChecklistItem key={q.id} item={q} index={i}/>
                    ))}
                </div>
                <div className="mt-12 text-center p-6 bg-purple-50 rounded-lg border border-purple-200 max-w-4xl mx-auto">
                   <p className="text-base md:text-lg italic text-purple-900">"Đừng mua một chiếc Ferrari nếu bạn không có con đường để chạy. Chọn đối tác MDP không chỉ vì công nghệ, mà vì cách họ giúp bạn giải quyết bài toán kinh doanh cụ thể."</p>
                </div>
            </div>
        </section>
    );
};

export default ChecklistSection;