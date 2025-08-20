<template>
    <div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] text-center lg:mt-[50px]">
        <span
            class="inline-block bg-bg-6 text-green-900 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[29px] md:mb-[43px]"
            >What We Do, What You Get</span
        >
        <div class="text-center mb-[35px] md:mb-[50px]">
            <h2
                class="font-bold mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]"
            >
                Clear Guidance. <span class="text-green-900">Green </span>Future.
            </h2>
            <p class="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]">
                "Guiding Your Path to Green: Your Environmental Compliance Consulting Firm."
            </p>
        </div>
        <div class="flex items-center justify-center gap-[22px] mb-[40px] md:mb-[70px]">
            <button type="button">
                <NuxtLink
                    class="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 bg-black text-heading-6 tracking-wide"
                    to="/about"
                    ><span
                        class="block text-inherit w-full h-full rounded-[50px] text-lg font-semibold"
                        >Discover More</span
                    ><i>
                        <img
                            class="ml-[7px] w-[12px] filter-white group-hover:filter-black"
                            src="/assets/images/icons/icon-right.svg"
                            alt="arrow right icon" /></i
                ></NuxtLink>
            </button>
        </div>
    </div>
</template>
<script>
import ModalVideo from "../components/elements/ModalVideo.vue";
export default {
    components: {
        ModalVideo,
    },
    data: () => {
        return {
            videoIsOpen: false,
        };
    },
    methods: {
        openVideo() {
            this.videoIsOpen = !this.videoIsOpen;
        },
    },
    computed: {
        videoChannel: function () {
            //Logic to extract based on URL
            return "youtube";
        },
        videoId: function () {
            //Logic to extract based on URL
            return "QiqQoqtnHrk";
        },
    },
};
</script>
