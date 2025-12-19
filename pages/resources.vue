<template>
  <!-- hero section  -->
  <section
    class="bg-[url('/assets/images/main-imgs/resources.webp')] bg-cover bg-left md:bg-top min-h-dvh py-20 w-full px-10 md:px-20 flex items-center"
    id="top"
  >
    <div class="md:max-w-[40%] text-black">
      <!-- text 1 -->
      <h1 class="text-2xl md:text-5xl 4k:text-6xl mb-5">Resources</h1>
      <p class="text-lg 4k:text-3xl mb-5">
       Welcome to the Envi-Comm Corporation Resource Hub. Below you will find a complete catalog of our environmental compliance, consulting, engineering, and technology solutions.
      </p>
      <p class="text-lg 4k:text-3xl">Click on any main category to reveal a detailed sub-list of the specific services and products we offer to help your business achieve sustainability and full regulatory compliance.</p>
    </div>
  </section>
  <!-- body section  -->
  <section class="bg-[#EBF5D7] py-10 md:py-20">
    <div class="flex flex-col md:flex-row justify-center items-center gap-5">
      <div class="md:basis-1/2 md:ml-20 w-full px-5 md:px-0">
        <NuxtLink
          to="/what-we-do/denr-application-and-permitting/list-of-applications"
          class="bg-[#547326] hover:bg-[#4c6822] text-white rounded-lg py-3 px-5 w-full block mb-3"
          >DENR: Application & Permitting</NuxtLink
        >
        <NuxtLink
          to="/what-we-do/denr-reporting/list-of-applications"
          class="bg-[#547326] hover:bg-[#4c6822] text-white rounded-lg py-3 px-5 w-full block mb-3"
          >DENR: Reporting</NuxtLink
        >
        <NuxtLink
          to="/what-we-do/denr-mapping-and-planning/list-of-applications"
          class="bg-[#547326] hover:bg-[#4c6822] text-white rounded-lg py-3 px-5 w-full block mb-3"
          >DENR: Mapping & Planning</NuxtLink
        >
        <NuxtLink
          to="/what-we-do/stps-and-wtps/list-of-applications"
          class="bg-[#547326] hover:bg-[#4c6822] text-white rounded-lg py-3 px-5 w-full block mb-3"
          >STPs & WTPs</NuxtLink
        >
        <NuxtLink
          to="/what-we-do/chemical-stp-and-ro/list-of-applications"
          class="bg-[#547326] hover:bg-[#4c6822] text-white rounded-lg py-3 px-5 w-full block mb-3"
          >Chemical: STP & RO</NuxtLink
        >
        <NuxtLink
          to="/what-we-do/renewable-energy-product-and-technology/list-of-applications"
          class="bg-[#547326] hover:bg-[#4c6822] text-white rounded-lg py-3 px-5 w-full block mb-3"
          >Renewable Energy Product & Technology</NuxtLink
        >
        <NuxtLink
          to="/what-we-do/hauling-and-septage/list-of-applications"
          class="bg-[#547326] hover:bg-[#4c6822] text-white rounded-lg py-3 px-5 w-full block mb-3"
          >Hauling & Septage</NuxtLink
        >
        <NuxtLink
          to="/what-we-do/saas-development/list-of-applications"
          class="bg-[#547326] hover:bg-[#4c6822] text-white rounded-lg py-3 px-5 w-full block mb-3"
          >Saas Development</NuxtLink
        >
        <NuxtLink
          to="/what-we-do/pco-academy/list-of-applications"
          class="bg-[#547326] hover:bg-[#4c6822] text-white rounded-lg py-3 px-5 w-full block mb-3"
          >PCO Academy</NuxtLink
        >
        <NuxtLink
          to="/what-we-do/specialized-data-collection-air-quality/list-of-applications"
          class="bg-[#547326] hover:bg-[#4c6822] text-white rounded-lg py-3 px-5 w-full block mb-3"
          >Specialized Data Collection: Air Quality</NuxtLink
        >
        <NuxtLink
          to="/what-we-do/denr-professional-and-specialized-authority/list-of-applications"
          class="bg-[#547326] hover:bg-[#4c6822] text-white rounded-lg py-3 px-5 w-full block mb-3"
          >DENR: Professional & Specialized Authority</NuxtLink
        >
        <NuxtLink
          to="/what-we-do/autoclave-and-pyrolysis-technology/list-of-applications"
          class="bg-[#547326] hover:bg-[#4c6822] text-white rounded-lg py-3 px-5 w-full block mb-3"
          >Autoclave and Pyrolysis Technology</NuxtLink
        >
      </div>
      <div class="bg-white w-full max-w-xl rounded-xl shadow-lg p-8">
    <h2 class="text-2xl font-semibold text-center text-gray-800 uppercase">
      Are you looking for something specific?
    </h2>
    <p class="text-center text-gray-600 mt-2 mb-6">
      Let Us Help You!
    </p>

    <form class="space-y-5">
      <!-- Name -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input
          type="text"
          class="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
        />
      </div>

      <!-- Email -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          class="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
        />
      </div>

      <!-- Message -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea
          rows="4"
          placeholder="What are you looking for?"
          class="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600 resize-none"
        ></textarea>
      </div>

      <!-- Privacy -->
      <div class="flex items-center gap-2 text-sm text-gray-600">
        <input type="checkbox" />
        <p>
          By submitting you are accepting the terms and conditions of our privacy policy
        </p>
      </div>

      <!-- Submit -->
      <div class="text-center">
        <button
          type="submit"
          class="bg-[#4C6822] text-white px-8 py-2 rounded-md hover:bg-[#547326] transition"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
    </div>
  </section>
</template>

<script setup>
import { useSeo } from "~/composables/useSeo";
useSeo({
  title: "Envi-Comm Corporation Resources",
  description:
    "Access guides, tools, and resources for environmental compliance, permitting, and reporting in the Philippines.",
  keywords:
    "resources, environmental guides, DENR compliance tools, permitting resources",
  bodyClass: "overflow-x-hidden w-screen relative resources-page",
});
</script>

<style lang="scss" scoped></style>
