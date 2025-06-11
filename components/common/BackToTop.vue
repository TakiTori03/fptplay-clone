<template>
  <button v-show="show" class="back-to-top" @click="scrollToTop">
    <svg width="24" height="24" fill="currentColor">
      <path d="M12 4l-8 8h6v8h4v-8h6z" />
    </svg>
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
const show = ref(false);
const onScroll = () => {
  show.value = window.scrollY > 200;
};
onMounted(() => window.addEventListener("scroll", onScroll));
onUnmounted(() => window.removeEventListener("scroll", onScroll));
const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
</script>

<style lang="scss" scoped>
.back-to-top {
  position: fixed;
  right: 5rem;
  bottom: 2.5rem;
  background: $color-secondary;
  color: $color-primary;
  border-radius: 10px;
  border: none;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}
</style>
