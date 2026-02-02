import React from 'react';
import { MessageCircle } from 'lucide-react';
import Reveal from './Reveal';

export const CallToAction = ({ t, trackLead }) => (
  <section className="py-24 bg-red-600 relative text-white text-center overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-5 rounded-full animate-ping"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-white opacity-5 rounded-full animate-pulse"></div>
    </div>
    <div className="container mx-auto px-4 relative z-10">
      <Reveal>
        <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase">
          {t.cta.title}
        </h2>
        <p className="text-xl text-red-100 mb-12 max-w-2xl mx-auto font-medium">
          {t.cta.subtitle}
        </p>
        <button
          onClick={trackLead}
          className="group relative inline-flex items-center justify-center px-10 py-6 text-xl font-bold text-red-600 transition-all duration-300 bg-white rounded-full hover:shadow-[0_0_50px_-10px_rgba(255,255,255,0.5)] transform hover:-translate-y-1 cursor-pointer"
        >
          <span className="mr-3">{t.cta.button}</span>
          <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        </button>
      </Reveal>
    </div>
  </section>
);

export const Footer = ({ t }) => (
  <footer className="py-10 border-t border-gray-800 text-white bg-gray-900">
    <div className="container mx-auto px-4 text-center">
      <div className="font-bold text-2xl tracking-tighter mb-4">
        JOB<span className="text-red-600">POLAND</span>
      </div>
      <div className="flex justify-center gap-6 text-gray-400 text-sm mb-8">
        <a href="https://t.me/vlad_ivanch" className="hover:text-white transition-colors">
          Telegram
        </a>
      </div>
      <p className="text-gray-600 text-xs">
        &copy; 2026 JobPoland. {t.footer.rights}
      </p>
    </div>
  </footer>
);
