<template>
  <div
    class="bg fixed bottom-28 rounded-full grid place-items-center transition-all duration-300 right-[20px] z-[9999] w-[48px] h-[48px]"
    id="backToTop"
    :class="{ 'opacity-0': !isVisible, 'opacity-100': isVisible }"
  >
    <button
      class="rounded-full bg-green-900 grid place-items-center w-[48px] h-[48px]"
      @click="scrollToTop"
      aria-label="Scroll to top"
    >
      <img
        src="/assets/images/icons/icon-angle-left.svg"
        alt="to top icon"
        style="transform: rotate(90deg)"
      />
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isVisible = ref(false);
const threshold = 300; // Show button after scrolling 300px

const handleScroll = () => {
  isVisible.value = window.scrollY > threshold;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
