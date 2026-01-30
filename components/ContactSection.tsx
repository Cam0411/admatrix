
import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-20 bg-purple-100/60">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Image */}
          <div className="max-lg:hidden">
            <img 
              src="https://admatrix.vn/wp-content/uploads/2025/11/TPH_3057-1200x800.jpg" 
              alt="Admatrix Team discussing data solutions" 
              className="rounded-2xl shadow-2xl w-full h-full object-cover"
              style={{ maxHeight: '650px' }}
            />
          </div>

          {/* Right Side: Form */}
          <div className="bg-white p-6 md:p-12 rounded-2xl shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Sẵn sàng chuyển đổi?</h2>
            <p className="text-gray-600 mb-8">Để lại thông tin, đội ngũ chuyên gia của Admatrix sẽ tư vấn 1-1 về lộ trình xây dựng "Hệ Thần Kinh Dữ Liệu" dành riêng cho doanh nghiệp của bạn.</p>
            
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Họ tên
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nhập họ tên"
                  className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Số điện thoại
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Nhập số điện thoại"
                  className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Nhập email"
                  className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Nội dung
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Nhập nội dung"
                  className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-bold text-white bg-[#221486] hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  GỬI ĐI
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;