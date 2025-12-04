<template>
    <!-- hero section  -->
    <section
        class="relative bg-[url('/assets/images/main-imgs/what-we-do/renewable-energy-product-and-technology.webp')] bg-cover bg-left md:bg-top min-h-[400px] 4k:min-h-[1000px] py-20 w-full px-10 md:px-20"
    >
        <div
            class="absolute inset-0 bg-[radial-gradient(white_1.5px,transparent_1.5px)] bg-[length:18px_18px] opacity-20"
        ></div>
        <div class="md:max-w-[35%] text-white">
            <h1 class="text-2xl md:text-5xl 4k:text-6xl mb-5">
                Renewable Energy  Product & Technology
            </h1>
            <p class="text-xl md:text-2xl 4k:text-3xl">
                Light up your future today - sustainable power, smarter investment
            </p>
        </div>
    </section>
    <!-- text section  -->
    <section class="py-10 md:py-20 text-black text-lg 4k:text-xl">
        <div class="container">
            <h2 class="text-2xl md:text-3xl text-center mb-5 uppercase">
                Powering Progress: Your Reliable Partner in the Renewable Energy Revolution
            </h2>

            <p class="mb-5">
                The global movement towards sustainability is driving a monumental shift in how we power our lives and businesses. In the Philippines, the demand for reliable, cost-effective, and clean energy solutions is growing exponentially. Envi-Comm Corporation stands at the forefront of this transformation, offering curated renewable energy products and technologies designed for performance, durability, and a lower carbon footprint.
            </p>

            <p class="mb-5">
                At Envi-Comm, our commitment goes beyond energy efficiency; we are dedicated to fostering a future powered by clean, abundant sources. We understand that embracing renewable energy is both an environmental imperative and a smart economic decision. Currently, we specialize in high-quality, dependable solar solutions, while actively preparing to integrate a broader spectrum of clean energy sources in the future. Our core offerings, which pave the way for a more sustainable energy landscape, include:
            </p>

            <p class="mb-5">
                Qui velit amet hic velit officia non sapiente ipsum. Eum doloribus veniam et quia
                aperiam aut tenetur laudantium vel fugit doloremque et consequatur ducimus. Eum
                voluptate alias quo autem excepturi ut quis similique est debitis saepe. Et aperiam
                sapiente et internos nulla est vitae consequatur aut cupiditate magni.
            </p>
            <p class="mb-5">
                            <strong> Solar Lighting Solutions:</strong>
                             We provide a range of advanced solar-powered lighting systems for both commercial and public spaces, including streetlights, pathway lights, and security lights. These turn-key systems offer immediate cost savings on electricity, minimize reliance on the grid, and promote safety through reliable, independent power generation.
                        </p>
                        <p class="mb-5">
                            <strong>Residential and Commercial Solar Systems:</strong>
                            From grid-tied to off-grid installations, we deliver tailored solar photovoltaic (PV) systems designed to meet the specific energy demands of homes and businesses. We handle system design, equipment sourcing (panels, inverters, batteries), installation, and the complex net-metering application process, maximizing your return on investment.
                            </p>
                                    <p class="mb-5">
                                                    <strong>Energy Consultancy and Technology Development:</strong>
                                                      As we execute our current solar projects, we are simultaneously scouting and developing technologies for future deployment, including small-scale wind, bioenergy, and other innovative clean power sources. We offer expert consultation to help clients prepare their infrastructure for a multi-source renewable energy future.
                                                </p>
                                                <p class="mb-5">
                                                                <strong>System Maintenance and Optimization:</strong>
                                                                  Our service extends beyond installation. We provide comprehensive maintenance plans to ensure your solar assets operate at peak efficiency throughout their lifespan, guaranteeing the longevity and performance of your sustainable energy investment.
                                                            </p>

            <p>
                Choose Envi-Comm Corporation to harness the power of the sun and become a leader in sustainable operations. We provide the technology, expertise, and service to make your transition to clean energy seamless and rewarding
            </p>
        </div>
    </section>
    <!-- Quik facts  -->
    <SectionsWhatWeDoQuickFacts />
    <!-- List of Applications  -->
    <section class="py-10 md:py-20 text-black text-lg 4k:text-xl">
        <div class="container text-center">
            <NuxtLink
                to="/what-we-do/renewable-energy-product-and-technology/list-of-applications"
                class="bg-[#547326] hover:bg-[#4c6822] transition-all duration-200 text-white py-2 px-2 md:px-5 rounded text-center inline-block w-fit mx-auto"
            >
                List of Renewable Energy Product & Technology
            </NuxtLink>
        </div>
    </section>
    <!-- Get in Touch -->
    <SectionsWhatWeDoContactForm />
</template>

<script setup>
import { SectionsWhatWeDoContactForm, SectionsWhatWeDoQuickFacts } from "#components";

useHead({
    title: "Renewable Energy  Product & Technology - Envi-Comm Corporation",
});
</script>

<style scoped></style>
