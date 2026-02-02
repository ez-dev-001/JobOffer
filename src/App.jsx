import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import { Essence, Benefits, Locations } from './components/Sections';
import { CallToAction, Footer } from './components/FooterComponents';
import { TRANSLATIONS } from './data/translations';
import { useAnalytics } from './hooks/useAnalytics';

const App = () => {
  const [lang, setLang] = useState('UA');
  const [isScrolled, setIsScrolled] = useState(false);
  const { trackLead } = useAnalytics();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = TRANSLATIONS[lang];

  return (
    <div className="font-sans text-gray-900 bg-white selection:bg-red-100 selection:text-red-900">
      <Header
        lang={lang}
        setLang={setLang}
        isScrolled={isScrolled}
        trackLead={trackLead}
        t={t}
      />
      <main>
        <Hero t={t} trackLead={trackLead} />
        <Essence t={t} />
        <Benefits t={t} />
        <Locations t={t} />
        <CallToAction t={t} trackLead={trackLead} />
      </main>
      <Footer t={t} />
    </div>
  );
};

export default App;
