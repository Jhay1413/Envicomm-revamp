<template>
    <NuxtLink :to="to" class="bg-[#547326] text-white py-2 px-5 rounded">{{ $slot }}</NuxtLink>
</template>

<script>
defineProps(["to"]);
</script>

<style lang="scss" scoped></style>
