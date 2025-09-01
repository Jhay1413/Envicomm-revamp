<template>
    <div
        @click="handleToggle"
        :class="{ 'burger-close': isToggled }"
        class="burger-icon burger-icon-white menu__icon md:hidden"
    >
        <span class="burger-icon-top"></span><span class="burger-icon-mid"> </span
        ><span class="burger-icon-bottom"></span>
    </div>
    <nav
        :class="{ 'opacity-0 pointer-events-none ': !isToggled }"
        class="fixed top-0 right-0 bg-white flex flex-col h-screen nav-shadow overflow-y-scroll nav-mobile transition-all duration-200 w-[380px] z-[100]"
    >
        <div class="p-[30px] flex flex-col justify-between h-full">
            <ul class="font-medium text-[16px] leading-[16px]">
                <li class="group menu-mobile-item py-[13px]" @click="handleToggle()">
                    <NuxtLink
                        to="/"
                        class="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]"
                        active-class="text-green-900"
                    >
                        <p>Home</p>
                    </NuxtLink>
                </li>
                <li class="group menu-mobile-item py-[13px]" @click="handleToggle()">
                    <NuxtLink
                        to="/about"
                        class="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]"
                        active-class="text-green-900"
                    >
                        <p>About</p>
                    </NuxtLink>
                </li>
                <li class="group menu-mobile-item py-[13px]" @click="handleToggle()">
                    <NuxtLink
                        to="/services"
                        class="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]"
                        active-class="text-green-900"
                    >
                        <p>Services</p>
                    </NuxtLink>
                </li>
                <li class="group menu-mobile-item py-[13px]" @click="handleToggle()">
                    <NuxtLink
                        to="/careers"
                        class="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]"
                        active-class="text-green-900"
                    >
                        <p>Careers</p>
                    </NuxtLink>
                </li>
                <li class="group menu-mobile-item py-[13px]" @click="handleToggle()">
                    <NuxtLink
                        to="/contact"
                        class="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]"
                        active-class="text-green-900"
                    >
                        <p>Contact</p>
                    </NuxtLink>
                </li>
                <li class="group menu-mobile-item py-[13px]" @click="handleToggle()">
                    <NuxtLink
                        to="/resources"
                        class="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]"
                        active-class="text-green-900"
                    >
                        <p>Resources</p>
                    </NuxtLink>
                </li>
            </ul>
            <div class="text-gray-400 text-[13px]">Copyright 2025 © Envi Corp.</div>
        </div>
    </nav>
    <div class="overlay" :class="{ show: isToggled }" @click="handleToggle"></div>
</template>
<script setup>
import { ref } from "vue";
const isToggled = ref(false);
const handleToggle = () => {
    isToggled.value = !isToggled.value;
};
</script>
