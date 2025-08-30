import { useAnalytics } from '~/composables/useAnalytics';

export default defineNuxtPlugin(() => {
    const { trackScrollDepth, trackExternalLink } = useAnalytics();
    const route = useRoute();
    
    if (process.client) {
        let scrollPercentages = [25, 50, 75, 100];
        let triggeredPercentages = new Set();
        
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY;
            const scrollPercentage = Math.round((scrollTop / (documentHeight - windowHeight)) * 100);
            
            scrollPercentages.forEach(percentage => {
                if (scrollPercentage >= percentage && !triggeredPercentages.has(percentage)) {
                    triggeredPercentages.add(percentage);
                    trackScrollDepth(percentage, route.path);
                }
            });
        };
        
        const handleExternalLinks = () => {
            document.addEventListener('click', (e) => {
                const link = e.target.closest('a');
                if (link && link.href) {
                    const url = new URL(link.href, window.location.origin);
                    if (url.hostname !== window.location.hostname) {
                        trackExternalLink(url.href, link.textContent || 'External Link');
                    }
                }
            });
        };
        
        onMounted(() => {
            window.addEventListener('scroll', handleScroll, { passive: true });
            handleExternalLinks();
            
            watch(() => route.path, () => {
                triggeredPercentages.clear();
            });
        });
        
        onUnmounted(() => {
            window.removeEventListener('scroll', handleScroll);
        });
    }
});