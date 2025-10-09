<template>
  <!-- hero section  -->
  <section
    class="bg-[url('/assets/images/main-imgs/what-we-do/application-img.webp')] bg-cover bg-left md:bg-top min-h-dvh py-20 w-full px-10 md:px-20 flex items-center"
    id="top"
  >
    <div class="md:max-w-[45%] text-white">
      <!-- text 1 -->
      <h1 class="text-2xl md:text-5xl 4k:text-6xl mb-5">
        CERTIFICATE OF NON-COVERAGE (CNC)
      </h1>
      <p class="text-lg 4k:text-3xl">
        Project proponents for undertakings deemed not environmentally critical
        need a CNC from DENR to proceed with their plans.
      </p>
      <div class="flex gap-2 mt-5 w-full flex-wrap">
        <NuxtLink
          to="#cnc-new"
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
      <section id="cnc-new" class="py-10">
        <h2
          class="text-2xl md:text-4xl font-regular text-center mb-5 uppercase"
        >
          Certificate of Non-Coverage (CNC)
        </h2>

        <h4
          class="uppercase bg-[#547326] py-1 text-xl md:text-2xl 4k:text-3xl text-center rounded text-white font-semibold mb-10"
        >
          Scope of Work - nEW
        </h4>
        <h5 class="text-lg md:text-xl mb-10 font-semibold">
          RESPONSIBILITIES OF THE CONSULTANT
        </h5>
        <ul class="4k:text-2xl list-disc list-inside mb-10 ml-[19px]">
          <li class="mb-2">
            Generate of Duly Notarized Accountability Statement
          </li>
          <li class="mb-2">Prepare the Project Fact Sheet</li>
          <li class="mb-2">Generate the Geotagged Photos of the Site</li>
          <li class="mb-2">
            Consolidate the supporting documents provided by the Proponent
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
          <li class="mb-2">Site Development</li>
          <li class="mb-2">Accountability Statement</li>
          <li class="mb-2">
            CENRO Certification on land status (if within protected area)
          </li>
          <li class="mb-2">
            Government ID of Proponent/President/Vice President/Director/CEO/COO
          </li>
          <li class="mb-2">
            DTI Registration Certificate for sole proprietorship or Securities
            and Exchange Commission (SEC) registration certificate for
            corporation
          </li>
          <li class="mb-2">Geotagged photos of the project area</li>
        </ul>
        <div class="flex flex-col gap-3 items-start justify-center">
          <NuxtLink
            to="/what-we-do/environmental-compliance-certificate"
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
  title: "CNC - Certificate of Non-Coverage Application Services",
  description:
    "Fast and reliable processing for your CNC (Certificate of Non-Coverage) application from the EMB. Essential for non-ECP projects in the Philippines.",
  keywords:
    "CNC application, Certificate of Non-Coverage, EMB permit, non-ECP projects, DENR compliance",
  bodyClass: "overflow-x-hidden w-screen relative what-we-do-page",
});
</script>

<style lang="scss" scoped></style>
