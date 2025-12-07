<template>
  <!-- hero section  -->
  <section
    class="bg-[url('/assets/images/main-imgs/what-we-do/application-img.webp')] bg-cover bg-left md:bg-top min-h-dvh py-20 w-full px-10 md:px-20 flex items-center"
    id="top"
  >
    <div class="md:max-w-[45%] text-white">
      <!-- text 1 -->
      <h1 class="text-2xl md:text-5xl 4k:text-6xl mb-5">
        Tree Cutting Permit (TCP)
      </h1>
      <p class="text-lg 4k:text-3xl">
        The DENR Tree Cutting Permit is required for legally cutting trees,
        ensuring sustainable forest management and preventing unauthorized
        deforestation.
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
          Tree Cutting Permit (TCP)
        </h2>

        <h4
          class="uppercase bg-[#547326] py-1 text-xl md:text-2xl 4k:text-3xl text-center rounded text-white font-semibold mb-10"
        >
          scope OF WORK - NEW
        </h4>
        <h5 class="text-lg md:text-xl mb-5 font-semibold">
          RESPONSIBILITIES OF THE CONSULTANT
        </h5>
        <ul class="4k:text-2xl list-disc list-inside mb-10 ml-[19px]">
          <li class="mb-2">
            Drafting of Application Letter for Tree Cutting Permit
          </li>
          <li class="mb-2">
            Assist in securing the LGU Endorsement/Certificate of No Objection
          </li>
          <li class="mb-2">
            Drafting of Site Development Plan/Infrastructure Plan with Tree
            Cutting
          </li>
          <li class="mb-2">
            Application for Environmental Compliance Certificate
            (ECC)/Certificate of Non-Coverage (CNC), if applicable
          </li>
          <li class="mb-2">
            Request for Free, Prior, and Informed Consent (FPIC), if applicable
          </li>
          <li class="mb-2">
            Assistance in drafting the Waiver/Consent of the owner/s, if a
            titled property
          </li>
          <li class="mb-2">
            Application for PAMB Clearance/Resolution, if within Protected Area
          </li>
          <li class="mb-2">
            Request for Tree Inventory and Report for trees to be cut within the
            project area
          </li>
        </ul>
        <h6 class="uppercase mb-2">
          Additional Responsibilities for Tree Cutting of Mangroves:
        </h6>
        <ul class="4k:text-2xl list-disc list-inside mb-10 ml-[19px]">
          <li class="mb-2">
            Assistance in securing FMB Endorsement for Clearance for
            Earth-Balling
          </li>
          <li class="mb-2">
            Drafting the proposed development plan of the project incorporating
            therein relative location of the Mangrove species
          </li>
          <li class="mb-2">
            Drafting Re-alignment/Adjustment plans to lessen the number of
            Mangrove to be affected
          </li>
          <li class="mb-2">
            Drafting of plans in justification that the Mangroves can no longer
            be avoided and a possible option to minimize/damage to the Mangrove
            area
          </li>
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
          <li class="mb-2">Filling out the Application Form</li>
          <li class="mb-2">Payment of Application Fee</li>
          <li class="mb-2">
            Proof of Authority / Ownership on the Project Site, if within Tañon
            Strait Protected Seascape (TSPS), Proof of Ownership of Adjacent
            Property
          </li>
          <ul class="4k:text-2xl list-disc list-inside mb-2 ml-[19px]">
            <li class="mb-2">Copy of Land Title or Tax Declaration</li>
            <li class="mb-2">
              Copy of Contract of Lease or Deed of Absolute Sale (in case the
              Proponent is not the owner of the project site)
            </li>
            <li class="mb-2">
              Copy of Land Title or Tax Declaration from the Lessor or Seller
            </li>
            <li class="mb-2">Other conveyance documents applicable</li>
          </ul>
          <li class="mb-2">
            Duly Notarized Special Power of Attorney (SPA) (if applicable)
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
  title: "Tree Cutting Permit – Envi-Comm Corporation",
  description:
    "Envi-Comm Corporation helps secure DENR Tree Cutting Permits for legal forestry activities.",
  keywords:
    "tree cutting permit, DENR permits, forestry compliance",
});
</script>

<style lang="scss" scoped></style>
