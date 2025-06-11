<!-- <template>
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
import { ref, onMounted } from "vue";

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

const rankMovies = ref<Movie[]>([]);

// Fetch ranking movies
const fetchRankingMovies = async () => {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1&api_key=c3c683516a9277e38dd654ff1a858d0d"
    );
    const data = await response.json();
    rankMovies.value = data.results.slice(0, 5);
  } catch (err) {
    console.error("Error fetching ranking movies:", err);
  }
};

onMounted(() => {
  fetchRankingMovies();
});
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
</style> -->
