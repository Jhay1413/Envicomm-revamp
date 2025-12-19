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
        <li class="relative flex items-center group">
  <button
    class="uppercase text-clamp font-inter menu-link lg:text-heading-6 mr-[7px] hover:text-green-900 flex items-center"
  >
    Services
    <span class="ml-1">▼</span>
  </button>

  <!-- Dropdown -->
  <ul
    class="absolute left-0 top-full mt-2 bg-white text-black shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[180px] z-50"
  >
    <li>
      <NuxtLink
        to="/#section3"
        class="block px-4 py-2 hover:bg-gray-100"
      >
        What We Do
      </NuxtLink>
    </li>
    <li>
      <NuxtLink
        to="/services-catalog"
        class="block px-4 py-2 hover:bg-gray-100"
      >
        Service Catalog
      </NuxtLink>
    </li>
  </ul>
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
                to="/contact-us"
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

        <!-- <li class="flex items-center group">
            <NuxtLink class="menu-link mr-[7px]" to="/coming-soon">
                <NuxtImg src="/assets/images/icons/contact.svg" alt="contact" class="w-[50x]" />
            </NuxtLink>
        </li> -->
        <!-- <li class="flex items-center group">
            <NuxtLink class="menu-link mr-[7px]" to="/coming-soon">
                <NuxtImg src="/assets/images/icons/search.svg" alt="search" class="w-[50x]" />
            </NuxtLink>
        </li> -->
    </ul>
</template>
