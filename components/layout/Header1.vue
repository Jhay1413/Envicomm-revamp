<template>
    <header
        class="h-auto full-width relative py-[15px] first-letter:lg:py-[26px] bg-black"
        :class="{ 'sticky-header': scroll }"
    >
        <div
            class="px-[12px] md:px-[36px] xl:px-0 mt-0 flex items-center justify-between mx-auto relative md:max-w-[90%]"
        >
            <NuxtLink class="flex" href="/"
                ><NuxtImg
                    class="logo z-50 w-[90px] md:w-[90px] lg:w-[122px] xl:w-[138px]"
                    src="/assets/images/main-imgs/main-logo-light.png"
                    alt="logo image"
            /></NuxtLink>
            <ul class="flex items-center gap-5 md:hidden mr-[50px]">
                <li class="flex items-center group">
                    <NuxtLink class="menu-link mr-[7px]" to="/contact-us">
                        <img src="/assets/images/icons/contact.svg" alt="contact" class="w-[50x]" />
                    </NuxtLink>
                </li>
                <li class="flex items-center group">
                    <NuxtLink class="menu-link mr-[7px]" to="/">
                        <img src="/assets/images/icons/search.svg" alt="search" class="w-[50x]" />
                    </NuxtLink>
                </li>
            </ul>
            <nav class="z-50 hidden lg:block">
                <LayoutMenu />
            </nav>
        </div>
        <LayoutSidebarMenu />
    </header>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from "vue";
const scroll = ref(false);
const handleScroll = () => {
    const scrollCheck = window.scrollY > 100;
    if (scrollCheck !== scroll.value) {
        scroll.value = scrollCheck;
    }
};
onMounted(() => {
    document.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
    document.removeEventListener("scroll", handleScroll);
});
</script>
