<template>
  <div class="layout">
    <HeaderUI />
    <main class="main">
      <slot />
    </main>
    <FooterUI />
    <BackToTop />
  </div>
</template>

<script setup lang="ts">
// import { SearchIcon, UserIcon } from "lucide-vue-next";
import HeaderUI from "@/components/common/Header.vue";
import FooterUI from "~/components/common/Footer.vue";
import BackToTop from "~/components/common/BackToTop.vue";
</script>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(20, 20, 20, 0.8);
  backdrop-filter: blur(10px);
  padding: 1rem 0;
}

.header .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__logo img {
  height: 40px;
}

.header__nav {
  display: flex;
  gap: 2rem;
}

.header__link {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.header__link:hover {
  color: #e50914;
}

.header__actions {
  display: flex;
  gap: 1rem;
}

.header__search,
.header__profile {
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background-color 0.3s;
}

.header__search:hover,
.header__profile:hover {
  background: rgba(255, 255, 255, 0.1);
}

.main {
  flex: 1;
  padding-top: 72px;
}
</style>
