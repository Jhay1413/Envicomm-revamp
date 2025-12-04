<template>
    <!-- hero section  -->
    <section
        class="relative bg-[url('/assets/images/main-imgs/what-we-do/specialized-data-collection-air-quality.webp')] bg-cover bg-left md:bg-top min-h-[400px] 4k:min-h-[1000px] py-20 w-full px-10 md:px-20"
    >
        <div
            class="absolute inset-0 bg-[radial-gradient(white_1.5px,transparent_1.5px)] bg-[length:18px_18px] opacity-20"
        ></div>
        <div class="md:max-w-[35%] text-white">
            <h1 class="text-2xl md:text-5xl 4k:text-6xl mb-5">
                Specialized Data Collection: Air Quality Monitoring
            </h1>
            <p class="text-xl 4k:text-3xl">
                Breathe easy with verified data - delivering precise insights for air quality compliance
            </p>
        </div>
    </section>
    <!-- text section  -->
    <section class="py-10 md:py-20 text-black text-lg 4k:text-xl">
        <div class="container">
            <h2 class="text-2xl md:text-3xl text-center mb-5 uppercase">
                The Invisible Made Visible: Certifying Your Commitment to Clean Air
            </h2>

            <p class="mb-5">
                In today's highly regulated operational landscape, understanding and managing your facility's air emissions is not just a regulatory requirement—it is a commitment to public health and environmental stewardship. The Department of Environment and Natural Resources (DENR) sets stringent standards, and accurate, reliable Air Quality Monitoring is the only way to demonstrate full compliance. With Envi-Comm Corporation, we turn this critical task into a seamless, certified, and insightful process.
            </p>

            <p>
                At Envi-Comm, we go beyond basic sampling. We utilize state-of-the-art, DENR-recognized methodologies and equipment, ensuring the integrity and defensibility of every data point. Our specialized team of environmental scientists and certified technicians provides a complete suite of services designed to give you an undeniable, real-time picture of your air quality performance. We partner with you to transform raw data into actionable strategies for emission reduction and process optimization. Our comprehensive air quality monitoring services include:
            </p>

            <p class="mb-5">
                Source Emission Testing (Stack Testing): We conduct precise testing on stationary sources (e.g., stacks, flues, vents) to measure specific pollutants like Particulate Matter (PM), Sulfur Dioxide (SO), Nitrogen Oxides (NO), and Volatile Organic Compounds (VOCs). Our reports are fully compliant with the Clean Air Act and DENR requirements for your Permit to Operate (PTO).
            </p>
            <p class="mb-5">
                Ambient Air Quality Monitoring: For projects requiring a broader assessment, we deploy high-volume samplers and continuous monitoring stations to measure the surrounding air quality. This data establishes baseline conditions for Environmental Impact Statements EIS and monitors the long-term impact of your operations on the community.
            </p>
            <p class="mb-5">
                Fugitive and Area Source Monitoring: We specialize in identifying and quantifying emissions that escape through non-traditional routes (e.g., vents, windows, equipment leaks). This crucial service helps facilities address the often-overlooked sources of pollution and ensure a holistic approach to air quality management.
            </p>
            <p class="mb-5">
                Data Analysis and Compliance Reporting: Beyond collection, we provide expert analysis of the data, identifying trends, highlighting areas of concern, and preparing all necessary compliance reports for submission to the DENR. We ensure your documentation is audit-ready and clearly demonstrates adherence to all environmental limits.
            </p>

            <p>
                Choose Envi-Comm Corporation for air quality monitoring, and gain a partner that delivers not just data, but the certainty that your operations are fully documented, compliant, and contributing to a healthier environment.
            </p>
        </div>
    </section>
    <!-- Quik facts  -->
    <SectionsWhatWeDoQuickFacts />
    <!-- List of Applications  -->
    <section class="py-10 md:py-20 text-black text-lg 4k:text-xl">
        <div class="container text-center">
            <NuxtLink
                to="/what-we-do/specialized-data-collection-air-quality/list-of-applications"
                class="bg-[#547326] hover:bg-[#4c6822] transition-all duration-200 text-white py-2 px-2 md:px-5 rounded text-center inline-block w-fit mx-auto"
            >
                Specialized Data Collection: Air Quality
            </NuxtLink>
        </div>
    </section>
    <!-- Get in Touch -->
    <SectionsWhatWeDoContactForm />
</template>

<script setup>
import { SectionsWhatWeDoContactForm, SectionsWhatWeDoQuickFacts } from "#components";

useHead({
    title: "Specialized Data Collection: Air Quality - Envi-Comm Corporation",
});
</script>

<style scoped></style>
