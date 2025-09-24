<template>
    <!-- hero section  -->
    <section
        class="bg-[url('/assets/images/main-imgs/what-we-do/application-img.webp')] bg-cover bg-left md:bg-top min-h-dvh py-20 w-full px-10 md:px-20 flex items-center"
        id="top"
    >
        <div class="md:max-w-[45%] text-white">
            <!-- text 1 -->
            <h1 class="text-2xl md:text-5xl 4k:text-6xl mb-5">SELF-MONITORING REPORT</h1>
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
                    SELF-MONITORING REPORT
                </h2>

                <h4
                    class="uppercase bg-[#547326] py-1 text-xl md:text-2xl 4k:text-3xl text-center rounded text-white font-semibold mb-10"
                >
                    REQUIREMENTS
                </h4>
                <h5 class="text-lg md:text-xl mb-5 font-semibold">
                    Documents needed for Submission of Self-Monitoring Report
                </h5>
                <ol class="list-decimal 4k:text-2xl mb-10 ml-[19px]">
                    <li class="mb-2">
                        LOG-IN CREDENTIAL FOR SMR / CRS (Company Registration System)
                    </li>
                    <li class="mb-2">
                        ENVIRONMENTAL PERMITS
                        <ol class="list-[lower-roman] ml-[25px] mt-2">
                            <li class="mb-2">DISCHARGE PERMIT (DP)</li>
                            <li class="mb-2">PERMIT TO OPERATE (PO)</li>
                            <li class="mb-2">HAZARDOUS WASTE GENERATOR ID (HWID)</li>
                            <li class="mb-2">
                                ENVIRONMENTAL COMPLIANCE CERTIFICATE (ECC) / CERTIFICATE OF
                                NON–COVERAGE (CNC)
                            </li>
                            <li class="mb-2">PERMIT TO TRANSPORT (PTT)</li>
                        </ol>
                    </li>
                    <li class="mb-2">3 Months of WATER BILL / WATER ABSTRACTION</li>
                    <li class="mb-2">3 Months of ELECTRIC BILL</li>
                    <li class="mb-2">
                        Latest WASTEWATER LABORATORY RESULT (If the project is discharging) /
                        MEMORANDUM OF AGREEMENT & CERTIFICATE OF TREATMENT (If the project is
                        Hauling)
                    </li>
                    <li class="mb-2">
                        EMISSION TEST RESULT (If the APSE operates more than 200 hrs. annually)
                    </li>
                    <li class="mb-2">
                        AMBIENT AIR QUALITY MONITORING REPORT (If required as part of the ECC
                        Conditions)
                    </li>
                    <li class="mb-2">
                        AMBIENT WATER QUALITY MONITORING REPORT (If required as part of the ECC
                        Conditions)
                    </li>
                    <li class="mb-2">ENVIRONMENTAL MANAGEMENT PLAN / PROGRAM</li>
                    <li class="mb-2">NOTARIZED DOC (MODULE 6)</li>
                    <li class="mb-2">
                        LOG-IN CREDENTIALS (Needed for Data Verification)
                        <ol class="list-[lower-roman] ml-[25px] mt-2">
                            <li class="mb-2">ONLINE PERMITTING & MONITORING SYSTEM (OPMS)</li>
                            <li class="mb-2">HAZARDOUS WASTE MANAGEMENT SYSTEM (HWMS)</li>
                            <li class="mb-2">
                                ECC ONLINE APPLICATION SYSTEM / COMPLIANCE MONITORING REPORT
                            </li>
                            <li class="mb-2">
                                COMPANY REGISTRATION SYSTEM (CRS) / SELF-MONITORING REPORT (SMR)
                            </li>
                        </ol>
                    </li>
                    <li class="mb-2">
                        GOV’T ID & COMPANY ID (Pollution Control Officer and/or Managing Head)
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
    title: "SELF-MONITORING REPORT - Envi-Comm Corporation",
});
</script>

<style lang="scss" scoped></style>
