import React, { useState } from 'react';
import {
    Users,
    MessageCircle,
    Wallet,
    Globe,
    GraduationCap,
    MapPin,
    CheckCircle,
} from 'lucide-react';
import Reveal from './Reveal';

export const Essence = ({ t }) => {
    const icons = [Users, MessageCircle, Wallet];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <Reveal>
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-black mb-6 text-gray-900 uppercase tracking-tight">
                            {t.essence.title}
                        </h2>
                        <p className="text-gray-600 text-lg md:text-xl font-light">
                            {t.essence.subtitle}
                        </p>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {t.essence.cards.map((card, idx) => {
                        const Icon = icons[idx];
                        return (
                            <Reveal key={idx} delay={idx * 100}>
                                <div className="flex flex-col items-center text-center group cursor-default">
                                    <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center text-red-600 mb-6 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white group-hover:scale-110 shadow-sm">
                                        <Icon size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 uppercase tracking-wide">
                                        {card.title}
                                    </h3>
                                    <p className="text-gray-500 leading-relaxed px-2">
                                        {card.text}
                                    </p>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export const Benefits = ({ t }) => {
    const icons = [Wallet, Globe, Users, GraduationCap];

    return (
        <section className="py-24 bg-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-4">
                <Reveal>
                    <h2 className="text-center text-3xl md:text-5xl font-black mb-16 text-gray-900 uppercase">
                        {t.benefits.title}
                    </h2>
                </Reveal>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {t.benefits.cards.map((card, idx) => {
                        const Icon = icons[idx];
                        return (
                            <Reveal key={idx} delay={idx * 100}>
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-red-900/5 transition-all duration-300 hover:-translate-y-1 flex gap-5 items-start h-full">
                                    <div className="p-3 bg-red-50 rounded-xl shrink-0 text-red-600">
                                        <Icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                                            {card.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm leading-relaxed">
                                            {card.text}
                                        </p>
                                    </div>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export const Locations = ({ t }) => {
    // Беремо перший query зі списку (Krakow) як початковий
    const [activeCity, setActiveCity] = useState(t.locations.list[0].query);

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <Reveal>
                    <div className="max-w-6xl mx-auto bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="p-10 md:p-16 flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                                        <MapPin size={24} />
                                    </div>
                                    <h2 className="text-3xl font-bold uppercase tracking-tight">
                                        {t.locations.title}
                                    </h2>
                                </div>
                                <div className="space-y-4">
                                    {t.locations.list.map((loc, idx) => (
                                        <div
                                            key={idx}
                                            // --- ЛОГІКА ВЗАЄМОДІЇ ---
                                            // 1. Для ПК: спрацьовує, коли мишка наводиться на елемент
                                            onMouseEnter={() => setActiveCity(loc.query)}
                                            // 2. Для Телефону: спрацьовує, коли користувач натискає пальцем
                                            onClick={() => setActiveCity(loc.query)}

                                            className={`flex items-center p-4 rounded-xl transition-all cursor-pointer border-b border-gray-50 last:border-0 ${
                                                activeCity === loc.query
                                                    ? 'bg-red-50 scale-105 shadow-sm'
                                                    : 'hover:bg-gray-50'
                                            }`}
                                        >
                                            <CheckCircle
                                                className={`mr-4 transition-colors ${
                                                    activeCity === loc.query ? 'text-red-600' : 'text-gray-300'
                                                }`}
                                                size={20}
                                            />
                                            <div>
                                                <h4 className={`font-bold text-lg ${
                                                    activeCity === loc.query ? 'text-red-700' : 'text-gray-900'
                                                }`}>
                                                    {loc.city}
                                                </h4>
                                                <p className="text-sm text-gray-500">{loc.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Google Maps Iframe */}
                            <div className="bg-gray-100 relative min-h-[400px] h-full w-full">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    frameBorder="0"
                                    scrolling="no"
                                    marginHeight="0"
                                    marginWidth="0"
                                    title="Google Maps"
                                    src={`https://maps.google.com/maps?q=${activeCity},Poland&t=&z=12&ie=UTF8&iwloc=&output=embed`}
                                    className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                                ></iframe>
                                <div className="absolute inset-0 bg-red-600/5 pointer-events-none mix-blend-multiply"></div>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};