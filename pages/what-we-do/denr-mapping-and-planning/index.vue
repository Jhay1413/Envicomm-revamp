<template>
    <!-- hero section  -->
    <section
        class="relative bg-[url('/assets/images/main-imgs/what-we-do/denr-mapping-and-planning.webp')] bg-cover bg-left md:bg-top min-h-[400px] 4k:min-h-[1000px] py-20 w-full px-10 md:px-20"
    >
        <div
            class="absolute inset-0 bg-[radial-gradient(white_1.5px,transparent_1.5px)] bg-[length:18px_18px] opacity-20"
        ></div>
        <div class="md:max-w-[35%] text-white">
            <h1 class="text-2xl md:text-5xl 4k:text-6xl mb-5">DENR: Mapping & Planning</h1>
            <p class="text-xl md:text-2xl 4k:text-3xl">
                Lorem ipsum dolor sit amet. A numquam voluptas ex ullam expedita eum aliquam
                laboriosam et enim Quis ut voluptas unde.
            </p>
        </div>
    </section>
    <!-- text section  -->
    <section class="py-10 md:py-20 text-black text-lg 4k:text-xl">
        <div class="container">
            <h2 class="text-2xl md:text-3xl text-center mb-5 uppercase">
                Charting Your Course to Sustainable Development: Precision Mapping for a Greener
                Future
            </h2>
            <p class="mb-5">
                Successful projects in the Philippines depend on more than just a great idea; they
                require a deep understanding of the land and its resources. The Department of
                Environment and Natural Resources (DENR) sets strict requirements for Geographic
                Information Systems (GIS) and other mapping data to ensure that development is both
                sustainable and responsible. At Envi-Comm Corporation, we transform these complex
                requirements into a clear, actionable plan.
            </p>
            <p class="mb-5">
                We don't just create maps; we provide the strategic insights needed to navigate
                environmental regulations from the ground up. Our team of geomatics and planning
                experts uses advanced technology to deliver precise and compliant data, ensuring
                your project avoids costly delays and unforeseen environmental risks. We believe
                that detailed mapping and planning are the first crucial steps toward building a
                project that is not only successful but also environmentally sound.
            </p>
            <p class="mb-5">
                Our comprehensive service suite covers all your DENR mapping and planning needs,
                providing you with a single, reliable point of contact for:
            </p>
            <ul class="list-disc list-inside ml-[19px] mb-5">
                <li class="mb-5">
                    GIS and Geomatics Services: From site assessments and land use planning to
                    environmental sensitivity mapping, we provide the high-quality, geo-referenced
                    data required for your Environmental Impact Statements (EIS) and project
                    proposals. Our maps are meticulously prepared to meet all DENR and other
                    regulatory standards.
                </li>
                <li class="mb-5">
                    Project Feasibility and Site Suitability Studies: We conduct in-depth analyses
                    to help you identify the most viable and environmentally-sound location for your
                    project. This includes assessing terrain, proximity to sensitive ecosystems, and
                    potential environmental hazards, providing a solid foundation for your project's
                    long-term sustainability.
                </li>
                <li class="mb-5">
                    Contingency and Risk Planning: We help you prepare for the unexpected by
                    creating detailed maps and plans for disaster risk reduction and management
                    (DRRM). This proactive approach, in compliance with DENR guidelines, ensures
                    your project is resilient to natural hazards and other environmental challenges.
                </li>
            </ul>
            <p>
                Choose Envi-Comm Corporation and gain a partner committed to excellence, efficiency,
                and the long-term success of your business. We handle the intricacies of
                environmental mapping and planning so you can focus on what you do best: building,
                operating, and growing your project with confidence.
            </p>
        </div>
    </section>
    <!-- Quik facts  -->
    <SectionsWhatWeDoQuickFacts />
    <!-- List of Applications  -->
    <section class="py-10 md:py-20 text-black text-lg 4k:text-xl">
        <div class="container text-center">
            <NuxtLink
                to="/what-we-do/denr-mapping-and-planning/list-of-applications"
                class="bg-[#547326] hover:bg-[#4c6822] transition-all duration-200 text-white py-2 px-5 rounded"
            >
                List of DENR: Mapping & Planning
            </NuxtLink>
        </div>
    </section>
    <!-- Get in Touch -->
    <SectionsWhatWeDoContactForm />
</template>

<script setup>
import { SectionsWhatWeDoContactForm, SectionsWhatWeDoQuickFacts } from "#components";

useHead({
    title: "DENR: Mapping & Planning - Envi-Comm Corporation",
});
</script>

<style scoped></style>
