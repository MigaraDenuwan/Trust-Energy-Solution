import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src="/images/Trust_Energy_Solution.png" alt="logo" className="h-[50px] w-[110px] px-1 py-1 mr-2" /> 
          <span className="text-xl font-bold text-gray-800">Trust Energy Solutions</span>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex items-center space-x-8">
          <a href="#services" className="text-gray-600 hover:text-yellow-500 transition-colors">
            Services
          </a>
          <a href="#benefits" className="text-gray-600 hover:text-yellow-500 transition-colors">
            Benefits
          </a>
          <a href="#about" className="text-gray-600 hover:text-yellow-500 transition-colors">
            About Us
          </a>
          <a href="#testimonials" className="text-gray-600 hover:text-yellow-500 transition-colors">
            Testimonials
          </a>
          <a href="#contact" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
            Contact Us
          </a>
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden px-4 py-4 text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden bg-white py-2">
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            <a href="#services" className="text-gray-600 hover:text-yellow-500 py-2 transition-colors">
              Services
            </a>
            <a href="#benefits" className="text-gray-600 hover:text-yellow-500 py-2 transition-colors">
              Benefits
            </a>
            <a href="#about" className="text-gray-600 hover:text-yellow-500 py-2 transition-colors">
              About Us
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-yellow-500 py-2 transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors w-full text-center">
              Contact Us
            </a>
          </div>
        </div>}
    </header>;
}