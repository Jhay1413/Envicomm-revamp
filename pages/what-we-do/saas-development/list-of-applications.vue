<template>
    <!-- hero section  -->
    <section
        class="relative bg-[url('/assets/images/main-imgs/what-we-do/saas-development.jpg')] bg-cover bg-left md:bg-top min-h-[400px] 4k:min-h-[1000px] py-20 4k:py-40 w-full px-10 md:px-20"
    >
        <div
            class="absolute inset-0 bg-[radial-gradient(white_1.5px,transparent_1.5px)] bg-[length:18px_18px] opacity-20"
        ></div>
        <div class="md:max-w-[35%] text-white">
            <h1 class="text-2xl md:text-5xl 4k:text-6xl mb-5">Saas Development</h1>
            <p class="text-xl md:text-2xl 4k:text-3xl">
                Lorem ipsum dolor sit amet. A numquam voluptas ex ullam expedita eum aliquam
                laboriosam et enim Quis ut voluptas unde. Eum eligendi autem eum accusamus fugit sed
                laborum laborum hic voluptates ullam est reiciendis accusantium
            </p>
        </div>
    </section>
    <!-- list of application  -->
    <section class="py-10 md:py-20">
        <div class="container">
            <div class="grid grid-cols-1 md:grid-cols-3 4k:grid-cols-5 gap-5">
                <!-- item 1  -->
                <NuxtLink
                    class="relative h-[150px] group"
                    to="/what-we-do/denr-reporting/compliance-monitoring-report"
                >
                    <div
                        class="absolute inset-0 w-full h-full opacity-100 z-10 group-hover:opacity-0 group-active:opacity-100 group-active:bg-[#86B93F] transition-all duration-300 bg-[#547326] py-8 px-10 rounded-lg flex items-center justify-center"
                    >
                        <h3 class="text-white text-lg md:text-xl 4k:text-3xl text-center">-</h3>
                    </div>
                    <div
                        class="flex justify-center items-center w-full h-full text-black bg-white border-[3px] border-[#547326] py-5 px-3 rounded-lg"
                    >
                        <p class="text-md md:text-base 4k:text-lg text-center">-</p>
                    </div>
                </NuxtLink>
                <!-- item 2  -->
                <NuxtLink
                    class="relative group"
                    to="/what-we-do/denr-reporting/self-monitoring-report"
                >
                    <div
                        class="absolute inset-0 w-full h-full opacity-100 z-10 group-hover:opacity-0 group-active:opacity-100 group-active:bg-[#86B93F] transition-all duration-300 bg-[#547326] py-8 px-10 rounded-lg flex items-center justify-center"
                    >
                        <h3 class="text-white text-lg md:text-xl 4k:text-3xl text-center">-</h3>
                    </div>
                    <div
                        class="flex justify-center items-center w-full h-full text-black bg-white border-[3px] border-[#547326] py-5 px-3 rounded-lg"
                    >
                        <p class="text-md md:text-base 4k:text-lg text-center">-</p>
                    </div>
                </NuxtLink>
                <!-- item 3  -->
                <NuxtLink class="relative group" to="/coming-soon">
                    <div
                        class="absolute inset-0 w-full h-full opacity-100 z-10 group-hover:opacity-0 group-active:opacity-100 group-active:bg-[#86B93F] transition-all duration-300 bg-[#547326] py-8 px-10 rounded-lg flex items-center justify-center"
                    >
                        <h3 class="text-white text-lg md:text-xl 4k:text-3xl text-center">-</h3>
                    </div>
                    <div
                        class="flex justify-center items-center w-full h-full text-black bg-white border-[3px] border-[#547326] py-5 px-3 rounded-lg"
                    >
                        <p class="text-md md:text-base 4k:text-lg text-center">-</p>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup>
useHead({
    title: "List of Saas Development - Envi-Comm Corporation",
});
</script>

<style lang="scss" scoped></style>
