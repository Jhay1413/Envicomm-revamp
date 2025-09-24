<template>
    <section class="relative">
        <h1
            class="text-3xl md:text-5xl md:pl-20 4k:pl-40 text-center md:text-left font-bold py-10 text-white bg-[#547326] 4k:text-6xl"
        >
            {{ title }}
        </h1>
        <div class="px-5 md:px-20 4k:px-40">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-5 justify-items-center py-10 4k:py-40">
                <!-- Mobile Image -->
                <div class="md:hidden">
                    <NuxtImg :src="image" :alt="title" class="w-full" />
                </div>

                <!-- Text -->
                <div class="text-[13px] 4k:text-2xl md:min-w-[500px]">
                    <slot name="details"></slot>
                </div>

                <!-- Form -->
                <div class="w-full md:w-[380px] 4k:w-[500px]">
                    <SectionsCareerApplyForm />
                </div>

                <!-- Desktop Image -->
                <div class="hidden md:block">
                    <NuxtImg
                        :src="image"
                        :alt="title"
                        class="w-full md:max-w-[500px] 4k:max-w-[1100px] absolute top-20 right-10 4k:right-40"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
defineProps({
    title: String,
    image: String,
});
</script>
