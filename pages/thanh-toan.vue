<template>
  <div class="thanh-toan">
    <div class="container">
      <h3 class="thanh-toan__title">Thanh toán</h3>
      <div class="thanh-toan__content">
        <div class="left-wrapper">
          <div class="content-left">
            <section class="chon-goi">
              <h4>Chọn thời hạn gói</h4>
              <ul>
                <li class="active">
                  <div class="custom-radio"></div>
                  <span>1 Tháng</span>
                  <span>33.000 VND</span>
                </li>
                <li>
                  <div class="custom-radio"></div>
                  <span>3 Tháng</span>
                  <span>99.000 VND</span>
                </li>
                <li>
                  <div class="custom-radio"></div>
                  <span>6 Tháng</span>
                  <span>195.000 VND</span>
                </li>
                <li>
                  <div class="custom-radio"></div>
                  <span>12 Tháng</span>
                  <span>389.000 VND</span>
                </li>
              </ul>
            </section>
            <section class="chon-thanh-toan">
              <h4>Chọn hình thức thanh toán</h4>
              <ul>
                <li class="active">
                  <div class="custom-radio"></div>
                  <img
                    src="https://images.fptplay.net/media/21_10_2020/visa21-10-2020_17g17-23.png"
                    alt="visa"
                  />
                  <div class="thanh-toan-infor">
                    <span>Thẻ Tín Dụng</span>
                  </div>
                </li>
                <li>
                  <div class="custom-radio"></div>
                  <img
                    src="https://images.fptplay53.net/media/photo/OTT/2024/03/29/shopeepay-square-icon-orange29-03-2024_11g46-20.png"
                    alt="shopeepay"
                  />
                  <div class="thanh-toan-infor">
                    <span>Ví ShopeePay</span>
                    <span class="desc">
                      Giảm 20.000Đ (đơn từ 25.000Đ) cho tài khoản lần đầu thanh
                      toán qua ShopeePay. Giảm 10.000Đ (đơn từ 20.000Đ) cho tài
                      khoản đã từng thanh toán qua ShopeePay. Chi tiết tại:
                      bit.ly/khuyenmaifptplay
                    </span>
                  </div>
                </li>
                <li>
                  <div class="custom-radio"></div>
                  <img
                    src="https://images.fptplay.net/media/photo/OTT/2024/07/10/logo-app-khong-stroke10-07-2024_10g35-13.png"
                    alt="zalopay"
                  />
                  <div class="thanh-toan-infor">
                    <span>Ví ZaloPay</span>
                    <span class="desc">
                      Hoàn 10% (tối đa 10.000Đ) cho tài khoản lần đầu thanh toán
                      qua Zalopay. Chi tiết tại: bit.ly/khuyenmaifptplay
                    </span>
                  </div>
                </li>
                <li>
                  <div class="custom-radio"></div>
                  <img
                    src="https://images.fptplay53.net/media/photo/OTT/2024/06/24/logovietqr24-06-2024_15g35-58.png"
                    alt="vietqr"
                  />
                  <div class="thanh-toan-infor">
                    <span>VietQR</span>
                  </div>
                </li>
                <li>
                  <div class="custom-radio"></div>
                  <img
                    src="https://images.fptplay53.net/media/promotion/05_08_2021/vnpayjpg05-08-2021_14g08-22.png"
                    alt="vnpay"
                  />
                  <div class="thanh-toan-infor">
                    <span>VNPAY-QR</span>
                  </div>
                </li>
              </ul>
              <button class="show-more">
                + Hiển thị thêm hình thức thanh toán
              </button>
            </section>
          </div>
        </div>

        <right-wrapper>
          <div class="content-right">
            <h4 class="pay-title">Thông tin thanh toán</h4>
            <div class="pay-table">
              <table>
                <tbody>
                  <tr>
                    <td class="pay-key">Tài khoản</td>
                    <td class="pay-value">0394199632</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="pay-table">
              <table>
                <tbody>
                  <tr>
                    <td class="pay-key">Tên gói</td>
                    <td class="pay-value">Gói Cine</td>
                  </tr>
                  <tr>
                    <td class="pay-key">Thời hạn gói</td>
                    <td class="pay-value">1 Tháng</td>
                  </tr>
                  <tr>
                    <td class="pay-key">Dịch vụ</td>
                    <td class="pay-value">Gói dịch vụ FPT Play</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="pay-table">
              <table>
                <tbody>
                  <tr>
                    <td class="pay-key">Giá gói</td>
                    <td class="pay-value">33.000 VND</td>
                  </tr>
                  <tr>
                    <td class="pay-key">Giảm giá</td>
                    <td class="pay-value">0 VND</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="pay-input">
              <input placeholder="Mã khuyến mãi" />
              <button>Áp dụng</button>
            </div>
            <div class="pay-table">
              <table>
                <tbody>
                  <tr>
                    <td class="pay-key">Tổng thanh toán:</td>
                    <td class="pay-value price">33.000 VND</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="pay-table">
              <button class="pay-btn">Thanh toán</button>
              <div class="pay-note">
                Bằng việc chấp nhận thanh toán, Khách Hàng đã đồng ý với Điều
                kiện và điều khoản sử dụng dịch vụ truyền hình FPT Play, và ủy
                quyền cho FPT Play tự động gia hạn khi hết hạn sử dụng.
                <br />
                Xem chi tiết
                <a href="#">Tại đây</a>
              </div>
            </div>
          </div>
        </right-wrapper>
      </div>
    </div>
  </div>
