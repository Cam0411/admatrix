
import React, { useState, memo } from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode; hasDropdown?: boolean }> = memo(({ href, children, hasDropdown }) => (
    <a href={href} className="flex items-center gap-1 text-white/90 hover:text-white transition-colors font-medium">
        {children}
        {hasDropdown && <i className="fas fa-chevron-down text-xs"></i>}
    </a>
));

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: 'HOME', href: '#home' },
        { name: 'BẢNG GIÁ', href: '#' },
        { name: 'DỊCH VỤ', href: '#', dropdown: true },
        { name: 'GIẢI PHÁP', href: '#solution', dropdown: true },
        { name: 'ĐỐI TÁC', href: '#', dropdown: true },
        { name: 'BLOG', href: '#', dropdown: true },
        { name: 'GIỚI THIỆU', href: '#', dropdown: true },
    ];

  return (
    <header className="sticky top-0 z-50 bg-[#221486]">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#home">
            <img src="https://ik.imagekit.io/39wvgoqre/Landing%20page%20lead%20magnet/Logo_Font_Admatrix-12-1-1400x264.webp" alt="Admatrix MDP Logo" className="h-10" />
        </a>
        
        <nav className="hidden lg:flex space-x-8 items-center">
          {navItems.map(item => (
              <NavLink key={item.name} href={item.href} hasDropdown={item.dropdown}>
                  {item.name}
              </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
            <a href="#solution" className="border border-white text-white font-bold py-2 px-5 rounded-full hover:bg-white hover:text-[#221486] transition-all duration-300">
                GIẢI PHÁP MDP
            </a>
            <button className="text-white/90 hover:text-white">
                <i className="fas fa-search text-xl"></i>
            </button>
        </div>

        <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                <i className="fas fa-bars text-2xl"></i>
            </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
          <div className="lg:hidden bg-[#221486] border-t border-blue-800">
              <nav className="flex flex-col items-center space-y-4 p-4">
                  {navItems.map(item => (
                      <NavLink key={item.name} href={item.href} hasDropdown={item.dropdown}>
                          {item.name}
                      </NavLink>
                  ))}
                  <a href="#solution" className="w-full text-center border border-white text-white font-bold py-2 px-5 rounded-full hover:bg-white hover:text-[#221486] transition-all duration-300">
                      GIẢI PHÁP MDP
                  </a>
              </nav>
          </div>
      )}
    </header>
  );
};

export default Header;