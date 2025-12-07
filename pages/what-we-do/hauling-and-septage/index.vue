<template>
    <!-- hero section  -->
    <section
        class="bg-[url('/assets/images/main-imgs/what-we-do/hauling-and-septage.webp')] bg-cover bg-left md:bg-top min-h-[400px] 4k:min-h-[1000px] py-20 w-full px-10 md:px-20"
    >
        <div
            class="absolute inset-0 bg-[radial-gradient(white_1.5px,transparent_1.5px)] bg-[length:18px_18px] opacity-20"
        ></div>
        <div class="md:max-w-[35%] text-white">
            <h1 class="text-2xl md:text-5xl 4k:text-6xl mb-5">Hauling & Septage</h1>
            <p class="text-xl 4k:text-3xl">
                Complete Waste Stream Management - Secure, Compliant, and Environmentally Responsible
            </p>
        </div>
    </section>
    <!-- text section  -->
    <section class="py-10 md:py-20 text-black text-lg 4k:text-xl">
        <div class="container">
            <h2 class="text-2xl md:text-3xl text-center mb-5 uppercase">
                Beyond the Tank: Your Trusted Partner for Comprehensive Waste Logistics
            </h2>

            <p class="mb-5">
                Effective waste management is a non-negotiable component of environmental compliance and public health. For businesses and communities, securing safe, compliant, and reliable transportation for various waste streams—from common septage to hazardous materials—is paramount. With Envi-Comm Corporation, you gain a logistics partner equipped and certified to handle your most challenging waste transport needs with the utmost professionalism and adherence to environmental law.
            </p>

            <p class="mb-5">
                At Envi-Comm, we provide more than just hauling; we deliver a complete waste custody solution. Our dedicated fleet, specialized personnel, and rigorous tracking protocols ensure that every drop and piece of waste is managed from the point of generation to its final authorized disposal or treatment facility. We are strategically positioning ourselves to be your single-source provider for complex waste logistics, currently specializing in:
            </p>

            <p class="mb-5">
                <strong>Septage and Sludge Hauling:</strong>
                 We offer efficient and hygienic collection and transport of septage from residential, commercial, and industrial septic tanks. Our operations strictly comply with the necessary DENR and local government permitting requirements, ensuring all materials are delivered to accredited treatment facilities.
            </p>
             <p class="mb-5">
                <strong>Hazardous Waste Transport:</strong>
                 Specializing in the secure transport of regulated hazardous wastes (such as used oil, batteries, chemical sludge, and contaminated materials). We utilize DENR-registered vehicles and trained personnel to handle packaging, labeling, and manifest documentation, mitigating risks and ensuring legal compliance for your generatorship.
            </p>
             <p class="mb-5">
                <strong>Infectious and Healthcare Waste Logistics (Upcoming):</strong>
                 Soon, we will extend our expertise to include the specialized and high-priority hauling of infectious and pathological wastes from hospitals, clinics, and laboratories. Our future protocols will focus on safe containment, cold-chain integrity where necessary, and immediate transport to dedicated treatment facilities to protect public health.
            </p>
             <p class="mb-5">
                <strong>Solid Waste Collection and Transport (Upcoming):</strong>
                 We are preparing to offer commercial and municipal solid waste collection services, managing general non-hazardous waste with efficiency and reliability. This end-to-end service will support our clients' commitment to systematic and environmentally sound waste disposal.
            </p>
            <p>
                Choose Envi-Comm Corporation for your hauling and waste logistics. We provide the peace of mind that comes from knowing your environmental responsibility is managed by industry experts committed to safety, compliance, and the long-term sustainability of the environment.
            </p>
        </div>
    </section>
    <!-- Quik facts  -->
    <SectionsWhatWeDoQuickFacts />
    <!-- List of Applications  -->
    <section class="py-10 md:py-20 text-black text-lg 4k:text-xl">
        <div class="container text-center">
            <NuxtLink
                to="/what-we-do/hauling-and-septage/list-of-applications"
                class="bg-[#547326] hover:bg-[#4c6822] transition-all duration-200 text-white py-2 px-2 md:px-5 rounded text-center inline-block w-fit mx-auto"
            >
                List of Hauling & Septage
            </NuxtLink>
        </div>
    </section>
    <!-- Get in Touch -->
    <SectionsWhatWeDoContactForm />
</template>

<script setup>
import { SectionsWhatWeDoContactForm, SectionsWhatWeDoQuickFacts } from "#components";

useSeo({
  title: "Hauling & Septage Services – Envi-Comm Corporation",
  description:
    "Professional hauling and septage management services for environmental compliance.",
  keywords:
    "hauling services, septage management, waste disposal",
});
</script>

<style scoped></style>
