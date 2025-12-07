<template>
  <Hero />  
  <Dropdowns />
  <Form />
</template>

<script setup>
import { useSeo } from "~/composables/useSeo";
import Hero from "~/components/sections/services-catalog/hero.vue";
import Dropdowns from "~/components/sections/services-catalog/dropdowns.vue";
import Form from "~/components/sections/services-catalog/form.vue";
useSeo({
  title: "Environmental Services Catalog",
  description:
    "Permitting & Compliance Solutions",
  keywords:
    "Explore our full range of services: DENR applications, environmental impact assessments, pollution control reporting, and land use permits.",
  bodyClass: "overflow-x-hidden w-screen relative services-page",
});
</script>

<style lang="scss" scoped></style>
