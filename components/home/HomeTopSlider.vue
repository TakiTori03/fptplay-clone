<template>
  <div class="top-slider">
    <Swiper
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

const featuredMovies = ref([
  {
    adult: false,
    backdrop_path: "/7Zx3wDG5bBtcfk8lcnCWDOLM4Y4.jpg",
    genre_ids: [10751, 35, 878],
    id: 552524,
    original_language: "en",
    original_title: "Lilo & Stitch",
    overview:
      "The wildly funny and touching story of a lonely Hawaiian girl and the fugitive alien who helps to mend her broken family.",
    popularity: 768.0749,
    poster_path: "/mKKqV23MQ0uakJS8OCE2TfV5jNS.jpg",
    release_date: "2025-05-17",
    title: "Lilo & Stitch",
    video: false,
    vote_average: 7.1,
    vote_count: 290,
  },
  {
    adult: false,
    backdrop_path: "/2Nti3gYAX513wvhp8IiLL6ZDyOm.jpg",
    genre_ids: [10751, 35, 12, 14],
    id: 950387,
    original_language: "en",
    original_title: "A Minecraft Movie",
    overview:
      "Four misfits find themselves struggling with ordinary problems when they are suddenly pulled through a mysterious portal into the Overworld: a bizarre, cubic wonderland that thrives on imagination. To get back home, they'll have to master this world while embarking on a magical quest with an unexpected, expert crafter, Steve.",
    popularity: 532.5622,
    poster_path: "/yFHHfHcUgGAxziP1C3lLt0q2T4s.jpg",
    release_date: "2025-03-31",
    title: "A Minecraft Movie",
    video: false,
    vote_average: 6.494,
    vote_count: 1523,
  },
  {
    adult: false,
    backdrop_path: "/uIpJPDNFoeX0TVml9smPrs9KUVx.jpg",
    genre_ids: [27, 9648],
    id: 574475,
    original_language: "en",
    original_title: "Final Destination Bloodlines",
    overview:
      "Plagued by a violent recurring nightmare, college student Stefanie heads home to track down the one person who might be able to break the cycle and save her family from the grisly demise that inevitably awaits them all.",
    popularity: 423.5113,
    poster_path: "/6WxhEvFsauuACfv8HyoVX6mZKFj.jpg",
    release_date: "2025-05-14",
    title: "Final Destination Bloodlines",
    video: false,
    vote_average: 7.0,
    vote_count: 476,
  },
  {
    adult: false,
    backdrop_path: "/icFWIk1KfkWLZnugZAJEDauNZ94.jpg",
    genre_ids: [27, 9648],
    id: 1232546,
    original_language: "en",
    original_title: "Until Dawn",
    overview:
      "One year after her sister Melanie mysteriously disappeared, Clover and her friends head into the remote valley where she vanished in search of answers. Exploring an abandoned visitor center, they find themselves stalked by a masked killer and horrifically murdered one by one...only to wake up and find themselves back at the beginning of the same evening.",
    popularity: 357.8394,
    poster_path: "/juA4IWO52Fecx8lhAsxmDgy3M3.jpg",
    release_date: "2025-04-23",
    title: "Until Dawn",
    video: false,
    vote_average: 6.498,
    vote_count: 463,
  },
  {
    adult: false,
    backdrop_path: "/1p5aI299YBnqrEEvVGJERk2MXXb.jpg",
    genre_ids: [28, 12, 53],
    id: 575265,
    original_language: "en",
    original_title: "Mission: Impossible - The Final Reckoning",
    overview:
      "Ethan Hunt and team continue their search for the terrifying AI known as the Entity — which has infiltrated intelligence networks all over the globe — with the world's governments and a mysterious ghost from Hunt's past on their trail. Joined by new allies and armed with the means to shut the Entity down for good, Hunt is in a race against time to prevent the world as we know it from changing forever.",
    popularity: 319.5509,
    poster_path: "/z53D72EAOxGRqdr7KXXWp9dJiDe.jpg",
    release_date: "2025-05-17",
    title: "Mission: Impossible - The Final Reckoning",
    video: false,
    vote_average: 7.1,
    vote_count: 424,
  },
]);

function handlePlay(movieId: number) {
  navigateTo(`/movie/${movieId}`);
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
  height: 600px;
  margin: -2rem -2rem 2rem;
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
</style>
