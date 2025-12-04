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
                Transform land data into strategic action - precision planning for a sustainable future
            </p>
        </div>
    </section>
    <!-- text section  -->
    <section class="py-10 md:py-20 text-black text-lg 4k:text-xl">
        <div class="container">
            <h2 class="text-2xl md:text-3xl text-center mb-5 uppercase">
                Your Vision on the Map: Navigating Environmental Data with Unrivaled Clarity
            </h2>
            <p class="mb-5">
                In the realm of environmental management and project development, accurate spatial data is the bedrock of intelligent decision-making. Navigating the diverse land use, geohazard, and regulatory maps provided or required by the Department of Environment and Natural Resources (DENR) is a critical step for any responsible project. With Envi-Comm Corporation, complex geography is simplified into actionable, strategic plans.
            </p>
            <p class="mb-5">
                At Envi-Comm, we bridge the gap between technical mapping and practical compliance. Our expert team utilizes cutting-edge Geographic Information System (GIS) technology and deep regulatory knowledge to provide comprehensive mapping and planning services. We don't just generate maps; we deliver a geospatial strategy that minimizes risk, optimizes resource use, and ensures alignment with national environmental policies. Our services are designed to be your trusted compass for development, covering:
            </p>
            <p class="mb-5">
                <strong>Geohazard and Suitability Mapping:</strong> We conduct detailed analyses using DENR-validated data to identify and map areas susceptible to natural hazards like flooding, landslides, and liquefaction. This crucial step informs site selection, engineering design, and ensures your project's resilience and safety.
            </p>
                <p class="mb-5">
                <strong>Land Use and Zoning Compliance:</strong> Our team meticulously reviews and incorporates local and national land use plans into your project design. We map out compliance zones, protected areas, and ancestral domain boundaries to prevent future legal and operational conflicts, securing a solid foundation for your permits.Resource 
            </p>
            <p class="mb-5">
                <strong>Land Use and Zoning Compliance:</strong> Our team meticulously reviews and incorporates local and national land use plans into your project design. We map out compliance zones, protected areas, and ancestral domain boundaries to prevent future legal and operational conflicts, securing a solid foundation for your permits.Resource 
            </p>
              <p class="mb-5">
                <strong>Inventory and Environmental Baseline Mapping:</strong>Before any groundwork begins, we establish a comprehensive environmental baseline. This includes mapping natural resources, biodiversity hotspots, and existing infrastructure. This geospatial inventory is essential for Environmental Impact Assessments (EIA) and for developing effective mitigation and enhancement measures.
            </p>
               <p class="mb-5">
                <strong>Digital Data Management and Submission:</strong> We handle the entire process of preparing and submitting geospatial data in the precise digital formats required by DENR and its attached agencies (like NAMRIA and MGB). We ensure data integrity, accuracy, and full regulatory acceptance, saving you time and preventing submission roadblocks.
            </p>
             <p class="mb-5">
                Choose Envi-Comm Corporation for mapping and planning, and gain the precision required to move forward with confidence, ensuring your project is environmentally sound, legally compliant, and positioned for long-term success.
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
                class="bg-[#547326] hover:bg-[#4c6822] transition-all duration-200 text-white py-2 px-2 md:px-5 rounded text-center inline-block w-fit mx-auto"
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
