<template>
  <div class="video-page">
    <div class="container">
      <div class="video-wrapper">
        <iframe
          width="100%"
          height="500"
          :src="`https://vip.opstream14.com/share/c8b5850476913c169ecbb4d02bbe32a5`"
          title="Video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <!-- Loading State -->
      <div v-if="isLoading" class="loading-state">
        <div class="loading-spinner"></div>
        <p>Đang tải thông tin phim...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="error-state">
        <div class="error-icon">⚠️</div>
        <h2>Đã xảy ra lỗi</h2>
        <p>{{ error }}</p>
        <button @click="fetchMovie" class="retry-button">Thử lại</button>
      </div>

      <!-- Movie Info -->
      <div v-else-if="movie" class="movie-info">
        <div class="movie-info-main">
          <h1 class="title">{{ movie.title }}</h1>
          <div class="subtitle">
            {{ movie.original_title }}
          </div>
          <div class="rating-row">
            <div class="rating-badge">
              <span class="star">★</span>
              <span class="score">{{ movie.vote_average.toFixed(1) }}</span>
              <span class="votes">({{ movie.vote_count }})</span>
            </div>
            <span class="stars">
              <span
                v-for="i in 5"
                :key="i"
                :class="{ filled: i <= Math.round(movie.vote_average / 2) }"
                >★</span
              >
            </span>
          </div>
          <div class="meta">
            <span>{{ new Date(movie.release_date).getFullYear() }}</span>
            <span>•</span>
            <span>{{ movie.adult ? "T18" : "T13" }}</span>
            <span>•</span>
            <span>{{ movie.original_language.toUpperCase() }}</span>
          </div>
          <div class="desc">
            {{ movie.overview }}
          </div>
        </div>
        <div class="movie-info-side">
          <div class="actions">
            <button class="follow">
              <img
                src="https://fptplay.vn/images/icon-os4/heart.png"
                alt="heart"
                class="icon"
              />
              <span>Theo dõi</span>
            </button>
            <button class="share">
              <img
                src="https://fptplay.vn/images/icon-os4/share.png"
                alt="shared"
                class="icon"
              />
              <span>Chia sẻ</span>
            </button>
          </div>
          <div class="info-list">
            <div>
              <span class="label">Diễn viến:</span>
              Hoàng Khuyết, Trần Vũ, Thúy Hằng, Huyền Chi, Chơn Nhơn
            </div>
            <div>
              <span class="label">Đạo diễn</span>
              Yamamoto Yasuichiro
            </div>
            <div>
              <span class="label">Thể loại:</span>
              <span
                v-for="(genre, index) in getGenreNamesByIds(movie.genre_ids)"
                :key="index"
              >
                {{ genre }}{{ index < movie.genre_ids.length - 1 ? ", " : "" }}
              </span>
            </div>
            <div>
              <span class="label">Ngôn ngữ:</span> {{ movie.original_language }}
            </div>
            <div>
              <span class="label">Lượt xem:</span>
              {{ movie.popularity.toFixed(0) }}
            </div>
          </div>
        </div>
      </div>

      <!-- Related Movies Section -->
      <div class="movie-">
        <h2 class="title">Nội dung liên quan</h2>
        <MovieCardCarousel
          :height="'180px'"
          :width="'230px'"
          :swiper-breakpoints="{
            320: { slidesPerView: 2.1, spaceBetween: 10 },
            768: { slidesPerView: 3.2, spaceBetween: 10 },
            1536: { slidesPerView: 5.4, spaceBetween: 10 },
          }"
          :movies="relatedMovie"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MovieCardCarousel from "~/components/home/MovieCardCarousel.vue";
import type { Movie } from "~/types/movie-d-type";
import { getGenreNamesByIds } from "~/utils/index";
import { useRoute } from "vue-router";

const route = useRoute();
const movie = ref<Movie | null>(null);

const isLoading = ref(true);
const error = ref<string | null>(null);

