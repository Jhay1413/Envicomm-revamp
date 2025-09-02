<template>
    <section class="min-h-dvh flex items-center justify-center bg-[#EBF5D7] py-10 md:py-20">
        <div class="container">
            <form @submit.prevent class="flex flex-col md:flex-row gap-4">
                <!-- Search -->
                <div class="relative w-full max-w-sm">
                    <input
                        v-model="searchQuery"
                        type="text"
                        placeholder="Search"
                        class="border-2 border-black rounded-lg p-2 pr-8 w-full"
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
                        />
                    </svg>
                </div>

                <!-- Department -->
                <select
                    v-model="selectedDepartment"
                    class="border-2 border-black rounded-lg p-2 appearance-auto"
                >
                    <option value="">All Job Type</option>
                    <option value="Administration Department">Administration Department</option>
                    <option value="HR Department">HR Department</option>
                    <option value="TECHNICAL DEPARTMENT">TECHNICAL DEPARTMENT</option>
                    <option value="Sales & Marketing Department">Sales & Marketing</option>
                    <option value="Operations & Systems Department">Operations & Systems</option>
                </select>
            </form>

            <!-- Jobs -->
            <div class="mt-10">
                <div
                    v-if="filteredJobs.length"
                    class="grid grid-cols-1 md:grid-cols-3 4k:grid-cols-5 gap-4"
                >
                    <div
                        v-for="job in filteredJobs"
                        :key="job.id"
                        class="border-2 border-black rounded-lg bg-white p-5 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                    >
                        <h3 class="font-bold uppercase text-xl 4k:text-2xl">{{ job.title }}</h3>
                        <p class="mb-5 4k:text-lg">{{ job.department }}</p>
                        <nuxt-link
                            :to="job.to"
                            class="bg-[#547326] hover:bg-[#4c6822] rounded-lg text-white py-2 px-10 4k:text-lg"
                        >
                            More Details
                        </nuxt-link>
                    </div>
                </div>

                <!-- No results -->
                <div v-else class="text-center text-gray-600 font-semibold text-lg py-10">
                    🚫 No jobs found matching your search.
                </div>
            </div>
        </div>
    </section>
</template>

<script>
useHead({
    title: "Careers - Envi-Comm Corporation",
});

export default {
    name: "Careers",
    data() {
        return {
            searchQuery: "",
            selectedDepartment: "",
            jobs: [
                {
                    id: 1,
                    title: "Accounting Staff",
                    department: "Administration Department",
                    to: "/careers/accounting-staff",
                },
                {
                    id: 2,
                    title: "HR GENERALIST",
                    department: "HR Department",
                    to: "/careers/hr-generalist",
                },
                {
                    id: 3,
                    title: "Sales & Marketing Associate",
                    department: "Sales & Marketing Department",
                    to: "/careers/sales-marketing-associate",
                },
                {
                    id: 4,
                    title: "IT Support Specialist",
                    department: "Operations & Systems Department",
                    to: "/careers/it-support-specialist",
                },
                {
                    id: 5,
                    title: "Environmental Specialist",
                    department: "TECHNICAL DEPARTMENT",
                    to: "/careers/environmental-specialist",
                },
                {
                    id: 6,
                    title: "Draftsman",
                    department: "TECHNICAL DEPARTMENT",
                    to: "/careers/draftsman",
                },
                {
                    id: 7,
                    title: "Admin Driver",
                    department: "Administration Department",
                    to: "/careers/admin-driver",
                },
                {
                    id: 8,
                    title: "Sales Officer",
                    department: "Sales & Marketing Department",
                    to: "/careers/sales-officer",
                },
                {
                    id: 9,
                    title: "Full Stack Developer",
                    department: "Operations & Systems Department",
                    to: "/careers/full-stack-developer",
                },
            ],
        };
    },
    computed: {
        filteredJobs() {
            return this.jobs.filter((job) => {
                const matchesSearch =
                    this.searchQuery === "" ||
                    job.title.toLowerCase().includes(this.searchQuery.toLowerCase());
                const matchesDepartment =
                    this.selectedDepartment === "" || job.department === this.selectedDepartment;
                return matchesSearch && matchesDepartment;
            });
        },
    },
};
</script>
