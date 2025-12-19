<template>
  <div class="w-full bg-white">
  <!-- Hero Section -->
  <div class="w-full bg-[url('/assets/images/careers-bg.jpg')] bg-cover bg-center bg-no-repeat py-20 md:py-32">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center gap-10">
        <!-- Left Content -->
        <div class="w-full md:w-1/2">
          <h1 class="text-4xl md:text-5xl font-bold text-black mb-6">
            Your Next Chapter Starts Here
          </h1>
          <p class="text-gray-700 text-lg mb-8 leading-relaxed">
            Looking for a place where you can do meaningful work and still be
            yourself? Envi-Comm Corporation offers careers that challenge you,
            support you, and help you grow.
          </p>
          <button
            class="bg-[#547326] text-white px-8 py-3 rounded hover:bg-[#4c6822] transition-colors duration-300 font-medium"
          >
            Know More
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Info Grid Section -->
  <div class="container mx-auto px-4 py-10 ">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      <!-- Card 1: Talent Mission -->
      <div class="border border-[#86B93F] p-8 rounded bg-white">
        <h3 class="text-[#86B93F] font-bold text-xl mb-4 uppercase">
          Our Talent Mission
        </h3>
        <p class="text-gray-700">
          To provide a platform where the world's leading environmental minds
          can solve complex compliance and climate challenges through
          collaboration, innovation, and scientific excellence.
        </p>
      </div>
      <!-- Card 2: Workplace Vision -->
      <div class="border border-[#86B93F] p-8 rounded bg-white">
        <h3 class="text-[#86B93F] font-bold text-xl mb-4 uppercase">
          Our Workplace Vision
        </h3>
        <p class="text-gray-700">
          To be the premier destination for professionals, recognized for a
          culture that balances rigorous standards with the personal well-being
          and growth of our team.
        </p>
      </div>
      <!-- Card 3: Core Values (Full Width) -->
      <div class="md:col-span-2 border border-[#86B93F] p-8 rounded bg-white">
        <h3 class="text-[#86B93F] font-bold text-xl mb-6 uppercase">
          How We Work (Core Values)
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ul class="space-y-4">
             <li class="flex items-start gap-2">
              <span class="text-[#86B93F] font-bold">•</span>
              <p class="text-gray-700 text-sm md:text-base">
                <span class="font-bold text-gray-900">Integrity in Science:</span> We stand by our data and our ethics, ensuring every solution is as honest as it is effective.
              </p>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-[#86B93F] font-bold">•</span>
              <p class="text-gray-700 text-sm md:text-base">
                <span class="font-bold text-gray-900">Environmental Stewardship:</span> We don't just advise; we lead by example in everything we do.
              </p>
            </li>
          </ul>
          <ul class="space-y-4">
             <li class="flex items-start gap-2">
              <span class="text-[#86B93F] font-bold">•</span>
              <p class="text-gray-700 text-sm md:text-base">
                <span class="font-bold text-gray-900">Continuous Evolution:</span> The climate is changing, and so are we. We invest in constant learning and new technologies and practices.
              </p>
            </li>
            <li class="flex items-start gap-2">
               <span class="text-[#86B93F] font-bold">•</span>
              <p class="text-gray-700 text-sm md:text-base">
                <span class="font-bold text-gray-900">Collective Impact:</span> We believe that the best solutions come from the intersection of diverse expertise and shared passion.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <!-- Card 4: Why Grow With Us -->
      <div class="border border-[#86B93F] p-8 rounded bg-white">
        <h3 class="text-[#86B93F] font-bold text-xl mb-4 uppercase">
          Why Grow With Us?
        </h3>
        <ul class="space-y-4">
          <li class="flex items-start gap-2">
            <span class="text-[#86B93F] font-bold">•</span>
            <p class="text-gray-700 text-sm md:text-base">
              <span class="font-bold text-gray-900">Professional Development:</span> Opportunity to personal growth and clear pathways to senior consultancy roles.
            </p>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-[#86B93F] font-bold">•</span>
            <p class="text-gray-700 text-sm md:text-base">
              <span class="font-bold text-gray-900">Impact-Driven Work:</span> Everyone contributes to tangible environmental compliance and climate protection.
            </p>
          </li>
        </ul>
      </div>
      <!-- Card 5: Meet The Team -->
      <div class="border border-[#86B93F] p-8 rounded bg-white flex flex-col justify-between">
        <div>
           <h3 class="text-[#86B93F] font-bold text-xl mb-4 uppercase">
            Meet The Team
          </h3>
          <a href="/about" class="text-gray-700 hover:text-[#547326] underline block">
            https://www.envicomm.org/about
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
  <section
    class="min-h-dvh flex items-center justify-center bg-[url('/assets/images/main-imgs/about-03.jpg')] bg-cover bg-center bg-no-repeat py-10 md:py-20"
  >
    <div class="container">
        <div class="text-center mb-10">
          <h2 class="text-4xl font-bold text-white">Open Opportunities</h2>
          <p class="text-white">Ready to leave a lasting legacy?</p>
        </div>
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
          <option value="Administration Department">
            Administration Department
          </option>
          <option value="HR Department">HR Department</option>
          <option value="TECHNICAL DEPARTMENT">TECHNICAL DEPARTMENT</option>
          <option value="Sales & Marketing Department">
            Sales & Marketing
          </option>
          <option value="Operations & Systems Department">
            Operations & Systems
          </option>
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
            <h3 class="font-bold uppercase text-xl 4k:text-2xl">
              {{ job.title }}
            </h3>
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
        <div
          v-else
          class="text-center text-gray-600 font-semibold text-lg py-10"
        >
          🚫 No jobs found matching your search.
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { useSeo } from "~/composables/useSeo";
useSeo({
  title: "Careers at Envi-Comm Corporation",
  description:
    "Join Envi-Comm Corporation’s team of environmental professionals. Explore career opportunities in compliance, consulting, and sustainability.",
  keywords:
    "careers, environmental jobs, DENR compliance careers, Envi-Comm Corporation hiring",
  bodyClass: "overflow-x-hidden w-screen relative careers-page",
});

const searchQuery = ref("");
const selectedDepartment = ref("");

const jobs = ref([
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
]);

const filteredJobs = computed(() => {
  return jobs.value.filter((job) => {
    const matchesSearch =
      searchQuery.value === "" ||
      job.title.toLowerCase().includes(searchQuery.value.toLowerCase());

    const matchesDepartment =
      selectedDepartment.value === "" ||
      job.department === selectedDepartment.value;

    return matchesSearch && matchesDepartment;
  });
});
</script>
