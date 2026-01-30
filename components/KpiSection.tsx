
import React from 'react';

const kpiData = [
    { category: 'Marketing', oldKpi: 'Impressions, Clicks, CPC', newKpi: 'Real ROI / Real ROAS', strategy: 'Lợi nhuận thực tế sau khi trừ hết giá vốn, phí sàn, vận hành trên từng đồng quảng cáo.' },
    { category: 'Hiệu quả Ads', oldKpi: 'Ad Spend (Tổng chi tiêu)', newKpi: 'CAC (Cost Per Acquisition) đa kênh', strategy: 'Chi phí thực tế để có 1 khách hàng mới (tính gộp cả Ads ngoại sàn và nội sàn).' },
    { category: 'Sản phẩm', oldKpi: 'Số lượng bán ra', newKpi: 'Contribution Margin (Lãi gộp sau phí)', strategy: 'Sản phẩm bán chạy chưa chắc đã lãi nếu phí sàn và phí Ads quá cao.' },
    { category: 'Khách hàng', oldKpi: 'Tổng lượng khách hàng', newKpi: 'Retention Rate & Cohort', strategy: 'Tỷ lệ khách hàng quay lại. Nếu <10%, mô hình kinh doanh đang "thủng đáy".' },
    { category: 'Vận hành', oldKpi: 'Tỷ lệ hoàn (Return Rate)', newKpi: 'Loss Rate (Tỷ lệ mất hàng)', strategy: 'Tỷ lệ đơn hoàn trả nhưng không về kho. Đây là tiền mất đi mà không ai để ý.' },
];

const KpiSection: React.FC = () => {
    return (
        <section id="kpi" className="py-16 md:py-20 bg-slate-50/70">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Bảng Chỉ Số Đo Lường Hiệu Quả Mới</h2>
                    <p className="text-base md:text-lg text-gray-500 max-w-3xl mx-auto">
                        Đừng Nhìn GMV Ảo, Hãy Nhìn Vào Sự Thật. Đây là các chỉ số "sống còn" mà một CMO/CEO cần theo dõi.
                    </p>
                </div>

                <div className="overflow-x-auto bg-white rounded-lg shadow-md border border-gray-200">
                    <table className="w-full min-w-[800px] text-left">
                        <thead className="bg-slate-100">
                            <tr className="border-b border-gray-200">
                                <th className="p-4 text-base md:text-lg font-semibold text-gray-800">Hạng mục</th>
                                <th className="p-4 text-base md:text-lg font-semibold text-red-600">Chỉ số Cũ (Nên bỏ/Hạn chế)</th>
                                <th className="p-4 text-base md:text-lg font-semibold text-green-600">Chỉ số Mới (Cần theo dõi trên MDP)</th>
                                <th className="p-4 text-base md:text-lg font-semibold text-gray-800">Ý nghĩa chiến lược</th>
                            </tr>
                        </thead>
                        <tbody>
                            {kpiData.map((item) => (
                                <tr key={item.category} className="border-b border-gray-200 last:border-b-0 hover:bg-slate-50 transition-colors">
                                    <td className="p-4 font-bold text-gray-900">{item.category}</td>
                                    <td className="p-4 text-gray-500 line-through">{item.oldKpi}</td>
                                    <td className="p-4 font-bold text-lg text-green-700">{item.newKpi}</td>
                                    <td className="p-4 text-gray-600 max-w-xs">{item.strategy}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-16 py-16 text-center rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50">
                    <div className="container mx-auto px-6">
                        <h2 className="text-xl font-bold text-blue-700 uppercase tracking-widest">Admatrix MDP</h2>
                        <p className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4">
                        Sẵn Sàng Bứt Phá Cùng Dữ Liệu?
                        </p>
                        <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                        Nếu doanh nghiệp là một chiếc xe đua, Admatrix MDP chính là bảng điều khiển thông minh giúp bạn nhìn rõ tốc độ và nhiên liệu để nhấn ga bứt phá mà không sợ "lật xe" giữa đường.
                        </p>
                        <a 
                        href="#contact" 
                        className="inline-block bg-[#221486] text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-900 transition-all transform hover:scale-105 text-lg"
                        >
                        Đăng ký trải nghiệm
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KpiSection;
