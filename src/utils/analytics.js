const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_ID;
const FB_PIXEL_ID = import.meta.env.VITE_FB_PIXEL_ID;

// --- GOOGLE ANALYTICS (GA4) ---
export const initGA = () => {
    if (!GA_MEASUREMENT_ID) return;
    if (window.gtag) return;

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, { send_page_view: false });
};

// --- META PIXEL (FACEBOOK) ---
export const initPixel = () => {
    if (!FB_PIXEL_ID) return;
    if (window.fbq) return;

    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');

    window.fbq('init', FB_PIXEL_ID);
};

// --- СПІЛЬНІ ФУНКЦІЇ ---

export const logPageView = (path) => {
    // Google
    if (window.gtag && GA_MEASUREMENT_ID) {
        window.gtag('config', GA_MEASUREMENT_ID, { page_path: path });
    }
    // Facebook
    if (window.fbq && FB_PIXEL_ID) {
        window.fbq('track', 'PageView');
    }
};

export const logEvent = (eventName, params = {}) => {
    // Google
    if (window.gtag) {
        window.gtag('event', eventName, params);
    }

    // Facebook
    if (window.fbq) {
        if (eventName === 'generate_lead') {
            window.fbq('track', 'Lead');
        } else {
            window.fbq('trackCustom', eventName, params);
        }
    }
};