<template>
    <!-- hero section  -->
    <section
        class="retative bg-[url('/assets/images/main-imgs/what-we-do/denr-professional-and-specialized-authority.webp')] bg-cover bg-left md:bg-top min-h-[400px] 4k:min-h-[1000px] py-20 w-full px-10 md:px-20"
    >
        <div
            class="absolute inset-0 bg-[radial-gradient(white_1.5px,transparent_1.5px)] bg-[length:18px_18px] opacity-20"
        ></div>
        <div class="md:max-w-[35%] text-white">
            <h1 class="text-2xl md:text-5xl 4k:text-6xl mb-5">
                DENR: Professional &  Specialized Authority
            </h1>
            <p class="text-xl 4k:text-3xl">
                Elevate your project with certified expertise - making compliance the ultimate advantage
            </p>
        </div>
    </section>
    <!-- text section  -->
    <section class="py-10 md:py-20 text-black text-lg 4k:text-xl">
        <div class="container">
            <h2 class="text-2xl md:text-3xl text-center mb-5 uppercase">
                The Mark of Trust: Certified Professionals for Unwavering Environmental Integrity
            </h2>

            <p class="mb-5">
                For projects that demand the highest level of environmental scrutiny and accountability, having the right authorized professionals is non-negotiable. The Department of Environment and Natural Resources (DENR) requires the endorsement, certification, and oversight of accredited experts for critical project stages, from planning to audit. With Envi-Comm Corporation, you gain direct access to a network of officially DENR-accredited and specialized professionals whose signatures carry the weight of authority and proven competence.
            </p>

            <p class="mb-5">
                At Envi-Comm, we provide more than just consultation; we integrate certified regulatory expertise directly into your project team. Our professionals are not only highly experienced but hold the official accreditation needed to stamp, sign, and submit documents that meet the DENR's stringent standards. This integrated approach ensures technical accuracy and immediate regulatory acceptance. Our service covers the provision of key specialized personnel, including:
            </p>

            <p class="mb-5">
                PCO (Pollution Control Officer) Services: We provide highly trained and accredited PCOs who can serve as your official representative to the DENR. They are responsible for overseeing compliance with all environmental laws, managing permitting requirements, monitoring waste and effluent, and submitting the mandatory self-monitoring reports (SMRs). EMB-Accredited Environmental Impact Assessment (EIA) Preparers: Our team includes DENR-recognized EIA Preparers who are essential for crafting the Environmental Impact Statements (EIS) and Environmental Performance Reports and Audits (EPRAs). Their accreditation ensures your environmental documents are comprehensive, scientifically sound, and approved by the Environmental Management Bureau (EMB). Managing Head/Technical Expert Certification: For facilities dealing with hazardous wastes (TSD), specialized technical experts, including licensed chemical engineers or other relevant professionals, are required. We provide personnel with the necessary credentials to be certified as Managing Heads or Technical Experts, ensuring facility operations comply with the highest safety and regulatory standards. External Environmental Audit Teams: We field DENR-recognized external audit teams for projects that require mandatory environmental performance reviews. Our accredited auditors provide an independent and objective assessment, identifying gaps and proposing corrective actions to maintain and improve your project’s environmental standing.
            </p>

            <p>
                Choose Envi-Comm Corporation to secure the certified, specialized authority your project requires. We provide the expertise that transforms compliance from a hurdle into a competitive asset, ensuring project continuity and legal peace of mind.
            </p>
        </div>
    </section>
    <!-- Quik facts  -->
    <SectionsWhatWeDoQuickFacts />
    <!-- List of Applications  -->
    <section class="py-10 md:py-20 text-black text-lg 4k:text-xl">
        <div class="container text-center">
            <NuxtLink
                to="/what-we-do/denr-professional-and-specialized-authority/list-of-applications"
                class="bg-[#547326] hover:bg-[#4c6822] transition-all duration-200 text-white py-2 px-2 md:px-5 rounded text-center inline-block w-fit mx-auto"
            >
                List of DENR: Professional & Specialized Authority
            </NuxtLink>
        </div>
    </section>
    <!-- Get in Touch -->
    <SectionsWhatWeDoContactForm />
</template>

<script setup>
import { SectionsWhatWeDoContactForm, SectionsWhatWeDoQuickFacts } from "#components";

useSeo({
  title: "DENR Professional & Specialized Authority – Envi-Comm Corporation",
  description:
    "Envi-Comm Corporation provides professional services for specialized DENR authority requirements.",
  keywords:
    "DENR authority, specialized permits, environmental compliance",
});
</script>

<style scoped></style>
