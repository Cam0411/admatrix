
import React from 'react';

const SolutionSection: React.FC = () => {
  return (
    <section id="solution" className="py-16 md:py-20 bg-slate-50/70">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">   Từ "Vận Hành Thủ Công" sang <span className="bg-gradient-to-r from-blue-600 to-purple-500 text-transparent bg-clip-text">          "Người Giám Sát AI".</span></h2>
            <p className="text-base md:text-lg text-gray-500 max-w-3xl mx-auto">
 Vai trò của bạn không phải là "chạy ads", mà là "cung cấp nhiên liệu cho AI". Nhiên liệu đó chính là <span className="font-bold text-gray-800">Dữ liệu nội bộ chính xác.</span>
            </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
                <img src="https://ik.imagekit.io/39wvgoqre/Landing%20page%20lead%20magnet/MDP-717x400.png" alt="Admatrix MDP Architecture" className="rounded-2xl shadow-2xl shadow-blue-500/10"/>
            </div>
            <div className="md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Admatrix MDP: "Hệ Thần Kinh Trung Ương" Của Doanh Nghiệp Bán Lẻ</h3>
                <p className="text-gray-600 mb-6 text-base md:text-lg">
                    Thay vì những file Excel rời rạc, kiến trúc MDP (Marketing Data Platform) thế hệ mới hoạt động như một bộ não tập trung, hợp nhất mọi nguồn dữ liệu, mang lại cho bạn một nguồn sự thật duy nhất.
                </p>
                <div className="space-y-4">
                    <div className="flex items-start">
                        <i className="fas fa-brain text-2xl text-blue-600 mt-1 mr-4"></i>
                        <div>
                            <h4 className="font-bold text-xl text-gray-800">Số là số</h4>
                            <p className="text-gray-500">Không còn chỗ cho "ước lượng". Lỗ là lỗ, lãi là lãi. Ra quyết định dựa trên sự thật, không phải cảm tính.</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <i className="fas fa-bullseye text-2xl text-blue-600 mt-1 mr-4"></i>
                        <div>
                            <h4 className="font-bold text-xl text-gray-800">Tư duy "Bắn bia 10 điểm"</h4>
                            <p className="text-gray-500">Dùng dữ liệu để tìm ra đâu là "bia 10 điểm" (kênh/sản phẩm hiệu quả nhất) và dồn lực vào đó để tối ưu hóa lợi nhuận.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;