</template>

<script setup>
// Dữ liệu tĩnh, có thể chuyển sang động sau
</script>

<style lang="scss" scoped>
.thanh-toan {
  color: #fff;
  &__title {
    font-size: 2rem;
    margin-bottom: 24px;
  }
  &__content {
    display: grid;
    grid-template-columns: 7fr 5fr;
    gap: 32px;
    .content-left {
      flex: 1.2;
      .chon-goi {
        border-radius: 12px;
        padding: 24px;
        margin-bottom: 24px;

        h4 {
          margin-bottom: 16px;
        }

        ul {
          list-style: none;
          padding: 0;
        }

        li {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          background: #161616;
          border-radius: 8px;
          padding: 16px;
          margin-bottom: 12px;
          cursor: pointer;
          transition: background 0.2s;
          position: relative;

          .custom-radio {
            width: 20px;
            height: 20px;
            border: 2px solid #ff4a00;
            border-radius: 50%;
            background: #181818;
            margin-right: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: border-color 0.2s;
          }

          span:first-of-type {
            flex: 1;
            font-size: 1rem;
            font-weight: 500;
          }

          span:last-of-type {
            font-size: 1rem;
            font-weight: 500;
            text-align: right;
            min-width: 110px;
          }

          &.active .custom-radio {
            border-color: #ff4a00;
          }

          &.active .custom-radio::after {
            content: "";
            width: 10px;
            height: 10px;
            background: #ff4a00;
            border-radius: 50%;
            display: block;
          }

          .pay-select-box::before,
          .pay-select-box::after {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 22px;
            height: 22px;
            z-index: 0;
            transition: 0.28s ease;
            border: 2px solid #3c3c3c;
            border-radius: 50%;
          }
        }
      }
      .chon-thanh-toan {
        border-radius: 12px;
        padding: 24px;
        margin-bottom: 24px;

        h4 {
          margin-bottom: 16px;
        }

        ul {
          list-style: none;
          padding: 0;
        }

        li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          background: #161616;
          border-radius: 8px;
          padding: 16px;
          margin-bottom: 12px;
          cursor: pointer;
          transition: background 0.2s;
          position: relative;
          border: 1.5px solid transparent;

          .custom-radio {
            width: 20px;
            height: 20px;
            min-width: 20px;
            min-height: 20px;
            max-width: 20px;
            max-height: 20px;
            box-sizing: border-box;
            flex-shrink: 0;
            flex-grow: 0;
            border: 2px solid #ff4a00;
            border-radius: 50%;
            background: #181818;
            margin-top: 4px;
            margin-right: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: border-color 0.2s;
          }

          img {
            width: 40px;
            height: 40px;
            margin-right: 8px;
            object-fit: contain;
          }

          .thanh-toan-infor {
            display: flex;
            flex-direction: column;
            gap: 2px;
            span {
              font-size: 1rem;
              font-weight: 500;
              color: #fff;
            }
            .desc {
              font-size: 0.85em;
              color: #aaa;
              font-weight: 400;
              margin-top: 2px;
              line-height: 1.4;
            }
          }

          &.active {
            .custom-radio {
              border-color: #ff4a00;
            }
            .custom-radio::after {
              content: "";
              width: 10px;
              height: 10px;
              background: #ff4a00;
              border-radius: 50%;
              display: block;
            }
          }

          &:hover {
            background: #292929;
          }
        }
      }

      .show-more {
        width: 100%;
        background: none;
        color: #fff;
        border: 1px solid #333;
        border-radius: 8px;
        padding: 10px;
        margin-top: 8px;
      }
    }
    .content-right {
      flex: 1;
      background: #0b0b0b;
      border-radius: 12px;
      padding: 24px;
      .pay-title {
        font-size: 1.2rem;
        margin-bottom: 16px;
      }
      .pay-table {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;
        table {
          width: 100%;
          color: #fff;
          margin-bottom: 16px;
          tr {
            display: flex;
            align-items: center;
            justify-content: space-between;
            td {
              padding: 8px 0;
            }
            .pay-key {
              font-weight: 300;
            }
            .pay-value {
              font-weight: 500 !important;
            }
            .price {
              color: #ff6500;
              font-weight: 600 !important;
              font-size: 24px;
            }
          }
        }

        .pay-total {
          display: flex;
          justify-content: space-between;
          font-size: 1.1rem;
          margin-bottom: 16px;
          .total {
            color: #ff000d;
            font-weight: bold;
          }
        }
        .pay-btn {
          width: 95%;
          background: #ff000d;
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 14px 0;
          font-size: 1.1rem;
          margin-bottom: 16px;
          cursor: pointer;
        }
        .pay-note {
          width: 90%;
          font-size: 0.9em;
          text-align: center;
          color: #aaa;
          a {
            color: #d84702;
          }
        }
      }
      .pay-input {
        display: flex;
        gap: 8px;
        margin-bottom: 16px;

        input {
          flex: 1;
          border-radius: 8px;
          border: none;
          outline: none;
          padding: 14px 16px;
          background: #0f0f0f;
          color: #fff;
          font-weight: 300;
          font-size: 14px;
          line-height: 150%;
        }

        button {
          background: #2c2c2e;
          color: #616161;
          border: unset;
          border-radius: 6px;
          padding: 20px 40px;
          font-weight: 500;
          font-size: 16px;
          line-height: 150%;
          white-space: nowrap;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
}

// Responsive
@media (max-width: 900px) {
  .thanh-toan__content {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .content-left,
  .content-right {
    padding: 12px !important;
    border-radius: 8px !important;
  }
  .chon-goi,
  .chon-thanh-toan {
    padding: 12px !important;
    border-radius: 8px !important;
  }
  .chon-goi li,
  .chon-thanh-toan li {
    padding: 10px !important;
    font-size: 0.95rem !important;
  }
  .chon-thanh-toan img {
    width: 32px !important;
    height: 32px !important;
  }
  .pay-btn,
  .show-more {
    width: 100% !important;
    font-size: 1rem !important;
    padding: 12px 0 !important;
  }
  .pay-input input,
  .pay-input button {
    font-size: 0.95rem !important;
    padding: 12px !important;
  }
  .pay-table table {
    font-size: 0.95rem !important;
  }
}

@media (max-width: 600px) {
  .thanh-toan__title {
    font-size: 1.3rem !important;
  }
  .thanh-toan__content {
    gap: 8px;
  }
  .chon-goi,
  .chon-thanh-toan {
    padding: 8px !important;
    border-radius: 6px !important;
  }
  .chon-goi li,
  .chon-thanh-toan li {
    padding: 7px !important;
    font-size: 0.9rem !important;
    border-radius: 6px !important;
  }
  .chon-thanh-toan img {
    width: 26px !important;
    height: 26px !important;
  }
  .pay-btn,
  .show-more {
    font-size: 0.95rem !important;
    padding: 10px 0 !important;
    border-radius: 6px !important;
  }
  .pay-input input,
  .pay-input button {
    font-size: 0.9rem !important;
    padding: 10px !important;
    border-radius: 6px !important;
  }
  .pay-table table {
    font-size: 0.9rem !important;
  }
}
</style>
