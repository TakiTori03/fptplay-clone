<template>
  <div class="mua-goi-container">
    <div class="table-wrapper">
      <table class="package-table">
        <thead>
          <tr>
            <th><h3>Mua gói</h3></th>
            <th v-for="sponsor in sponsorList" :key="sponsor.src">
              <NuxtImg
                :src="sponsor.src"
                :alt="sponsor.alt"
                class="table-image"
              />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span>Giá dịch vụ</span></td>
            <td>
              <h3>33.000vnđ</h3>
              <span>1 tháng</span>
            </td>
            <td>
              <h3>66.000vnđ</h3>
              <span>1 tháng</span>
            </td>
            <td>
              <h3>179.000vnđ</h3>
              <span>1 tháng</span>
            </td>
            <td>
              <h3>219.000vnđ</h3>
              <span>1 tháng</span>
            </td>
            <td>
              <h4>20.000vnđ</h4>
              <span>1 tháng</span>
            </td>
          </tr>

          <tr>
            <td>Số thiết bị xem đồng thời</td>
            <td>2</td>
            <td>3</td>
            <td>1</td>
            <td>3</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Phim bộ châu Á mới nhất, chiếu song song</td>
            <td>
              <div class="display-circle-v">
                <TickIcon />
              </div>
            </td>
            <td>
              <div class="display-circle-v">
                <TickIcon />
              </div>
            </td>
            <td>
              <div class="display-circle-x">
                <SymbolIcon />
              </div>
            </td>
            <td>
              <div class="display-circle-v">
                <TickIcon />
              </div>
            </td>
            <td>
              <div class="display-circle-x">
                <SymbolIcon />
              </div>
            </td>
          </tr>
          <tr>
            <td>Phim lẻ, anime, thiếu nhi, show đặc sắc</td>
            <td>
              <div class="display-circle-v">
                <TickIcon />
              </div>
            </td>
            <td>
              <div class="display-circle-v">
                <TickIcon />
              </div>
            </td>
            <td>
              <div class="display-circle-v">
                <TickIcon />
              </div>
            </td>
            <td>
              <div class="display-circle-v">
                <TickIcon />
              </div>
            </td>
            <td>
              <div class="display-circle-x">
                <SymbolIcon />
              </div>
            </td>
          </tr>
          <tr>
            <td>110+ kênh truyền hình trong nước, quốc tế</td>
            <td>
              <div class="display-circle-x">
                <SymbolIcon />
              </div>
            </td>
            <td>
              <div class="display-circle-v">
                <TickIcon />
              </div>
            </td>
            <td>
              <div class="display-circle-x">
                <SymbolIcon />
              </div>
            </td>
            <td>
              <div class="display-circle-v">
                <TickIcon />
              </div>
            </td>
            <td>
              <div class="display-circle-x">
                <SymbolIcon />
              </div>
            </td>
          </tr>
          <tr>
            <td>Độc quyền các giải thể thao đỉnh cao (*)</td>
            <td>
              <div class="display-circle-x">
                <SymbolIcon />
              </div>
            </td>
            <td>
              <div class="display-circle-v">
                <TickIcon />
              </div>
            </td>
            <td>
              <div class="display-circle-x">
                <SymbolIcon />
              </div>
            </td>
            <td>
              <div class="display-circle-v">
                <TickIcon />
              </div>
            </td>
            <td>
              <div class="display-circle-x">
                <SymbolIcon />
              </div>
            </td>
          </tr>
          <tr>
            <td>Trực tiếp các giải Esports hàng đầu</td>
            <td>
              <div class="display-circle-x">
                <SymbolIcon />
              </div>
            </td>
            <td>
              <div class="display-circle-v">
                <TickIcon />
              </div>
            </td>
            <td>
              <div class="display-circle-v">
                <TickIcon />
              </div>
            </td>
            <td>
              <div class="display-circle-v">
                <TickIcon />
              </div>
            </td>
            <td>
              <div class="display-circle-x">
                <SymbolIcon />
              </div>
            </td>
          </tr>
          <tr>
            <td>5 kênh K+ (**)</td>
            <td>
              <div class="display-circle-x">
                <SymbolIcon />
              </div>
            </td>
            <td>
              <div class="display-circle-x">
                <SymbolIcon />
              </div>
            </td>
            <td>
              <div class="display-circle-v">
                <TickIcon />
              </div>
            </td>
            <td>
              <div class="display-circle-v">
                <TickIcon />
              </div>
            </td>
            <td>
              <div class="display-circle-x">
                <SymbolIcon />
              </div>
            </td>
          </tr>
          <tr>
            <td>Không quảng cáo trong VOD</td>
            <td>
              <div class="display-circle-x">
                <SymbolIcon />
              </div>
            </td>
            <td>
              <div class="display-circle-v">
                <TickIcon />
              </div>
            </td>
            <td>
              <div class="display-circle-x">
                <SymbolIcon />
              </div>
            </td>
            <td>
              <div class="display-circle-v">
                <TickIcon />
              </div>
            </td>
            <td>
              <div class="display-circle-v">
                <TickIcon />
              </div>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>
              <button class="select-package-btn" @click="handleSelectPackage">
                Chọn gói này
              </button>
            </td>
            <td>
              <button class="select-package-btn" @click="handleSelectPackage">
                Chọn gói này
              </button>
            </td>
            <td>
              <button class="select-package-btn" @click="handleSelectPackage">
                Chọn gói này
              </button>
            </td>
            <td>
              <button class="select-package-btn" @click="handleSelectPackage">
                Chọn gói này
              </button>
            </td>
            <td>
              <button class="select-package-btn" @click="handleSelectPackage">
                Chọn gói này
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>

    <div class="additional-info">
      <p>
        (*) Một số dòng TV và thiết bị đời cũ có thể không hỗ trợ nội dung K+ và
        thể thao đỉnh cao do yêu cầu mã hóa bản quyền.
      </p>
      <p>(**) Nhóm kênh K+ chỉ xem được trên 1 thiết bị tại cùng thời điểm.</p>
      <p>- Gói Cine chỉ hỗ trợ xem trên Mobile & Web</p>
      <p>
        - Nội dung các gói dịch vụ có thể thay đổi theo quy định của đơn vị cung
        cấp bản quyền và chỉ phát hành ở lãnh thổ Việt Nam.
      </p>

      <div class="platforms-support">
        <span>Các nền tảng hỗ trợ</span>
        <div class="icons">
          <NuxtImg
            v-for="icon in iconList"
            :key="icon.src"
            :src="icon.src"
            :alt="icon.alt"
            class="icon"
          />
        </div>
      </div>

      <NuxtImg
        src="https://fptplay.vn/images/package_desktop.jpg"
        alt="banner"
        class="internet-banner"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import SymbolIcon from "../icons/SymbolIcon.vue";
