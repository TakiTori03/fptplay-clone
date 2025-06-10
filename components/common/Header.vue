<template>
  <header class="header">
    <div class="container header__content">
      <button class="menu-toggle" @click="toggleMobileNav">
        <Menu :size="24" />
      </button>

      <!-- Logo -->
      <NuxtLink to="/">
        <NuxtImg
          src="https://images.fptplay53.net/media/photo/OTT/2025/05/26/logowebsite4x_1748221195181.png"
          alt="FPT Play"
          class="header__logo"
        />
      </NuxtLink>

      <!-- Navigation -->
      <nav
        class="header__nav"
        :class="{ 'nav--mobile-visible': mobileNavVisible }"
      >
        <NuxtLink to="/" class="nav__item">Trang chủ</NuxtLink>
        <NuxtLink to="/truyen-hinh" class="nav__item">Truyền hình</NuxtLink>
        <NuxtLink to="/phim-le" class="nav__item">Phim lẻ</NuxtLink>
        <NuxtLink to="/phim-bo" class="nav__item">Phim bộ</NuxtLink>
        <NuxtLink to="/thieu-nhi" class="nav__item">Thiếu nhi</NuxtLink>
        <NuxtLink to="/tv-show" class="nav__item">TV Show</NuxtLink>
        <div class="nav__item nav__dropdown" @click="toggleDropdown">
          <span>Xem thêm</span>
          <div v-if="dropdownVisible" class="dropdown-menu">
            <div class="dropdown-column">
              <NuxtLink to="/truc-tiep">Trực tiếp</NuxtLink>
              <NuxtLink to="/thieu-nhi">Thiếu nhi</NuxtLink>
              <NuxtLink to="/am-nhac">Âm nhạc</NuxtLink>
              <NuxtLink to="/giai-tri">Giải trí</NuxtLink>
              <NuxtLink to="/nba">NBA</NuxtLink>
              <NuxtLink to="/podcast">Podcast</NuxtLink>
              <NuxtLink to="/the-thao">Thể thao</NuxtLink>
              <NuxtLink to="/vleague">V.League</NuxtLink>
            </div>

            <div class="dropdown-column">
              <NuxtLink to="/galaxy-play">Galaxy Play</NuxtLink>
              <NuxtLink to="/kplus">K+</NuxtLink>
              <NuxtLink to="/karaoke">Karaoke</NuxtLink>
              <NuxtLink to="/asean-cup">ASEAN Cup</NuxtLink>
              <NuxtLink to="/phim-le">Phim lẻ</NuxtLink>
              <NuxtLink to="/hoc-tap">Học tập</NuxtLink>
              <NuxtLink to="/fa-cup">FA Cup</NuxtLink>
            </div>
          </div>
        </div>
      </nav>

      <!-- Actions -->
      <div class="header__actions">
        <button class="action-btn" aria-label="Tìm kiếm">
          <Search :size="20" />
        </button>
        <button class="action-btn" aria-label="Thông báo">
          <Bell :size="20" />
        </button>
        <button class="btn-subscribe" @click="redirectTo('/mua-goi')">
          <Wallet :size="20" />
          Mua gói
        </button>
        <button class="btn-login" @click="showModal = true">Đăng nhập</button>
      </div>
    </div>
  </header>
  <AuthModal v-if="showModal" :close="() => (showModal = false)"> </AuthModal>
</template>

<script setup>
import { Bell, Search, Wallet, Menu } from "lucide-vue-next";
import AuthModal from "../auth/AuthModal.vue";
const dropdownVisible = ref(false);
const mobileNavVisible = ref(false);
const showModal = ref(false);
const router = useRouter();

const redirectTo = (path) => {
  router.push(path);
};

const toggleDropdown = () => {
  dropdownVisible.value = !dropdownVisible.value;
};

const toggleMobileNav = () => {
  mobileNavVisible.value = !mobileNavVisible.value;
};
</script>

<style lang="scss" scoped>
@use "sass:color";

.header {
  background-color: $color-background;
  padding: 12px 0;
  position: sticky;
  top: 0;
  z-index: 1000;

  &__content {
    @include flex-center;
    justify-content: space-between;
  }

  &__logo {
    width: 125px;
  }

  &__nav {
    display: flex;
    gap: 20px;
    align-items: center;
    .nav__item {
      position: relative;
      color: #fff;
      padding: 10px 0;
      font-weight: 500;
      font-size: 18px;
      cursor: pointer;
      transition: color 0.3s;
      display: inline;
      &:hover {
        color: $color-primary;
      }
    }
    .nav__dropdown {
      position: relative;

      .dropdown-menu {
        position: absolute;
        top: 100%;
        left: 0;
        display: flex;
        gap: 50px;
        background-color: #1a1a1a;
        padding: 20px 30px;
        border-radius: 6px;
        z-index: 10;
        min-width: 250px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

        .dropdown-column {
          display: flex;
          flex-direction: column;
          gap: 15px;

          a {
            color: #eee;
            font-size: 14px;
            text-decoration: none;

            &:hover {
              color: $color-primary;
            }
          }
        }
      }
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 16px;

    .action-btn {
      background: none;
      border: none;
      color: #fff;
      cursor: pointer;
      padding: 8px;

      svg {
        color: #fff;
        transition: color 0.3s;
      }

      &:hover svg {
        color: $color-primary;
      }
    }

    .btn-subscribe {
      background: linear-gradient(90deg, #ff0000, #ff4d4d);
      border: none;
      color: #fff;
      font-weight: bold;
      padding: 8px 16px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
      cursor: pointer;

      svg {
        color: white;
      }

      &:hover {
        opacity: 0.9;
      }
    }

    .btn-login {
      background: none;
      border: none;
      color: #fff;
      font-size: 14px;
      cursor: pointer;

      &:hover {
        color: $color-primary;
      }
    }
  }
  .menu-toggle {
    display: none;
    background: none;
    border: none;
    color: white;
    padding: 8px;
    cursor: pointer;

    svg {
      color: white;
    }
  }

  @media (max-width: 1054px) {
    .menu-toggle {
      display: block;
    }

    &__nav {
      display: none;
      position: absolute;
      max-width: 200px;
      height: 100vh;
      top: 100%;
      left: 0;
      right: 0;
      background: #6e6e6e;
      flex-direction: column;
      padding: 16px;

      &.nav--mobile-visible {
        display: flex;
      }

      .nav__item {
        padding: 10px 0;
        font-size: 14px;
      }

      .nav__dropdown {
        .dropdown-menu {
          position: static;
          box-shadow: none;
          flex-direction: column;
          gap: 10px;

          .dropdown-column {
            a {
              font-size: 13px;
            }
          }
        }
      }
    }

    &__actions {
      gap: 8px;

      .btn-login,
      .action-btn:nth-child(2) {
        display: none;
      }

      .btn-subscribe {
        padding: 6px 10px;
        font-size: 12px;
      }

      .action-btn {
        padding: 6px;
      }
    }

    &__logo img {
      height: 30px;
    }

    &__content {
      justify-content: space-between;
    }
  }

  @media (max-width: 480px) {
    &__nav {
      .nav__item {
        font-size: 13px;
      }
    }

    &__actions {
      .btn-subscribe {
        font-size: 11px;
        padding: 5px 8px;
      }
    }
  }
}
</style>
