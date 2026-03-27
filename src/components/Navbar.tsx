import React, { useState } from 'react';
import { Phone, MapPin, Clock, Menu, X, Eye } from 'lucide-react';
import { useDynamicParams } from '../hooks/useDynamicParams';

export function Navbar() {
  const params = useDynamicParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2 px-4 md:px-8 text-sm hidden md:flex justify-between items-center">
        <div className="flex space-x-6">
          <div className="flex items-center space-x-2">
            <Phone size={16} />
            <span>Emergency: +1 (800) 123-4567</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock size={16} />
            <span>Mon - Sat: 8:00 AM - 8:00 PM</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <MapPin size={16} />
          <span>123 Vision Way, Medical District, NY 10001</span>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center space-x-2">
              <Eye className="h-10 w-10 text-blue-600" />
              <span className="font-bold text-2xl text-blue-900">{params.businessName || 'VisionCare'}</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-slate-700 hover:text-blue-600 font-medium">Home</a>
              <a href="#about" className="text-slate-700 hover:text-blue-600 font-medium">About Us</a>
              <a href="#services" className="text-slate-700 hover:text-blue-600 font-medium">Specialties</a>
              <a href="#doctors" className="text-slate-700 hover:text-blue-600 font-medium">Our Doctors</a>
              <a href="#contact" className="text-slate-700 hover:text-blue-600 font-medium">Contact</a>
              <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
                Book Appointment
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-700">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block px-3 py-2 text-slate-700 font-medium">Home</a>
              <a href="#about" className="block px-3 py-2 text-slate-700 font-medium">About Us</a>
              <a href="#services" className="block px-3 py-2 text-slate-700 font-medium">Specialties</a>
              <a href="#doctors" className="block px-3 py-2 text-slate-700 font-medium">Our Doctors</a>
              <a href="#contact" className="block px-3 py-2 text-slate-700 font-medium">Contact</a>
              <button className="w-full text-left px-3 py-2 text-blue-600 font-bold">
                Book Appointment
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
