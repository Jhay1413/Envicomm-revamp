<template>
    <!-- hero section  -->
    <section
        class="bg-[url('/assets/images/main-imgs/services/application-img.jpg')] bg-cover bg-left md:bg-top min-h-dvh py-20 w-full px-10 md:px-20 flex items-center"
        id="top"
    >
        <div class="md:max-w-[45%] text-white">
            <!-- text 1 -->
            <h1 class="text-2xl md:text-5xl 4k:text-6xl mb-5">
                Transporter Registration Certificate (TRC)
            </h1>
            <p class="text-lg 4k:text-3xl">
                The Transporter Registration Certificate application is for permitting the transport
                of hazardous wastes or chemicals, ensuring safe and regulated movement.
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
                    Transporter Registration Certificate (TRC)
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
                    <li class="mb-2">Create process flow diagram of TSD (if unavailable)</li>
                    <li class="mb-2">
                        Drafting of Storage Management Plan for raw materials, residues, by-products
                        and end-products
                    </li>
                    <li class="mb-2">
                        Drafting of Long-term plan for the recycled, processed, recovered and
                        end-products
                    </li>
                    <li class="mb-2">Drafting of Contingency and Emergency Plan</li>
                    <li class="mb-2">
                        Drafting of contract with registered TSD Facilit(ies) (if unavailable)
                    </li>
                    <li class="mb-2">Processing CCO Application (if unavailable)</li>
                </ul>
                <h4
                    class="uppercase bg-[#547326] py-1 text-xl md:text-2xl 4k:text-3xl text-center rounded text-white font-semibold mb-10"
                >
                    REQUIREMENTS - nEW
                </h4>
                <h5 class="text-lg md:text-xl mb-10 font-semibold">REQUIREMENT FROM PROPONENT</h5>
                <ul class="4k:text-2xl list-disc list-inside mb-10 ml-[19px]">
                    <li class="mb-2">
                        Official Receipt (OR) and Certificate of Registration (CR) (issued by LTO)
                        of vehicle(s) to be used for transporting hazardous wastes
                    </li>
                    <li class="mb-2">
                        Valid emission test results of the vehicles to be used for transporting
                    </li>
                    <li class="mb-2">
                        Pollution Control Officer Certificate of Accreditation (if available)
                    </li>
                    <li class="mb-2">
                        Certificate of Training (COT) of driver(s)/helpers for Hazardous Waste
                        Transporters (if available)
                    </li>
                    <li class="mb-2">
                        Certification of Professional Driver’s License issued by LTO (if available)
                    </li>
                    <li class="mb-2">Valid Business Permit</li>
                    <li class="mb-2">SEC/DTI Registration Certificate</li>
                    <li class="mb-2">
                        Environmental Guarantee Fund - Bank Certification stating that the fund will
                        be used in case of incidents that would happen in relation to the operation
                        of the TSD Facility
                    </li>
                    <li class="mb-2">Valid contract with registered TSD Facility (if available)</li>
                    <li class="mb-2">Chemical Control Order (if applicable)</li>
                    <li class="mb-2">
                        Summary of Transport Permits issued (for renewal applications)
                    </li>
                </ul>
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
    title: "Treatment, Storage and Disposal Facility (TSD) Application - Envi-Comm Corporation",
});
</script>

<style lang="scss" scoped></style>
