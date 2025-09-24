import { resolve } from "path";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    alias: {
        "@": resolve(__dirname, "/"),
    },
    app: {
        head: {
            meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
            title: "Envi Corp - Consultancy",
            script: [],
            link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
            htmlAttrs: {
                lang: "en",
            },
        },
    },
    css: [
        "swiper/css",
        "swiper/css/navigation",
        "swiper/css/pagination",
        "swiper/css/free-mode",
        "swiper/css/thumbs",
        "~/public/assets/styles/app.min.css",
        "~/public/assets/styles/tailwind.min.css",
        "~/public/css/main.css",
    ],
    modules: [
        [
            "@nuxtjs/google-fonts",
            {
                families: {
                    Poppins: {
                        wght: [300, 400, 500, 600, 700, 800],
                    },
                },
                display: "swap",
                download: true,
                inject: true,
            },
        ],
        "@nuxtjs/tailwindcss",
        "nuxt-aos",
        "nuxt-gtag",
        "@vee-validate/nuxt",
        "@nuxt/image",
    ],
    image: {
        // Options
    },
    gtag: {
        id: process.env.GOOGLE_ANALYTICS_ID, // Replace with your Google Analytics measurement ID
        config: {
            anonymize_ip: true, // Anonymize IP for GDPR compliance
            send_page_view: true, // Automatically send page views
            linker: {
                domains: ["envicomm.org"], // Replace with your actual domain
            },
        },
        debug: true, // Set to false in production
        disableAutoPageTrack: false, // Automatically track page views
    },
    aos: {
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
        initClassName: "aos-init", // class applied after initialization
        animatedClassName: "aos-animate", // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 1000, // values from 0 to 3000, with step 50ms
        easing: "ease", // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    },
});
