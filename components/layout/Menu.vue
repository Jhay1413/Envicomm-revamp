<template>
    <ul class="navbar flex flex-col justify-center gap-[34px] lg:flex-row">
        <li class="flex items-center group">
            <NuxtLink
                class="text-white hover:text-green-900 uppercase text-clamp font-inter menu-link lg:text-heading-6 mr-[7px]"
                to="/"
                >Home</NuxtLink
            >
        </li>
        <li class="flex items-center group">
            <NuxtLink
                class="text-white hover:text-green-900 uppercase text-clamp font-inter menu-link lg:text-heading-6 mr-[7px]"
                to="/coming-soon"
                >About</NuxtLink
            >
        </li>
        <li class="flex items-center group">
            <NuxtLink
                class="text-white hover:text-green-900 uppercase text-clamp font-inter menu-link lg:text-heading-6 mr-[7px]"
                to="/coming-soon"
                >Services</NuxtLink
            >
            <!-- <i><img class="icon-caret group-hover:filter-green" src="/assets/images/icons/icon-caret.svg" alt="caret" /></i> -->
            <!-- <ul class="menu-child opacity-0 bg-white top-full z-50 py-2 grid menu-shadow -translate-x-6 translate-y-8 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto lg:absolute rounded-[4px] group-hover:grid group-hover:opacity-100 before:content-[''] before:block before:absolute before:w-full before:h-12 before:top-[-35px] before:left-0 grid-cols-1 w-[185px]">
                <li class="menu-child-item  group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="sv1">
                    <NuxtLink class="flex items-center text-[14px]" to="/what-we-do-1"><img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]" src="/assets/images/icons/icon-gem.svg" alt="" /><span class="whitespace-nowrap">Services 01</span></NuxtLink>
                </li>
                <li class="menu-child-item  group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="sv2">
                    <NuxtLink class="flex items-center text-[14px]" to="/what-we-do-2"><img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]" src="/assets/images/icons/icon-gem.svg" alt="" /><span class="whitespace-nowrap">Services 02</span></NuxtLink>
                </li>
                <li class="hr px-[22px]"><span class="block bg-gray-100 w-full h-[1px] my-[5px]"></span></li>
                <li class="menu-child-item  group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="p1">
                    <NuxtLink class="flex items-center text-[14px]" to="/pricing-1"><img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]" src="/assets/images/icons/icon-dataclamp.svg" alt="" /><span class="whitespace-nowrap">Pricing 01</span></NuxtLink>
                </li>
                <li class="menu-child-item  group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="p2">
                    <NuxtLink class="flex items-center text-[14px]" to="/pricing-2"><img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]" src="/assets/images/icons/icon-dataclamp.svg" alt="" /><span class="whitespace-nowrap">Pricing 02</span></NuxtLink>
                </li>
                <li class="hr px-[22px]"><span class="block bg-gray-100 w-full h-[1px] my-[5px]"></span></li>
                <li class="menu-child-item  group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="faqs1">
                    <NuxtLink class="flex items-center text-[14px]" to="/faqs-1"><img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]" src="/assets/images/icons/icon-headset.svg" alt="" /><span class="whitespace-nowrap">FAQS 01</span></NuxtLink>
                </li>
                <li class="menu-child-item  group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="faqs2">
                    <NuxtLink class="flex items-center text-[14px]" to="/faqs-2"><img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]" src="/assets/images/icons/icon-headset.svg" alt="" /><span class="whitespace-nowrap">FAQS 02</span></NuxtLink>
                </li>
                <li class="hr px-[22px]"><span class="block bg-gray-100 w-full h-[1px] my-[5px]"></span></li>
                <li class="menu-child-item  group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="career">
                    <NuxtLink class="flex items-center text-[14px]" to="/career"><img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]" src="/assets/images/icons/icon-briefcase.svg" alt="" /><span class="whitespace-nowrap">Career</span></NuxtLink>
                </li>
                <li class="menu-child-item  group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="career-details">
                    <NuxtLink class="flex items-center text-[14px]" to="/career-details"><img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]" src="/assets/images/icons/icon-briefcase.svg" alt="" /><span class="whitespace-nowrap">Career Detials</span></NuxtLink>
                </li>
            </ul> -->
        </li>
        <li class="flex items-center group">
            <NuxtLink
                class="text-white hover:text-green-900 uppercase text-clamp font-inter menu-link lg:text-heading-6 mr-[7px]"
                to="/coming-soon"
                >Careers</NuxtLink
            >
        </li>
        <li class="flex items-center group">
            <NuxtLink
                class="text-white hover:text-green-900 uppercase text-clamp font-inter menu-link lg:text-heading-6 mr-[7px]"
                to="/coming-soon"
                >Contact</NuxtLink
            >
        </li>
        <li class="flex items-center group">
            <NuxtLink
                class="text-white hover:text-green-900 uppercase text-clamp font-inter menu-link lg:text-heading-6 mr-[7px]"
                to="/coming-soon"
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
