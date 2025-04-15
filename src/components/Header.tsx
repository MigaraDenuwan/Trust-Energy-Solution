import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import { useState } from 'react';
import { MenuIcon, Search, XIcon } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[rgb(255, 255, 255)] shadow-md sticky top-0 z-50 backdrop-blur-md">
      <div className="container flex items-center justify-between px-4">
        <div className="flex items-center mr-auto">
          <img
            src="/images/Trust_Energy_Solutions__2.png"
            alt="logo"
            className="h-[70px] w-[170px] px-1 py-1"
          />
        </div>

        {/* Desktop Navigation & Search */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Search bar with icon */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-64 pl-10 pr-4 py-2 border border-[#404040] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FAB111] transition"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-[#404040]" size={18} />
          </div>
          <nav className="flex items-center space-x-6">
            <a href="#services" className="text-[#093464] hover:text-[#FAB111] font-bold transition-colors">
              Services
            </a>
            <a href="#benefits" className="text-[#093464] hover:text-[#FAB111] font-bold transition-colors">
              Benefits
            </a>
            <a href="#about" className="text-[#093464] hover:text-[#FAB111] font-bold transition-colors">
              About Us
            </a>
            <a href="#testimonials" className="text-[#093464] hover:text-[#FAB111] font-bold transition-colors">
              Testimonials
            </a>
            <Link to="/contact" className="bg-[#FAB111] text-white px-4 py-2 rounded-md hover:bg-[#C35919] font-bold transition-colors">
              Contact Us
            </Link>
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden px-4 py-4 text-[#C35919]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-transparent py-2">
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FAB111] transition"
            />
            <a href="#services" className="text-[#093464] hover:text-[#FAB111] font-bold py-2 transition-colors">
              Services
            </a>
            <a href="#benefits" className="text-[#093464] hover:text-[#FAB111] font-bold py-2 transition-colors">
              Benefits
            </a>
            <a href="#about" className="text-[#093464] hover:text-[#FAB111] font-bold py-2 transition-colors">
              About Us
            </a>
            <a href="#testimonials" className="text-[#093464] hover:text-[#FAB111] font-bold py-2 transition-colors">
              Testimonials
            </a>
            <Link to="/contact" className="bg-[#FAB111] text-white px-4 py-2 rounded-md hover:bg-[#C35919] font-bold transition-colors w-full text-center">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
