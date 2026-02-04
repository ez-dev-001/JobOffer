import { logEvent } from '../utils/analytics';

export const useAnalytics = () => {
    const TELEGRAM_LINK = 'https://t.me/vlad_ivanch';

    const trackLead = () => {
        console.log('[Analytics] Lead Captured');

        // Відправляємо подію в усі підключені системи
        logEvent('generate_lead', {
            event_category: 'Contact',
            event_label: 'Telegram Button',
            value: 1
        });

        if (window.ttq) {
            window.ttq.track('ClickButton');
        }

        window.open(TELEGRAM_LINK, '_blank');
    };

    return { trackLead };
};