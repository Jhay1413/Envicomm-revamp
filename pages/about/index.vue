<template>
  <div>
    <SectionsAbout3Section1 />
    <SectionsAbout3Section2 />
    <SectionsAbout3Section4 />
    <!-- <SectionsAbout3Section5 /> -->
    <!-- <SectionsAbout3Section6 /> -->
  </div>
</template>
<script setup>
import { useSeo } from "~/composables/useSeo";
useSeo({
  title: "About Envi-Comm: Accredited DENR & EMB Compliance Experts",
  description:
    "Learn about the leading accredited Environmental Consulting Firm in the Philippines. Our expert team ensures your DENR/EMB compliance across all national regions.",
  keywords:
    "About Envi-Comm, DENR accredited, EMB certified, Environmental Consulting experts, Philippines, Luzon, Visayas, Mindanao",
  bodyClass: "overflow-x-hidden w-screen relative about-page",
});
</script>
