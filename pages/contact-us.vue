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
  title: "Contact Envi-Comm Corporation",
  description:
    "Get in touch with Envi-Comm Corporation for environmental consulting, permitting assistance, and compliance support.",
  keywords:
    "contact Envi-Comm Corporation, environmental consulting, DENR permits, compliance support",
  bodyClass: "overflow-x-hidden w-screen relative contact-page",
});
</script>
