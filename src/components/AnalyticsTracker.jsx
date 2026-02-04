import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initGA, initPixel, logPageView } from '../utils/analytics';

const AnalyticsTracker = () => {
    const location = useLocation();

    useEffect(() => {
        initGA();
        initPixel();
    }, []);

    useEffect(() => {
        logPageView(location.pathname + location.search);
    }, [location]);

    return null;
};

export default AnalyticsTracker;