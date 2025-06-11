<template>
  <div class="ranking-card-content">
    <NextImg
      :src="`/images/slider/${index + 1}.png`"
      class="background-numeric"
    />

    <div class="background-image">
      <NuxtImg
        :src="`https://image.tmdb.org/t/p/original${rankMovie.poster_path}`"
        :alt="rankMovie.title"
        class="rank-movie-image"
      />
    </div>

    <div class="overlay-ranking" @click="navigateToRankMovie">
      <PlayCircle class="play-icon" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { PlayCircle } from "lucide-vue-next";
import type { Movie } from "~/types/movie-d-type";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps<{
  rankMovie: Movie;
  index: number;
}>();

const navigateToRankMovie = () => {
  router.push(`/xem-phim/${props.rankMovie.id}`);
};
</script>

<style lang="scss" scoped>
.ranking-card-content {
  position: relative;
  width: 16.5%;

  display: flex;
  justify-content: center;
  align-items: center;

  .background-numeric {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 60%;
    height: auto;
    object-fit: contain;
    z-index: 1;
    opacity: 0.7;
  }

  .background-image {
    position: relative;
    width: 40%;
    height: 90%;
    border-radius: 0.5rem;
    overflow: hidden;
    z-index: 2;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);

    .rank-movie-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .premium-badge {
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    background-color: #e50914;
    color: white;
    padding: 0.2rem 0.5rem;
    border-radius: 0.2rem;
    font-size: 0.7rem;
    font-weight: bold;
    z-index: 3;
  }

  .exclusive-badge {
    position: absolute;
    bottom: 0.5rem;
    left: 0.5rem;
    background: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
    color: white;
    padding: 0.2rem 0.5rem;
    border-radius: 0.2rem;
    font-size: 0.7rem;
    font-weight: bold;
    z-index: 3;
  }

  .overlay-ranking {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 4;
    cursor: pointer;

    .play-icon {
      width: 3rem;
      height: 3rem;
      color: white;
      filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.6));
    }
  }

  &:hover {
    .overlay-ranking {
      opacity: 1;
    }
  }
}
</style>