const relatedMovie = ref<Movie[]>([
  {
    adult: false,
    backdrop_path: "/v6MPbA9ev0yttbILLjGOo2nh31h.jpg",
    genre_ids: [28, 53],
    id: 1480799,
    original_language: "pt",
    original_title: "The Great Escape",
    overview: "",
    popularity: 160.0206,
    poster_path: "/h7shL668vhC2wsZQSBWzxkMuZ8K.jpg",
    release_date: "2023-05-26",
    title: "The Great Escape",
    video: false,
    vote_average: 5.7,
    vote_count: 3,
  },
  {
    adult: false,
    backdrop_path: "/rthMuZfFv4fqEU4JVbgSW9wQ8rs.jpg",
    genre_ids: [28, 878, 12],
    id: 986056,
    original_language: "en",
    original_title: "Thunderbolts*",
    overview:
      "After finding themselves ensnared in a death trap, seven disillusioned castoffs must embark on a dangerous mission that will force them to confront the darkest corners of their pasts.",
    popularity: 144.3351,
    poster_path: "/m9EtP1Yrzv6v7dMaC9mRaGhd1um.jpg",
    release_date: "2025-04-30",
    title: "Thunderbolts*",
    video: false,
    vote_average: 7.447,
    vote_count: 1018,
  },
  {
    adult: false,
    backdrop_path: "/14UFWFJsGeInCbhTiehRLTff4Yx.jpg",
    genre_ids: [53, 28],
    id: 1233069,
    original_language: "de",
    original_title: "Exterritorial",
    overview:
      "When her son vanishes inside a US consulate, ex-special forces soldier Sara does everything in her power to find him — and uncovers a dark conspiracy.",
    popularity: 142.6383,
    poster_path: "/jM2uqCZNKbiyStyzXOERpMqAbdx.jpg",
    release_date: "2025-04-29",
    title: "Exterritorial",
    video: false,
    vote_average: 6.74,
    vote_count: 411,
  },
  {
    adult: false,
    backdrop_path: "/8eifdha9GQeZAkexgtD45546XKx.jpg",
    genre_ids: [28, 53, 878],
    id: 822119,
    original_language: "en",
    original_title: "Captain America: Brave New World",
    overview:
      "After meeting with newly elected U.S. President Thaddeus Ross, Sam finds himself in the middle of an international incident. He must discover the reason behind a nefarious global plot before the true mastermind has the entire world seeing red.",
    popularity: 139.349,
    poster_path: "/pzIddUEMWhWzfvLI3TwxUG2wGoi.jpg",
    release_date: "2025-02-12",
    title: "Captain America: Brave New World",
    video: false,
    vote_average: 6.085,
    vote_count: 1954,
  },
  {
    adult: false,
    backdrop_path: "/jRvhP4AfFnJ03lCQhp1fie7XPSd.jpg",
    genre_ids: [28, 53],
    id: 977294,
    original_language: "en",
    original_title: "Tin Soldier",
    overview:
      "An ex-special forces operative seeks revenge against a cult leader who has corrupted his former comrades, the Shinjas. This leader, known as The Bokushi, promises veterans a purpose and protection, but is revealed to be a destructive influence. The ex-soldier, Nash Cavanaugh, joins forces with military operative Emmanuel Ashburn to infiltrate the Bokushi's fortress and expose his reign of terror",
    popularity: 172.8611,
    poster_path: "/lFFDrFLXywFhy6khHes1LCFVMsL.jpg",
    release_date: "2025-05-22",
    title: "Tin Soldier",
    video: false,
    vote_average: 5.024,
    vote_count: 41,
  },
  {
    adult: false,
    backdrop_path: "/v6MPbA9ev0yttbILLjGOo2nh31h.jpg",
    genre_ids: [28, 53],
    id: 1480799,
    original_language: "pt",
    original_title: "The Great Escape",
    overview: "",
    popularity: 160.0206,
    poster_path: "/h7shL668vhC2wsZQSBWzxkMuZ8K.jpg",
    release_date: "2023-05-26",
    title: "The Great Escape",
    video: false,
    vote_average: 5.7,
    vote_count: 3,
  },
  {
    adult: false,
    backdrop_path: "/rthMuZfFv4fqEU4JVbgSW9wQ8rs.jpg",
    genre_ids: [28, 878, 12],
    id: 986056,
    original_language: "en",
    original_title: "Thunderbolts*",
    overview:
      "After finding themselves ensnared in a death trap, seven disillusioned castoffs must embark on a dangerous mission that will force them to confront the darkest corners of their pasts.",
    popularity: 144.3351,
    poster_path: "/m9EtP1Yrzv6v7dMaC9mRaGhd1um.jpg",
    release_date: "2025-04-30",
    title: "Thunderbolts*",
    video: false,
    vote_average: 7.447,
    vote_count: 1018,
  },
]);

