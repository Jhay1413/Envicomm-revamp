<template>
    <!-- hero section  -->
    <section
        class="bg-[url('/assets/images/main-imgs/what-we-do/application-img.jpg')] bg-cover bg-left md:bg-top min-h-dvh py-20 w-full px-10 md:px-20 flex items-center"
        id="top"
    >
        <div class="md:max-w-[45%] text-white">
            <!-- text 1 -->
            <h1 class="text-2xl md:text-5xl 4k:text-6xl mb-5">
                Compliance Monitoring Report (CMR) and Integrated Compliance and Inspection Report
                (ICIR)
            </h1>
            <p class="text-lg 4k:text-3xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius nisi tempore
                assumenda. Impedit, excepturi non!
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
            <section id="tsd-new">
                <h2 class="text-2xl md:text-4xl font-regular text-center mb-5 uppercase">
                    Compliance Monitoring Report (CMR) and Integrated Compliance and Inspection
                    Report (ICIR)
                </h2>

                <h4
                    class="uppercase bg-[#547326] py-1 text-xl md:text-2xl 4k:text-3xl text-center rounded text-white font-semibold mb-10"
                >
                    REQUIREMENTS
                </h4>
                <h5 class="text-lg md:text-xl mb-5 font-semibold">
                    Documents needed for Submission of Compliance Monitoring Report and ICIR
                </h5>
                <ol class="list-decimal 4k:text-2xl mb-10 ml-[19px]">
                    <li class="mb-2">
                        Copy of the complete Environmental Compliance Certificate (ECC). It includes
                        the following:
                        <ol class="list-[lower-roman] ml-[25px] mt-2">
                            <li class="mb-2">Cover Letter</li>
                            <li class="mb-2">Environmental Compliance Certificate</li>
                            <li class="mb-2">Sworn Accountability Statement</li>
                            <li class="mb-2">Annex A / Conditions / Environmental Management</li>
                            <li class="mb-2">Annex B / Project Assessment Planning Tool</li>
                            <li class="mb-2">Environmental Management Plan Summary</li>
                        </ol>
                    </li>
                    <li class="mb-2">
                        Name and contact information of the current PCO/Managing Head
                    </li>
                    <li class="mb-2">Copy of PCO Accreditation Certificate</li>
                    <li class="mb-2">Copy of Managing Head Certificate</li>
                    <li class="mb-2">Tree planting certificate</li>
                    <li class="mb-2">Geotagged Photo of the Tree Planting Site</li>
                    <li class="mb-2">
                        Information, Education, and Communication Campaign Documentation and/or
                        Certification
                    </li>
                    <li class="mb-2">
                        Social Development Program Documentation and/or Certification
                    </li>
                    <li class="mb-2">
                        Copy of the Geotechnical Investigation Report (GIR), Geohazard Assessment
                        Report (GAR), and or Engineering Geological and Geohazard Assessment Report
                        (EGGAR), conducted by a third-party accredited by the DENR-MGB (if
                        applicable)
                    </li>
                    <li class="mb-2">
                        Copy of Emergency Preparedness/Emergency Response Plan, Contingency Plan,
                        and Preventive Maintenance to address possible environmental hazards
                    </li>
                    <li class="mb-2">
                        Copy of Tenurial Instrument/Proof of Authority over the project area
                    </li>
                    <li class="mb-2">
                        Copy of Comprehensive Land Use Plan (CLUP), or Locational Clearance
                        (whichever is applicable)
                    </li>
                    <li class="mb-2">Site Development Plan</li>
                    <li class="mb-2">Environmental Management Plan</li>
                    <li class="mb-2">
                        Accomplishment Report or schedule of activities for project
                        commencement/implementation, including photo documentation (if applicable)
                    </li>
                    <li class="mb-2">
                        Tree cutting permit from DENR-CENRO (required if tree cutting is unavoidable
                        during site clearing for project implementation)
                    </li>
                    <li class="mb-2">
                        Disposal Permit from LGU/PLGU (required if the project transports and
                        disposes of materials extracted during site clearing and development
                        off-site)
                    </li>
                    <li class="mb-2">
                        Ambient Air Quality and Noise Level Monitoring Result (if applicable)
                    </li>
                    <li class="mb-2">Stack Emission Test Results (if applicable)</li>
                    <li class="mb-2">Effluent Wastewater Test Results (if applicable)</li>
                    <li class="mb-2">
                        Environmental Budget Allocations and Expenses. It includes:
                        <ol class="list-[lower-roman] ml-[25px] mt-2">
                            <li class="mb-2">Environmental Impact Mitigation Plan Fund</li>
                            <li class="mb-2">Social Development Plan Fund</li>
                            <li class="mb-2">IEC Plan Fund</li>
                            <li class="mb-2">Enhancement Program Fund (if applicable)</li>
                            <li class="mb-2">Self-Monitoring Fund</li>
                        </ol>
                    </li>
                </ol>

                <div class="flex flex-col gap-3 items-start justify-center">
                    <NuxtLink
                        to="#"
                        class="flex-1 4k:text-2xl bg-[#547326] transition-all duration-200 text-white py-2 px-5 rounded"
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
useHead({
    title: "Compliance Monitoring Report (CMR)  - Envi-Comm Corporation",
});
</script>

<style lang="scss" scoped></style>
