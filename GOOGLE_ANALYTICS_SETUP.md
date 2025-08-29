# Google Analytics Setup Guide

## Overview
Google Analytics has been integrated into the Envi-Comm Corporation website using the `nuxt-gtag` module. This implementation tracks user interactions, page views, and key metrics to help understand user behavior and improve the website.

## Configuration

### 1. Update Google Analytics ID
Replace the placeholder ID in `nuxt.config.ts`:

```javascript
gtag: {
    id: "G-XXXXXXXXXX", // Replace with your actual Google Analytics measurement ID
    // ...
}
```

### 2. Update Domain
Update the domain in the linker configuration:

```javascript
linker: {
    domains: ["envicomm.com"], // Replace with your actual domain
}
```

### 3. Production Settings
Before deploying to production, update these settings in `nuxt.config.ts`:

```javascript
gtag: {
    // ...
    debug: false, // Set to false in production
    // ...
}
```

## Tracked Metrics

### Automatic Tracking
- **Page Views**: All page navigations are automatically tracked
- **Scroll Depth**: Tracks when users scroll 25%, 50%, 75%, and 100% of pages
- **External Links**: Tracks clicks on links to external websites

### Custom Events

#### 1. Service Page Views
Tracks when users view specific environmental service pages:
- Event: `view_service`
- Parameters: service_name, service_category

#### 2. Contact Form Submissions
Tracks form submissions on the contact page:
- Event: `generate_lead`
- Parameters: form_type, value

#### 3. Document Downloads
Tracks PDF and other document downloads:
- Event: `file_download`
- Parameters: file_name, file_type

#### 4. Inquiry Button Clicks
Tracks clicks on inquiry/CTA buttons:
- Event: `inquiry_click`
- Parameters: button_location, service_name

## Usage in Components

### Using the Analytics Composable

```javascript
import { useAnalytics } from '~/composables/useAnalytics';

const { 
    trackEvent,
    trackServiceView,
    trackContactFormSubmit,
    trackDownload,
    trackExternalLink
} = useAnalytics();

// Track a custom event
trackEvent('button_click', {
    button_name: 'Learn More',
    page: 'Home'
});

// Track service page view
trackServiceView('Environmental Compliance Certificate', 'DENR Permits');

// Track form submission
trackContactFormSubmit('contact_page');

// Track file download
trackDownload('brochure.pdf', 'PDF');
```

## Testing

### Debug Mode
The implementation is currently in debug mode. You can see Google Analytics events in:
1. Browser console (debug messages)
2. Google Analytics Real-time reports
3. Google Analytics DebugView

### Verify Implementation
1. Open the website at http://localhost:3000
2. Open browser developer console
3. Navigate through pages and interact with forms
4. Look for gtag debug messages in the console
5. Check Google Analytics Real-time reports

## Important Notes

1. **GDPR Compliance**: IP anonymization is enabled by default
2. **Performance**: All tracking is non-blocking and won't affect page load speed
3. **Client-side Only**: Analytics only runs on the client side, not during SSR

## Files Modified

- `nuxt.config.ts` - Added nuxt-gtag module and configuration
- `composables/useAnalytics.js` - Analytics helper functions
- `plugins/analytics.client.js` - Scroll depth and external link tracking
- `components/sections/Contact/Section2.vue` - Contact form tracking
- `pages/services/environmental-compliance-certificate.vue` - Service page tracking example

## Next Steps

1. Get your Google Analytics Measurement ID from [Google Analytics](https://analytics.google.com/)
2. Replace the placeholder ID in `nuxt.config.ts`
3. Test the implementation in development
4. Set `debug: false` before deploying to production
5. Monitor analytics data in Google Analytics dashboard