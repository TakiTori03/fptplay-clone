<template>
  <div class="category-swiper-container">
    <h2>Danh mục</h2>
    <swiper
      :navigation="true"
      :space-between="20"
      :breakpoints="swiperBreakpoints"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="(category, index) in categories" :key="index">
        <NuxtLink :to="category.link" class="category-card">
          <NuxtImg
            :src="category.image"
            :alt="category.text"
            class="category-image"
          />
        </NuxtLink>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";

interface Category {
  text: string;
  image: string;
  link: string;
}

const categories = ref<Category[]>([
  {
    text: "Truyền hình",
    image:
      "https://images.fptplay53.net/media/photo/OTT/2023/03/22/1679457457_3IN.png?w=300&c=0&fmt=webp",
    link: "/truyen-hinh",
  },
  {
    text: "Trực tiếp",
    image:
      "https://images.fptplay53.net/media/photo/OTT/2023/03/22/1679457443_L16.png?w=300&c=0&fmt=webp",
    link: "/truc-tiep",
  },
  {
    text: "Phim bộ",
    image:
      "https://images.fptplay53.net/media/photo/OTT/2023/03/22/1679456744_VOT.png?w=300&c=0&fmt=webp",
    link: "/phim-bo",
  },
  {
    text: "Phim lẻ",
    image:
      "https://images.fptplay53.net/media/photo/OTT/2023/03/22/1679456782_75S.png?w=300&c=0&fmt=webp",
    link: "/phim-le",
  },
  {
    text: "fifa",
    image:
      "https://images.fptplay53.net/media/photo/OTT/2025/05/21/1747819355_06M.png?w=300&c=0&fmt=webp",
    link: "/fifa",
  },
  {
    text: "v-league",
    image:
      "https://images.fptplay53.net/media/photo/OTT/2023/03/22/1679457468_7JC.png?w=300&c=0&fmt=webp",
    link: "/v-league",
  },
  {
    text: "Thieu nhi",
    image:
      "https://images.fptplay53.net/media/photo/OTT/2023/03/22/1679457431_0VP.png?w=300&c=0&fmt=webp",
    link: "/thieu-nhi",
  },
  {
    text: "Am nhac",
    image:
      "https://images.fptplay53.net/media/photo/OTT/2023/03/22/1679456522_I8Z.png?w=300&c=0&fmt=webp",
    link: "/am-nhac",
  },
]);

const swiperBreakpoints = {
  320: { slidesPerView: 2, spaceBetween: 10 },
  768: { slidesPerView: 3, spaceBetween: 10 },
  1220: { slidesPerView: 5.45, spaceBetween: 10 },
};
// Register Swiper modules
const modules = [Navigation];
</script>

<style scoped>
.category-swiper-container {
  padding: 20px 0;
  position: relative;
  width: 100%;
  h2 {
    color: white;
    margin-bottom: 20px;
  }

  .category-card {
    display: block;
    border-radius: 8px;
    overflow: hidden;
    height: 150px;
  }

  .category-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  :deep(.swiper-button-next),
  :deep(.swiper-button-prev) {
    position: absolute;
    top: 0;
    width: 6%;
    height: 100%;
    margin-top: unset;
    z-index: 10;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
  }

  :deep(.swiper-button-next) {
    right: 0;
    left: auto;
    background: linear-gradient(270deg, #000000 35%, rgba(0, 0, 0, 0.5) 100%);
    box-shadow: none;
  }

  :deep(.swiper-button-prev) {
    left: 0;
    right: auto;
    background: linear-gradient(90deg, #000000 35%, rgba(0, 0, 0, 0.5) 100%);
    box-shadow: none;
  }

  :deep(.swiper-button-disabled) {
    opacity: 0 !important;
    visibility: hidden !important;
    cursor: auto;
    pointer-events: none;
  }

  &:hover {
    :deep(.swiper-button-next),
    :deep(.swiper-button-prev) {
      opacity: 1;
      visibility: visible;
    }
  }
}
</style>
