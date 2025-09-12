<template>
    <ul class="navbar text-white flex flex-col justify-center gap-[34px] lg:flex-row">
        <li class="flex items-center group">
            <NuxtLink
                class="hover:text-green-900 uppercase text-clamp font-inter menu-link lg:text-heading-6 mr-[7px]"
                to="/"
                active-class="text-green-900 font-bold"
                >Home</NuxtLink
            >
        </li>
        <li class="flex items-center group">
            <NuxtLink
                class="hover:text-green-900 uppercase text-clamp font-inter menu-link lg:text-heading-6 mr-[7px]"
                to="/about"
                active-class="text-green-900 font-bold"
                >About</NuxtLink
            >
        </li>
        <li class="flex items-center group">
            <NuxtLink
                class="hover:text-green-900 uppercase text-clamp font-inter menu-link lg:text-heading-6 mr-[7px]"
                to="/services"
                active-class="text-green-900 font-bold"
                >Services</NuxtLink
            >
        </li>
        <li class="flex items-center group">
            <NuxtLink
                class="hover:text-green-900 uppercase text-clamp font-inter menu-link lg:text-heading-6 mr-[7px]"
                to="/careers"
                active-class="text-green-900 font-bold"
                >Careers</NuxtLink
            >
        </li>
        <li class="flex items-center group">
            <NuxtLink
                class="hover:text-green-900 uppercase text-clamp font-inter menu-link lg:text-heading-6 mr-[7px]"
                to="/contact"
                active-class="text-green-900 font-bold"
                >Contact</NuxtLink
            >
        </li>
        <li class="flex items-center group">
            <NuxtLink
                class="hover:text-green-900 uppercase text-clamp font-inter menu-link lg:text-heading-6 mr-[7px]"
                to="/resources"
                active-class="text-green-900 font-bold"
                >Resources</NuxtLink
            >
        </li>

        <li class="flex items-center group">
            <NuxtLink class="menu-link mr-[7px]" to="/coming-soon">
                <img src="/assets/images/icons/contact.svg" alt="contact" class="w-[50x]" />
            </NuxtLink>
        </li>
        <li class="flex items-center group">
            <NuxtLink class="menu-link mr-[7px]" to="/coming-soon">
                <img src="/assets/images/icons/search.svg" alt="search" class="w-[50x]" />
            </NuxtLink>
        </li>
    </ul>
</template>
