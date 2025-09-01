export const useAnalytics = () => {
    const { gtag } = useGtag();

    const trackEvent = (eventName, parameters = {}) => {
        if (!gtag) return;
        
        gtag('event', eventName, {
            ...parameters,
            timestamp: new Date().toISOString(),
        });
    };

    const trackServiceView = (serviceName, serviceCategory = 'Environmental Services') => {
        trackEvent('view_service', {
            service_name: serviceName,
            service_category: serviceCategory,
            event_category: 'Service Engagement',
        });
    };

    const trackContactFormSubmit = (formType = 'general') => {
        trackEvent('generate_lead', {
            form_type: formType,
            event_category: 'Lead Generation',
            value: 1,
        });
    };

    const trackInquiryButtonClick = (location, serviceName = null) => {
        trackEvent('inquiry_click', {
            button_location: location,
            service_name: serviceName,
            event_category: 'User Interaction',
        });
    };

    const trackDownload = (fileName, fileType) => {
        trackEvent('file_download', {
            file_name: fileName,
            file_type: fileType,
            event_category: 'Downloads',
        });
    };

    const trackScrollDepth = (percentage, pageName) => {
        trackEvent('scroll_depth', {
            scroll_percentage: percentage,
            page_name: pageName,
            event_category: 'Engagement',
        });
    };

    const trackExternalLink = (url, linkText) => {
        trackEvent('external_link_click', {
            link_url: url,
            link_text: linkText,
            event_category: 'Outbound Links',
        });
    };

    const trackVideoPlay = (videoTitle, videoLocation) => {
        trackEvent('video_play', {
            video_title: videoTitle,
            video_location: videoLocation,
            event_category: 'Media Engagement',
        });
    };

    const trackSearch = (searchTerm) => {
        trackEvent('search', {
            search_term: searchTerm,
            event_category: 'Site Search',
        });
    };

    return {
        trackEvent,
        trackServiceView,
        trackContactFormSubmit,
        trackInquiryButtonClick,
        trackDownload,
        trackScrollDepth,
        trackExternalLink,
        trackVideoPlay,
        trackSearch,
    };
};