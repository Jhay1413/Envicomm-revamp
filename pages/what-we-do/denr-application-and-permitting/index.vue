<template>
    <!-- hero section  -->
    <section
        class="relative bg-[url('/assets/images/main-imgs/what-we-do/application-and-permitting.webp')] bg-cover bg-left md:bg-top min-h-[400px] 4k:min-h-[1000px] py-20 w-full px-10 md:px-20"
    >
        <div
            class="absolute inset-0 bg-[radial-gradient(white_1.5px,transparent_1.5px)] bg-[length:18px_18px] opacity-20"
        ></div>
        <div class="md:max-w-[35%] text-white">
            <h1 class="text-2xl md:text-5xl 4k:text-6xl mb-5">DENR: Application & Permitting</h1>
            <p class="text-xl md:text-2xl 4k:text-3xl">
                Experience a smarter, faster way to handle permitting — making project success
                simple.
            </p>
        </div>
    </section>
    <!-- text section  -->
    <section class="py-10 md:py-20 text-black text-lg 4k:text-xl">
        <div class="container">
            <h2 class="text-2xl md:text-3xl text-center mb-5">
                A Seamless Path to Environmental Compliance: Your Project, Our Expertise
            </h2>
            <p class="mb-5">
                The path to a successful project in the Philippines is often paved with complex
                environmental regulations. Navigating the application and permitting process with
                the Department of Environment and Natural Resources (DENR) can be a significant
                hurdle, but with Envi-Comm Corporation, it becomes a clear, confident journey
            </p>
            <p class="mb-5">
                At Envi-Comm, we don't just process paperwork; we partner with you to ensure your
                vision is realized in full compliance with the country's environmental laws. Our
                dedicated team of experts takes a proactive and strategic approach to every
                application, from start to finish. We believe that environmental compliance should
                not be an obstacle, but a foundation for sustainable growth. Our comprehensive
                service suite covers all your DENR permitting needs, providing you with a single,
                reliable point of contact for:
            </p>
            <ul class="list-disc list-inside ml-[19px] mb-5">
                <li class="mb-5">
                    New ECC and EIS Studies: From initial project screening to the meticulous
                    preparation of Environmental Impact Statements (EIS), we guide you through the
                    entire process to secure your Environmental Compliance Certificate (ECC). Our
                    data-driven insights ensure your project's potential environmental impacts are
                    assessed and managed effectively.
                </li>
                <li class="mb-5">
                    Tenurial Applications: Whether it's for forestland, grazing land, or other
                    special land use permits, we streamline the often-challenging process of
                    tenurial applications under the DENR. We handle the required documentation and
                    liaise with the necessary agencies to secure the legal right to manage and
                    utilize natural resources.
                </li>
                <li class="mb-5">
                    Operational and Facility Permits: We take the complexity out of securing
                    essential operational permits, including Discharge Permits (DP) for wastewater,
                    Permits to Operate (PTO) for air pollution sources, and facility applications
                    for Treatment, Storage, and Disposal (TSD) of hazardous wastes. Our expertise
                    ensures your operations meet strict standards for environmental protection and
                    public health.
                </li>
            </ul>
            <p>
                Choose Envi-Comm Corporation and gain a partner committed to excellence, efficiency,
                and the long-term success of your business. We handle the intricacies of
                environmental applications so you can focus on what you do best: building,
                operating, and growing your project with confidence
            </p>
        </div>
    </section>
    <!-- Quik facts  -->
    <SectionsWhatWeDoQuickFacts />
    <!-- List of Applications  -->
    <section class="py-10 md:py-20 text-black text-lg 4k:text-xl">
        <div class="container text-center">
            <NuxtLink
                to="/what-we-do/denr-application-and-permitting/list-of-applications"
                class="bg-[#547326] hover:bg-[#4c6822] transition-all duration-200 text-white py-2 px-5 rounded"
            >
                List of DENR: Application & Permitting
            </NuxtLink>
        </div>
    </section>
    <!-- Get in Touch -->
    <SectionsWhatWeDoContactForm />

    <!-- Lets Go Green  -->
    <section class="py-10 md:py-20">
        <div class="container">
            <video
                src="/assets/images/main-imgs/what-we-do/Lets-Go-Green.mp4"
                controls
                class="w-full"
            ></video>
        </div>
    </section>
</template>

<script setup>
import { SectionsWhatWeDoContactForm, SectionsWhatWeDoQuickFacts } from "#components";

useHead({
    title: "DENR: Application & Permitting - Envi-Comm Corporation",
});
</script>

<style scoped></style>
