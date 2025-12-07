<template>
    <!-- hero section  -->
    <section
        class="relative bg-[url('/assets/images/main-imgs/what-we-do/pco-academy.webp')] bg-cover bg-left md:bg-top min-h-[400px] 4k:min-h-[1000px] py-20 w-full px-10 md:px-20"
    >
        <div
            class="absolute inset-0 bg-[radial-gradient(white_1.5px,transparent_1.5px)] bg-[length:18px_18px] opacity-20"
        ></div>
        <div class="md:max-w-[35%] text-white">
            <h1 class="text-2xl md:text-5xl 4k:text-6xl mb-5">PCO Academy</h1>
            <p class="text-xl 4k:text-3xl">
                Elevating Environmental Stewards: Compliance Education That Drives Sustainable Change
            </p>
        </div>
    </section>
    <!-- text section  -->
    <section class="py-10 md:py-20 text-black text-lg 4k:text-xl">
        <div class="container">
            <h2 class="text-2xl md:text-3xl text-center mb-5 uppercase">
                Invest in Knowledge, Insure Your Compliance: The Future of Environmental Leadership
            </h2>

            <p class="mb-5">
                The role of a Pollution Control Officer (PCO) is not merely administrative; it is central to a company's environmental compliance, operational integrity, and sustainable reputation. Keeping abreast of the constantly evolving environmental regulations, best practices, and innovative technologies is a continuous challenge. Envi-Comm Corporation recognizes this need and offers the <strong>PCO Academy</strong>, a focused program designed to transform your personnel into highly effective environmental compliance leaders.
            </p>

            <p class="mb-5">
                At Envi-Comm's PCO Academy, we deliver more than just certifications; we provide practical, real-world knowledge that translates directly into robust compliance systems and minimized operational risk. Our curriculum is developed and taught by seasoned environmental practitioners and former regulators, ensuring your team receives the most relevant and up-to-date information mandated by the Department of Environment and Natural Resources (DENR). Our comprehensive training services include:
            </p>

            <p class="mb-5">
                <strong>Accreditation and Refresher Courses:</strong>
                 We offer the official, DENR-recognized training required for initial PCO accreditation, as well as essential refresher courses. Our modules go beyond the basics, focusing on the latest administrative orders, technical guidelines, and reporting protocols to keep your PCO fully qualified and effective.
            </p>
            <p class="mb-5">
                <strong>Specialized Topic Workshops:</strong>
                 Compliance is multifaceted. We provide advanced workshops on critical areas such as Hazardous Waste Management, Air Quality Monitoring, Wastewater Treatment Technology, and Chemical Control (PICCS/PCL). These focused sessions equip your team with the specialized skills needed to manage complex environmental aspects specific to your industry.
            </p>
            <p class="mb-5">
                <strong>Compliance Reporting and Documentation Mastery:</strong>
                 A key function of a PCO is accurate and timely reporting. Our training provides hands-on practice in preparing essential documents, including the Self-Monitoring Report (SMR) and Compliance Monitoring Report (CMR), ensuring they meet the stringent requirements of the Environmental Management Bureau (EMB).
            </p>
            <p class="mb-5">
                <strong>Integrated Management Systems Training:</strong>
                 We help PCOs understand how to integrate environmental compliance into broader corporate goals by providing training on establishing and maintaining ISO 14001 (Environmental Management Systems) standards, fostering a culture of continuous environmental improvement.
            </p>
            <p>
                Partner with Envi-Comm Corporation's PCO Academy to empower your team, fortify your compliance framework, and turn regulatory requirements into a source of competitive advantage.
            </p>
        </div>
    </section>
    <!-- Quik facts  -->
    <SectionsWhatWeDoQuickFacts />
    <!-- List of Applications  -->
    <section class="py-10 md:py-20 text-black text-lg 4k:text-xl">
        <div class="container text-center">
            <NuxtLink
                to="/what-we-do/pco-academy/list-of-applications"
                class="bg-[#547326] hover:bg-[#4c6822] transition-all duration-200 text-white py-2 px-2 md:px-5 rounded text-center inline-block w-fit mx-auto"
            >
                List of PCO Academy
            </NuxtLink>
        </div>
    </section>
    <!-- Get in Touch -->
    <SectionsWhatWeDoContactForm />
</template>

<script setup>
import { SectionsWhatWeDoContactForm, SectionsWhatWeDoQuickFacts } from "#components";

useSeo({
  title: "PCO Academy – Envi-Comm Corporation",
  description:
    "Training and certification programs for Pollution Control Officers through Envi-Comm Corporation’s PCO Academy.",
  keywords:
    "PCO academy, pollution control officer training, DENR compliance",
});
</script>

<style scoped></style>
