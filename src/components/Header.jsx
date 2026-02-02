import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const Header = ({ lang, setLang, isScrolled, trackLead, t }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div
          className={`font-bold text-2xl tracking-tighter flex items-center gap-1 z-50 transition-colors ${
            isScrolled || mobileMenuOpen ? 'text-gray-900' : 'text-white'
          }`}
        >
          JOB<span className="text-red-600">POLAND</span>
          <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4">
          {/* Animated Lang Switcher */}
          <div
            className={`relative flex items-center bg-white/20 backdrop-blur-md rounded-full p-1 border transition-colors h-8 w-20 cursor-pointer ${
              isScrolled ? 'border-gray-200 bg-gray-100' : 'border-white/30'
            }`}
          >
            {/* The Sliding Pill */}
            <div
              className={`absolute top-1 bottom-1 w-[34px] bg-red-600 rounded-full shadow-sm transition-transform duration-300 ease-out ${
                lang === 'PL' ? 'translate-x-[38px]' : 'translate-x-0'
              }`}
            ></div>

            <button
              onClick={() => setLang('UA')}
              className={`relative z-10 w-1/2 text-[10px] font-bold transition-colors ${
                lang === 'UA'
                  ? 'text-white'
                  : isScrolled
                  ? 'text-gray-500'
                  : 'text-white/70'
              }`}
            >
              UA
            </button>
            <button
              onClick={() => setLang('PL')}
              className={`relative z-10 w-1/2 text-[10px] font-bold transition-colors ${
                lang === 'PL'
                  ? 'text-white'
                  : isScrolled
                  ? 'text-gray-500'
                  : 'text-white/70'
              }`}
            >
              PL
            </button>
          </div>

          <button
            onClick={trackLead}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 md:px-6 rounded-full transition-all shadow-lg flex items-center gap-2 text-sm hover:scale-105"
          >
            <MessageCircle size={18} />
            <span className="hidden md:inline">{t.nav.btn}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
