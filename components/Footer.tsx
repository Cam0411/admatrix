
import React from 'react';

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <li>
    <a href={href} className="text-gray-400 hover:text-white transition-colors duration-300">
      {children}
    </a>
  </li>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#221486] text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Logo & About */}
          <div className="space-y-4">
            <img src="https://ik.imagekit.io/39wvgoqre/Landing%20page%20lead%20magnet/Logo_Font_Admatrix-12-1-1400x264.webp" alt="Admatrix MDP Logo" className="h-10" />
            <p className="text-gray-400">
              Giải pháp toàn diện giúp doanh nghiệp hợp nhất dữ liệu, tối ưu hóa chiến dịch và đưa ra quyết định chính xác hơn.
            </p>
          </div>

          {/* Column 2: About Us Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">VỀ CHÚNG TÔI</h4>
            <ul className="space-y-3">
              <FooterLink href="#">Giới thiệu</FooterLink>
              <FooterLink href="#contact">Liên hệ</FooterLink>
              <FooterLink href="#">Điều khoản dịch vụ</FooterLink>
            </ul>
          </div>

          {/* Column 3: Solutions Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">GIẢI PHÁP</h4>
            <ul className="space-y-3">
              <FooterLink href="#solution">Giải pháp MDP</FooterLink>
              <FooterLink href="#">Bảng giá</FooterLink>
              <FooterLink href="#">Đối tác</FooterLink>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">THÔNG TIN LIÊN HỆ</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 shrink-0"></i>
                <span>Lầu 6, 88-90-92 Nguyễn Đình Chiểu, Phường Đa Kao, Quận 1, TPHCM</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone mt-1 mr-3 shrink-0"></i>
                <a href="tel:02899959659" className="hover:text-white">028 999 59 659</a>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-3 shrink-0"></i>
                <a href="mailto:cs@admatrix.vn" className="hover:text-white">cs@admatrix.vn</a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
                <a href="#" className="text-gray-400 hover:text-white text-2xl"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-gray-400 hover:text-white text-2xl"><i className="fab fa-youtube"></i></a>
                <a href="#" className="text-gray-400 hover:text-white text-2xl"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-blue-900/50">
        <div className="container mx-auto px-6 py-6 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Admatrix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
