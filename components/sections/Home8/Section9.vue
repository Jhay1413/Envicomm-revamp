<template>
    <section
        class="relative bg-[url('/assets/images/main-imgs/consult.webp')] bg-cover bg-center bg-fixed flex justify-center items-center px-10 md:px-20 h-screen"
    >
        <div class="absolute inset-0 bg-black opacity-50 z-1"></div>
        <div class="text-center z-10">
            <h2
                class="text-2xl md:text-5xl font-semibold uppercase text-white mb-5"
                data-aos="fade-up"
            >
                Get Your Free Consultation Today
            </h2>
            <p class="text-white text-md md:text-2xl mb-5" data-aos="fade-up" data-aos-delay="300">
                Discover how we can help your business thrive sustainably.
            </p>
            <div class="flex justify-center gap-5">
                <NuxtLink
                    to="/contact"
                    class="text-clamp text-black bg-white py-2 px-5 rounded hover:bg-black hover:text-white transition-all duration-200"
                    data-aos="fade-up"
                    data-aos-delay="600"
                    >Contact Us</NuxtLink
                >
                <NuxtLink
                    to="/contact"
                    class="text-clamp text-white border-2 border-white py-2 px-5 rounded hover:bg-white hover:text-black transition-all duration-200"
                    data-aos="fade-up"
                    data-aos-delay="900"
                    >Learn More</NuxtLink
                >
            </div>
        </div>
    </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
