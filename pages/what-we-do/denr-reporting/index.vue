<template>
    <!-- hero section  -->
    <section
        class="bg-[url('/assets/images/main-imgs/what-we-do/denr-reporting.jpg')] bg-cover bg-left md:bg-top min-h-[400px] 4k:min-h-[1000px] py-20 w-full px-10 md:px-20"
    >
        <div class="md:max-w-[35%] text-white">
            <h1 class="text-2xl md:text-5xl 4k:text-6xl mb-5">DENR: Reporting</h1>
            <p class="text-xl md:text-2xl 4k:text-3xl">
                Submit environmental concerns, track incidents, and support a cleaner, greener
                Philippines.
            </p>
        </div>
    </section>
    <!-- text section  -->
    <section class="py-10 md:py-20 text-black text-lg 4k:text-xl">
        <div class="container">
            <h2 class="text-2xl md:text-3xl text-center mb-5 uppercase">
                From Data to Dialogue: Transforming Environmental Reports into Strategic Insights
            </h2>
            <p class="mb-5">
                Environmental compliance in the Philippines extends far beyond obtaining permits;
                it's a continuous commitment to transparent and accurate reporting. For businesses,
                this can mean a complex cycle of data collection, analysis, and submission to the
                Department of Environment and Natural Resources (DENR). At Envi-Comm Corporation, we
                turn this often-daunting task into a streamlined process, ensuring your reports are
                not only compliant but also serve as a tool for strategic decision-making. hurdle,
                but with Envi-Comm Corporation, it becomes a clear, confident journey
            </p>
            <p class="mb-5">
                We understand that timely and accurate reporting is the backbone of your
                environmental responsibility. Our expert team takes the guesswork out of compliance,
                ensuring every report is meticulously prepared, submitted on schedule, and reflects
                your commitment to sustainable operations. With Envi-Comm as your partner, you can
                be confident that your reporting obligations are met with precision and
                professionalism. Our comprehensive service suite covers all your DENR reporting
                needs, providing you with a single, reliable point of contact for:
            </p>
            <ul class="list-disc list-inside ml-[19px] mb-5">
                <li class="mb-5">
                    Self-Monitoring Reports (SMRs): We manage the regular submission of your SMRs,
                    ensuring all required data on air, water, and waste management is accurately
                    collected, analyzed, and formatted for DENR standards. Our proactive approach
                    helps you identify and address potential issues before they become
                    non-compliance events.
                </li>
                <li class="mb-5">
                    Compliance Monitoring Reports (CMRs): For projects with an Environmental
                    Compliance Certificate (ECC), we handle the meticulous preparation and timely
                    submission of your CMRs. We track key performance indicators, document
                    mitigation measures, and provide a clear, comprehensive record of your
                    environmental performance.
                </li>
                <li class="mb-5">
                    Pollution Control Officer (PCO) Reports: We support your designated PCO in
                    preparing all mandated reports, including those for the Pollution Control
                    Association of the Philippines (PCAPI) and the DENR. Our services ensure that
                    all reports are complete, consistent, and reflective of your operational data.
                </li>
            </ul>
            <p>
                Choose Envi-Comm Corporation and transform your environmental reporting from a
                regulatory burden into a clear demonstration of your corporate values. We handle the
                intricacies of data and deadlines so you can focus on building a more sustainable
                and successful business.
            </p>
        </div>
    </section>
    <!-- Quik facts  -->
    <SectionsWhatWeDoQuickFacts />
    <!-- List of Applications  -->
    <section class="py-10 md:py-20 text-black text-lg 4k:text-xl">
        <div class="container text-center">
            <NuxtLink
                to="/coming-soon"
                class="bg-[#547326] hover:bg-[#4c6822] transition-all duration-200 text-white py-2 px-5 rounded"
            >
                List of Applications
            </NuxtLink>
        </div>
    </section>
    <!-- Get in Touch -->
    <SectionsWhatWeDoContactForm />
</template>

<script setup>
import { SectionsWhatWeDoContactForm, SectionsWhatWeDoQuickFacts } from "#components";

useHead({
    title: "DENR: Reporting - Envi-Comm Corporation",
});
</script>

<style scoped></style>
