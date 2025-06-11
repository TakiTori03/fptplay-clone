<template>
  <header class="header">
    <div class="container header__content">
      <button class="menu-toggle" @click="toggleMobileNav">
        <Menu :size="24" />
      </button>

      <!-- Logo -->
      <NuxtLink to="/">
        <NuxtImg
          src="/images/fpt_logo.webp"
          alt="FPT Play"
          class="header__logo"
        />
      </NuxtLink>

      <!-- Navigation -->
      <nav
        class="header__nav"
        :class="{ 'nav--mobile-visible': mobileNavVisible }"
      >
        <!-- Desktop Navigation Items -->
        <div class="nav__desktop-items">
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
        </div>

        <!-- Mobile Navigation Items -->
        <div class="nav__mobile-items">
          <NuxtLink to="/" class="nav__item">Trang chủ</NuxtLink>
          <NuxtLink to="/truyen-hinh" class="nav__item">Truyền hình</NuxtLink>
          <NuxtLink to="/phim-bo" class="nav__item">Phim bộ</NuxtLink>
          <NuxtLink to="/fifa-cwc" class="nav__item">FIFA CWC</NuxtLink>
          <NuxtLink to="/thieu-nhi" class="nav__item">Thiếu nhi</NuxtLink>
          <NuxtLink to="/truc-tiep" class="nav__item">Trực tiếp</NuxtLink>
          <NuxtLink to="/galaxy-play" class="nav__item">Galaxy Play</NuxtLink>
          <NuxtLink to="/anime" class="nav__item">Anime</NuxtLink>
          <NuxtLink to="/kplus" class="nav__item">K+</NuxtLink>
          <NuxtLink to="/am-nhac" class="nav__item">Âm nhạc</NuxtLink>
          <NuxtLink to="/karaoke" class="nav__item">Karaoke</NuxtLink>
          <NuxtLink to="/giai-tri" class="nav__item">Giải trí</NuxtLink>
          <NuxtLink to="/asean-cup" class="nav__item">ASEAN Cup</NuxtLink>
          <NuxtLink to="/nba" class="nav__item">NBA</NuxtLink>
          <NuxtLink to="/phim-le" class="nav__item">Phim lẻ</NuxtLink>
          <NuxtLink to="/podcast" class="nav__item">Podcast</NuxtLink>
          <NuxtLink to="/hoc-tap" class="nav__item">Học tập</NuxtLink>
          <NuxtLink to="/the-thao" class="nav__item">Thể thao</NuxtLink>
          <NuxtLink to="/fa-cup" class="nav__item">FA Cup</NuxtLink>
          <NuxtLink to="/vleague" class="nav__item">V.League</NuxtLink>
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

// Close mobile nav when clicking outside
const handleClickOutside = (event) => {
  const mobileNav = document.querySelector(".header__nav");
  const menuToggle = document.querySelector(".menu-toggle");
  if (
    mobileNav &&
    !mobileNav.contains(event.target) &&
    !menuToggle.contains(event.target)
  ) {
    mobileNavVisible.value = false;
  }
};

watch(mobileNavVisible, (isVisible) => {
  if (isVisible) {
    document.addEventListener("click", handleClickOutside);
  } else {
    document.removeEventListener("click", handleClickOutside);
  }
});
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

    .nav__desktop-items {
      display: flex;
      gap: 20px;
      align-items: center;
    }

    .nav__mobile-items {
      display: none;
    }

    .nav__item {
      position: relative;
      color: #fff;
      padding: 10px 0;
      font-weight: 500;
      font-size: 16px;
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
  @media (max-width: 1065px) {
    &__nav {
      .nav__item {
        padding: 10px 0;
        font-size: 15px;
      }
    }
  }
  @media (max-width: 1054px) {
    .menu-toggle {
      display: block;
    }

    &__nav {
      display: none;
      position: fixed;
      width: 250px;
      height: 100vh;
      top: 0;
      left: 0;
      background: #2a2a2a;
      flex-direction: column;
      padding: 16px;

      &.nav--mobile-visible {
        display: flex;
        flex-direction: column;
      }

      .nav__desktop-items {
        display: none;
      }

      .nav__mobile-items {
        display: flex;
        flex-direction: column;
        gap: 15px;
        align-items: flex-start;
        width: 100%;
        overflow-y: auto;
        padding-top: 20px;
      }

      .nav__item {
        padding: 10px 0;
        font-size: 16px;
        font-weight: 400;
        color: #fff;
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