import TickIcon from "../icons/TickIcon.vue";

const router = useRouter();

const handleSelectPackage = () => {
  router.push("/thanh-toan");
};

const sponsorList = [
  {
    src: "https://images.fptplay53.net/media/photo/2025/05/08/cine---web_1746692457584.png",
    alt: "Cine",
  },
  {
    src: "https://images.fptplay53.net/media/photo/2025/05/08/premium-web_1746692467273.png",
    alt: "Premium",
  },
  {
    src: "https://images.fptplay53.net/media/photo/OTT/2024/09/26/k26-09-2024_11g38-52.png",
    alt: "Premium",
  },
  {
    src: "https://images.fptplay53.net/media/photo/2025/05/13/4-combo-premium-k---web_1747120887226.png",
    alt: "Premium",
  },
  {
    src: "https://images.fptplay53.net/media/photo/2025/01/02/no-ads_1735802026709.png",
    alt: "Premium",
  },
];

const iconList = [
  {
    src: "https://images.fptplay53.net/media/photo/07_04_2022/mobile-playos4-icon-tv-platform07-04-2022_14g02-48.png",
    alt: "box",
  },
  {
    src: "https://images.fptplay53.net/media/photo/07_04_2022/mobile-playos4-icon-desktop-platform07-04-2022_14g01-31.png",
    alt: "television",
  },
  {
    src: "https://images.fptplay53.net/media/photo/07_04_2022/mobile-playos4-icon-web-platform07-04-2022_14g02-58.png",
    alt: "network",
  },
  {
    src: "https://images.fptplay53.net/media/photo/07_04_2022/mobile-playos4-icon-ios-platform07-04-2022_14g02-37.png",
    alt: "apple",
  },
  {
    src: "https://images.fptplay53.net/media/photo/07_04_2022/mobile-playos4-icon-android-platform07-04-2022_14g01-14.png",
    alt: "android",
  },
];
</script>

<style lang="scss" scoped>
.mua-goi-container {
  width: 100%;
}

.table-wrapper {
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  margin-bottom: 20px;
}

.package-table {
  width: 100%;
  min-width: 800px;
  border-collapse: collapse;
  margin-top: 20px;
  align-items: center;
  .table-image {
    max-width: 250px;
    width: 100%;
    max-height: 110px;
    height: 100%;
  }
  tr {
    padding: 15px auto;
  }
  th {
  }
  td {
    padding: 15px 10px;
    text-align: center;
    span {
      display: block;
    }

    .display-circle-x {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 20px;
      width: 20px;
      border-radius: 50%;
      background-color: $color-gray;
      margin: 0 auto;
    }

    .display-circle-v {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 20px;
      width: 20px;
      border-radius: 50%;
      background-color: $color-primary;
      margin: 0 auto;
    }
  }

  td:first-child,
  th:first-child {
    text-align: left;
    padding-left: 8px;
  }

  tbody tr:nth-child(odd) {
    background-color: #1f1e1e;
  }

  .select-package-btn {
    background-color: #333;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 1em;

    &:hover {
      background-color: $color-primary;
    }
  }
}

thead tr:first-child th:first-child {
  text-align: left;
  font-size: 2em;
  padding-bottom: 0;
  vertical-align: bottom;
}

thead tr:not(:first-child) th,
thead tr:not(:first-child) td {
  padding-top: 0;
}

.additional-info {
  padding-top: 30px;
  color: #fff;
  border-top: 2px solid #5a5959;
  p {
    margin-bottom: 5px;
  }
}

.platforms-support {
  display: flex;
  align-items: center;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 10px;

  span {
    margin-right: 10px;
    font-weight: bold;
  }

  .icons {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;

    .icon {
      width: 24px;
      height: 24px;
      object-fit: contain;
    }
  }
}

.internet-banner {
  margin-top: 30px;
  border-radius: 15px;
  max-width: 100%;
  height: auto;
}

@media screen and (max-width: 768px) {
  .package-table {
    .table-image {
      max-width: 120px;
    }

    td {
      padding: 10px 5px;
      font-size: 0.9em;
    }

    .select-package-btn {
      padding: 8px 15px;
      font-size: 0.9em;
    }
  }

  .platforms-support {
    flex-direction: column;
    align-items: flex-start;

    .icons {
      margin-top: 10px;
    }
  }

  h3 {
    font-size: 1.1em;
  }
}

@media screen and (max-width: 480px) {
  .package-table {
    .table-image {
      max-width: 100px;
    }

    td {
      padding: 8px 4px;
      font-size: 0.8em;
    }

    .select-package-btn {
      padding: 6px 12px;
      font-size: 0.8em;
    }
  }
}
</style>
