
import React, { memo } from 'react';

const StatCard: React.FC<{ icon: string; title: string; subtitle: string }> = memo(({ icon, title, subtitle }) => (
    <div className="flex items-center gap-4">
        <div className="bg-blue-900/50 rounded-lg p-3">
            <i className={`fas ${icon} text-2xl text-blue-300`}></i>
        </div>
        <div>
            <h4 className="font-bold text-white text-lg">{title}</h4>
            <p className="text-gray-400">{subtitle}</p>
        </div>
    </div>
));

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0d1863] to-[#0c0f3a] text-white" id="home">
       <div 
        className="absolute inset-0 opacity-10" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}>
       </div>
       <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
         <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column: Text Content */}
            <div className="text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4 bg-gradient-to-r from-blue-300 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                    THE E-COMMERCE DATA PLAYBOOK 2025-2026
                </h1>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-100 mb-6">
                    GIẢI MÃ "HỘP ĐEN" TĂNG TRƯỞNG
                </h2>
                <p className="text-base md:text-lg text-gray-300 max-w-xl mx-auto md:mx-0 mb-8">
                    Dành cho Doanh nghiệp E-commerce (Doanh thu &gt;1.5 tỷ/tháng) đang muốn thoát khỏi "địa ngục Excel" và chuyển sang quản trị doanh nghiệp minh bạch, tự động và dựa trên dữ liệu thật.
                </p>
                <a href="#checklist" className="bg-slate-900/80 hover:bg-slate-900 border border-slate-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg shadow-black/30 transition-all transform hover:scale-105 text-lg inline-block">
                    Đăng ký trải nghiệm
                </a>
            </div>

            {/* Right Column: Image */}
            <div className="relative flex justify-center items-center">
                 <img 
                    src="https://ik.imagekit.io/39wvgoqre/Landing%20page%20lead%20magnet/MainSection1-768x715.webp?updatedAt=1769678781440" 
                    alt="Admatrix MDP Dashboard on Mobile" 
                    className="w-full max-w-lg mx-auto z-10"
                />
                {/* floating stats from image */}
                <div className="hidden lg:block absolute top-0 right-0 bg-blue-500/20 backdrop-blur-md p-3 rounded-lg shadow-xl border border-blue-400/50 animate-float z-20">
                    <p className="text-white font-bold flex items-center"><i className="fas fa-building mr-2 text-blue-300"></i>Doanh nghiệp</p>
                    <p className="text-3xl font-bold text-white">600+</p>
                    <p className="text-gray-300">Đăng ký sử dụng</p>
                </div>
                 <div className="hidden lg:block absolute bottom-1/4 -left-10 bg-blue-500/20 backdrop-blur-md p-3 rounded-lg shadow-xl border border-blue-400/50 animate-float-delay z-20">
                    <p className="text-white font-bold flex items-center"><i className="fas fa-layer-group mr-2 text-blue-300"></i>Nền Tảng</p>
                    <p className="text-3xl font-bold text-white">35+</p>
                    <p className="text-gray-300">Phổ Biến Được Kết Nối</p>
                </div>
                 <div className="hidden lg:block absolute bottom-0 right-0 bg-blue-500/20 backdrop-blur-md p-3 rounded-lg shadow-xl border border-blue-400/50 animate-float-fast z-20">
                    <p className="text-white font-bold flex items-center"><i className="fas fa-bell mr-2 text-blue-300"></i>Dòng Dữ Liệu</p>
                    <p className="text-3xl font-bold text-white">4 triệu</p>
                    <p className="text-gray-300">Được đồng bộ và tối ưu</p>
                </div>
            </div>
         </div>
         {/* Bottom stats row */}
         <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 text-center md:text-left">
             <StatCard icon="fa-database" title="Proprietary Data" subtitle="Dữ liệu của riêng doanh nghiệp"/>
             <StatCard icon="fa-robot" title="Automation report" subtitle="Tự động hợp nhất và báo cáo"/>
             <StatCard icon="fa-cogs" title="Hơn 35+ nền tảng" subtitle="Được phân tích và tối ưu"/>
         </div>
      </div>
      <style>{`
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
        }
        .animate-float {
            animation: float 6s ease-in-out infinite;
        }
        .animate-float-delay {
            animation: float 6s ease-in-out infinite 2s;
        }
        .animate-float-fast {
             animation: float 5s ease-in-out infinite 1s;
        }
      `}</style>
    </section>
  );
};

export default Hero;