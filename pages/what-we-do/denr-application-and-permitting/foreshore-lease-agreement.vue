<template>
  <!-- hero section  -->
  <section
    class="bg-[url('/assets/images/main-imgs/what-we-do/application-img.webp')] bg-cover bg-left md:bg-top min-h-dvh py-20 w-full px-10 md:px-20 flex items-center"
    id="top"
  >
    <div class="md:max-w-[45%] text-white">
      <!-- text 1 -->
      <h1 class="text-2xl md:text-5xl 4k:text-6xl mb-5">
        Foreshore Lease Agreement (FLA)
      </h1>
      <p class="text-lg 4k:text-3xl">
        The DENR Foreshore Lease Agreement grants temporary use of foreshore
        lands and reclaimed areas for specific, approved purposes.
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
          Foreshore Lease Agreement (FLA)
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
          <li class="mb-2">Notary of Duly Accomplished Application Form</li>
          <li class="mb-2">
            Processing CENRO Certification on Land Classification (if
            unavailable)
          </li>
          <li class="mb-2">Drafting of Project Feasibility Study</li>
          <li class="mb-2">
            Processing documents to secure Certifications from regional heads of
            the following agencies, whichever is/are applicable:
            <ul class="list-disc list-inside ml-6 mt-2">
              <li class="mb-2">
                Municipality/City/District Engineer to be concurred by DPWH
                Regional Director or duly authorized representatives
              </li>
              <li class="mb-2">
                Ports Administrator, Phil. Ports Authority (PPA)/Cebu Port
                Authority (CPA) or duly authorized representative
              </li>
              <li class="mb-2">
                Provincial Tourism Officer to be concurred by Department of
                Tourism (DOT) Regional Director or duly authorized
                representatives in areas declared as tourist zones
              </li>
              <li class="mb-2">Philippine Reclamation Authority (PRA)</li>
              <li class="mb-2">
                Bureau of Fisheries and Aquatic Resources (BFAR)
              </li>
              <li class="mb-2">
                Department of Energy (DOE) for submarine pipelines and power
                cable connections
              </li>
            </ul>
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
            Provision of Approved Survey Plan with Technical Description and
            duly signed by a Geodetic Engineer
          </li>
          <li class="mb-2">
            Provision of CENRO Certification on Land Classification (if
            available)
          </li>
          <li class="mb-2">
            Provision of Proof of Identity of the Leasee
            <ul class="list-disc list-inside ml-6 mt-2">
              <li class="mb-2">
                Individual – Philippine Statistics Authority (PSA)-certified
                copy of Birth Certificate
              </li>
              <li class="mb-2">
                Naturalized Filipino citizen – PSA-certified copy of Certificate
                of Naturalization
              </li>
              <li class="mb-2">
                Corporation/Association/Partnership (≥ 60% Filipino ownership):
                <ul class="list-disc list-inside ml-6 mt-2">
                  <li class="mb-2">
                    Certified true copy of the Securities and Exchange
                    Commission (SEC) Registration Certificate
                  </li>
                  <li class="mb-2">
                    Certified true copy of Articles of Incorporation
                  </li>
                  <li class="mb-2">Certified true copy of By-Laws</li>
                  <li class="mb-2">
                    Certified true copy of the Board resolution/Secretary’s
                    Certificate designating the authorized representative
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="mb-2">Provision of Financial Statement (if available)</li>
          <li class="mb-2">
            Provision of Site Development Plan (if available)
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
  title: "Foreshore Lease Agreement – Envi-Comm Corporation",
  description:
    "Guidance on securing DENR Foreshore Lease Agreements for coastal land use.",
  keywords:
    "foreshore lease agreement, DENR permits, coastal land use",
});
</script>

<style lang="scss" scoped></style>