// Fetch movie data
const fetchMovie = async () => {
  try {
    isLoading.value = true;
    error.value = null;
    const id = route.params.id;
    const data = await $fetch<Movie>(`/api/movie/${id}`);
    movie.value = data;
  } catch (err) {
    error.value =
      err instanceof Error ? err.message : "Không thể tải thông tin phim";
    console.error("Error fetching movie:", err);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  fetchMovie();
});
</script>

<style lang="scss" scoped>
.video-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
}
.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.movie-info {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 32px;
  color: #fff;
  font-family: inherit;
  gap: 40px;

  .movie-info-main {
    flex: 1 1 72%;
    max-width: 72%;

    .rating-row {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      gap: 12px;

      .rating-badge {
        display: flex;
        align-items: center;
        background: #333;
        border-radius: 16px;
        padding: 2px 12px 2px 8px;
        font-size: 1.1rem;
        font-weight: 500;
        gap: 4px;
        width: fit-content;

        .star {
          color: #ff5a1f;
          font-size: 1.1em;
          margin-right: 2px;
        }
        .score {
          color: #fff;
          font-weight: 700;
          margin-right: 2px;
        }
        .votes {
          color: #aaa;
          font-size: 0.95em;
          font-weight: 400;
          margin-left: 2px;
        }
      }

      .stars {
        color: #ff9800;
        margin-left: 0;
        font-size: 1.1rem;
        display: flex;
        align-items: center;
        gap: 2px;

        .filled {
          color: #ff9800;
        }
        span:not(.filled) {
          color: #666;
        }
      }
    }
  }
  .movie-info-side {
    flex: 1 1 28%;
    max-width: 320px;
    margin-left: 0;
  }
  .title {
    font-size: 2.1rem;
    font-weight: 700;
    margin-bottom: 6px;
  }
  .subtitle {
    font-size: 1.05rem;
    color: #aaa;
    margin-bottom: 14px;
    font-weight: 400;
  }
  .meta {
    color: #ccc;
    margin-bottom: 8px;
    font-size: 1rem;
    display: flex;
    gap: 8px;
  }
  .tags {
    color: #ff9800;
    font-size: 0.95rem;
    margin-bottom: 10px;
  }
  .desc {
    color: #eee;
    font-size: 1rem;
    margin-bottom: 10px;
  }
  .desc .more {
    color: #ff9800;
    cursor: pointer;
    margin-left: 4px;
  }
  .actions {
    display: flex;
    gap: 16px;
    margin-bottom: 16px;
  }
  .actions button {
    background: none;
    border: none;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
    padding: 0;
    transition: color 0.2s;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .actions button .icon {
    width: 20px;
    height: 20px;
    display: inline-block;
  }
  .actions button:hover {
    color: #ff9800;
  }
  .info-list {
    font-size: 1rem;
    color: #ccc;
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 8px;
  }
  .info-list .label {
    color: #fff;
    font-weight: 500;
    margin-right: 4px;
  }
  .info-list div {
    margin-bottom: 2px;
    line-height: 1.6;
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
  }
  .info-list a {
    color: #ff9800;
    text-decoration: none;
  }
  .info-list a:hover {
    text-decoration: underline;
  }
}

@media (max-width: 1024px) {
  .movie-info {
    flex-direction: column;
    gap: 24px;

    .movie-info-main,
    .movie-info-side {
      max-width: 100%;
      flex: 1 1 100%;
      margin-left: 0;
    }
    .movie-info-side {
      margin-top: 12px;
    }
  }
}

@media (max-width: 768px) {
  .movie-info {
    margin-top: 18px;
    padding: 0 8px;
    .movie-info-main {
      .title {
        font-size: 1.2rem;
      }
      .subtitle {
        font-size: 0.95rem;
      }
      .desc {
        font-size: 0.95rem;
      }
      .rating-row {
        .rating-badge {
          font-size: 1rem;
          padding: 2px 8px 2px 6px;
        }
        .stars {
          font-size: 1rem;
        }
      }
    }
    .movie-info-side {
      font-size: 0.98rem;
      .info-list {
        font-size: 0.98rem;
        gap: 4px;
      }
    }
  }
}

.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  text-align: center;
  color: #fff;

  .loading-spinner {
    width: 50px;
    height: 50px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #ff9800;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.1rem;
    color: #ccc;
  }
}

.error-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  text-align: center;
  color: #fff;

  .error-icon {
    font-size: 3rem;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #ff5252;
  }

  p {
    font-size: 1.1rem;
    color: #ccc;
    margin-bottom: 20px;
  }

  .retry-button {
    background: #ff9800;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background: #f57c00;
    }
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
