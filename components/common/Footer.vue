<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__top">
        <div class="footer__logo">
          <NuxtImg
            src="https://images.fptplay53.net/media/photo/OTT/2025/05/26/logowebsite4x_1748221195181.png"
            alt="Logo"
            class="img"
          />
          <NuxtImg
            src="https://fptplay.vn/_nuxt/img/logoSaleNoti.cb85045.png"
            alt="Logo-sale"
            class="img"
          />
          <NuxtImg
            src="https://images.dmca.com/Badges/_dmca_premi_badge_4.png?ID=90dbd7fd-a8ad-4f7e-808f-f8b516cd4cc7"
            alt="Logo-protected"
            class="img"
          />
        </div>
        <div class="footer__content">
          <div class="footer__section">
            <h4 class="footer-title">Về FPT Play</h4>
            <ul>
              <li><a href="#">Giới thiệu</a></li>
              <li><a href="#">Các gói dịch vụ</a></li>
              <li><a href="#">Liên hệ</a></li>
              <li><a href="#">Trung tâm hỗ trợ</a></li>
              <li><a href="#">Thông tin</a></li>
            </ul>
          </div>

          <div class="footer__section">
            <h4 class="footer-title">Dịch vụ</h4>
            <ul>
              <li><a href="#">Gói Data</a></li>
              <li><a href="#">Quảng cáo</a></li>
              <li><a href="#">Mua gói</a></li>
              <li><a href="#">Bảo hành</a></li>
            </ul>
          </div>

          <div class="footer__section">
            <h4 class="footer-title">Quy định</h4>
            <ul>
              <li><a href="#">Điều khoản sử dụng</a></li>
              <li><a href="#">Chính sách thanh toán</a></li>
              <li><a href="#">Chính sách bảo mật thông tin dữ liệu</a></li>
            </ul>
          </div>
        </div>
        <div class="footer__social">
          <div class="social-item">
            <a href="#" class="social-link">
              <Icon name="lucide:phone" size="20" />
            </a>
            <span>19006600</span>
          </div>
          <div class="social-item">
            <a href="#" class="social-link">
              <Icon name="lucide:mail" size="20" />
            </a>
            <span>hotrofptplay@fpt.com</span>
          </div>
          <div class="social-item">
            <h4 class="footer-title">Theo doi chúng tôi trên</h4>
          </div>
          <div class="social-item">
            <a href="#" class="social-link">
              <Icon name="lucide:facebook" size="24" />
            </a>

            <a href="#" class="social-link">
              <Icon name="lucide:youtube" size="24" />
            </a>
          </div>
        </div>
      </div>

      <div class="footer__bottom">
        <p>&copy; 2024 FPT Play. Tất cả quyền được bảo lưu.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No additional setup needed as we're using Nuxt Icon
</script>

<style lang="scss" scoped>
.footer {
  padding: 4rem 0 2rem;

  &__container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
    border-top: 2px solid #333;
  }

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
  }

  &__logo {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    gap: 1rem;
    .img {
      height: 40px;
      width: 120px;
      object-fit: cover;
    }
  }

  &__social {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 1rem;
    gap: 1rem;

    .social-link {
      color: #ffffff;
      transition: color 0.3s ease;

      &:hover {
        color: $color-primary;
      }
    }
    .social-item {
      display: flex;
      align-items: center;
      gap: 0.7rem;
    }
  }

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &-title {
    font-size: 1rem;
    font-weight: 100;
    color: #b3b3b3;
  }

  &__section {
    padding: 0 1rem;
    max-width: 263px;
    width: 100%;
    h4 {
      margin-bottom: 1.5rem;
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        margin-bottom: 0.8rem;

        a {
          text-decoration: none;
          transition: color 0.3s ease;
          font-weight: 500;
          &:hover {
            color: $color-primary;
          }
        }
      }
    }
  }

  &__bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 2px solid #333;
    color: #b3b3b3;
  }
}

@media (max-width: 768px) {
  .footer {
    &__top {
      flex-direction: column;
      gap: 2rem;
      text-align: center;
    }

    &__content {
      grid-template-columns: 1fr;
      text-align: center;
    }
  }
}
</style>
