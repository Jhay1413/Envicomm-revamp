<template>
    <!-- hero section  -->
    <section
        class="bg-[url('/assets/images/main-imgs/what-we-do/autoclave-and-pyrolysis-technology.webp')] bg-cover bg-left md:bg-top min-h-[400px] 4k:min-h-[1000px] py-20 w-full px-10 md:px-20"
    >
        <div class="md:max-w-[35%] text-white">
            <h1 class="text-2xl md:text-5xl 4k:text-6xl mb-5">
                Autoclave and  Pyrolysis Technology
            </h1>
            <p class="text-xl 4k:text-3xl">
                Transforming difficult waste into opportunity - advanced technology for environmental stewardship
            </p>
        </div>
    </section>
    <!-- text section  -->
    <section class="py-10 md:py-20 text-black text-lg 4k:text-xl">
        <div class="container">
            <h2 class="text-2xl md:text-3xl text-center mb-5 uppercase">
                The Future of Waste Treatment: Safe, Sustainable, and Fully Compliant
            </h2>

            <p class="mb-5">
                Effectively managing special, infectious, and hazardous wastes presents one of the most significant challenges in modern industry and healthcare. Traditional disposal methods are increasingly unsustainable and often non-compliant with stringent environmental regulations. Envi-Comm Corporation addresses this critical need by providing state-of-the-art, proven thermal and non-thermal waste treatment technologies, ensuring complete destruction of harmful elements and the responsible recovery of resources.
            </p>

            <p class="mb-5">
                At Envi-Comm, we are more than just a supplier; we are your end-to-end partner in advanced waste management. We bring world-class Autoclaves and Pyrolysis Technology directly to your facility, offering a turnkey solution that covers everything from initial design to successful operation. Our dedicated team manages the entire process to ensure seamless integration and full regulatory approval, so you can focus on your core business with peace of mind. Our comprehensive service suite provides a single, reliable point of contact for:
            </p>

            <p class="mb-5">
                <strong>Turnkey Supply, Installation, and Commissioning:</strong>
                 We source and install industry-leading equipment, including high-capacity medical waste autoclaves and advanced pyrolysis units. Our engineers ensure perfect integration into your existing infrastructure and provide expert commissioning for peak performance and safety from day one.
            </p>
            <p class="mb-5">
                <strong>Full Regulatory Permitting and Compliance:</strong>
                 We navigate the complex regulatory landscape, securing all necessary Permits to Operate (PTO), Environmental Compliance Certificates (ECC), and facility registrations with the DENR for the treatment, storage, and disposal (TSD) of special and hazardous wastes. We ensure your system is fully licensed for operations.
            </p>
            <p class="mb-5">
                <strong>Special and Infectious Waste Treatment:</strong>
                 Our Autoclave solutions provide a safe, non-burn sterilization method for infectious medical waste, converting biohazardous materials into non-hazardous waste suitable for safe landfill disposal, thereby protecting public health and the environment.
            </p>
            <p class="mb-5">
                <strong>Difficult and Hazardous Waste Valorization (Pyrolysis):</strong>
                 We deploy Pyrolysis technology—a thermal decomposition process—to treat challenging materials like used tires, certain industrial wastes, and plastics. This process not only safely eliminates the waste but also recovers valuable byproducts, such as fuel oil and carbon black, promoting a circular economy.
            </p>
           

            <p>
                Choose Envi-Comm Corporation and invest in a future where waste is not an end, but a resource. We deliver the technology, expertise, and permits necessary to manage your most difficult wastes safely, sustainably, and in full compliance.
            </p>
        </div>
    </section>
    <!-- Quik facts  -->
    <SectionsWhatWeDoQuickFacts />
    <!-- List of Applications  -->
    <section class="py-10 md:py-20 text-black text-lg 4k:text-xl">
        <div class="container text-center">
            <NuxtLink
                to="/what-we-do/autoclave-and-pyrolysis-technology/list-of-applications"
                class="bg-[#547326] hover:bg-[#4c6822] transition-all duration-200 text-white py-2 px-2 md:px-5 rounded text-center inline-block w-fit mx-auto"
            >
                List of Autoclave and Pyrolysis Technology
            </NuxtLink>
        </div>
    </section>
    <!-- Get in Touch -->
    <SectionsWhatWeDoContactForm />
</template>

<script setup>
import { SectionsWhatWeDoContactForm, SectionsWhatWeDoQuickFacts } from "#components";

useHead({
    title: "DENR: Professional & Specialized Authority - Envi-Comm Corporation",
});
</script>

<style scoped></style>
