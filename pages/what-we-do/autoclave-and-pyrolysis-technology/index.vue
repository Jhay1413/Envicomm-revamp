<template>
    <!-- hero section  -->
    <section
        class="bg-[url('/assets/images/main-imgs/what-we-do/autoclave-and-pyrolysis-technology.webp')] bg-cover bg-left md:bg-top min-h-[400px] 4k:min-h-[1000px] py-20 w-full px-10 md:px-20"
    >
        <div class="md:max-w-[35%] text-white">
            <h1 class="text-2xl md:text-5xl 4k:text-6xl mb-5">
                Autoclave and Pyrolysis  Technology
            </h1>
            <p class="text-xl 4k:text-3xl">
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
                Lorem ipsum dolor sit amet. Ut voluptatem earum eos ratione omnis et ipsum soluta
                quo voluptates consequuntur ea autem fugit et dolor quae. Ut harum iusto ut
                exercitationem eaque est dicta sint.
            </h2>

            <p class="mb-5">
                33 dolor repellat et dicta culpa ea ducimus voluptatem sed laboriosam officiis aut
                cumque natus qui illum incidunt. Id incidunt obcaecati ut quaerat reiciendis aut
                amet dignissimos et eaque laboriosam sed neque nisi ut excepturi voluptatem.
            </p>

            <p class="mb-5">
                33 veniam eaque 33 internos porro id recusandae molestiae ut laudantium nulla et
                sunt sapiente qui quisquam similique. Est atque maiores ad assumenda corporis eum
                libero architecto quo velit laborum non laudantium dolore et galisum tenetur. Et
                quasi perspiciatis id corporis accusantium id fugiat blanditiis ut porro quam id
                quia nihil eos ullam vero.
            </p>

            <p class="mb-5">
                Qui velit amet hic velit officia non sapiente ipsum. Eum doloribus veniam et quia
                aperiam aut tenetur laudantium vel fugit doloremque et consequatur ducimus. Eum
                voluptate alias quo autem excepturi ut quis similique est debitis saepe. Et aperiam
                sapiente et internos nulla est vitae consequatur aut cupiditate magni.
            </p>

            <p>
                Sed internos necessitatibus aut vitae maxime et ratione neque. Ut voluptate omnis id
                repudiandae laudantium ex rerum voluptas et odio voluptas est laborum amet id quos
                voluptatem nam nemo voluptas.
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
                class="bg-[#547326] hover:bg-[#4c6822] transition-all duration-200 text-white py-2 px-5 rounded"
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
