<template>
    <section>
        <Swiper
            :modules="modules"
            :slides-per-view="1"
            :space-between="0"
            :loop="true"
            :pagination="{
                clickable: true,
                el: '.swiper-pagination',
            }"
            :navigation="{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }"
            :autoplay="{
                delay: 5000,
                disableOnInteraction: false,
            }"
            class="mySwiper relative min-h-dvh md:h-screen w-full overflow-hidden"
        >
            <!-- Slide 1 -->
            <SwiperSlide class="min-h-dvh md:h-screen w-full">
                <div
                    class="relative py-10 md:py-0 min-h-dvh md:h-screen w-full bg-center bg-cover bg-no-repeat bg-[url('/assets/images/main-imgs/info-01.jpg')]"
                >
                    <div class="absolute inset-0 bg-black opacity-30"></div>
                    <div
                        class="relative z-10 flex flex-col gap-20 justify-center items-center text-white text-center h-full px-6 md:px-10"
                    >
                        <h2 class="text-3xl md:text-5xl mb-10 md:max-w-[70%]" data-aos="fade-up">
                            Unlock the Benefits of Partnering with Envi-comm for Your Business
                        </h2>
                        <div
                            class="grid grid-cols-1 md:grid-cols-2 gap-5 w-full md:max-w-[50%] justify-items-center"
                        >
                            <div
                                class="max-w-[450px] bg-black/50 p-4"
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                <h3 class="text-3xl mb-2">MISSION</h3>
                                <p class="text-xl md:text-2xl">
                                    We strive to deliver unparalleled service across different
                                    fields of expertise and provide service reliability that exceeds
                                    our Customer’s standards and expectations
                                </p>
                            </div>
                            <div
                                class="max-w-[450px] bg-black/50 p-4"
                                data-aos="fade-up"
                                data-aos-delay="600"
                            >
                                <h3 class="text-3xl mb-2">VISION</h3>
                                <p class="text-xl md:text-2xl">
                                    We aim to be the national leader in providing reliable
                                    environmental compliance and consultancy solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <!-- Slide 2 -->
            <SwiperSlide class="min-h-dvh md:h-screen w-full">
                <div
                    class="relative py-10 md:py-0 min-h-dvh md:h-screen w-full bg-center bg-cover bg-no-repeat bg-[url('/assets/images/main-imgs/info-02.jpg')]"
                >
                    <div class="absolute inset-0 bg-black opacity-30"></div>
                    <div
                        class="relative z-10 flex flex-col gap-20 justify-center items-center text-white text-center h-full px-6 md:px-10"
                    >
                        <h2 class="text-3xl md:text-5xl md:max-w-[70%]" data-aos="fade-up">
                            Unlock the Benefits of Partnering with Envi-comm for Your Business
                        </h2>
                        <div class="w-full md:max-w-[70%]">
                            <h3 class="text-3xl mb-6 uppercase">Core Values</h3>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-5 justify-items-center">
                                <div
                                    class="max-w-[450px] bg-black/50 p-4"
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                >
                                    <h4 class="text-2xl md:text-3xl mb-2 uppercase">Integrity</h4>
                                    <p class="text-xl md:text-2xl">
                                        We value our relationships with co-workers, clients, and
                                        shareholders. With this in mind: truth, honesty, and
                                        accountability in our professional dealings are of the
                                        utmost importance.
                                    </p>
                                </div>
                                <div
                                    class="max-w-[450px] bg-black/50 p-4"
                                    data-aos="fade-up"
                                    data-aos-delay="600"
                                >
                                    <h4 class="text-2xl md:text-3xl mb-2 uppercase">
                                        Professionalism
                                    </h4>
                                    <p class="text-xl md:text-2xl">
                                        As a consultancy firm, we seek to achieve work with quality
                                        by conducting professional and expertise competence
                                        according to the highest ethics and proficiency standards
                                    </p>
                                </div>
                                <div
                                    class="max-w-[450px] bg-black/50 p-4"
                                    data-aos="fade-up"
                                    data-aos-delay="900"
                                >
                                    <h4 class="text-2xl md:text-3xl mb-2 uppercase">
                                        Unparalleled Service
                                    </h4>
                                    <p class="text-xl md:text-2xl">
                                        We provide maximum value and flexibility with minimum risk
                                        to our clients. We focus on finding the balance between
                                        preserving the natural environment and urban development
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <!-- Navigation Buttons -->
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>

            <!-- Pagination -->
            <div class="swiper-pagination hidden md:block"></div>
        </Swiper>
    </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            modules: [Navigation, Pagination, Autoplay],
        };
    },
};
</script>

<style scoped>
.mySwiper .swiper-button-next,
.mySwiper .swiper-button-prev {
    color: white;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 50%;
    width: 36px;
    height: 36px;
    top: 50%;
    transform: translateY(-50%);
}
.mySwiper .swiper-button-next::after,
.mySwiper .swiper-button-prev::after {
    font-size: 18px;
    font-weight: bold;
}
.mySwiper .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background: rgba(255, 255, 255, 0.5);
    opacity: 1;
}
:deep(.mySwiper .swiper-pagination-bullet-active) {
    background: #547326 !important;
}
</style>
