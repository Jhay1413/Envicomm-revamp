<template>
    <!-- hero section  -->
    <section
        class="realtive bg-[url('/assets/images/main-imgs/what-we-do/chemical-stp-and-ro.webp')] bg-cover bg-left md:bg-top min-h-[400px] 4k:min-h-[1000px] py-20 w-full px-10 md:px-20"
    >
        <div
            class="absolute inset-0 bg-[radial-gradient(white_1.5px,transparent_1.5px)] bg-[length:18px_18px] opacity-20"
        ></div>
        <div class="md:max-w-[35%] text-white">
            <h1 class="text-2xl md:text-5xl 4k:text-6xl mb-5">Chemicals: STPs, WTPs and RO</h1>
            <p class="text-xl md:text-2xl 4k:text-3xl">
                Precision Chemicals for Peak Performance - Maximizing Efficiency, Minimizing Impact
            </p>
        </div>
    </section>
    <!-- text section  -->
    <section class="py-10 md:py-20 text-black text-lg 4k:text-xl">
        <div class="container">
            <h2 class="text-2xl md:text-3xl text-center mb-5 uppercase">
                The Right Formula for Cleaner Water: Advanced Chemistry, Expert Application
            </h2>

            <p class="mb-5">
                The efficiency and compliance of your Sewage Treatment Plants (STPs), Water Treatment Plants (WTPs), and Reverse Osmosis (RO) systems depend fundamentally on the quality and strategic application of specialized chemicals. Using generic or improper formulations leads to operational bottlenecks, increased energy costs, and potential non-compliance with stringent environmental discharge standards. Envi-Comm Corporation provides a comprehensive, expert-driven suite of treatment chemicals designed for optimal performance across all water and wastewater systems.
            </p>

            <p class="mb-5">
                At Envi-Comm, we move beyond simply supplying products; we offer a partnership rooted in diagnostic precision and customized chemical solutions. Our experienced environmental engineers first assess your system's unique operational profile and water chemistry. This analysis ensures that every chemical—from coagulants and flocculants to antiscalants and biocides—is perfectly matched to your needs. Our integrated chemical service covers:
            </p>

            <p class="mb-5">
                <strong>Wastewater Treatment (STPs) Solutions:</strong>
                 We supply high-performance coagulants (e.g., poly-aluminum chloride) and flocculants that dramatically improve solids separation and sludge dewatering, ensuring your effluent meets the most demanding DENR standards. Our advanced microbial solutions enhance biological nutrient removal (BNR) for superior compliance. 
            </p>
             <p class="mb-5">
                <strong>Potable Water Treatment (WTPs) Reagents:</strong>
                 We provide the highest-grade chemicals for disinfection (chlorine-based products), pH adjustment, and iron/manganese removal, ensuring the water produced is safe, clear, and fully compliant with Philippine National Standards for Drinking Water (PNSDW). 
            </p>
             <p class="mb-5">
                <strong>Reverse Osmosis (RO) System Chemicals:</strong>
                 To protect your high-value RO membranes, we offer specialized antiscalants to prevent fouling from calcium and silica, and advanced biocides to control biological growth. Our solutions extend membrane lifespan, reduce cleaning frequency, and maintain optimal water recovery rates. 
            </p>
             <p class="mb-5">
                <strong>Technical Support and Dosing Optimization:</strong>
                 Our service includes regular site visits, chemical inventory management, and expert guidance on dosing pump calibration. We ensure chemicals are used efficiently, lowering your consumption costs while guaranteeing process stability and reliability.
            </p>
             <p class="mb-5">
                Choose Envi-Comm Corporation's Chemical Solutions and gain a partner who ensures your critical water treatment infrastructure operates at its most efficient, compliant, and cost-effective level.
            </p>
        </div>
    </section>
    <!-- Quik facts  -->
    <SectionsWhatWeDoQuickFacts />
    <!-- List of Applications  -->
    <section class="py-10 md:py-20 text-black text-lg 4k:text-xl">
        <div class="container text-center">
            <NuxtLink
                to="/what-we-do/chemical-stp-and-ro/list-of-applications"
                class="bg-[#547326] hover:bg-[#4c6822] transition-all duration-200 text-white py-2 px-2 md:px-5 rounded text-center inline-block w-fit mx-auto"
            >
                Chemical: STP & RO
            </NuxtLink>
        </div>
    </section>
    <!-- Get in Touch -->
    <SectionsWhatWeDoContactForm />
</template>

<script setup>
import { SectionsWhatWeDoContactForm, SectionsWhatWeDoQuickFacts } from "#components";

useHead({
    title: "Chemical: STP & RO - Envi-Comm Corporation",
});
</script>

<style scoped></style>
