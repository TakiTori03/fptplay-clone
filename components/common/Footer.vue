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
        <div class="bottom-left">
          <p>
            Công ty Cổ phần Viễn Thông FPT - Người đại diện: Ông Hoàng Việt Anh.
            Trụ sở: Tầng 2, Tòa nhà FPT Cầu Giấy, Số 17 Phố Duy Tân, Phường Dịch
            Vọng Hậu, Quận Cầu Giấy, TP.Hà Nội
          </p>
          <p>
            Địa chỉ liên lạc: Tầng 9, Block A, tòa nhà FPT Cầu Giấy, số 10 Phạm
            Văn Bạch, quận Cầu Giấy, TP. Hà Nội
          </p>
          <p>
            Số điện thoại liên hệ: 024 7300 2222. Thư điện tử:
            hotrokhachhang@fpt.com hoặc hotrofptplay@fpt.com
          </p>
          <p>
            Giấy chứng nhận đăng ký doanh nghiệp số 0101778163 do Sở Kế hoạch và
            Đầu tư Thành phố Hà Nội cấp lần đầu ngày 28/7/2005, cấp đăng ký thay
            đổi lần thứ 32 vào ngày 21/12/2023.
          </p>
          <p>
            Giấy phép cung cấp dịch vụ phát thanh, truyền hình trả tiền số
            377/GP-BTTTT cấp sửa đổi bổ sung lần 1 ngày 10/10/2023.
          </p>
        </div>
        <div class="bottom-right">
          <NuxtImg
            src="https://fptplay.vn/images/box.png"
            class="social-icon"
          />
          <NuxtImg src="https://fptplay.vn/images/pc.png" class="social-icon" />
          <NuxtImg
            src="https://fptplay.vn/images/browser.png"
            class="social-icon"
          />
          <NuxtImg
            src="https://fptplay.vn/images/apple.png"
            class="social-icon"
          />
          <NuxtImg
            src="https://fptplay.vn/images/android.png"
            class="social-icon"
          />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

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
    display: flex;
    gap: 45px;
    padding-top: 1.5rem;
    border-top: 2px solid #333;
    color: #b3b3b3;
    font-size: 0.85rem;
    line-height: 1.5;
    .bottom-left {
      max-width: 858px;
      width: 100%;
    }
    .bottom-right {
      display: flex;
      gap: 15px;

      .social-icon {
        width: 32px;
        height: 32px;
        object-fit: contain;
        transition: transform 0.3s ease;

        &:hover {
          transform: scale(1.1);
        }
      }
    }
    p {
      margin: 0.2rem 0;
    }
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 2rem 0 1rem;

    &__container {
      padding: 1rem;
    }

    &__top {
      flex-direction: column;
      gap: 2rem;
      text-align: center;
    }

    &__section {
      padding: 0;
      max-width: 100%;
    }

    &__social {
      .social-item {
        justify-content: center;
      }
    }

    &__bottom {
      flex-direction: column;
      gap: 2rem;
      text-align: center;

      .bottom-left {
        max-width: 100%;
      }

      .bottom-right {
        justify-content: center;
      }
    }
  }
}

@media (max-width: 480px) {
  .footer {
    &__logo {
      .img {
        height: 30px;
        width: 100px;
      }
    }
    &__content {
      flex-direction: column;
      gap: 2rem;
      text-align: center;
    }
    &__section {
      ul {
        li {
          margin-bottom: 0.5rem;
        }
      }
    }

    &__bottom {
      .bottom-right {
        flex-wrap: wrap;
        justify-content: center;
      }
    }
  }
}
</style>
