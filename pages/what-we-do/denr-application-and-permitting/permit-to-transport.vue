<template>
    <!-- hero section  -->
    <section
        class="bg-[url('/assets/images/main-imgs/what-we-do/application-img.webp')] bg-cover bg-left md:bg-top min-h-dvh py-20 w-full px-10 md:px-20 flex items-center"
        id="top"
    >
        <div class="md:max-w-[45%] text-white">
            <!-- text 1 -->
            <h1 class="text-2xl md:text-5xl 4k:text-6xl mb-5">
                Permit to Transport (PTT) Application
            </h1>
            <p class="text-lg 4k:text-3xl">
                The Permit to Transport allows hazardous waste generators and transporters to
                legally move hazardous wastes to accredit ed TSD facilities.
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
                <h2 class="text-2xl md:text-4xl font-regular text-center mb-5 uppercase">
                    Permit to Transport (PTT) Application
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
                    <li class="mb-2">
                        Facilitate the accomplishment of the online PTT application form
                    </li>
                    <li class="mb-2">
                        Secure the notarized Memorandum of Agreement or other service agreements
                        between the Hazardous Waste (HW) Generator, the Transporter, and the TSD
                        Facility
                    </li>
                    <li class="mb-2">
                        Coordinate with the TSD facility for their registration certificate and
                        Environmental Compliance Certificate
                    </li>
                    <li class="mb-2">
                        Coordinate with the Transporter for their registration certificate and
                        hauling schedule
                    </li>
                    <li class="mb-2">Prepare the route of transport for submission</li>
                    <li class="mb-2">Assist in the consolidation of all supporting documents</li>
                    <li class="mb-2">
                        Process and monitor the PTT application with the concerned EMB Case Handler
                    </li>
                </ul>
                <h4
                    class="uppercase bg-[#547326] py-1 text-xl md:text-2xl 4k:text-3xl text-center rounded text-white font-semibold mb-10"
                >
                    REQUIREMENTS - nEW
                </h4>
                <h5 class="text-lg md:text-xl mb-10 font-semibold">REQUIREMENT FROM PROPONENT</h5>
                <ul class="4k:text-2xl list-disc list-inside mb-10 ml-[19px]">
                    <li class="mb-2">Accomplished online PTT application form</li>
                    <li class="mb-2">Hazardous Waste (HW) Generator Registration Certificate</li>
                    <li class="mb-2">
                        Notarized Memorandum of Agreement / Affidavit of Undertaking / Service
                        Agreement between the HW Generator, TSD facility, and HW Transporter
                    </li>
                    <li class="mb-2">
                        Result of laboratory analysis (if the waste is Polychlorinated Biphenyl
                        (PCB))
                    </li>
                    <li class="mb-2">Transporter Registration Certificate</li>
                    <li class="mb-2">Schedule of Hauling / Transport of Wastes</li>
                    <li class="mb-2">Route of Transport</li>
                    <li class="mb-2">TSD Registration Certificate</li>
                    <li class="mb-2">Latest Self-Monitoring Report</li>
                    <li class="mb-2">
                        Environmental Compliance Certificate (ECC) of the TSD Facility
                    </li>
                    <li class="mb-2">
                        Other documents that may be required by the EMB Case Handler
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
useHead({
    title: "Permit to Transport (PTT) Application - Envi-Comm Corporation",
});
</script>

<style lang="scss" scoped></style>
