<template>
    <section
        class="relative bg-[url('/assets/images/main-imgs/retainership-bg.png')] bg-cover bg-center bg-fixed overflow-hidden"
    >
        <div class="flex flex-col md:flex-row justify-between items-center gap-10">
            <div class="text-white">
                <h2
                    class="text-2xl md:text-5xl font-extrabold uppercase bg-[#86B93F] py-1 ps-20 pe-5 mb-10 md:inline-block"
                >
                    Special Feature
                </h2>
                <div class="flex flex-col gap-10 md:ms-20 px-5 md:px-0">
                    <h3 class="text-2xl md:text-5xl">Retainership Program</h3>
                    <ul class="list-disc pl-5 text-lg md:text-xl 4k:text-3xl">
                        <li>Financial Peace of Mind: We cover all costs and penalties.</li>
                        <li>Predictable Budgeting: Fixed monthly subscription fee.</li>
                        <li>Expert Management: A dedicated team handles everything.</li>
                        <li>Risk-Free Compliance: We assume all liability.</li>
                        <li>Uninterrupted Operations: Focus on your core business.</li>
                        <li>Effortless Reporting: We handle all paperwork.</li>
                    </ul>
                    <button
                        class="bg-[#547326] border-2 border-white text-2xl 4k:text-3xl rounded-md text-white px-4 py-2 w-fit mx-auto block md:mx-0"
                    >
                        Know More
                    </button>
                </div>
            </div>
            <div class="md:me-20">
                <NuxtImg
                    src="/assets/images/main-imgs/leaf-01.png"
                    class="absolute w-[400px] -top-40 -right-[290px] hidden md:block"
                    alt="leaf"
                />
                <NuxtImg src="/assets/images/main-imgs/table.png" class="w-full" alt="table" />
                <NuxtImg
                    src="/assets/images/main-imgs/leaf-02.png"
                    class="absolute -bottom-40 -right-[190px] hidden md:block"
                    alt="leaf"
                />
            </div>
        </div>
    </section>
</template>

<script>
export default {
    setup() {
        return {};
    },
};
</script>

<style lang="scss" scoped></style>
