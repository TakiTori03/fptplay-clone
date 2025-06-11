<template>
  <div class="top-slider">
    <!-- Loading state -->
    <div v-if="isLoading" class="top-slider__loading">
      <div class="loading-spinner"></div>
    </div>

    <!-- Error state -->
    <div v-else-if="error" class="top-slider__error">
      <p>{{ error }}</p>
      <button @click="fetchMovies" class="retry-button">Thử lại</button>
    </div>

    <!-- Success state -->
    <Swiper
      v-else
      :modules="[Autoplay, Pagination, Navigation]"
      :slides-per-view="1"
      :space-between="30"
      :loop="true"
      :autoplay="{
        delay: 2000,
        disableOnInteraction: false,
      }"
      :pagination="{ clickable: true }"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
      class="top-slider__swiper"
    >
      <SwiperSlide
        v-for="movie in featuredMovies"
        :key="movie.id"
        class="top-slider__slide"
      >
        <div class="top-slider__content">
          <img
            :src="`https://image.tmdb.org/t/p/original${movie.backdrop_path}`"
            :alt="movie.title"
            class="top-slider__image"
          />
          <div class="top-slider__overlay">
            <div class="top-slider__info">
              <h2 class="top-slider__title">{{ movie.title }}</h2>
              <p class="top-slider__overview">{{ movie.overview }}</p>
              <div class="top-slider__actions">
                <button @click="handlePlay(movie.id)" class="top-slider__play">
                  <Play />
                  Xem ngay
                </button>
                <button @click="handleLike(movie.id)" class="top-slider__like">
                  <NuxtImg
                    src="https://fptplay.vn/images/icon-os4/heart.png"
                    alt="heart"
                  />
                </button>
                <button
                  @click="handleShare(movie.id)"
                  class="top-slider__share"
                >
                  <svg
                    data-v-4ded27a0=""
                    viewBox="0 0 16 16"
                    width="1em"
                    height="1em"
                    focusable="false"
                    role="img"
                    aria-label="reply"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi-reply icon mb-1 b-icon bi"
                  >
                    <g
                      data-v-4ded27a0=""
                      transform="translate(8 8) scale(2 2) translate(-8 -8)"
                    >
                      <path
                        d="M6.598 5.013a.144.144 0 0 1 .202.134V6.3a.5.5 0 0 0 .5.5c.667 0 2.013.005 3.3.822.984.624 1.99 1.76 2.595 3.876-1.02-.983-2.185-1.516-3.205-1.799a8.74 8.74 0 0 0-1.921-.306 7.404 7.404 0 0 0-.798.008h-.013l-.005.001h-.001L7.3 9.9l-.05-.498a.5.5 0 0 0-.45.498v1.153c0 .108-.11.176-.202.134L2.614 8.254a.503.503 0 0 0-.042-.028.147.147 0 0 1 0-.252.499.499 0 0 0 .042-.028l3.984-2.933zM7.8 10.386c.068 0 .143.003.223.006.434.02 1.034.086 1.7.271 1.326.368 2.896 1.202 3.94 3.08a.5.5 0 0 0 .933-.305c-.464-3.71-1.886-5.662-3.46-6.66-1.245-.79-2.527-.942-3.336-.971v-.66a1.144 1.144 0 0 0-1.767-.96l-3.994 2.94a1.147 1.147 0 0 0 0 1.946l3.994 2.94a1.144 1.144 0 0 0 1.767-.96v-.667z"
                      ></path>
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Play } from "lucide-vue-next";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import type { Movie } from "~/types/movie-d-type";

const featuredMovies = ref<Movie[]>([]);
const isLoading = ref(false);
const error = ref<string | null>(null);

async function fetchMovies() {
  isLoading.value = true;
  error.value = null;

  try {
    const response = await fetch("/api/movies");
    const result = await response.json();
    if (result.success) {
      featuredMovies.value = result.data;
    } else {
      error.value = "Không thể tải dữ liệu phim";
    }
  } catch (err: unknown) {
    console.error("Error fetching movies:", err);
    error.value = "Đã xảy ra lỗi khi tải dữ liệu";
  } finally {
    isLoading.value = false;
  }
}

// Gọi fetchMovies khi component được mount
onMounted(() => {
  fetchMovies();
});

function handlePlay(movieId: number) {
  navigateTo(`/xem-phim/${movieId}`);
}

function handleLike(movieId: number) {
  console.log("Like movie:", movieId);
}

function handleShare(movieId: number) {
  console.log("Share movie:", movieId);
}
</script>

<style scoped>
.top-slider {
  position: relative;
  width: 100%;
  height: 600px;
  margin-bottom: 2rem;
}

.top-slider__swiper {
  height: 100%;
}

.top-slider__slide {
  height: 100%;
}

.top-slider__content {
  position: relative;
  height: 100%;
}

.top-slider__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.top-slider__overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.4) 50%,
    rgba(0, 0, 0, 0.2) 100%
  );
  display: flex;
  align-items: flex-end;
}

.top-slider__info {
  max-width: 600px;
  padding: 2rem;
  color: #fff;
}

.top-slider__title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.top-slider__overview {
  font-size: 1.1rem;
  line-height: 1.5;
  margin-bottom: 2rem;
  opacity: 0.9;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.top-slider__actions {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.top-slider__play,
.top-slider__like,
.top-slider__share {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
}

.top-slider__play {
  background: #e50914;
  color: #fff;
}

.top-slider__play:hover {
  background: #f40612;
}

.top-slider__like,
.top-slider__share {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
  transform: scaleX(-1);
}

.top-slider__like:hover,
.top-slider__share:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.05);
}

.top-slider__like img {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.top-slider__share svg {
  width: 24px;
  height: 24px;
}

/* Swiper overrides */
:deep(.swiper-pagination-bullet) {
  background: #fff;
  opacity: 0.5;
}

:deep(.swiper-pagination-bullet-active) {
  opacity: 1;
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: #fff;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0.7;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s;
}

:deep(.swiper-button-prev) {
  left: 20px;
}

:deep(.swiper-button-next) {
  right: 20px;
}

:deep(.swiper-button-next:hover),
:deep(.swiper-button-prev:hover) {
  opacity: 1 !important;
}

:deep(.swiper-button-next::after),
:deep(.swiper-button-prev::after) {
  font-size: 20px;
}

.top-slider__loading {
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #e50914;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.top-slider__error {
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;
  color: #fff;
  text-align: center;
  padding: 2rem;
}

.retry-button {
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background: #e50914;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.retry-button:hover {
  background: #f40612;
}
</style>
