<template>
  <!-- hero section  -->
  <section
    class="bg-[url('/assets/images/main-imgs/what-we-do/application-img.webp')] bg-cover bg-left md:bg-top min-h-dvh py-20 w-full px-10 md:px-20 flex items-center"
    id="top"
  >
    <div class="md:max-w-[45%] text-white">
      <!-- text 1 -->
      <h1 class="text-2xl md:text-5xl 4k:text-6xl mb-5">
        Small Quantity Importation (SQI) Clearance
      </h1>
      <p class="text-lg 4k:text-3xl">
        A DENR Small Quantity Importation Clearance permits importing limited
        amounts of chemical substances not yet on the Philippine Inventory, for
        specific, controlled uses.
      </p>
      <div class="flex gap-2 mt-5 w-full flex-wrap">
        <NuxtLink
          to="#tsd-new"
          class="4k:text-2xl border-2 border-white transition-all duration-200 text-white py-2 px-5 rounded-lg uppercase"
        >
          New
        </NuxtLink>
      </div>
    </div>
  </section>
  <!-- body  -->
  <section class="py-10 md:py-20">
    <div class="container">
      <!-- section 1  -->
      <section id="tsd-new" class="py-10">
        <h2
          class="text-2xl md:text-4xl font-regular text-center mb-5 uppercase"
        >
          Small Quantity Importation (SQI) Clearance
        </h2>

        <h4
          class="uppercase bg-[#547326] py-1 text-xl md:text-2xl 4k:text-3xl text-center rounded text-white font-semibold mb-10"
        >
          scope OF WORK - NEW
        </h4>
        <h5 class="text-lg md:text-xl mb-10 font-semibold">
          RESPONSIBILITIES OF THE CONSULTANT
        </h5>
        <ul class="4k:text-2xl list-disc list-inside mb-10 ml-[19px]">
          <li class="mb-2">Processing of Online Application</li>
          <li class="mb-2">Notary of Duly Accomplished Application Form</li>
        </ul>
        <h4
          class="uppercase bg-[#547326] py-1 text-xl md:text-2xl 4k:text-3xl text-center rounded text-white font-semibold mb-10"
        >
          REQUIREMENTS - nEW
        </h4>
        <h5 class="text-lg md:text-xl mb-10 font-semibold">
          REQUIREMENT FROM PROPONENT
        </h5>
        <ul class="4k:text-2xl list-disc list-inside mb-10 ml-[19px]">
          <li class="mb-2">
            Provision of Material Safety Data Sheet of the substance
          </li>
          <li class="mb-2">
            Provision of Business Permit or SEC Registration of the Office
          </li>
          <li class="mb-2">
            Provision of Business Permit or SEC Registration of the
            Warehouse/Storage Facility of the substance
          </li>
          <li class="mb-2">Provision of Bill of Lading</li>
        </ul>
        <div class="flex flex-col gap-3 items-start justify-center">
          <NuxtLink
            to="#"
            class="flex-1 4k:text-2xl bg-[#547326] transition-all duration-200 text-white py-2 px-2 md:px-5 rounded text-center inline-block w-fit mx-auto"
          >
            Download PDF
          </NuxtLink>
          <NuxtLink
            to="#top"
            class="flex-1 4k:text-2xl border-2 border-[#547326] transition-all duration-200 text-[#547326] py-2 px-5 rounded"
          >
            Back to top
          </NuxtLink>
        </div>
      </section>
    </div>
  </section>
</template>

<script setup>
import { useSeo } from "~/composables/useSeo";
useSeo({
  title: "SQI - Small Quantity Importation Clearance for Chemicals",
  description:
    "Secure your SQI (Small Quantity Importation) clearance quickly. Compliance for importing small quantities of chemicals under the EMB.",
  keywords:
    "SQI clearance, Small Quantity Importation, chemical import permit, EMB compliance, PICCS chemicals",
  bodyClass: "overflow-x-hidden w-screen relative what-we-do-page",
});
</script>

<style lang="scss" scoped></style>
