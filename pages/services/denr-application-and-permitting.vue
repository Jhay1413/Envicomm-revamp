<template>
    <!-- hero section  -->
    <section
        class="bg-[url('/assets/images/main-imgs/services/application-and-permitting.jpg')] bg-cover bg-left md:bg-top min-h-[400px] py-20 w-full px-10 md:px-20"
    >
        <div class="md:max-w-[35%] text-white">
            <h1 class="text-2xl md:text-5xl 4k:text-6xl mb-5">DENR: Application & Permitting</h1>
            <p class="text-xl md:text-2xl 4k:text-3xl">
                Experience a smarter, faster way to handle permitting — making project success
                simple.
            </p>
        </div>
    </section>
    <!-- A Seamless Path to Environmental Compliance  -->
    <section class="py-10 md:py-20 text-black text-lg md:text-xl">
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
    <section class="py-10 md:py-20 text-black text-lg md:text-xl">
        <div class="container text-center">
            <h2 class="text-2xl md:text-4xl mb-3 uppercase">Quick Facts</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt
            </p>
        </div>
    </section>
    <!-- List of Applications  -->
    <section class="py-10 md:py-20 text-black text-lg md:text-xl">
        <div class="container text-center">
            <h2 class="text-2xl md:text-4xl mb-3 uppercase">List of Applications</h2>
            <p class="mb-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt
            </p>
            <!-- <GreenBtn to="/list-of-applications">List of Applications</GreenBtn> -->
            <NuxtLink
                to="/services/list-of-applications"
                class="bg-[#547326] hover:bg-[#4c6822] transition-all duration-200 text-white py-2 px-5 rounded"
            >
                List of Applications
            </NuxtLink>
        </div>
    </section>
    <!-- Get in Touch -->
    <section class="bg-[#EBF5D7] py-10 md:py-20 text-black text-lg md:text-xl">
        <div class="container">
            <h2 class="text-2xl md:text-4xl mb-3 uppercase text-center">Get in Touch</h2>
            <p class="mb-5 text-center">We'd love to hear from you. Reach out today!</p>
            <form class="flex flex-col justify-center md:max-w-[50%] mx-auto">
                <div>
                    <label for="name" class="block mb-1">Name</label>
                    <input type="text" class="w-full rounded mb-5 p-2" />
                </div>
                <div>
                    <label for="email" class="block mb-1">Email</label>
                    <input type="email" class="w-full rounded mb-5 p-2" />
                </div>
                <div>
                    <label for="message" class="block mb-1">Message</label>
                    <textarea
                        class="w-full rounded mb-5 p-2"
                        placeholder="What are you looking for?"
                        rows="5"
                    ></textarea>
                </div>
                <div class="flex items-center mb-5">
                    <input
                        type="checkbox"
                        name="terms"
                        id="terms"
                        class="mr-2 accent-[#547326] w-5 h-5"
                    />
                    <label for="terms">I accept the Terms</label>
                </div>
                <button
                    class="bg-[#547326] hover:bg-[#4c6822] transition-all duration-200 text-white py-2 px-5 rounded w-fit mx-auto"
                >
                    Submit
                </button>
            </form>
        </div>
    </section>
    <section class="py-10 md:py-20">
        <div class="container">
            <video
                src="/assets/images/main-imgs/services/Lets-Go-Green.mp4"
                controls
                preload="none"
                class="w-full"
            ></video>
        </div>
    </section>
</template>

<script>
useHead({
    title: "DENR: Application & Permitting - Envi-Comm Corporation",
});
</script>

<style scoped></style>
