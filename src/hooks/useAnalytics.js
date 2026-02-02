export const useAnalytics = () => {
  // ЗАМІНИТИ НА ВАШ ЛІНК
  const TELEGRAM_LINK = 'https://t.me/vlad_ivanch';

  const trackLead = () => {
    console.log('[Analytics] Lead Captured');

    if (window.fbq) {
      window.fbq('track', 'Lead');
      window.fbq('track', 'Contact');
    }

    if (window.ttq) {
      window.ttq.track('ClickButton');
    }

    window.open(TELEGRAM_LINK, '_blank');
  };

  return { trackLead };
};
