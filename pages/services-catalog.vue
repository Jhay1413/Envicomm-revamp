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
  title: "Full-Service Environmental Consulting & DENR Permit Applications",
  description:
    "Comprehensive list of our DENR (Department of Environment and Natural Resources) and EMB (Environmental Management Bureau) services, from permitting to PCO outsourcing across the Philippines.",
  keywords:
    "Environmental services list, DENR permit services, ECC, PCO, FLAg, permit applications, full-service environmental firm, Luzon, Visayas, Mindanao",
  bodyClass: "overflow-x-hidden w-screen relative services-page",
});
</script>

<style lang="scss" scoped></style>
