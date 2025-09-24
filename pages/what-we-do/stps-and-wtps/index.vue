<template>
    <!-- hero section  -->
    <section
        class="relative bg-[url('/assets/images/main-imgs/what-we-do/stps-and-wtps.webp')] bg-cover bg-left md:bg-top min-h-[400px] 4k:min-h-[1000px] py-20 w-full px-10 md:px-20"
    >
        <div
            class="absolute inset-0 bg-[radial-gradient(white_1.5px,transparent_1.5px)] bg-[length:18px_18px] opacity-20"
        ></div>
        <div class="md:max-w-[35%] text-white">
            <h1 class="text-2xl md:text-5xl 4k:text-6xl mb-5">STPs & WTPs</h1>
            <p class="text-xl md:text-2xl 4k:text-3xl">
                Lorem ipsum dolor sit amet. A numquam voluptas ex ullam expedita eum aliquam
                laboriosam et enim Quis ut voluptas unde. Eum eligendi autem eum accusamus fugit sed
                laborum laborum hic voluptates ullam est reiciendis accusantium
            </p>
        </div>
    </section>
    <!-- text section  -->
    <section class="py-10 md:py-20 text-black text-lg 4k:text-xl">
        <div class="container">
            <h2 class="text-2xl md:text-3xl text-center mb-5 uppercase">
                From Wastewater to Clean Water: Scalable STP and WTP Solutions for Every Need
            </h2>

            <p class="mb-5">
                The management of water resources is at the heart of the Philippines' environmental
                agenda, with strict regulations governing wastewater discharge. For businesses and
                facilities, this means that a Sewage Treatment Plant (STP) or Wastewater Treatment
                Plant (WTP) is more than a piece of equipment—it's a critical investment in
                environmental responsibility and a license to operate.
            </p>

            <p class="mb-5">
                At Envi-Comm Corporation, we don't just provide a service; we deliver a complete
                solution. We offer state-of-the-art STPs and WTPs designed and built to meet the
                most stringent DENR standards, ensuring your operations are fully compliant from day
                one. Our solutions are engineered for maximum efficiency, reliability, and long-term
                sustainability, and they are fully scalable to meet any demand, from small-scale 5
                CMD systems to large-scale municipal requirements exceeding 5000 CMD.
            </p>

            <p class="mb-5">
                We handle the entire process, from design and supply to installation and
                commissioning, providing a seamless path to compliance. Our comprehensive product
                and service suite includes:
            </p>

            <ul class="list-disc list-inside ml-[19px] mb-5">
                <li class="mb-5">
                    <strong>High-Performance STP and WTP Systems:</strong> We design and supply
                    modular and customized wastewater treatment plants that are perfectly suited to
                    your specific needs. Our solutions are engineered for operational efficiency,
                    ensuring your discharge water quality consistently meets or exceeds DENR
                    standards for both public health and environmental protection.
                </li>
                <li class="mb-5">
                    <strong>Turnkey Installation and Commissioning:</strong> We provide a
                    hassle-free experience by managing the entire installation process. Our team
                    ensures your new plant is set up correctly and fully operational, conducting all
                    necessary testing to guarantee peak performance before handover.
                </li>
                <li class="mb-5">
                    <strong>Comprehensive Permitting and Compliance Support:</strong> We take the
                    complexity out of securing essential operational permits for your new plant,
                    including the Discharge Permit (DP). We also offer ongoing support for your
                    Self-Monitoring Reports (SMRs) and other compliance requirements, giving you the
                    confidence that your operations are always in good standing.
                </li>
            </ul>

            <p>
                Choose Envi-Comm Corporation and gain a partner committed to excellence, efficiency,
                and the long-term success of your business. We provide a superior environmental
                solution so you can focus on what you do best: building, operating, and growing your
                project with confidence.
            </p>
        </div>
    </section>
    <!-- Quik facts  -->
    <SectionsWhatWeDoQuickFacts />
    <!-- List of Applications  -->
    <section class="py-10 md:py-20 text-black text-lg 4k:text-xl">
        <div class="container text-center">
            <NuxtLink
                to="/what-we-do/stps-and-wtps/list-of-applications"
                class="bg-[#547326] hover:bg-[#4c6822] transition-all duration-200 text-white py-2 px-5 rounded"
            >
                List of STPs & WTPs
            </NuxtLink>
        </div>
    </section>
    <!-- Get in Touch -->
    <SectionsWhatWeDoContactForm />
</template>

<script setup>
import { SectionsWhatWeDoContactForm, SectionsWhatWeDoQuickFacts } from "#components";

useHead({
    title: "STPs & WTPs - Envi-Comm Corporation",
});
</script>

<style scoped></style>
