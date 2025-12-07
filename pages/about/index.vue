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
  title: "About Envi-Comm Corporation",
  description:
    "Trusted Environmental Consultants in Cebu",
  keywords:
    "Learn about Envi-Comm Corporation, a leading team of environmental experts dedicated to sustainable development and regulatory compliance in the Philippines.",
  bodyClass: "overflow-x-hidden w-screen relative about-page",
});
</script>
