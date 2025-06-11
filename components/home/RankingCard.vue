<template>
  <div class="ranking-card-wrapper" @click="navigateToRankMovie">
    <div
      class="background-numeric"
      :style="{ backgroundImage: `url(${backgroundImageUrl})` }"
    ></div>
    <div class="ranking-card-content">
      <div class="background-image">
        <NuxtImg
          :src="`https://image.tmdb.org/t/p/original${rankMovie.poster_path}`"
          :alt="rankMovie.title"
          class="rank-movie-image"
        />
      </div>

      <div class="overlay-ranking">
        <PlayCircle class="play-icon" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PlayCircle } from "lucide-vue-next";
import type { Movie } from "~/types/movie-d-type";
import { useRouter } from "vue-router";
import { computed } from "vue";

const router = useRouter();

const props = defineProps<{
  rankMovie: Movie;
  index: number;
}>();

const backgroundImageUrl = computed(() => `/images/${props.index}.png`);

const navigateToRankMovie = () => {
  router.push(`/xem-phim/${props.rankMovie.id}`);
};
</script>

<style lang="scss" scoped>
.ranking-card-wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  max-width: 220px;
  max-height: 210px;
  overflow: hidden;
  cursor: pointer;

  .background-numeric {
    display: block;
    position: absolute;
    top: 12%;
    bottom: 0;
    right: 44%;
    width: 70%;
    height: 88%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: contain;
    z-index: 1;
  }

  .ranking-card-content {
    position: relative;
    width: 60%;
    padding-top: 150%;
    margin-left: auto;
    z-index: 2;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);

    .background-image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 2;

      .rank-movie-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
      }
    }

    .overlay-ranking {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      z-index: 3;

      .play-icon {
        width: 60px;
        height: 60px;
        color: white;
        filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.5));
      }
    }

    .exclusive-label {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      background: linear-gradient(90deg, #004080 0%, #002040 100%);
      color: #fff;
      padding: 6px 0;
      text-align: center;
      font-size: 0.75rem;
      font-weight: 600;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      z-index: 4;
      text-transform: uppercase;
    }
  }

  &:hover {
    .overlay-ranking {
      opacity: 1;
      visibility: visible;
    }
  }
}
</style>
