<template>
  <div class="category-swiper-container">
    <h2>Top 10 phim bộ xu hướng</h2>
    <swiper
      :navigation="true"
      :space-between="20"
      :breakpoints="swiperBreakpoints"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="(rankMovie, index) in rankMovies" :key="index">
        <RankingCard :rank-movie="rankMovie" :index="index" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import type { Movie } from "~/types/movie-d-type";
import { Navigation } from "swiper/modules";
import RankingCard from "./RankingCard.vue";

const modules = [Navigation];

const swiperBreakpoints = {
  320: {
    slidesPerView: 1.5,
    spaceBetween: 10,
  },
  480: {
    slidesPerView: 2.5,
    spaceBetween: 15,
  },
  768: {
    slidesPerView: 3.5,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 4.5,
    spaceBetween: 20,
  },
};

const rankMovies: Movie[] = [
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
];
</script>

<style lang="scss" scoped>
.category-swiper-container {
  width: 100%;
  position: relative;

  h2 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: 600;
  }

  .swiper {
    width: 100%;
    height: auto;
    padding: 1rem 0;
  }

  .swiper-slide {
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  :deep(.swiper-wrapper) {
    display: flex;
    align-items: center;
  }

  :deep(.swiper-button-next),
  :deep(.swiper-button-prev) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
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

  :deep(.swiper-button-disabled) {
    opacity: 0 !important;
    visibility: hidden !important;
    cursor: auto;
    pointer-events: none;
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
