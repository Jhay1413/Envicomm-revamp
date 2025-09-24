<template>
    <swiper
        :slides-per-view="2"
        :space-between="10"
        :loop="true"
        :autoplay="{
            delay: 3000,
            disableOnInteraction: true,
        }"
        :pagination="{
            el: '.swiper-pagination',
            clickable: true,
        }"
        :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }"
        :breakpoints="{
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
        }"
        :modules="modules"
        class="feedback-list"
    >
        <swiper-slide
            class="p-10 flex flex-col border-8 transition-all duration-300 hover:translate-y-[-2px] mt-[2px] border-bg-2"
        >
            <div>
                <NuxtImg
                    src="/assets/images/main-imgs/rating.png"
                    alt="rating-stars"
                    class="w-[200px] mb-5 mx-auto"
                />
                <p class="text-lg md:text-xl text-black uppercase mb-5">
                    "I am very satisfied with the service provided by Envi-comm. The quality of
                    their work is excellent, and both the staff and team leader are highly
                    professional in their respective fields.”
                </p>
            </div>

            <div class="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                    <NuxtImg
                        class="max-w-[70px] object-cover mb-[22px] drop-shadow-md rounded-full"
                        src="/assets/images/main-imgs/logo-01.png"
                        alt="avatar"
                    />
                </div>
                <div class="md:text-left">
                    <p class="text-heading-6 font-bold mb-[6px]">EASTLAND PROPERTY VENTURES, INC</p>
                    <p class="text-sm md:text-md font-semibold text-gray-700">
                        Proposed 10-Storey Socialized Condominium Development
                    </p>
                </div>
            </div>
        </swiper-slide>

        <swiper-slide
            class="p-10 flex flex-col border-8 transition-all duration-300 hover:translate-y-[-2px] mt-[2px] border-bg-2"
        >
            <div>
                <NuxtImg
                    src="/assets/images/main-imgs/rating.png"
                    alt="rating-stars"
                    class="w-[200px] mb-5 mx-auto"
                />
                <p class="text-lg md:text-xl text-black uppercase mb-5">
                    “We are very satisfied with your service, and if I'm going to rate it from 1 to
                    10, it is always 10.”
                </p>
            </div>

            <div class="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                    <NuxtImg
                        class="max-w-[70px] object-cover mb-[22px] drop-shadow-md rounded-full"
                        src="/assets/images/main-imgs/logo-02.png"
                        alt="avatar"
                    />
                </div>
                <div class="md:text-left">
                    <p class="text-heading-6 font-bold mb-[6px]">HAGNAYA BEACH RESORT</p>
                    <p class="text-sm md:text-md font-semibold text-gray-700">
                        Beach Resort Project
                    </p>
                </div>
            </div>
        </swiper-slide>

        <swiper-slide
            class="p-10 flex flex-col border-8 transition-all duration-300 hover:translate-y-[-2px] mt-[2px] border-bg-2"
        >
            <div>
                <NuxtImg
                    src="/assets/images/main-imgs/rating.png"
                    alt="rating-stars"
                    class="w-[200px] mb-5 mx-auto"
                />
                <p class="text-lg md:text-xl text-black uppercase mb-5">
                    "So far, I love the service here at Envi-comm Corporation, and I can truly say
                    that their service is excellent."
                </p>
            </div>

            <div class="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                    <NuxtImg
                        class="max-w-[70px] object-cover mb-[22px] drop-shadow-md rounded-full"
                        src="/assets/images/main-imgs/logo-03.png"
                        alt="avatar"
                    />
                </div>
                <div class="md:text-left">
                    <p class="text-heading-6 font-bold mb-[6px]">
                        SHEMBERG-INGREDIENTS GUMS AND CORPORATION
                    </p>
                    <p class="text-sm md:text-md font-semibold text-gray-700">
                        SHEMBERG-INGREDIENTS GUMS AND CORPORATION
                    </p>
                </div>
            </div>
        </swiper-slide>

        <swiper-slide
            class="p-10 flex flex-col border-8 transition-all duration-300 hover:translate-y-[-2px] mt-[2px] border-bg-2"
        >
            <div>
                <NuxtImg
                    src="/assets/images/main-imgs/rating.png"
                    alt="rating-stars"
                    class="w-[200px] mb-5 mx-auto"
                />
                <p class="text-lg md:text-xl text-black uppercase mb-5">
                    "Very Helpful and accommodating."
                </p>
            </div>

            <div class="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                    <NuxtImg
                        class="max-w-[70px] object-cover mb-[22px] drop-shadow-md rounded-full"
                        src="/assets/images/main-imgs/logo-04.png"
                        alt="avatar"
                    />
                </div>
                <div class="md:text-left">
                    <p class="text-heading-6 font-bold mb-[6px]">
                        Panasonic Manufacturing Philippines Coporation
                    </p>
                    <p class="text-sm md:text-md font-semibold text-gray-700">PANASONIC CEBU</p>
                </div>
            </div>
        </swiper-slide>
        <!-- Navigation Buttons -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </swiper>
</template>
<script>
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Autoplay, Pagination, Navigation],
        };
    },
};
</script>

<style scoped>
:deep(.swiper-slide) {
    height: 600px !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: space-between !important;
    align-items: center !important;
    text-align: center !important;
}
.feedback-list {
    margin-inline: 10px !important;
}

@media (min-width: 1024px) {
    :deep(.swiper-slide) {
        height: 400px !important;
    }
    .feedback-list {
        margin-inline: 30px !important;
    }
}

/* Custom navigation buttons */
:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
    background: rgba(0, 0, 0, 0.5);
    color: white;
    width: 28px;
    height: 28px;
    border-radius: 9999px;
    display: flex;
    justify-content: center;
    align-items: center;
}

:deep(.swiper-button-prev::after),
:deep(.swiper-button-next::after) {
    font-size: 18px;
    font-weight: bold;
}
</style>
