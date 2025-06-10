<template>
  <div class="movie-card-carousel">
    <swiper
      :space-between="15"
      :navigation="true"
      :breakpoints="swiperBreakpoints"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="(movie, index) in movies" :key="index">
        <MovieCard
          :img="`https://image.tmdb.org/t/p/original${movie.backdrop_path}`"
          :title="movie.title"
          :width="width"
          :height="height"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// Import the MovieCard component
import MovieCard from "./MovieCard.vue";
import type { Movie } from "~/types/movie-d-type";

defineProps<{
  width?: string;
  height?: string;
  swiperBreakpoints: Record<number, BreakpointSettings>;
  movies: Movie[];
}>();

type BreakpointSettings = {
  slidesPerView: number;
  spaceBetween: number;
};

// Register Swiper modules
const modules = [Navigation];
</script>

<style lang="scss" scoped>
.movie-card-carousel {
  padding: 1rem;

  .swiper {
    width: 100%;
    height: auto;
    padding: 1rem 0;
  }

  .swiper-slide {
    height: auto;
    display: flex;
    justify-content: center;
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

  &:hover {
    :deep(.swiper-button-next),
    :deep(.swiper-button-prev) {
      opacity: 1;
      visibility: visible;
    }
  }
}
</style>
