<template>
  <div>
    <SectionsHome8Section1 />
    <SectionsHome8Section11 />
    <SectionsHome8Section8 />
    <SectionsHome8Section6 />
    <SectionsHome8Section9 />
  </div>
</template>

<script setup>
import { useSeo } from "~/composables/useSeo";
useSeo({
  title: "Environmental Consultancy & DENR Compliance Services",
  description:
    "Envi-Comm Corporation Philippines",
  keywords:
    "Envi-Comm Corporation offers expert environmental consultancy in the Philippines. We specialize in DENR permitting, ECC, CNC, and environmental compliance management for businesses.",
  bodyClass: "overflow-x-hidden w-screen relative home-page",
});
</script>
