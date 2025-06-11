<template>
  <div class="movie-card" :style="{ width, height }">
    <div class="poster-wrapper">
      <img
        :src="`https://image.tmdb.org/t/p/w500${
          parseInt(height?.replace('px', '') || '0') >
          parseInt(width?.replace('px', '') || '0')
            ? movie.poster_path
            : movie.backdrop_path
        }`"
        :alt="movie.title"
        class="poster"
      />
      <div class="overlay" @click="navigateToMovie">
        <PlayCircle class="play-icon" />
      </div>
    </div>
    <p class="movie-title">{{ movie.title }}</p>
  </div>
</template>

<script lang="ts" setup>
import { PlayCircle } from "lucide-vue-next";
import type { Movie } from "~/types/movie-d-type";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps<{
  movie: Movie;
  width?: string;
  height?: string;
}>();

const navigateToMovie = () => {
  router.push(`/xem-phim/${props.movie.id}`);
};
</script>

<style lang="scss" scoped>
.movie-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: white;
  width: v-bind(width);
  height: v-bind(height);

  .poster-wrapper {
    position: relative;
    width: 100%;
    height: calc(100% - 2rem); // Subtract space for title
    border-radius: 0.3rem;
    overflow: hidden;
    cursor: pointer;

    .poster {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .overlay {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;

      .play-icon {
        width: 3rem;
        height: 3rem;
        color: white;
        filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.6));
      }
    }

    &:hover {
      .poster {
        transform: scale(1.05);
      }
      .overlay {
        opacity: 1;
      }
    }
  }

  .movie-title {
    padding: 1.25rem;
    font-size: 0.95rem;
    font-weight: 500;
    text-align: left;
    line-height: 1.3;
    height: 2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>
