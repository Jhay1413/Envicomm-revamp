<template>
  <div class="container">
    <SectionsContactSection1 />
    <SectionsContactSection3 />
    <!-- <SectionsContactSection2 /> -->
  </div>
  <SectionsWhatWeDoContactForm />
</template>
<script setup>
import { useSeo } from "~/composables/useSeo";
useSeo({
  title: "Contact Envi-Comm: DENR & EMB Consultant Offices",
  description:
    "Contact the top DENR/EMB Environmental Consulting Firm. Find our offices in Cebu (Visayas) and Manila (Luzon) for fast assistance across the entire Philippines.",
  keywords:
    "Contact DENR consultant, Envi-Comm office address, Environmental Management Bureau compliance contact, Cebu, Manila, Philippines",
  bodyClass: "overflow-x-hidden w-screen relative contact-page",
});
</script>
