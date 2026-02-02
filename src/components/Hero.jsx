import React from 'react';
import { Heart, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

const Hero = ({ t, trackLead }) => (
  <header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
        alt="Team"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-white"></div>
    </div>

    <div className="container mx-auto px-4 z-10 relative text-center text-white mt-[-50px]">
      <Reveal>
        <div className="inline-flex items-center gap-2 bg-red-600 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 shadow-lg shadow-red-600/30 animate-bounce">
          <Heart size={12} className="fill-current" /> {t.hero.badge}
        </div>
      </Reveal>

      <Reveal delay={200}>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6 drop-shadow-2xl tracking-tight uppercase">
          {t.hero.title}
        </h1>
      </Reveal>

      <Reveal delay={400}>
        <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
          {t.hero.subtitle}
        </p>
      </Reveal>

      <Reveal delay={600}>
        <button
          onClick={trackLead}
          className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full text-lg shadow-[0_0_40px_-10px_rgba(220,38,38,0.7)] transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
        >
          <span>{t.hero.cta}</span>
          <ArrowRight size={20} />
        </button>
      </Reveal>
    </div>
  </header>
);

export default Hero;
