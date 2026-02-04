import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useParams, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import { Essence, Benefits, Locations } from './components/Sections';
import { CallToAction, Footer } from './components/FooterComponents';
import { TRANSLATIONS } from './data/translations';
import { useAnalytics } from './hooks/useAnalytics';

// Компонент страницы, который получает язык из URL
const LandingPage = () => {
    const { lang } = useParams(); // Получаем параметр из URL (например, "ru" или "ua")
    const navigate = useNavigate();
    const { trackLead } = useAnalytics();
    const [isScrolled, setIsScrolled] = useState(false);

    // Приводим к верхнему регистру, чтобы искать в TRANSLATIONS (UA, RU)
    const currentLang = lang ? lang.toUpperCase() : 'UA';

    // Проверка: если языка нет в переводах, редиректим на UA
    useEffect(() => {
        if (!TRANSLATIONS[currentLang]) {
            navigate('/ua', { replace: true });
        }
    }, [currentLang, navigate]);

    // SEO: Меняем заголовок страницы
    useEffect(() => {
        if (currentLang === 'UA') {
            document.title = 'JobPoland - Робота в Польщі для молоді';
            document.documentElement.lang = 'uk';
        } else {
            document.title = 'JobPoland - Работа в Польше для молодежи';
            document.documentElement.lang = 'ru';
        }
    }, [currentLang]);

    // Скролл эффект
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Если язык некорректный, пока ничего не рендерим (сработает редирект выше)
    if (!TRANSLATIONS[currentLang]) return null;

    const t = TRANSLATIONS[currentLang];

    return (
        <div className="font-sans text-gray-900 bg-white selection:bg-red-100 selection:text-red-900">
            <Header
                lang={currentLang}
                // Вместо setLang мы теперь просто меняем URL
                setLang={(newLang) => navigate(`/${newLang.toLowerCase()}`)}
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

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Редирект с главной на украинскую версию по умолчанию */}
                <Route path="/" element={<Navigate to="/ua" replace />} />

                {/* Динамический маршрут: :lang будет захватывать "ua", "ru" и т.д. */}
                <Route path="/:lang" element={<LandingPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;