<template>
    <!-- hero section  -->
    <section
        class="bg-[url('/assets/images/main-imgs/resources.jpg')] bg-cover bg-left md:bg-top min-h-dvh py-20 w-full px-10 md:px-20 flex items-center"
        id="top"
    >
        <div class="md:max-w-[40%] text-black">
            <!-- text 1 -->
            <h1 class="text-2xl md:text-5xl 4k:text-6xl mb-5">Resources</h1>
            <p class="text-lg 4k:text-3xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lorem tortor, vehicula
                consectetur neque at, pharetra dictum lorem. Vivamus molestie facilisis turpis, ac
                condimentum dolor luctus a. Nulla ut tincidunt nisi, ultricies sollicitudin quam.
                Nunc urna justo, finibus quis vestibulum eget, blandit a odio. Morbi tempus elit ac
                felis hendrerit, a bibendum arcu aliquet. In faucibus tincidunt nibh, nec
                sollicitudin metus. Aenean lacinia ac elit sit amet sagittis. Aliquam sit amet mi
                sed nisl congue consequat.
            </p>
        </div>
    </section>
    <!-- body section  -->
    <section class="bg-[#EBF5D7] py-10 md:py-20">
        <div class="flex flex-col md:flex-row justify-between items-center gap-5">
            <div class="md:basis-1/2 md:ml-20 w-full px-5 md:px-0">
                <NuxtLink
                    to="/what-we-do/denr-application-and-permitting"
                    class="bg-[#547326] hover:bg-[#4c6822] text-white rounded-lg py-3 px-5 w-full block mb-3"
                    >DENR: Application & Permitting</NuxtLink
                >
                <NuxtLink
                    to="/what-we-do/denr-reporting"
                    class="bg-[#547326] hover:bg-[#4c6822] text-white rounded-lg py-3 px-5 w-full block mb-3"
                    >DENR: Reporting</NuxtLink
                >
                <NuxtLink
                    to="/what-we-do/denr-mapping-and-planning"
                    class="bg-[#547326] hover:bg-[#4c6822] text-white rounded-lg py-3 px-5 w-full block mb-3"
                    >DENR: Mapping & Planning</NuxtLink
                >
                <NuxtLink
                    to="/what-we-do/stps-and-wtps"
                    class="bg-[#547326] hover:bg-[#4c6822] text-white rounded-lg py-3 px-5 w-full block mb-3"
                    >STPs & WTPs</NuxtLink
                >
                <NuxtLink
                    to="/what-we-do/chemical-stp-and-ro"
                    class="bg-[#547326] hover:bg-[#4c6822] text-white rounded-lg py-3 px-5 w-full block mb-3"
                    >Chemical: STP & RO</NuxtLink
                >
                <NuxtLink
                    to="/what-we-do/renewable-energy-product-and-technology"
                    class="bg-[#547326] hover:bg-[#4c6822] text-white rounded-lg py-3 px-5 w-full block mb-3"
                    >Renewable Energy Product & Technology</NuxtLink
                >
                <NuxtLink
                    to="/what-we-do/hauling-and-septage"
                    class="bg-[#547326] hover:bg-[#4c6822] text-white rounded-lg py-3 px-5 w-full block mb-3"
                    >Hauling & Septage</NuxtLink
                >
                <NuxtLink
                    to="/what-we-do/saas-development"
                    class="bg-[#547326] hover:bg-[#4c6822] text-white rounded-lg py-3 px-5 w-full block mb-3"
                    >Saas Development</NuxtLink
                >
                <NuxtLink
                    to="/what-we-do/pco-academy"
                    class="bg-[#547326] hover:bg-[#4c6822] text-white rounded-lg py-3 px-5 w-full block mb-3"
                    >PCO Academy</NuxtLink
                >
                <NuxtLink
                    to="/what-we-do/specialized-data-collection-air-quality"
                    class="bg-[#547326] hover:bg-[#4c6822] text-white rounded-lg py-3 px-5 w-full block mb-3"
                    >Specialized Data Collection: Air Quality</NuxtLink
                >
                <NuxtLink
                    to="/what-we-do/denr-professional-and-specialized-authority"
                    class="bg-[#547326] hover:bg-[#4c6822] text-white rounded-lg py-3 px-5 w-full block mb-3"
                    >DENR: Professional & Specialized Authority</NuxtLink
                >
                <NuxtLink
                    to="/what-we-do/autoclave-and-pyrolysis-technology"
                    class="bg-[#547326] hover:bg-[#4c6822] text-white rounded-lg py-3 px-5 w-full block mb-3"
                    >Autoclave and Pyrolysis Technology</NuxtLink
                >
            </div>
            <div>
                <img
                    src="/assets/images/main-imgs/resources-bg.png"
                    class="w-full opacity-50"
                    alt=""
                />
            </div>
        </div>
    </section>
</template>

<script setup>
useHead({
    title: "Resources - Envi-Comm Corporation",
});
</script>

<style lang="scss" scoped></style>
