<template>
  <!-- hero section  -->
  <section
    class="bg-[url('/assets/images/main-imgs/what-we-do/application-img.webp')] bg-cover bg-left md:bg-top min-h-dvh py-20 w-full px-10 md:px-20 flex items-center"
    id="top"
  >
    <div class="md:max-w-[45%] text-white">
      <!-- text 1 -->
      <h1 class="text-2xl md:text-5xl 4k:text-6xl mb-5">
        Treatment, Storage and Disposal Facility (TSD) Application
      </h1>
      <p class="text-lg 4k:text-3xl">
        A DENR TSD Application is for facilities that treat, store, or dispose
        of hazardous wastes, ensuring safe, environmentally sound management and
        compliance.
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
          Treatment, Storage and Disposal Facility (TSD) Application
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
          <li class="mb-2">Drafting of Official Letter of Request</li>
          <li class="mb-2">Notary of affidavit</li>
          <li class="mb-2">
            Create process flow diagram of TSD (if unavailable)
          </li>
          <li class="mb-2">
            Drafting of Storage Management Plan for raw materials, residues,
            by-products and end-products
          </li>
          <li class="mb-2">
            Drafting of Long-term plan for the recycled, processed, recovered
            and end-products
          </li>
          <li class="mb-2">Drafting of Contingency and Emergency Plan</li>
          <li class="mb-2">
            Drafting of contract with registered Hazardous Waste Transporter(s)
            (if unavailable)
          </li>
          <li class="mb-2">Processing TSD Application (if unavailable)</li>
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
          <li class="mb-2">Environmental Compliance Certificate (ECC)</li>
          <li class="mb-2">Valid Permit to Operate</li>
          <li class="mb-2">Valid Discharge Permit</li>
          <li class="mb-2">
            Initial Environmental Examination (IEE) Checklist or Environmental
            Impact Statement (EIS) Report submitted to EMB Regional Offices (if
            available)
          </li>
          <li class="mb-2">
            Provision of Process Flow Diagram of treatment (if available)
          </li>
          <li class="mb-2">
            Pollution Control Officer Certificate of Accreditation
          </li>
          <li class="mb-2">
            Environmental Guarantee Fund - Bank Certification stating that the
            fund will be used in case of incidents that would happen in relation
            to the operation of the TSD Facility
          </li>
          <li class="mb-2">
            Valid contract with registered Hazardous Waste Transporter(s) (if
            available)
          </li>
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
  title: "TSD - Treatment, Storage, & Disposal Facility Permit Application",
  description:
    "Consulting for TSD (Treatment, Storage, and Disposal) facility permitting. Comprehensive support for hazardous waste management facilities.",
  keywords:
    "TSD permit, Treatment Storage and Disposal, hazardous waste facility, EMB permitting, waste disposal compliance",
  bodyClass: "overflow-x-hidden w-screen relative what-we-do-page",
});
</script>

<style lang="scss" scoped></style>
