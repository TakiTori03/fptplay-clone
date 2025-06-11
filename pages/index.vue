<template>
  <div class="home">
    <div class="container">
      <HomeTopSlider />
      <div class="topic">
        <div class="topic__header">
          <h2 class="title">Phim bộ hot</h2>
          <a href="#" class="view-more">Xem thêm</a>
        </div>
        <MovieCardCarousel
          :height="'450px'"
          :width="'320px'"
          :swiper-breakpoints="{
            320: { slidesPerView: 2.1, spaceBetween: 20 },

            768: { slidesPerView: 3.2, spaceBetween: 20 },

            1220: { slidesPerView: 5.3, spaceBetween: 20 },
          }"
          :movies="phimBoMovies"
        />
      </div>
      <div class="topic">
        <div class="topic__header">
          <h2 class="title">Mới ra mắt</h2>
        </div>
        <MovieCardCarousel
          :height="'220px'"
          :width="'400px'"
          :swiper-breakpoints="{
            320: { slidesPerView: 1.5, spaceBetween: 20 },

            768: { slidesPerView: 2.1, spaceBetween: 20 },

            1220: { slidesPerView: 3.2, spaceBetween: 20 },
          }"
          :movies="newMovies"
        />
      </div>
      <CategoryCarousel />
      <div class="topic">
        <div class="topic__header">
          <h2 class="title">Dành riêng cho bạn</h2>
          <a href="#" class="view-more">Xem thêm</a>
        </div>
        <MovieCardCarousel
          :height="'180px'"
          :width="'230px'"
          :swiper-breakpoints="{
            320: { slidesPerView: 2.1, spaceBetween: 10 },

            768: { slidesPerView: 3.2, spaceBetween: 10 },

            1220: { slidesPerView: 5.4, spaceBetween: 10 },
          }"
          :movies="forYouMovies"
        />
      </div>
      <!-- <RankingCarousel /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import CategoryCarousel from "~/components/home/CategoryCarousel.vue";
import HomeTopSlider from "~/components/home/HomeTopSlider.vue";
import MovieCardCarousel from "~/components/home/MovieCardCarousel.vue";
// import RankingCarousel from "~/components/home/RankingCarousel.vue";
import type { Movie } from "~/types/movie-d-type";

definePageMeta({
  layout: "default",
});

const phimBoMovies = ref<Movie[]>([]);
const forYouMovies = ref<Movie[]>([]);
const newMovies = ref<Movie[]>([]);

// Fetch movies data
const fetchMovies = async () => {
  try {
    // Fetch popular movies for phimBoMovies
    const popularResponse = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1&api_key=c3c683516a9277e38dd654ff1a858d0d"
    );
    const popularData = await popularResponse.json();
    phimBoMovies.value = popularData.results.slice(0, 8);

    // Fetch upcoming movies for newMovies
    const upcomingResponse = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1&api_key=c3c683516a9277e38dd654ff1a858d0d"
    );
    const upcomingData = await upcomingResponse.json();
    newMovies.value = upcomingData.results.slice(0, 8);

    // Fetch top rated movies for forYouMovies
    const topRatedResponse = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1&api_key=c3c683516a9277e38dd654ff1a858d0d"
    );
    const topRatedData = await topRatedResponse.json();
    forYouMovies.value = topRatedData.results.slice(0, 8);
  } catch (err) {
    console.error("Error fetching movies:", err);
  }
};

onMounted(() => {
  fetchMovies();
});
</script>

<style lang="scss" scoped>
.home {
  padding: $spacing-lg 0;
  .topic {
    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;

      .title {
        font-size: 1.5rem;
        font-weight: bold;
        color: white;
      }

      .view-more {
        color: #b0b0b0;
        text-decoration: none;
        font-size: 0.9rem;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
